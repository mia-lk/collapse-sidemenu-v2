# A/B Testing Strategy

## 🎯 Overview
This document outlines how to manage multiple versions of your application for A/B testing and feedback collection.

## 📋 Current Setup

### Branches Created:
- `main` - Current stable version (Version A)
- `version-a` - Copy of current version for reference
- `version-b` - Ready for your new changes (Version B)

## 🚀 Deployment Strategy

### Option 1: Netlify with Git Integration (Recommended)

1. **Push to GitHub first:**
   ```bash
   git remote add origin https://github.com/yourusername/collapse-sidemenu.git
   git push -u origin main
   git push origin version-a
   git push origin version-b
   ```

2. **Connect to Netlify:**
   - Go to https://app.netlify.com
   - Sign up with GitHub
   - Import your repository
   - Deploy from `main` branch

3. **Create Preview Deployments:**
   - Netlify automatically creates preview URLs for each branch
   - `main` → `https://your-app.netlify.app` (Production)
   - `version-b` → `https://deploy-preview-123--your-app.netlify.app` (Test)

### Option 2: Separate Netlify Sites

1. **Version A (Current):**
   - Deploy `main` branch to Netlify
   - URL: `https://your-app-v1.netlify.app`

2. **Version B (New):**
   - Deploy `version-b` branch to Netlify
   - URL: `https://your-app-v2.netlify.app`

### Option 3: Vercel (Best for A/B Testing)

1. **Connect to Vercel:**
   - Go to https://vercel.com
   - Import your GitHub repository
   - Each branch gets its own URL automatically

2. **Automatic URLs:**
   - `main` → `https://your-app.vercel.app`
   - `version-b` → `https://your-app-git-version-b-yourusername.vercel.app`

## 🔄 Workflow

### Making Changes to Version B:
```bash
# Switch to version-b branch
git checkout version-b

# Make your changes
# ... edit files ...

# Build and test locally
npm run build
npm run dev

# Commit changes
git add .
git commit -m "Version B: [describe your changes]"

# Push to GitHub
git push origin version-b
```

### Comparing Versions:
```bash
# See differences between versions
git diff main version-b

# Switch between versions
git checkout main    # Version A
git checkout version-b  # Version B
```

### Merging Best Version:
```bash
# After getting feedback, merge the winning version
git checkout main
git merge version-b
git push origin main
```

## 📊 Feedback Collection

### URL Structure for Testing:
- **Version A**: `https://your-app.netlify.app`
- **Version B**: `https://your-app-v2.netlify.app` or preview URL

### Feedback Methods:
1. **Google Forms** - Create a simple form with the URLs
2. **Typeform** - More interactive feedback collection
3. **Hotjar** - User behavior tracking
4. **Google Analytics** - Performance metrics

## 🛠️ Quick Commands

```bash
# Switch to Version A (current)
git checkout main
npm run build

# Switch to Version B (new)
git checkout version-b
npm run build

# Create new version
git checkout -b version-c
# ... make changes ...

# Deploy current branch
./deploy.sh
```

## 📝 Best Practices

1. **Keep branches focused** - One major change per branch
2. **Use descriptive commit messages** - "Version B: Added dark mode toggle"
3. **Test locally first** - Always run `npm run dev` before deploying
4. **Document changes** - Keep a changelog of what's different
5. **Get feedback quickly** - Deploy early and often

## 🎯 Next Steps

1. **Deploy Version A** (current) to Netlify
2. **Switch to Version B** and make your changes
3. **Deploy Version B** to a separate URL
4. **Collect feedback** from users
5. **Iterate** based on feedback
6. **Merge** the winning version back to main
