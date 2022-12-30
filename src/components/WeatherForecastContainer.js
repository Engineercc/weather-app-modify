import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ForecastDayTabs from "./ForecastDayTabs";
import FavoriteCitiesContainer from "./FavoriteCitiesContainer";

const WeatherForecastContainer = () => {
  const [displayFav, setDisplayFav] = useState(false);
  return (
    <>
      <SearchBar />
      {displayFav && <FavoriteCitiesContainer display={displayFav} />}
      <ForecastDayTabs />
    </>
  );
};

export default WeatherForecastContainer;
