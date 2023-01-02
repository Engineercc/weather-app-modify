import React, { useState } from "react";
import SearchBar from "./SearchBar";
import homeBg from "../assets/images/home-bg.webp";
import { useGlobalContext } from "../context/weather_context";


const WeatherForecastContainer = () => {

  return (
    <>
      <SearchBar />
      <div className="row align-items-center home-content">
        <div className="col-md-6">
          <img src={homeBg} alt="" />
        </div>
        <div className="col-md-6">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
            veniam recusandae nostrum architecto debitis corporis, corrupti
            voluptatem aut placeat magnam commodi fugiat est dolores dolorum
            dolorem illum ut quos modi?
          </p>
        </div>
      </div>
    </>
  );
};

export default WeatherForecastContainer;
