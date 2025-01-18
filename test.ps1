# Remove all files in the specified directory
$directory = ".\dist" 
if (Test-Path $directory) {
    Write-Host "Cleaning up directory: $directory" -ForegroundColor Green
    Get-ChildItem -Path $directory -Recurse | Remove-Item -Force -Recurse -ErrorAction SilentlyContinue
}


# Run Docker Compose up
Write-Host "Starting Docker Compose..." -ForegroundColor Green
docker compose --profile test up -d
if ($LASTEXITCODE -ne 0) {
    Write-Error "Failed to start Docker Compose."
    exit 1
}

# Run npm command
Write-Host "Running npm command..." -ForegroundColor Green
npm run test
if ($LASTEXITCODE -ne 0) {
    Write-Error "Failed to run npm command."
    docker-compose stop
    exit 1
}

# Stop Docker Compose
Write-Host "Stopping Docker Compose..." -ForegroundColor Green
docker-compose stop
if ($LASTEXITCODE -ne 0) {
    Write-Error "Failed to stop Docker Compose."
    exit 1
}

Write-Host "Script completed successfully." -ForegroundColor Green
