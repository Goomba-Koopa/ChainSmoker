import subprocess, tempfile, json, urllib.request, time, socket, base64, os

def capture(url, out_path, width=1280, height=900):
    chrome = r'C:\Program Files\Google\Chrome\Application\chrome.exe'
    data_dir = tempfile.mkdtemp()
    port = 9580
    proc = subprocess.Popen([
        chrome, '--headless=new', f'--user-data-dir={data_dir}', f'--remote-debugging-port={port}', '--disable-gpu', 'about:blank'
    ])
    s = None
    try:
        for _ in range(40):
            try:
                with urllib.request.urlopen(f'http://127.0.0.1:{port}/json') as r:
                    tabs = json.loads(r.read().decode())
                    if tabs:
                        ws_url = tabs[0]['webSocketDebuggerUrl']
                        break
            except: time.sleep(0.1)
        else:
            raise RuntimeError('Could not connect')
            
        path = ws_url.split(f':{port}')[1]
        s = socket.create_connection(('127.0.0.1', port), timeout=30)
        s.settimeout(30.0)
        key = base64.b64encode(os.urandom(16)).decode()
        s.sendall((f'GET {path} HTTP/1.1\r\nHost: 127.0.0.1:{port}\r\nUpgrade: websocket\r\nConnection: Upgrade\r\nSec-WebSocket-Key: {key}\r\nSec-WebSocket-Version: 13\r\n\r\n').encode())
        s.recv(4096)

        def recv_exact(n):
            buf = bytearray()
            while len(buf) < n:
                c = s.recv(n - len(buf))
                if not c: raise EOFError()
                buf.extend(c)
            return buf

        def send_cmd(cid, method, params=None):
            raw = json.dumps({'id': cid, 'method': method, 'params': params or {}}).encode('utf-8')
            l = len(raw)
            h = bytearray([0x81])
            mask = os.urandom(4)
            if l < 126: h.append(0x80 | l)
            elif l <= 65535: h.append(0x80 | 126); h.extend(l.to_bytes(2, 'big'))
            else: h.append(0x80 | 127); h.extend(l.to_bytes(8, 'big'))
            h.extend(mask)
            s.sendall(h + bytearray(b ^ mask[i % 4] for i, b in enumerate(raw)))

        def read_resp(cid):
            while True:
                hdr = recv_exact(2)
                length = hdr[1] & 0x7F
                if length == 126: length = int.from_bytes(recv_exact(2), 'big')
                elif length == 127: length = int.from_bytes(recv_exact(8), 'big')
                mask = recv_exact(4) if bool(hdr[1] & 0x80) else None
                p = recv_exact(length)
                if mask: p = bytearray(b ^ mask[i % 4] for i, b in enumerate(p))
                if (hdr[0] & 0x0F) == 1:
                    msg = json.loads(p.decode('utf-8', 'ignore'))
                    if msg.get('id') == cid: return msg

        send_cmd(1, 'Emulation.setDeviceMetricsOverride', {'width': width, 'height': height, 'deviceScaleFactor': 1, 'mobile': False})
        read_resp(1)
        send_cmd(2, 'Page.navigate', {'url': url})
        read_resp(2)
        
        # Give page time to fetch Google Fonts
        time.sleep(4.0)

        send_cmd(3, 'Page.captureScreenshot', {'format': 'png'})
        res = read_resp(3)
        png_data = base64.b64decode(res['result']['data'])
        with open(out_path, 'wb') as f:
            f.write(png_data)
        print(f'Captured {out_path} ({len(png_data)} bytes)')
    finally:
        if s: s.close()
        proc.terminate()

if __name__ == '__main__':
    capture('http://localhost:8088/index.html', r'C:\Users\chand\.gemini\antigravity\brain\42fdfec4-94eb-4087-92c8-93cd9cd5f54d\google_fonts_index_1280.png', 1280, 950)
