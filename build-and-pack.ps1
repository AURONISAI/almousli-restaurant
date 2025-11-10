# Almousli Restaurant - Build and Pack Script
# This script builds the production version and creates a deployment package

Write-Host "Building Almousli Restaurant for production..." -ForegroundColor Cyan

# Clean previous builds
Write-Host "Cleaning previous builds..." -ForegroundColor Yellow
if (Test-Path ".next") {
    Remove-Item -Recurse -Force ".next"
}
if (Test-Path "almousli-production.zip") {
    Remove-Item -Force "almousli-production.zip"
}

# Install dependencies
Write-Host "Installing dependencies..." -ForegroundColor Yellow
npm install

# Build the project
Write-Host "Building production bundle..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "Build successful!" -ForegroundColor Green
    
    # Create deployment package
    Write-Host "Creating deployment package..." -ForegroundColor Yellow
    
    # Create temp directory for packaging
    $tempDir = "almousli-deploy-temp"
    if (Test-Path $tempDir) {
        Remove-Item -Recurse -Force $tempDir
    }
    New-Item -ItemType Directory -Path $tempDir | Out-Null
    
    # Copy necessary files
    Write-Host "Copying files..." -ForegroundColor Yellow
    Copy-Item -Recurse ".next" "$tempDir\.next"
    Copy-Item -Recurse "public" "$tempDir\public"
    Copy-Item "package.json" "$tempDir\"
    Copy-Item "package-lock.json" "$tempDir\"
    Copy-Item "next.config.mjs" "$tempDir\"
    if (Test-Path ".env.local") {
        Copy-Item ".env.local" "$tempDir\"
    }
    if (Test-Path "DEPLOYMENT-SIMPLE.md") {
        Copy-Item "DEPLOYMENT-SIMPLE.md" "$tempDir\DEPLOYMENT.md"
    }
    
    # Create start scripts
    @"
#!/bin/bash
npm install --production
npm run start
"@ | Out-File -FilePath "$tempDir\start.sh" -Encoding UTF8
    
    @"
@echo off
npm install --production
npm run start
"@ | Out-File -FilePath "$tempDir\start.bat" -Encoding UTF8
    
    # Compress to zip
    Write-Host "Compressing files..." -ForegroundColor Yellow
    Compress-Archive -Path "$tempDir\*" -DestinationPath "almousli-production.zip" -Force
    
    # Cleanup
    Remove-Item -Recurse -Force $tempDir
    
    $size = [math]::Round((Get-Item "almousli-production.zip").Length / 1MB, 2)
    Write-Host "`nDeployment package created: almousli-production.zip" -ForegroundColor Green
    Write-Host "Package size: $size MB" -ForegroundColor Cyan
    Write-Host "`nNext steps:" -ForegroundColor Yellow
    Write-Host "   1. Extract almousli-production.zip on your server" -ForegroundColor White
    Write-Host "   2. Run: npm install --production" -ForegroundColor White
    Write-Host "   3. Run: npm start" -ForegroundColor White
    Write-Host "`n   See DEPLOYMENT.md for detailed instructions" -ForegroundColor Cyan
} else {
    Write-Host "Build failed! Please check the errors above." -ForegroundColor Red
    exit 1
}
