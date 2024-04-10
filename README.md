# Prueba Técnica con Express y Node.js

Este repositorio contiene una prueba técnica que implementa una aplicación usando Express y Node.js. Se ha utilizado Clean Architecture junto con patrones de programación e inversión de dependencia utilizando tsyringe.

## Scripts Disponibles

En el proyecto, puedes ejecutar los siguientes scripts:

### `npm run tsc`

Compila el código TypeScript en JavaScript utilizando el compilador TypeScript (tsc).

### `npm run dev`

Ejecuta la aplicación en modo de desarrollo utilizando ts-node-dev. Esto reiniciará automáticamente el servidor cuando se detecten cambios en el código fuente.

### `npm start`

Inicia la aplicación en un entorno de producción. Esto ejecutará el código JavaScript compilado en la carpeta `build`.

### `npm test`

Ejecuta las pruebas con Jest.

**Nota:** Para reproducir la aplicación ejecute: `npm install` seguido de `npm run tsc` y por último `npm run dev` para desarrollo o `npm start` para producción.

## Descripción del Repositorio

Este repositorio es una implementación de una prueba técnica utilizando Express y Node.js. Se ha aplicado Clean Architecture para estructurar la aplicación de una manera modular y escalable. Además, se han utilizado varios patrones de programación, como patrón de repositorio, patrón de inyección de dependencias (DI) y otros patrones de diseño para escribir un código más limpio y mantenible.

## Dependencias Principales

- Express: Framework web para Node.js
- tsyringe: Contenedor de inyección de dependencias para TypeScript
- TypeScript: Superset de JavaScript que agrega tipado estático opcional
- Mongoose: Conexión a la base de datos.
