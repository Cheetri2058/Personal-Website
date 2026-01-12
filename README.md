# Portfolio Website - React

A modern, responsive portfolio website built with React and Vite, showcasing projects, skills, and experience.

## 🚀 Features

- **React-based**: Built with React 18 and modern hooks
- **Vite**: Fast build tool and development server
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Component-based**: Organized, reusable React components
- **Smooth Scrolling**: Enhanced navigation experience
- **Mobile Menu**: Hamburger menu for mobile devices
- **Accessible**: Semantic HTML and proper ARIA labels

## 📁 Project Structure

```
MyWebsite/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/         # React components
│   │   ├── About/
│   │   ├── Contact/
│   │   ├── Education/
│   │   ├── Experience/
│   │   ├── Footer/
│   │   ├── Hero/
│   │   ├── Navbar/
│   │   ├── Projects/
│   │   └── Skills/
│   ├── App.jsx             # Main App component
│   ├── App.css             # App styles
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
└── README.md               # This file
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   The app will automatically open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📝 Customization

### Update Contact Information

Edit `src/components/Contact/Contact.jsx`:
```jsx
const contactLinks = [
  {
    icon: '📧',
    text: 'your.email@example.com',
    href: 'mailto:your.email@example.com'
  },
  // ... other links
]
```

### Update Project Links

Edit `src/components/Projects/Projects.jsx`:
```jsx
const projects = [
  {
    title: 'Your Project',
    description: 'Project description...',
    technologies: ['React', 'Node.js'],
    githubLink: 'https://github.com/yourusername/project' // Update this
  },
  // ... other projects
]
```

### Change Colors

Modify CSS variables in `src/index.css`:
```css
:root {
    --primary-color: #2563eb;  /* Change to your preferred color */
    --primary-dark: #1e40af;
    /* ... other variables */
}
```

### Add More Projects

Edit the `projects` array in `src/components/Projects/Projects.jsx`:
```jsx
{
  title: 'New Project',
  description: 'Description here...',
  technologies: ['Tech1', 'Tech2'],
  githubLink: 'https://github.com/...'
}
```

### Update Skills

Edit the `skillCategories` array in `src/components/Skills/Skills.jsx`:
```jsx
{
  title: 'Category Name',
  skills: ['Skill 1', 'Skill 2', 'Skill 3']
}
```

## 🎨 Styling

- **Global styles**: `src/index.css` - Contains CSS variables and base styles
- **Component styles**: Each component has its own CSS file in its folder
- **Responsive breakpoints**: 
  - Mobile: 480px
  - Tablet: 768px

## 📦 Dependencies

### Production
- `react` - React library
- `react-dom` - React DOM rendering

### Development
- `vite` - Build tool and dev server
- `@vitejs/plugin-react` - Vite plugin for React

## 🚢 Deployment

### GitHub Pages

1. Install `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

### Netlify

1. Build command: `npm run build`
2. Publish directory: `dist`
3. Drag and drop the `dist` folder or connect to Git

### Vercel

1. Import your Git repository
2. Vercel will auto-detect Vite
3. Deploy!

### Other Platforms

Upload the `dist` folder contents to any static hosting service.

## 🐛 Troubleshooting

### Port Already in Use

If port 3000 is in use, Vite will automatically try the next available port. You can also specify a port in `vite.config.js`:
```js
server: {
  port: 3001
}
```

### Build Errors

Make sure all dependencies are installed:
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📄 License

© 2025 Arbin Budhathoki. All rights reserved.

## 🤝 Contributing

This is a personal portfolio website. Feel free to use it as a template for your own portfolio!
