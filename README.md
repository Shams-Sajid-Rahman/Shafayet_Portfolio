# Md Shafayet Ullah — Portfolio

React 18 + Vite + Tailwind CSS + Framer Motion + Lucide React single-page portfolio.

## Run

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
npm run preview   # serve the build locally
```

## Editing content

All text, skills, experience, publications and leadership entries live in
`src/data/portfolio.js`. Components read from it, so no JSX changes are needed.

Place your CV at `public/Md_Shafayet_Ullah_CV.pdf` for the "Download Resume" button.

## Structure

```
src/
├─ data/portfolio.js          # all editable content
├─ hooks/                     # useTheme, useActiveSection, useCopyToClipboard
├─ components/
│  ├─ ui/                     # Reveal, SectionHeading, StatusBadge, BackgroundDecor
│  ├─ Navbar.jsx  Hero.jsx  About.jsx  Skills.jsx  Experience.jsx
│  └─ Publications.jsx  Leadership.jsx  Contact.jsx  Footer.jsx
├─ App.jsx  main.jsx  index.css
```
