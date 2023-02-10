import React from 'react'
import { useGlobalContext } from './../context/weather_context';

const WeatherDataTable = () => {
  const {fiveDaysArr,tabCount,kelvinValue} = useGlobalContext();
  return (
    <table className="table table-hover table-borderless table-striped">
      <tbody>
        {fiveDaysArr.map((day, index) => {
          const temp = Math.round(day[tabCount].main.temp - kelvinValue);
          const feelsLike = Math.round(
            day[tabCount].main.feels_like - kelvinValue
          );
          const tempMin = Math.round(day[tabCount].main.temp_min - kelvinValue);
          const tempMax = Math.round(day[tabCount].main.temp_max - kelvinValue);
          let time = day[index].dt_txt.slice(11, 16);
          return (
            <tr>
              <td>{time}</td>
              <td>{temp}°C</td>
              <td>
                <i className="icon small humidity me-2">
                  <svg
                    width="12"
                    height="12"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5.636 6.637 12 .273l6.364 6.364a9 9 0 1 1-12.728 0Z"></path>
                  </svg>
                </i>
                {day[tabCount].main.humidity}%
              </td>
              <td>
                <img
                  src={`http://openweathermap.org/img/wn/${day[tabCount].weather[0].icon}@2x.png`}
                  alt=""
                />
              </td>
              <td className="min-max">
                Feels Like <b>{feelsLike} °C</b>
              </td>
              <td className="min-max">
                Min. <b>{tempMin} °C</b>
              </td>
              <td className="min-max">
                Max. <b>{tempMax} °C</b>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default WeatherDataTable