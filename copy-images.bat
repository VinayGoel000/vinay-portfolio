@echo off
REM Copy Portfolio Images Script
REM This batch file copies images from the root folder to public/assets/images/

setlocal
cls

echo.
echo ========================================================
echo        PORTFOLIO IMAGES SETUP
echo ========================================================
echo.

REM Check if images exist in root folder
if not exist "vinay front image.jpeg" (
    echo ERROR: "vinay front image.jpeg" not found in project root
    pause
    exit /b 1
)

if not exist "vinay full image.jpeg" (
    echo ERROR: "vinay full image.jpeg" not found in project root
    pause
    exit /b 1
)

if not exist "vinay side image.jpeg" (
    echo ERROR: "vinay side image.jpeg" not found in project root
    pause
    exit /b 1
)

REM Create images directory if it doesn't exist
if not exist "public\assets\images" (
    echo Creating public\assets\images directory...
    mkdir public\assets\images
    if !errorlevel! equ 0 (
        echo + Directory created successfully
    ) else (
        echo ERROR: Failed to create directory
        pause
        exit /b 1
    )
)

echo.
echo Copying images...
echo.

REM Copy images with renamed filenames
copy "vinay front image.jpeg" "public\assets\images\vinay-front.jpeg" /Y >nul
if !errorlevel! equ 0 (
    echo + Copied: vinay-front.jpeg
) else (
    echo - ERROR copying vinay-front.jpeg
)

copy "vinay full image.jpeg" "public\assets\images\vinay-full.jpeg" /Y >nul
if !errorlevel! equ 0 (
    echo + Copied: vinay-full.jpeg
) else (
    echo - ERROR copying vinay-full.jpeg
)

copy "vinay side image.jpeg" "public\assets\images\vinay-side.jpeg" /Y >nul
if !errorlevel! equ 0 (
    echo + Copied: vinay-side.jpeg
) else (
    echo - ERROR copying vinay-side.jpeg
)

echo.
echo ========================================================
echo        VERIFICATION
echo ========================================================
echo.

if exist "public\assets\images\vinay-front.jpeg" (
    echo ✓ vinay-front.jpeg - OK
) else (
    echo ✗ vinay-front.jpeg - MISSING
)

if exist "public\assets\images\vinay-full.jpeg" (
    echo ✓ vinay-full.jpeg - OK
) else (
    echo ✗ vinay-full.jpeg - MISSING
)

if exist "public\assets\images\vinay-side.jpeg" (
    echo ✓ vinay-side.jpeg - OK
) else (
    echo ✗ vinay-side.jpeg - MISSING
)

echo.
echo ========================================================
echo        NEXT STEPS
echo ========================================================
echo.
echo 1. Run: start-portfolio.bat
echo 2. Open: http://localhost:5173
echo 3. Check sections:
echo    - Hero: Circular headshot
echo    - About: Full body image + text
echo    - Skills: Side profile image + skills grid
echo.
echo ========================================================
echo.

pause
