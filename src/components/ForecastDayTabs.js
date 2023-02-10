import React, { useState,useEffect } from "react";
import WeatherChart from "./WeatherChart";
import WeatherDataTable from "./WeatherDataTable";
import { useGlobalContext } from "./../context/weather_context";
import WeatherAreaChart from "./WeatherAreaChart";

const ForecastDayTabs = () => {
  const [displayChart, setDisplayChart] = useState(true);

  const {
    fiveDaysArr,
    tabCount,
    setTabCount,
    cityName,
    currentLocationName,
    days,
  } = useGlobalContext();

  return (
    <div className="weather-tabs mt-4">
      <div className="tabs-header">
        <nav className="nav nav-pills flex-column flex-sm-row">
          {fiveDaysArr.map((day, index) => {
            let dateName = new Date(day[index].dt * 1000);
            // console.log(dateName);
            let dayName = days[dateName.getDay()];
            return (
              <button
                type="button"
                key={index}
                className={`flex-sm-fill text-sm-center nav-link text-capitalize ${
                  index === tabCount ? "active" : null
                }`}
                aria-current="page"
                onClick={() => setTabCount(index)}
              >
                {dayName}
              </button>
            );
          })}
        </nav>
      </div>

      <div className="tab-content mt-4">
        <div className="d-flex justify-content-between mt-3 pt-4">
          <h2> Weather Forecast</h2>
          <h2 className="text-capitalize">
            {cityName ? cityName : currentLocationName}
          </h2>
          <button
            className="btn btn-favorite mx-4"
            onClick={() => setDisplayChart(!displayChart)}
          >{`${displayChart ? "Display Weather with Charts" : "Display Weather Table"}`}</button>
          
        </div>
        <div className="mt-3">
          {displayChart ? <WeatherDataTable /> : <><WeatherChart /> <WeatherAreaChart /></>}
        </div>
        <h2 className="m-4">Table And Line Chart</h2>
        <div className="">
          <WeatherDataTable />
          <WeatherChart />
          <WeatherAreaChart />
        </div>
      </div>
    </div>
  );
};

export default ForecastDayTabs;
