import React, { useState, useEffect } from "react";
import "./index.css";
import Movie from "./Components/Movie";
import axios from "axios";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
// const api_key      =  '04c35731a5ee918f014970082a0088b1';
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getMovies(FEATURED_API)
  }, []);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (searchTerm) {
      getMovies(SEARCH_API + searchTerm)
    }
  };

  const getMovies = async (url) => {
    const response = await axios.get(url);
        setMovies(response.data.results);
        setSearchTerm('');
  }

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <React.Fragment>
      <header>
        <form onSubmit={handleSubmit}>
          <input
            className="search"
            type="search"
            placeholder="...search"
            onChange={handleChange}
          />
        </form>
      </header>
      <div className="movie__container">
        {movies?.map((movie) => (
          <Movie key={movie.id} {...movie} />
        ))}
      </div>
    </React.Fragment>
  );
}

export default App;
