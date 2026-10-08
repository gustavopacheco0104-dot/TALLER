import { useState } from "react";
import { movies } from "./data/movies";
import { filterMovies } from "./utils/filterMovies";
import Header from "./components/Header";
import Filters from "./components/Filters";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import Favorites from "./components/Favorites";

const genres = [...new Set(movies.map((m) => m.genre))].sort();
const years = [...new Set(movies.map((m) => m.year))].sort((a, b) => b - a);

export default function App() {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({
    genre: "all",
    year: "all",
    minRating: 0,
    onlyFavorites: false,
  });
  const [favorites, setFavorites] = useState([]); // solo IDs
  const [ratings, setRatings] = useState({}); // { idPelicula: estrellas }
  const [selectedId, setSelectedId] = useState(null);

  const toggleFavorite = (id) =>
    setFavorites((prev) => (prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]));

  const rateMovie = (id, stars) => setRatings((prev) => ({ ...prev, [id]: stars }));

  // Datos derivados: no se guardan en estado
  const visibleMovies = filterMovies(movies, { query, filters, favorites });
  const favoriteMovies = movies.filter((m) => favorites.includes(m.id));
  const selectedMovie = movies.find((m) => m.id === selectedId);

  return (
    <div className="min-h-screen">
      <Header query={query} onQueryChange={setQuery} />

      <main className="mx-auto grid max-w-7xl gap-6 px-4 py-6 lg:grid-cols-[1fr_280px]">
        <div className="flex flex-col gap-6">
          <Filters filters={filters} onFiltersChange={setFilters} genres={genres} years={years} />
          <MovieList
            movies={visibleMovies}
            favorites={favorites}
            ratings={ratings}
            onSelect={setSelectedId}
            onToggleFavorite={toggleFavorite}
            onRate={rateMovie}
          />
        </div>

        <Favorites movies={favoriteMovies} onSelect={setSelectedId} onToggleFavorite={toggleFavorite} />
      </main>

      {selectedMovie && (
        <MovieDetail
          movie={selectedMovie}
          isFavorite={favorites.includes(selectedMovie.id)}
          userRating={ratings[selectedMovie.id] ?? 0}
          onClose={() => setSelectedId(null)}
          onToggleFavorite={toggleFavorite}
          onRate={rateMovie}
        />
      )}
    </div>
  );
}
