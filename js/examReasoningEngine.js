/* Exam Reasoning Engine: Common Sense Drill & Bug Hunt */

function toggleDrawer(id) {
      const el = document.getElementById(id);
      if (!el) return;
      el.style.display = (el.style.display === 'block') ? 'none' : 'block';
    }

function toggleOptionFilter(optKey) {
      const item = document.getElementById('opt-' + optKey);
      const detail = document.getElementById('detail-' + optKey);
      if (!item || !detail) return;

      const isCurrentlyOpen = (detail.style.display === 'block');
      if (isCurrentlyOpen) {
        detail.style.display = 'none';
        item.classList.remove('state-eliminated', 'state-survivor');
      } else {
        detail.style.display = 'block';
        if (optKey === 'd') {
          item.classList.add('state-survivor');
        } else {
          item.classList.add('state-eliminated');
        }
      }
    }

function auditLine(lineIndex) {
      const lines = document.querySelectorAll('.notebook-line-item');
      lines.forEach(l => l.classList.remove('state-sound', 'state-blunder', 'state-ecf'));

      [1, 2, 3].forEach(i => {
        const fb = document.getElementById('feedback-' + i);
        if (fb) fb.style.display = 'none';
      });

      if (lineIndex === 1) {
        if (lines[0]) lines[0].classList.add('state-sound');
        const fb = document.getElementById('feedback-1');
        if (fb) fb.style.display = 'block';
      } else if (lineIndex === 2) {
        if (lines[1]) lines[1].classList.add('state-blunder');
        const fb = document.getElementById('feedback-2');
        if (fb) fb.style.display = 'block';
      } else if (lineIndex === 3) {
        if (lines[2]) lines[2].classList.add('state-ecf');
        const fb = document.getElementById('feedback-3');
        if (fb) fb.style.display = 'block';
      }
    }