# Lovelace Website

Lovelace official website.

## Local development

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

## Deployment

This repository deploys automatically to GitHub Pages using the workflow in `.github/workflows/deploy-pages.yml`.

The Vite base path is configured for project pages:

- `https://seanzero7.github.io/LovelaceWebsite/`

In GitHub repository settings, make sure **Pages** is set to **Source: GitHub Actions**.

## Stack

- Vite
- React
- TypeScript
- Tailwind CSS
