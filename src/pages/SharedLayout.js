import React from "react";
import { Outlet } from "react-router";
import {
  FavoriteCitiesContainer,
  WeatherForecastContainer,
  SearchBar,
  ForecastDayTabs,
} from "../components";
import TemperatureContainer from "./../components/TemperatureContainer";

const SharedLayout = () => {
  return (
    <div className="container-fluid">
      <div className="row gt-0">
        <div className="col-md-7 p-3">
          <WeatherForecastContainer />
          <Outlet />
        </div>
        <div className="col-md-5 bg-blue position-relative">
          <TemperatureContainer />
        </div>
      </div>
      <ForecastDayTabs />
    </div>
  );
};

export default SharedLayout;
