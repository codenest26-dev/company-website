# CodeNest Website

Marketing website for CodeNest Technologies built with Vite, React, TypeScript, Tailwind CSS, and shadcn/ui components. The project includes animated page transitions, dedicated service and portfolio pages, and a contact form that can submit through a Vercel serverless function.

## Overview

This repository powers a multi-page business website for CodeNest Technologies. It is structured as a client-side React SPA with route-based page loading, section animations, reusable UI primitives, and a lightweight backend endpoint for form submissions.

Core site areas include:

- Home page with hero, about, services, testimonials, FAQ, and CTA sections
- About page
- Services overview page
- Individual service pages for web development, digital marketing, e-commerce, and branding
- Portfolio listing and project detail pages
- Contact page with validated form submission flow
- Custom 404 page

## Tech Stack

- Vite 5
- React 18
- TypeScript
- React Router DOM
- Tailwind CSS
- shadcn/ui and Radix UI
- Framer Motion
- TanStack Query
- Vercel serverless functions

## Project Structure

```text
.
|- api/                     # Vercel serverless functions
|  |- contact.ts           # Contact form proxy/validation endpoint
|- public/                 # Static assets
|- src/
|  |- components/
|  |  |- layout/           # Header, footer, route transitions
|  |  |- sections/         # Home page sections
|  |  |- ui/               # Reusable UI primitives and custom blocks
|  |- config/
|  |  |- environment.ts    # Runtime environment configuration
|  |- hooks/               # Shared hooks
|  |- lib/                 # Utilities
|  |- pages/               # Route-level pages
|  |  |- services/         # Service detail pages
|  |- services/
|     |- contactService.ts # Frontend contact form submission logic
|- index.html
|- vercel.json
|- vite.config.ts
```

## Routing

The app uses lazy-loaded routes with animated transitions.

Main routes:

- `/`
- `/about`
- `/services`
- `/services/web-development`
- `/services/digital-marketing`
- `/services/ecommerce`
- `/services/branding`
- `/portfolio`
- `/portfolio/:slug`
- `/contact`
- `*` for not found

## Local Development

### Prerequisites

- Node.js 18 or newer
- npm, Bun, or another package manager compatible with the lockfile and scripts

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The site will be available through the Vite local development server.

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

### Run linting

```bash
npm run lint
```

## Environment Variables

The project reads runtime configuration from Vite environment variables on the frontend and from Vercel environment variables in production.

### Frontend variables

Create a local `.env` file if needed:

```env
VITE_GAS_WEBHOOK_URL=https://script.google.com/macros/s/your-script-id/exec
VITE_APP_ENV=development
VITE_DEBUG=false
```

Variable reference:

- `VITE_GAS_WEBHOOK_URL`: Google Apps Script webhook URL used in local development
- `VITE_APP_ENV`: Expected values are `development`, `staging`, or `production`
- `VITE_DEBUG`: Enables debug mode when set to `true`

### Production variables

For Vercel deployments, configure:

```env
GAS_WEBHOOK_URL=https://script.google.com/macros/s/your-script-id/exec
```

In production, the frontend posts to `/api/contact`, and the serverless function forwards the sanitized payload to `GAS_WEBHOOK_URL`.

## Contact Form Flow

The contact workflow is split into two layers:

1. `src/services/contactService.ts` validates and sanitizes form input in the client.
2. `api/contact.ts` validates again on the server, handles CORS and method checks, and forwards the submission to Google Apps Script.

Development behavior:

- If `VITE_GAS_WEBHOOK_URL` is missing, the frontend falls back to a simulated success response for testing.

Production behavior:

- The frontend uses `/api/contact`.
- The Vercel function requires `GAS_WEBHOOK_URL` to be set.

## Deployment

This project is configured for Vercel.

Notes:

- `vercel.json` rewrites all routes to `index.html` so React Router can handle client-side navigation.
- The `api/` directory is used for the contact serverless function.

Typical deployment flow:

1. Import the repository into Vercel.
2. Add the required environment variables.
3. Deploy.

## Design and UX Notes

The site uses:

- Framer Motion for page and section transitions
- Lazy-loaded route components for better initial load behavior
- Tailwind-based styling with a custom visual theme
- Reusable UI components based on Radix primitives and shadcn/ui patterns

## Recommended Maintenance Areas

When updating the site, these areas are the main touch points:

- `src/components/layout/` for header, footer, and routing transitions
- `src/components/sections/` for homepage content blocks
- `src/pages/` for route-level page content
- `src/services/contactService.ts` and `api/contact.ts` for contact workflow changes
- `src/config/environment.ts` for environment-driven behavior

## Scripts

Available package scripts:

- `npm run dev` - start the Vite development server
- `npm run build` - create a production build
- `npm run build:dev` - create a development-mode build
- `npm run preview` - preview the production build locally
- `npm run lint` - run ESLint

## License

This repository does not currently declare a license in source.
