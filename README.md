# Serhii Kaliuzhnyi — Portfolio · React + Vite

## Quick Start
```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build → dist/
```

## Connect Email Form
1. Register at https://formspree.io → create form → copy ID
2. Open `src/components/ContactForm.jsx`
3. Replace `YOUR_FORM_ID` with your real ID

## Deploy (Vercel / Netlify)
- Build command: `npm run build`
- Output directory: `dist`
- `public/_redirects` already included for SPA routing

## Add Projects
Edit `src/data/projects.js` → add object to PROJECTS array

## Structure
```
src/
  components/   Hero, Nav, Problem, Solution, About, Services,
                Why, Portfolio, Process, Stack, Testimonials,
                Faq, FinalCta, ContactForm, Footer, FloatCta,
                Animate, Section
  pages/        Home, Projects, Contact, NotFound
  hooks/        useTheme, useAnimate
  data/         projects.js
  styles/       globals.css
  i18n.js       UA / DE / EN
  App.jsx
  main.jsx
```
