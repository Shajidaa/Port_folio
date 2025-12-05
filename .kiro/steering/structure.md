# Project Structure

## Directory Organization

```
src/
├── components/          # Reusable UI components
│   ├── shared/         # Shared/common components
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Education.jsx
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   ├── Projects.jsx
│   ├── ScrollToTop.jsx
│   └── Skills.jsx
├── Pages/              # Route-level page components
│   ├── Home.jsx
│   └── ProjectDetails.jsx
├── Routes/             # Routing configuration
│   └── Router.jsx
├── Layout/             # Layout components
│   └── RootLayout.jsx
├── utils/              # Utility functions and helpers
│   └── animations.js
├── assets/             # Static assets (images, icons)
├── main.jsx           # Application entry point
├── index.css          # Global styles and Tailwind config
└── App.css            # Component-specific styles (currently empty)
```

## Component Architecture

### Pages
- **Home.jsx**: Main landing page that composes all section components
- **ProjectDetails.jsx**: Individual project detail view (dynamic route)

### Layout
- **RootLayout.jsx**: Minimal wrapper using React Router's `<Outlet />`

### Components
All components are functional components using React hooks. Section components include:
- Hero, About, Skills, Education, Projects, Contact, Navbar
- Each section has its own component file for modularity

### Routing
- Uses `createBrowserRouter` from React Router
- Routes defined in `src/Routes/Router.jsx`
- Dynamic route: `/project/:id` for project details

## Styling Conventions

- Tailwind CSS utility classes for all styling
- DaisyUI components (btn, etc.)
- Custom brand colors defined in `@theme` in `index.css`:
  - `--color-brand-dark-bg`: #101729
  - `--color-brand-card-bg`: #1e293b
  - `--color-brand-purple`: #9f7aea
  - `--color-brand-text`: #cbd5e0
- Purple gradient text pattern: `bg-linear-to-r from-purple-400 to-purple-900 text-transparent bg-clip-text`
- Responsive design using Tailwind breakpoints (sm, md, lg)

## Animation Patterns

- Framer Motion used for all animations
- Reusable animation variants in `src/utils/animations.js`
- Common patterns:
  - `fadeInUp`, `fadeInLeft`, `fadeInRight` for entrance animations
  - `whileInView` with `viewport={{ once: true }}` for scroll-triggered animations
  - `whileHover` and `whileTap` for interactive elements

## State Management

- Local component state using `useState`
- No global state management library (Redux, Zustand, etc.)
- Form state managed locally in Contact component

## External Integrations

- **EmailJS**: Contact form email delivery (see EMAILJS_SETUP.md for configuration)
- **Google Maps**: Embedded map in contact section
- **External Links**: GitHub, LinkedIn, resume download
