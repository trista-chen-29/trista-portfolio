# trista.chen — Personal Portfolio

Personal portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4 + CSS Variables
- **Font:** Instrument Serif · Figtree · Geist Mono
- **Icons:** Devicons
- **Deployment:** Vercel

## Features

- Light / dark mode toggle (persisted via localStorage)
- Three-tab navigation: About · Experience · Projects
- Responsive layout
- Animated page reveals

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/
│   ├── layout.js           # Root layout, Navbar, Footer
│   ├── page.js             # About page
│   ├── experience/
│   │   └── page.js         # Experience page
│   └── projects/
│       └── page.js         # Projects page
└── components/
    ├── Navbar.jsx           # Navigation + theme toggle
    ├── ThemeProvider.jsx    # Dark/light mode context
    ├── ExperienceItem.jsx   # Accordion experience card
    ├── ProjectCard.jsx      # Project card with screenshot
    └── Ui.jsx               # Shared UI primitives
```

## Deployment

GitHub Actions runs lint and `next build` on every pull request and push to `main`.

On `main`, the same workflow deploys production to Vercel. Pull requests get a preview URL commented on the PR.

Required repository secrets:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`