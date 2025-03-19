import React from "react";
import "./watchlist.css";
function WatchList({ watchlist }) {
  return (
    <div className="watchList">
      <h1> my Watchlist</h1>
      <ul>
        {watchlist.map((item, index) => (
          <li key={index}>
            {item.title}
            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt={item.title}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WatchList;
