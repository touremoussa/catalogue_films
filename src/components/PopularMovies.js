import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./Movie";
import { useNavigate } from "react-router-dom";

const PopularMovies = () => {
  const [popular, setPopular] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US&page=1"
      )
      .then((res) => setPopular(res.data.results));
  }, []);

  return (
    <div className="popularMovies">
      {popular.map((p) => (
        <Movie
          movie={p}
          key={p.id}
          onClickMovie={() => navigate('/movieDetails', { state: { id: p.id } })}
        />
      ))}
    </div>
  );
};

export default PopularMovies;