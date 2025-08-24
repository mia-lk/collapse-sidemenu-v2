#!/bin/bash

# A/B Testing Management Script

case "$1" in
  "deploy-a")
    echo "🚀 Deploying Version A (current main branch)..."
    git checkout main
    npm run build
    echo "✅ Version A built! Ready to deploy to Netlify."
    echo "📁 Your 'dist' folder is ready for https://app.netlify.com/drop"
    ;;
    
  "deploy-b")
    echo "🚀 Deploying Version B (version-b branch)..."
    git checkout version-b
    npm run build
    echo "✅ Version B built! Ready to deploy to Netlify."
    echo "📁 Your 'dist' folder is ready for https://app.netlify.com/drop"
    ;;
    
  "switch-a")
    echo "🔄 Switching to Version A..."
    git checkout main
    npm run dev
    ;;
    
  "switch-b")
    echo "🔄 Switching to Version B..."
    git checkout version-b
    npm run dev
    ;;
    
  "new-version")
    if [ -z "$2" ]; then
      echo "❌ Please provide a version name: ./ab-test.sh new-version version-c"
      exit 1
    fi
    echo "🆕 Creating new version: $2"
    git checkout main
    git checkout -b "$2"
    echo "✅ New branch '$2' created! You can now make changes."
    ;;
    
  "compare")
    echo "🔍 Comparing main vs version-b..."
    git diff main version-b
    ;;
    
  "status")
    echo "📊 Current branch status:"
    git branch -v
    echo ""
    echo "🔄 Available commands:"
    echo "  ./ab-test.sh deploy-a     - Build and deploy Version A"
    echo "  ./ab-test.sh deploy-b     - Build and deploy Version B"
    echo "  ./ab-test.sh switch-a     - Switch to Version A (dev mode)"
    echo "  ./ab-test.sh switch-b     - Switch to Version B (dev mode)"
    echo "  ./ab-test.sh new-version  - Create new version branch"
    echo "  ./ab-test.sh compare      - Compare main vs version-b"
    ;;
    
  *)
    echo "🎯 A/B Testing Management Script"
    echo ""
    echo "Usage: ./ab-test.sh [command]"
    echo ""
    echo "Commands:"
    echo "  deploy-a     - Build and deploy Version A"
    echo "  deploy-b     - Build and deploy Version B"
    echo "  switch-a     - Switch to Version A (dev mode)"
    echo "  switch-b     - Switch to Version B (dev mode)"
    echo "  new-version  - Create new version branch"
    echo "  compare      - Compare main vs version-b"
    echo "  status       - Show current status and available commands"
    ;;
esac
