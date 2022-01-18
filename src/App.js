import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";

const App = () => {
  const [movies, setmovies] = useState([]);
  const [searchValue, setSearchValue] =  useState('');

  const getMovieRequest = async () => {
    const url = "http://www.omdbapi.com/?s=avengers&apikey=37ca63fb";

    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson);
    setmovies(responseJson.Search);
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading='Movies'></MovieListHeading>
        <SearchBox></SearchBox>
      </div>
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default App;
