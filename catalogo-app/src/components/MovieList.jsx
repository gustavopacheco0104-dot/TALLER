import MovieCard from "./MovieCard";

export default function MovieList({ movies, favorites, ratings, onSelect, onToggleFavorite, onRate }) {
  // Renderizado condicional: mensaje cuando no hay resultados
  if (movies.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-slate-700 p-10 text-center text-slate-400">
        No encontramos películas con esos criterios. Prueba cambiando la búsqueda o los filtros.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          isFavorite={favorites.includes(movie.id)}
          userRating={ratings[movie.id] ?? 0}
          onSelect={onSelect}
          onToggleFavorite={onToggleFavorite}
          onRate={onRate}
        />
      ))}
    </div>
  );
}
