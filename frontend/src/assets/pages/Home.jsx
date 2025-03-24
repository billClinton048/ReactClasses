import MovieCard from "../components/MovieCard";
import { useState} from "react"

function Home() {
  const [ searchQuery, setSearchQuery] = useState("")
  const movies = [
    { id: 1, title: "John Wick", release_date: "2024" },
    { id: 2, title: "Terminator", release_date: "1999" },
    { id: 3, title: "The Matrix", release_date: "1994" },
  ];
  const hundleSubmit = (e) => {
    e.preventDefault()
    setSearchQuery("")
  };

  return (
    <div className="home">
      <form onSubmit={hundleSubmit} className="search-form">
        <input
          type="text"
          placeholder="search for movies ...."
          className="search-input"
          value={searchQuery}
          onChange ={ (e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">Search</button>
      </form>
      <div className="movie-grid">
        {movies.map((movie) => movie.title.toLowerCase().startWith(searchQuery) && (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
