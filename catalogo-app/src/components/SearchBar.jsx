export default function SearchBar({ query, onQueryChange }) {
  return (
    <input
      type="search"
      value={query}
      onChange={(e) => onQueryChange(e.target.value)}
      placeholder="Buscar por título..."
      aria-label="Buscar película por título"
      className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm placeholder:text-slate-500 focus:border-amber-400 focus:outline-none"
    />
  );
}
