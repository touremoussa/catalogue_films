import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Popular from "./pages/Popular";
import Search from "./pages/Search";
import Categories from "./pages/Categories";
import MoviesDetails from "./pages/MoviesDetails";
import ActorDetails from "./pages/ActorDetails";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Popular />} />
        <Route path="/search" element={<Search />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/movie/:id" element={<MoviesDetails />} />
        <Route path="/actor/:id" exact element={<ActorDetails />} />  {/* Nouvelle route */}
      </Routes>
  );
};

export default App;