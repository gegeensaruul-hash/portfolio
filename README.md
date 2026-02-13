# 🎨 Playful Portfolio - Kidd

Cute and colorful portfolio website with pastel colors, rounded design, and playful animations! ✨

## 🌈 Features

- 💫 **Pastel Gradient Design** - Beautiful soft colors
- 🔵 **Material-style Tabs** - HOME, WORK, ABOUT, CONTACT
- 🌙 **Dark/Light Mode** - Toggle between themes
- 📱 **Fully Responsive** - Works on all devices
- 🎪 **Playful Animations** - Bounce, pulse, and hover effects
- 🎯 **Rounded Everything** - Modern, friendly design
- 💖 **Floating Decorations** - Stars, hearts, sparkles

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Your portfolio will open at `http://localhost:3000` 🎉

### 3. Build for Production

```bash
npm run build
```

## 📦 Tech Stack

- ⚛️ **React 18** - UI library
- ⚡ **Vite** - Fast build tool
- 🎨 **TailwindCSS** - Styling
- 🎯 **Lucide Icons** - Beautiful icons
- 🎪 **CSS Animations** - Smooth transitions

## 🎨 Customization

### Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: '#FFD6E8',   // Pink
  secondary: '#C7E9FF', // Blue
  accent: '#FFE7C7',    // Yellow
}
```

### Edit Content

Open `src/PlayfulPortfolio.jsx` and update:

- Personal information
- Projects
- Skills
- Contact information
- Social media links

### Add Your Projects

Find the `projects` array in `PlayfulPortfolio.jsx`:

```javascript
const projects = [
  {
    id: 1,
    title: "Your Project",
    description: "Project description",
    image: "your-image-url",
    tags: ["React", "TailwindCSS"],
    color: "#FFD6E8",
    link: "#"
  },
  // Add more projects...
];
```

## 📁 Project Structure

```
playful-portfolio/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── PlayfulPortfolio.jsx
├── public/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🌟 4 Tabs

1. **HOME** - Hero section with animated elements
2. **WORK** - Project showcase with 6 projects
3. **ABOUT** - Bio, skills, and interests
4. **CONTACT** - Beautiful contact form

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

Free to use for personal and commercial projects! 💖

## 🤝 Support

If you need help or have questions, feel free to reach out!

---

**Made with 💖 by Kidd**

Built with React + Vite + TailwindCSS ✨
