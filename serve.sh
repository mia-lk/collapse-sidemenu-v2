#!/bin/bash

# Simple local server for sharing your app

echo "🌐 Starting local server for your app..."
echo ""
echo "Your app will be available at:"
echo "  http://localhost:8000"
echo ""
echo "To share with others on your network:"
echo "  http://$(ifconfig | grep "inet " | grep -v 127.0.0.1 | awk '{print $2}' | head -1):8000"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

# Build for local development first
echo "🔨 Building for local development..."
npm run build

# Check if Python 3 is available
if command -v python3 &> /dev/null; then
    echo "🌐 Starting server with local build..."
    python3 -m http.server 8000 --directory dist
elif command -v python &> /dev/null; then
    echo "🌐 Starting server with local build..."
    python -m SimpleHTTPServer 8000
else
    echo "❌ Python not found. Please install Python or use a different method."
    echo ""
    echo "Alternative: Open the 'dist' folder in your browser directly:"
    echo "  file://$(pwd)/dist/index.html"
fi
