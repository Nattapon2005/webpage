# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

## High-tech UI, responsive design & social previews

- **Animations:** `src/components/TechFX.jsx` adds the particle network, animated grid/aurora, scroll progress bar, custom cursor and HUD frame. `src/components/PageTransition.jsx` handles the page-to-page transition.
- **Styles:** the global futuristic layer lives in `src/styles/tech.scss`. It also contains responsive safety nets for every page.
- **Open Graph / Twitter Cards:** `index.html` holds the default social preview metadata. `src/components/Seo.jsx` updates the title, description, canonical URL, Open Graph and Twitter tags on every route (including product pages).
- **Preview image:** `public/og-image.png` (1200×630). Replace this file to change the link preview artwork.
- **Domain:** update `SITE_URL` in `src/components/Seo.jsx`, the absolute URLs in `index.html`, `public/robots.txt` and `public/sitemap.xml` if the production domain changes.
- **Note:** social crawlers that do not execute JavaScript will use the defaults from `index.html`. For per-route previews on those platforms, deploy with SSR/pre-rendering.
