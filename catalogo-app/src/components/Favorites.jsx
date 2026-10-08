export default function Favorites({ movies, onSelect, onToggleFavorite }) {
  return (
    <aside className="rounded-xl border border-slate-800 bg-slate-900/50 p-4 lg:sticky lg:top-24">
      <h2 className="mb-3 text-lg font-semibold">Mis favoritas ({movies.length})</h2>

      {movies.length === 0 ? (
        <p className="text-sm text-slate-400">Toca el ♡ de una película para guardarla aquí.</p>
      ) : (
        <ul className="flex flex-col gap-2">
          {movies.map((movie) => (
            <li key={movie.id} className="flex items-center gap-3">
              <img src={movie.image} alt="" className="h-14 w-10 rounded object-cover" />
              <button
                type="button"
                onClick={() => onSelect(movie.id)}
                className="flex-1 truncate text-left text-sm hover:text-amber-400"
              >
                {movie.title}
              </button>
              <button
                type="button"
                onClick={() => onToggleFavorite(movie.id)}
                aria-label={`Quitar ${movie.title} de favoritos`}
                className="text-rose-500 hover:text-rose-300"
              >
                ♥
              </button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}
