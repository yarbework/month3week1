import React, { useState, useEffect } from "react";

// import axios from "axios";

//API Key: 1a61569bf98a0634373a7a03306b33db

function FetchingAPI() {
  const API_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=1a61569bf98a0634373a7a03306b33db";
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setLoading(false);

        console.log(data.results);
      })
      .catch((error) => {
        console.error("Error fetching: ", errror);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <h1>Popular Movies</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        movies?.map((movie) => (
          <div key={movie.id}>
            <p>{movie.title}</p>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
        ))
      )}
    </>
  );
}

export default FetchingAPI;
