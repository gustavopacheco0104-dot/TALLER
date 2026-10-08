# CineCatálogo — Catálogo interactivo de películas

Aplicación web hecha con React + Vite + Tailwind CSS, sin backend.

## Funcionalidades
- Catálogo de 10 películas con imagen, título, género, año, calificación y descripción
- Buscador en tiempo real por título
- Filtros combinables: género, año, calificación mínima y solo favoritas
- Detalle de película (se abre y se cierra)
- Favoritos (se guardan solo los IDs) con panel lateral
- Calificación personal de 1 a 5 estrellas
- Mensaje cuando no hay resultados

## Cómo ejecutarlo
```bash
git clone <URL_DEL_REPOSITORIO>
cd catalogo-peliculas
npm install
npm run dev
```
Abre la URL que muestra la terminal (normalmente http://localhost:5173).

## Estructura
```
src/
├── data/movies.js
├── utils/filterMovies.js
├── components/
│   ├── Header.jsx, SearchBar.jsx
│   ├── Filters.jsx
│   ├── MovieList.jsx, MovieCard.jsx
│   ├── MovieDetail.jsx, StarRating.jsx
│   └── Favorites.jsx
├── App.jsx
└── index.css
```

## Autor
Tu nombre aquí
