import React, { useState, useEffect } from "react";
import axios from "axios";
import Logo from "../components/Logo";
import { useParams, useNavigate } from "react-router-dom"; 
import "../components/MoviesDetails.scss";

const MovieDetails = () => {
    const { id } = useParams(); 
    const [detail, setDetail] = useState({});
    const navigate = useNavigate();
    const [genres, setGenres] = useState([]);
    const [actors, setActors] = useState([]); 

    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US`;
    const actorsURL = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US`;

    useEffect(() => {
        if (id) {
            axios.get(URL).then((res) => {
                setDetail(res.data);
                setGenres(res.data.genres);
            });

            
            axios.get(actorsURL).then((res) => {
                setActors(res.data.cast); 
            });
        }
    }, [id]); 
    const handleActorClick = (actorId) => {
        navigate(`/actor/${actorId}`); 
    };


    return (
        <React.Fragment>
            <div className="details-container">
                <Logo />
                <div className="movie_card" id="bright">
                    <div className="info_section">
                        <div className="movie_header">
                            <img
                                className="locandina"
                                src={`http://image.tmdb.org/t/p/original${detail.poster_path}`}
                                alt="poster"
                            />
                            <h1>{detail.title}</h1>
                            <h4>{detail.release_date}</h4>
                            <span className="minutes">{detail.runtime} min</span>
                            {genres.map((g) => (
                                <p className="type" key={g.id}>{g.name}</p>
                            ))}
                        </div>
                        <div className="movie_desc">
                            <p className="text">{detail.overview}</p>
                        </div>
                    </div>
                </div>

               
                <div className="actors-section">
                    <h2>Actors</h2>
                    <div className="actors-list">
                        {actors.slice(0, 8).map((actor) => (
                            <div 
                            className="actor-card" 
                            key={actor.id} 
                            onClick={() => handleActorClick(actor.id)} 
                        >
                                <img
                                    src={`http://image.tmdb.org/t/p/w185${actor.profile_path}`}
                                    alt={actor.name}
                                    className="actor-img"
                                />
                                <p>{actor.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default MovieDetails;