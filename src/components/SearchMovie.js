import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./Movie";
import "./searchMovie.scss";
import { Link } from "react-router-dom";

const SearchMovie = () => {

    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US&query=${query}`)
        .then((res) => setData(res.data.results));
    }, [query]);

    const onSearch = (e) => {
        setQuery(e.target.value)
    }

    console.log(query);

    return (
        <div className="searchMovie">
            <div className="input-container">
                <input 
                   placeholder="Mot clé"
                   onChange={onSearch}
                />
            </div>
            {query ? (
                <div className="popularMovies">
                    {data.map((m) => (
                        <Link to={{ pathname: `/movie/${m.id}`, state: { id: m.id } }} key={m.id}> 
                        <Movie movie={m} />
                        </Link>  
                    ))}
                </div>
            ) : (
                <div className="placeholer-container">
                    <h2>Rien à afficher, veuillez entrer un mot clé</h2>
                </div>
            )}
            
        </div>   
    )
}


export default SearchMovie;
