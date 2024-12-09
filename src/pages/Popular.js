import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import PopularMovies from "../components/PopularMovies";
import Footer from "../components/Footer";

const Popular = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <PopularMovies />
            <Footer />
        </div>   
    )
}

export default Popular;