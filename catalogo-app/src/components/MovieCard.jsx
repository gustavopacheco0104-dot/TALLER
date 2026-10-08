import StarRating from "./StarRating";

export default function MovieCard({ movie, isFavorite, userRating, onSelect, onToggleFavorite, onRate }) {
  return (
    <article
      onClick={() => onSelect(movie.id)}
      className="group flex cursor-pointer flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-900 transition hover:border-amber-400/60"
    >
      <div className="relative">
        <img src={movie.image} alt={`Póster de ${movie.title}`} className="aspect-[2/3] w-full object-cover" loading="lazy" />
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(movie.id);
          }}
          aria-label={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
          className={`absolute right-2 top-2 rounded-full bg-slate-950/80 px-2.5 py-1 text-lg ${
            isFavorite ? "text-rose-500" : "text-slate-300 hover:text-rose-400"
          }`}
        >
          {isFavorite ? "♥" : "♡"}
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="font-semibold leading-snug">{movie.title}</h3>
        <p className="text-xs text-slate-400">
          {movie.genre} · {movie.year} · <span className="text-amber-400">★ {movie.rating}</span>
        </p>
        <p className="line-clamp-3 text-sm text-slate-300">{movie.description}</p>
        <div className="mt-auto pt-2">
          <p className="text-xs text-slate-500">Tu calificación</p>
          <StarRating value={userRating} onRate={(stars) => onRate(movie.id, stars)} size="text-xl" />
        </div>
      </div>
    </article>
  );
}
