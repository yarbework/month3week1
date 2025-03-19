import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import WatchList from "./WatchList";
import "./watchlist.css";
export default function App() {
  const API_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=1a61569bf98a0634373a7a03306b33db";
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchList] = useState([]);
  const [loading, setLoading] = useState(true);

  //we have to fetch data from API using useEffect
  useEffect(() => {
    setLoading(true);
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setLoading(false);
      })
      .catch((e) => {
        console.error("Error fetching: ", e);
        setLoading(false);
      });
  }, []);
  const addToWatchList = (item) => {
    setWatchList([...watchlist, item]);
  };

  return (
    <Router>
      <div className="watchList">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/watchlist">Watchlist</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/watchlist"
            element={<WatchList watchlist={watchlist} />}
          />
          <Route
            path="/"
            element={
              <div>
                <h1>Popular Movies</h1>
                {loading ? (
                  <p>Loading...</p>
                ) : (
                  movies?.map((movie) => (
                    <div key={movie.id}>
                      <p> {movie.title}</p>
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                      />
                      <button onClick={() => addToWatchList(movie)}>
                        Add to Watchlist
                      </button>
                    </div>
                  ))
                )}
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
