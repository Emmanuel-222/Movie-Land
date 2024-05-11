import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Card from "./components/Card";
import "./App.css";
import PropTypes from "prop-types";

const API_URL = "http://www.omdbapi.com/?apikey=1e9af78";
const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getMovies(search);
  }, [search]);

  const getMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          type="
        text"
          placeholder="Search for movies"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />

        <FaSearch onClick={() => {
          getMovies(search)
        }} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie, i) => {
            return <Card movie={movie} key={i} />;
          })}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

App.propTypes = {
  movies: PropTypes.array,
};

export default App;