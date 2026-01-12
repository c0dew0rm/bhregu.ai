# Bhregu.ai Landing Page

A modern, dynamic, and clean landing page for your AI tech consulting firm.

## Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Dynamic Interactions**: Smooth scrolling, fade-in animations, and hover effects
- **Comprehensive Content**: All your services, tech stack, and offerings organized logically
- **Performance Optimized**: Lightweight and fast-loading

## File Structure

```
website/
├── index.html      # Main HTML structure
├── styles.css      # All styling and animations
├── script.js       # Interactive functionality
└── README.md       # This file
```

## Getting Started

1. Open `index.html` in a web browser
2. No build process or dependencies required - it's pure HTML, CSS, and JavaScript
3. For local development, you can use a simple HTTP server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (if you have http-server installed)
   npx http-server
   ```

## Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    /* ... */
}
```

### Content
- Update text content directly in `index.html`
- Modify service offerings, tech stack, or any other content as needed

### Contact Form
The contact form currently shows an alert on submission. To connect it to a backend:
1. Update the form submission handler in `script.js`
2. Add your API endpoint or form handling service

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

You can deploy this to any static hosting service:
- **Netlify**: Drag and drop the `website` folder
- **Vercel**: Connect your repository
- **GitHub Pages**: Push to a repository and enable Pages
- **AWS S3**: Upload files to an S3 bucket with static website hosting

## Next Steps

1. Add your actual contact email and form handling
2. Customize colors and branding to match your brand
3. Add analytics (Google Analytics, etc.)
4. Add meta tags for SEO
5. Consider adding a blog or case studies section

## License

All rights reserved - Bhregu.ai

