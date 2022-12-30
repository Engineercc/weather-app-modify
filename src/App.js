import React from "react";
import { Route, Routes } from "react-router";
import SharedLayout from "./pages/SharedLayout";
import FavoriteCities from "./pages/FavoriteCities";
import WeatherStats from "./pages/WeatherStats";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="favorite-cities" element={<FavoriteCities />} />
      </Route>
    </Routes>
  );
};

export default App;
