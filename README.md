This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm i
# or
npm run dev
# or
npm run format
# or
npm run test
# or
npm run build
```

# Next.js Countries Explorer

Aplicación desarrollada con Next.js y TypeScript que permite explorar información de países de todo el mundo. Consume la REST Countries API y ofrece una experiencia moderna, multilenguaje y optimizada.

## Descripción

El objetivo del proyecto es mostrar una lista de países con capacidad de búsqueda, y permitir la visualización del detalle de cada uno, incluyendo su nombre, bandera, capital, población, región, entre otros datos relevantes.

Se ha implementado soporte multilenguaje (inglés y español), diseño responsive con Tailwind CSS, enrutamiento dinámico, renderizado estático, y manejo de errores en la carga de datos.

## Funcionalidades implementadas

- Listado de países con paginación
- Búsqueda de países por nombre
- Página de detalle individual con información extendida
- Soporte multilenguaje con `next-intl` y rutas localizadas (`/en`, `/es`)
- Renderizado mediante `getStaticProps` y `getStaticPaths`
- Manejo de errores amigable si la API falla
- Diseño moderno con Tailwind CSS
- Estructura escalable basada en separación por capas
- Accesibilidad básica con etiquetas `alt`, `aria-label`, etc.
- Uso de `next/image` para optimización de banderas
- SEO básico usando `Head` por página
- Context API para gestión de estado (buscador y paginación)

## Estructura del proyecto

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
