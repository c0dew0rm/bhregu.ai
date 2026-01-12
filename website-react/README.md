# Bhregu.ai Landing Page - React Version

A modern, dynamic, and clean landing page built with React and Vite for your AI tech consulting firm.

## Features

- **React 18** with modern hooks and functional components
- **Vite** for fast development and optimized builds
- **Fully Responsive** design that works on all devices
- **Smooth Animations** and interactive elements
- **Component-Based Architecture** for easy maintenance
- **Performance Optimized** with code splitting and lazy loading ready

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open your browser and visit `http://localhost:3000`

### Build for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
# or
yarn preview
# or
pnpm preview
```

## Project Structure

```
website-react/
├── public/              # Static assets
├── src/
│   ├── components/     # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── ServicesOverview.jsx
│   │   ├── DetailedServices.jsx
│   │   ├── TechStack.jsx
│   │   ├── QuickWins.jsx
│   │   ├── RiskMitigation.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies
├── vite.config.js      # Vite configuration
└── README.md           # This file
```

## Customization

### Colors
Edit the CSS variables in `src/index.css`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    /* ... */
}
```

### Content
- Update component data in respective component files
- Modify service offerings, tech stack, or any other content as needed

### Contact Form
The contact form currently logs to console and shows an alert. To connect it to a backend:
1. Update the `handleSubmit` function in `src/components/Contact.jsx`
2. Add your API endpoint or form handling service

## Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop the dist folder to Netlify
```

### GitHub Pages
1. Install `gh-pages`: `npm install --save-dev gh-pages`
2. Add to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
3. Run `npm run deploy`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with custom properties
- **JavaScript ES6+** - Modern JavaScript features

## Next Steps

1. Add your actual contact form backend integration
2. Customize colors and branding
3. Add analytics (Google Analytics, etc.)
4. Add meta tags for SEO
5. Consider adding React Router for multi-page navigation
6. Add state management (Redux/Zustand) if needed
7. Add unit tests with Jest and React Testing Library

## License

All rights reserved - Bhregu.ai

