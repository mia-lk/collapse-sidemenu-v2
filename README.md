# Collapse Sidemenu

A React application demonstrating a collapsible sidebar menu with secondary navigation.

## Features

- Collapsible main sidebar menu
- Secondary sidebar for tech support page
- Responsive design
- Smooth animations and transitions

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Deployment

### Option 1: Netlify Drop (Easiest)
1. Run `npm run build` to create the `dist` folder
2. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag and drop the `dist` folder
4. Your site will be live instantly!

### Option 2: Vercel
1. Push your code to GitHub
2. Go to [https://vercel.com](https://vercel.com)
3. Sign up and connect your GitHub account
4. Import your repository
5. Deploy automatically

### Option 3: GitHub Pages
1. Push your code to GitHub
2. Go to repository Settings > Pages
3. Select "Deploy from a branch"
4. Choose `main` branch and `/docs` folder
5. Copy the `dist` contents to a `docs` folder in your repo

### Option 4: Surge (Command Line)
```bash
npm install -g surge
npm run build
surge dist
```

## Project Structure

- `src/App.tsx` - Main application component
- `src/styles/` - CSS styles
- `dist/` - Production build files (generated)

## Technologies Used

- React 18
- TypeScript
- Vite
- Material Symbols Icons
