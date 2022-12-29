import React from "react";
import { Route, Routes } from "react-router";
import { FavoriteCities, Home } from "./components";


const App = () => {
  return (
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="favorite-cities" element={<FavoriteCities/>} />
  </Routes>
  );
};

export default App;
