# Download all images via Special:FilePath (bypasses thumbnail size restriction)
$base = "C:\Users\chand\.gemini\antigravity\scratch\icse-explainer-desktop"
$imgDir = "$base\src\assets\diagrams"

if (!(Test-Path $imgDir)) { New-Item -ItemType Directory -Path $imgDir | Out-Null }

$headers = @{ "User-Agent" = "Mozilla/5.0 (compatible; educational-project; mailto:student@example.com)" }

$images = @(
  @{
    url     = "https://commons.wikimedia.org/wiki/Special:FilePath/Diamonds_and_graphite.jpg"
    file    = "diamonds_and_graphite.jpg"
    html    = "chemistry_10_carbon_and_allotropes.html"
    oldSrc  = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Diamonds_and_graphite.jpg/320px-Diamonds_and_graphite.jpg"
  },
  @{
    url     = "https://commons.wikimedia.org/wiki/Special:FilePath/Displacement_vector.svg"
    file    = "displacement_vector.svg"
    html    = "physics_01_motion_and_speed.html"
    oldSrc  = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Displacement_vector.svg/500px-Displacement_vector.svg.png"
  },
  @{
    url     = "https://commons.wikimedia.org/wiki/Special:FilePath/Lever_law_of_arms.svg"
    file    = "lever_law_of_arms.svg"
    html    = "physics_02_energy_and_machines.html"
    oldSrc  = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Lever_law_of_arms.svg/400px-Lever_law_of_arms.svg.png"
  },
  @{
    url     = "https://commons.wikimedia.org/wiki/Special:FilePath/Reflection_angles.svg"
    file    = "reflection_angles.svg"
    html    = "physics_03_light_and_reflection.html"
    oldSrc  = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Reflection_angles.svg/300px-Reflection_angles.svg.png"
  },
  @{
    url     = "https://commons.wikimedia.org/wiki/Special:FilePath/CPT-sound-physical-manifestation.svg"
    file    = "sound_wave.svg"
    html    = "physics_04_sound_and_vibration.html"
    oldSrc  = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/CPT-sound-physical-manifestation.svg/400px-CPT-sound-physical-manifestation.svg.png"
  },
  @{
    url     = "https://commons.wikimedia.org/wiki/Special:FilePath/Series_and_parallel_circuits.svg"
    file    = "series_parallel_circuits.svg"
    html    = "physics_05_electricity_and_circuits.html"
    oldSrc  = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Series_and_parallel_circuits.svg/400px-Series_and_parallel_circuits.svg.png"
  },
  @{
    url     = "https://commons.wikimedia.org/wiki/Special:FilePath/Comunicating_vessels_ru.svg"
    file    = "communicating_vessels.svg"
    html    = "physics_06_force_and_pressure.html"
    oldSrc  = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Comunicating_vessels_ru.svg/300px-Comunicating_vessels_ru.svg.png"
  },
  @{
    url     = "https://commons.wikimedia.org/wiki/Special:FilePath/Archimedes-principle.svg"
    file    = "archimedes_principle.svg"
    html    = "physics_08_density_and_buoyancy.html"
    oldSrc  = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Archimedes-principle.svg/300px-Archimedes-principle.svg.png"
  },
  @{
    url     = "https://commons.wikimedia.org/wiki/Special:FilePath/Magnet0873.png"
    file    = "bar_magnet_field.png"
    html    = "physics_09_magnetism_and_fields.html"
    oldSrc  = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Magnet0873.png/320px-Magnet0873.png"
  },
  @{
    url     = "https://commons.wikimedia.org/wiki/Special:FilePath/Concave_mirror.svg"
    file    = "concave_mirror.svg"
    html    = "physics_10_spherical_mirrors_and_images.html"
    oldSrc  = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Concave_mirror.svg/500px-Concave_mirror.svg.png"
  },
  @{
    url     = "https://commons.wikimedia.org/wiki/Special:FilePath/Electroscope_drawing.png"
    file    = "gold_leaf_electroscope.png"
    html    = "physics_11_static_electricity_and_charges.html"
    oldSrc  = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Electroscope_drawing.png/300px-Electroscope_drawing.png"
  },
  @{
    url     = "https://commons.wikimedia.org/wiki/Special:FilePath/Pulley1a.svg"
    file    = "pulley.svg"
    html    = "physics_12_simple_machines_and_efficiency.html"
    oldSrc  = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Pulley1a.svg/300px-Pulley1a.svg.png"
  }
)

$ok = 0; $fail = 0

foreach ($img in $images) {
  $dest = "$imgDir\$($img.file)"
  Write-Host "Downloading $($img.file)..." -NoNewline
  try {
    Invoke-WebRequest -Uri $img.url -OutFile $dest -Headers $headers -TimeoutSec 30 -MaximumRedirection 5
    $size = (Get-Item $dest).Length
    Write-Host " OK ($size bytes)" -ForegroundColor Green
    $ok++

    # Update src in HTML
    $htmlPath = "$base\topics\$($img.html)"
    if (Test-Path $htmlPath) {
      $content = Get-Content $htmlPath -Raw
      $localPath = "../src/assets/diagrams/$($img.file)"
      $newContent = $content -replace [regex]::Escape($img.oldSrc), $localPath
      Set-Content $htmlPath $newContent -Encoding UTF8
      Write-Host "   Updated $($img.html)" -ForegroundColor Cyan
    }
  } catch {
    Write-Host " FAILED: $($_.Exception.Message)" -ForegroundColor Red
    $fail++
  }
  Start-Sleep -Milliseconds 800  # be polite to Wikimedia
}

Write-Host ""
Write-Host "Result: $ok downloaded, $fail failed" -ForegroundColor Yellow
