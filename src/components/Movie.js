import React from "react";
import "./movie.scss"; 
import { useNavigate } from 'react-router-dom';

const Movie = (props) => {
  const navigate = useNavigate(); 

  const { movie } = props; 

  const handleClick = () => {
   
    navigate(`/movie/${movie.id}`); 
  };

  return (
    <div className="movie-card" onClick={handleClick}> 
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        className="movie-poster"
      />
      <div className="movie-details">
        <h3 className="movie-title">{movie.title}</h3>
        {/* <p className="movie-overview">{movie.overview.slice(0, 100)}...</p> */}
      </div>
    </div>
  );
};

export default Movie;