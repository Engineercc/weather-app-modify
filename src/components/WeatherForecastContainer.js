import React, { useState } from "react";
import SearchBar from "./SearchBar";
import homeBg from "../assets/images/home-bg.webp";
import { useGlobalContext } from "../context/weather_context";
import ForecastDayTabs from "./ForecastDayTabs";


const WeatherForecastContainer = () => {

  return (
    <>
      <SearchBar />
      <div className="row align-items-center home-content">
        <ForecastDayTabs />
      </div>
    </>
  );
};

export default WeatherForecastContainer;
