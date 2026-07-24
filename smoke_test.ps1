$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot
node --check js/data.js
node --check js/logic.js
node --check js/save.js
node --check js/audio.js
node --check js/services.js
node --check js/game.js
node tests/logic.test.js
node tests/content.test.js
Write-Host "Smoke-Test erfolgreich. Start: python -m http.server 8080"
