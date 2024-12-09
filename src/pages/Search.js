import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import SearchMovie from "../components/SearchMovie";
import Footer from "../components/Footer";

const Search = () => {
    return (
        <div>
            <Logo />
            <SearchMovie/>
            <Footer />
        </div>   
    )
}

export default Search;