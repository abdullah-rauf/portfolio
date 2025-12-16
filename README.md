# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- ✨ Modern and clean design
- 🎨 Smooth animations with Framer Motion
- 📱 Fully responsive layout
- 🌙 Dark mode support
- ⚡ Optimized performance
- 🎯 SEO friendly
- 📧 Contact form
- 🎭 Component-based architecture

## Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Code Quality:** Biome

## Project Structure

```
src/
├── app/              # Next.js app directory
├── components/       # Reusable components
│   └── ui/          # UI components (Button, Card, etc.)
├── layout/          # Layout components (Header, Footer)
├── views/           # Page sections (Hero, About, Skills, etc.)
├── lib/             # Utility functions
├── hooks/           # Custom React hooks
├── constants/       # Constants and data
└── styles/          # Global styles
```

## Getting Started

### Installation

```bash
# Install dependencies
pnpm install
```

### Development

```bash
# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

### Linting & Formatting

```bash
# Check code quality
pnpm lint

# Format code
pnpm format
```

## Customization

### Update Personal Information

Edit the data in `src/constants/data.ts`:

- Personal info (name, title, email, etc.)
- Skills and expertise
- Projects portfolio
- Work experience
- Social links

### Modify Colors and Theme

Update the theme in `src/app/globals.css`:

- CSS variables for colors
- Dark mode styles
- Custom animations

### Add New Sections

1. Create a new component in `src/views/`
2. Export it from `src/views/index.ts`
3. Import and add it to `src/app/page.tsx`

## Deployment

This project can be deployed on:

- **Vercel** (Recommended)
- **Netlify**
- **AWS Amplify**
- **Cloudflare Pages**

### Deploy on Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## License

MIT License - feel free to use this project for your own portfolio!

## Credits

Built with ❤️ by Abdullah
