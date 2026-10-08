// Combina buscador + filtros. Devuelve un nuevo arreglo con filter().
export function filterMovies(movies, { query, filters, favorites }) {
  const text = query.trim().toLowerCase();

  return movies.filter((movie) => {
    const matchesTitle = movie.title.toLowerCase().includes(text);
    const matchesGenre = filters.genre === "all" || movie.genre === filters.genre;
    const matchesYear = filters.year === "all" || movie.year === Number(filters.year);
    const matchesRating = movie.rating >= filters.minRating;
    const matchesFavorite = !filters.onlyFavorites || favorites.includes(movie.id);

    return matchesTitle && matchesGenre && matchesYear && matchesRating && matchesFavorite;
  });
}
