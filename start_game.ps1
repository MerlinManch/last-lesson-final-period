$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot
Write-Host "Last Lesson läuft auf http://localhost:8080"
python -m http.server 8080
