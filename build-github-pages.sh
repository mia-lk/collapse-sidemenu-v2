#!/bin/bash

# Build for GitHub Pages
echo "🚀 Building for GitHub Pages..."

# Set environment variable for GitHub Pages
export GITHUB_PAGES=true

# Build the project
npm run build

# Copy to docs folder
rm -rf docs
cp -r dist docs

echo "✅ GitHub Pages build complete!"
echo "📁 Files ready in 'docs' folder"
echo "🔄 Push to GitHub to deploy:"
echo "   git add docs/"
echo "   git commit -m 'Update GitHub Pages build'"
echo "   git push origin main"
