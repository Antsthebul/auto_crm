$env:PATH = "$PWD\node_modules\.bin;$env:PATH"

# Remove all files in the specified directory
$directory = ".\dist" 
if (Test-Path $directory) {
    Write-Host "Cleaning up directory: $directory" -ForegroundColor Green
    Get-ChildItem -Path $directory -Recurse | Remove-Item -Force -Recurse -ErrorAction SilentlyContinue
}

Write-Host "Invoking npm 'test' command..." -ForegroundColor Green
npm run test

# Stop Docker Compose
Write-Host "Stopping Docker Compose..." -ForegroundColor Green
docker-compose stop
if ($LASTEXITCODE -ne 0) {
    Write-Error "Failed to stop Docker Compose."
    exit 1
}

Write-Host "Script completed successfully." -ForegroundColor Green
Remove-Item -Force -Recurse $directory
Write-Host "Removed transpiled JS files" -ForegroundColor Green
