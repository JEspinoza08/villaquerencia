# Villa Querencia - React + Vite

Proyecto convertido a React + Vite puro.

## Comandos

```bash
npm install
npm run dev
```

Para generar producción:

```bash
npm run build
npm run preview
```

## Cambios realizados

- Se eliminó TanStack Start / SSR.
- Se eliminó configuración Cloudflare/Wrangler.
- Se agregó `index.html` estándar de Vite.
- Se agregó `src/main.tsx`.
- Se agregó `src/App.tsx` como composición principal de la landing.
- Se actualizó `vite.config.ts` con React, TailwindCSS y alias `@`.
- Se limpió `package.json` para React + Vite.

## Archivos principales

- `src/App.tsx`: estructura principal de la web.
- `src/components/site/`: secciones de la landing.
- `src/styles.css`: estilos globales y tema.
- `src/assets/`: imágenes del proyecto.
