# Technology Stack

## Core Technologies

- **Framework**: React 19.2.1
- **Build Tool**: Vite 7.2.4
- **Routing**: React Router 7.10.1
- **Styling**: Tailwind CSS 4.1.17 + DaisyUI 5.5.8
- **Animations**: Framer Motion 12.23.25
- **Language**: JavaScript (JSX)

## Key Libraries

- **@emailjs/browser**: Email form integration
- **react-hot-toast**: Toast notifications
- **react-icons**: Icon library (FaGithub, FaLinkedin, etc.)
- **lucide-react**: Additional icon set
- **typewriter-effect**: Animated typing effect

## Development Tools

- **ESLint**: Code linting with React-specific rules
- **@vitejs/plugin-react**: Fast Refresh support

## Environment Variables

The project uses `.env` file for configuration:
- `VITE_EMAILJS_SERVICE_ID`: EmailJS service identifier
- `VITE_EMAILJS_TEMPLATE_ID`: EmailJS template identifier
- `VITE_EMAILJS_PUBLIC_KEY`: EmailJS public key

Access via `import.meta.env.VITE_*`

## Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Build Configuration

- Vite config includes React plugin and Tailwind CSS plugin
- Custom Tailwind theme with brand colors defined in `src/index.css`
- DaisyUI plugin for component styling
