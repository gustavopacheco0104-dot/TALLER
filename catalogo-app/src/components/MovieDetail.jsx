import StarRating from "./StarRating";

export default function MovieDetail({ movie, isFavorite, userRating, onClose, onToggleFavorite, onRate }) {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-20 flex items-center justify-center bg-black/70 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`Detalle de ${movie.title}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-y-auto rounded-2xl border border-slate-700 bg-slate-900 sm:flex-row"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar detalle"
          className="absolute right-3 top-3 rounded-full bg-slate-950/80 px-3 py-1 text-slate-300 hover:text-white"
        >
          ✕
        </button>

        <img src={movie.image} alt={`Póster de ${movie.title}`} className="aspect-[2/3] w-full object-cover sm:w-64" />

        <div className="flex flex-1 flex-col gap-4 p-6">
          <h2 className="pr-8 text-2xl font-bold">{movie.title}</h2>
          <p className="text-sm text-slate-400">
            {movie.genre} · {movie.year} · <span className="text-amber-400">★ {movie.rating}</span>
          </p>
          <p className="text-slate-200">{movie.description}</p>

          <div>
            <p className="mb-1 text-sm text-slate-400">
              Tu calificación{userRating > 0 && `: ${userRating}/5`}
            </p>
            <StarRating value={userRating} onRate={(stars) => onRate(movie.id, stars)} />
          </div>

          <button
            type="button"
            onClick={() => onToggleFavorite(movie.id)}
            className={`mt-auto self-start rounded-lg px-4 py-2 text-sm font-medium ${
              isFavorite ? "bg-rose-500/20 text-rose-300" : "bg-amber-400 text-slate-950"
            }`}
          >
            {isFavorite ? "♥ Quitar de favoritos" : "♡ Agregar a favoritos"}
          </button>
        </div>
      </div>
    </div>
  );
}
