export default function StarRating({ value = 0, onRate, size = "text-2xl" }) {
  return (
    <div className="flex" role="group" aria-label="Tu calificación">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onRate(star);
          }}
          aria-label={`${star} estrella${star > 1 ? "s" : ""}`}
          className={`${size} leading-none transition-colors ${
            star <= value ? "text-amber-400" : "text-slate-600 hover:text-amber-200"
          }`}
        >
          ★
        </button>
      ))}
    </div>
  );
}
