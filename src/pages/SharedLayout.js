import React from "react";
import { Outlet } from "react-router";
import { WeatherForecastContainer } from "../components";
import TemperatureContainer from "./../components/TemperatureContainer";

const SharedLayout = () => {
  return (
    <div className="container-fluid">
      <div className="row gt-0">
        <div className="col-md-7">
          <div className="p-3">
            <WeatherForecastContainer />
            <Outlet />
          </div>
        </div>
        <TemperatureContainer />
      </div>
    </div>
  );
};

export default SharedLayout;
