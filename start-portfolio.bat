@echo off
REM ================================================================
REM Portfolio Project Startup Script
REM React + Vite Development Server Launcher
REM ================================================================

setlocal
title Portfolio Project - Development Server

cls
echo.
echo ================================================================
echo.
echo     PORTFOLIO PROJECT STARTUP
echo.
echo ================================================================
echo.

REM Check if Node.js is installed
echo Checking for Node.js installation...
where node >nul 2>nul
if errorlevel 1 (
    echo.
    echo ERROR: Node.js is not installed or not in PATH
    echo Please download and install Node.js from: https://nodejs.org/
    echo.
    pause
    exit /b 1
)

REM Check if npm is installed
echo Checking for npm installation...
where npm >nul 2>nul
if errorlevel 1 (
    echo.
    echo ERROR: npm is not installed or not in PATH
    echo Please ensure Node.js was installed correctly
    echo.
    pause
    exit /b 1
)

echo.
echo - Node.js is installed
echo - npm is installed
echo.

REM Install dependencies if node_modules doesn't exist
if not exist "node_modules" (
    echo Installing project dependencies...
    echo This may take a few minutes on first run...
    echo.
    call npm install
    if errorlevel 1 (
        echo.
        echo ERROR: Failed to install dependencies
        echo Please check your internet connection and try again
        echo.
        pause
        exit /b 1
    )
    echo Dependencies installed successfully!
    echo.
) else (
    echo - node_modules already exists, skipping dependency installation
    echo.
)

REM Display project information
echo.
echo ================================================================
echo                    PROJECT INFORMATION
echo ================================================================
echo.
echo Project: React + Vite Portfolio
echo Location: %cd%
echo.
call node --version
call npm --version
echo.

REM Display server information
echo ================================================================
echo                 STARTING DEVELOPMENT SERVER
echo ================================================================
echo.
echo Your portfolio will be available at:
echo.
echo     http://localhost:5173
echo.
echo Press Ctrl+C in this terminal to stop the server
echo.
echo ================================================================
echo.

REM Start the development server
call npm run dev

REM Completion message
echo.
echo ================================================================
echo                  DEVELOPMENT SERVER STOPPED
echo ================================================================
echo.
pause
exit /b 0
