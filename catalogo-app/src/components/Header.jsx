import SearchBar from "./SearchBar";

export default function Header({ query, onQueryChange }) {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-amber-400">CineCatálogo</h1>
        <div className="sm:w-96">
          <SearchBar query={query} onQueryChange={onQueryChange} />
        </div>
      </div>
    </header>
  );
}
