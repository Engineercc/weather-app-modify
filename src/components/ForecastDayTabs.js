import React from "react";
import WeatherChart from "./WeatherChart";
import WeatherDataTable from './WeatherDataTable';

const ForecastDayTabs = () => {
  return (
    <div className="weather-tabs mt-4">
      <div className="tabs-header">
        <nav className="nav nav-pills flex-column flex-sm-row">
          <button
            type="button"
            className="flex-sm-fill text-sm-center nav-link active"
            aria-current="page"
          >
            "Friday"
          </button>
          <button
            type="button"
            className="flex-sm-fill text-sm-center nav-link"
            aria-current="page"
          >
            "Friday"
          </button>
          <button
            type="button"
            className="flex-sm-fill text-sm-center nav-link"
            aria-current="page"
          >
            "Friday"
          </button>
          <button
            type="button"
            className="flex-sm-fill text-sm-center nav-link"
            aria-current="page"
          >
            "Friday"
          </button>
          <button
            type="button"
            className="flex-sm-fill text-sm-center nav-link"
            aria-current="page"
          >
            "Friday"
          </button>
        </nav>
      </div>

      <div className="tab-content mt-4">
        <div className="d-flex justify-content-between mt-3 pt-4">
          <h2> Weather Forecast</h2>
          <h2 className="text-capitalize">Ankara</h2>
          <button className="btn btn-favorite mx-4">Add to favorites</button>
        </div>
        <WeatherChart />
        <WeatherDataTable />
      </div>
    </div>
  );
};

export default ForecastDayTabs;
