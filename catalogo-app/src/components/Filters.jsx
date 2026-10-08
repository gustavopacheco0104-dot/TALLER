const selectClass =
  "rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm focus:border-amber-400 focus:outline-none";

export default function Filters({ filters, onFiltersChange, genres, years }) {
  // Actualiza solo una propiedad del objeto filters
  const update = (key, value) => onFiltersChange({ ...filters, [key]: value });

  return (
    <section className="flex flex-wrap items-end gap-4 rounded-xl border border-slate-800 bg-slate-900/50 p-4">
      <label className="flex flex-col gap-1 text-xs text-slate-400">
        Género
        <select className={selectClass} value={filters.genre} onChange={(e) => update("genre", e.target.value)}>
          <option value="all">Todos</option>
          {genres.map((g) => (
            <option key={g} value={g}>{g}</option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-1 text-xs text-slate-400">
        Año
        <select className={selectClass} value={filters.year} onChange={(e) => update("year", e.target.value)}>
          <option value="all">Todos</option>
          {years.map((y) => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-1 text-xs text-slate-400">
        Calificación mínima
        <select className={selectClass} value={filters.minRating} onChange={(e) => update("minRating", Number(e.target.value))}>
          <option value={0}>Cualquiera</option>
          {[6, 7, 8, 9].map((r) => (
            <option key={r} value={r}>{r}+</option>
          ))}
        </select>
      </label>

      <label className="flex items-center gap-2 pb-2 text-sm">
        <input
          type="checkbox"
          checked={filters.onlyFavorites}
          onChange={(e) => update("onlyFavorites", e.target.checked)}
          className="h-4 w-4 accent-amber-400"
        />
        Solo favoritas
      </label>
    </section>
  );
}
