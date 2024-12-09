import React, { useState, useEffect } from "react";
import axios from "axios";
import "font-awesome/css/font-awesome.min.css";
import "../components/ActorDetails.scss";
import { useParams } from "react-router-dom";
import Logo from "../components/Logo";
import Footer from "../components/Footer";

const ActorDetails = () => {
  const { id } = useParams();
  const [actor, setActor] = useState({});
  const [actorImage, setActorImage] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/person/${id}?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US`
      )
      .then((res) => {
        setActor(res.data);
        setActorImage(res.data.profile_path);
      })
      .catch((err) => console.log(err));

    axios
      .get(
        `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US`
      )
      .then((res) => {
        setMovies(res.data.cast); 
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="actor-details-wrapper">
      <Logo />
      <div className="actor-details-container">
        <div className="actor-photo">
          {actorImage && (
            <img
              src={`https://image.tmdb.org/t/p/original${actorImage}`}
              alt={actor.name}
              className="actor-photo-img"
            />
          )}
        </div>
        <div className="actor-info">
          <h1>{actor.name}</h1>
          <p className="actor-description">
            {actor.biography ? actor.biography : "Biography not available."}
          </p>
          <div className="social-icons">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-square"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter-square"></i>
            </a>
          </div>
        </div>
      </div>

      
      <div className="actor-movies">
        <h2>Célèbre pour</h2>
        <div className="movies-grid">
          {movies.slice(0, 12).map(
            (
              movie 
            ) => (
              <div key={movie.id} className="movie-card">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="movie-poster"
                />
                <h3>{movie.title}</h3>
                <p>
                  {movie.release_date
                    ? movie.release_date.split("-")[0]
                    : "N/A"}
                </p>
              </div>
            )
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ActorDetails;
