import React from 'react'

const WeatherDataTable = () => {
  return (
    <table className="table table-hover table-borderless table-striped">
      <tbody>
        <tr>
          <td>09:03</td>
          <td>10°C</td>
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
            88%
          </td>
          <td>
            <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" />
          </td>
          <td className="min-max">
            Feels Like <b>4°C</b>
          </td>
          <td className="min-max">
            Min. <b>2°C</b>
          </td>
          <td className="min-max">
            Max. <b>12 °C</b>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default WeatherDataTable