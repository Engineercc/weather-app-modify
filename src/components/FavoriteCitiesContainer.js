import React from "react";
import { Link } from "react-router-dom";
import citybg from "../assets/images/city-bg.jpg";
import WeatherChart from "./WeatherChart";
const FavoriteCitiesContainer = ({ display }) => {
  console.log(display);
  return (
    <div className="cities-list pt-3 scrollable">
      <ul className="list-group list-group-horizontal">
        <li className="list-group-item border-0 p-0 bg-transparent me-4">
          <Link to="asdasd">
            {" "}
            <div className="card city-card rounded border-0">
              <div className="card-body position-relative rounded">
                <div className="city-img position-absolute rounded">
                  <img src={citybg} className="img-fluid rounded" alt="keke" />
                  <div className="img-cover rounded"></div>
                </div>

                <div className="city-buttons">
                  <button
                    type="button"
                    className="btn btn-xs btn-danger favorite-added"
                  >
                    <i className="icon small">
                      <svg
                        width="46"
                        height="46"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12.001 4.529a5.998 5.998 0 0 1 8.242.228 6 6 0 0 1 .236 8.236l-8.48 8.492-8.478-8.492a6 6 0 0 1 8.48-8.464Zm6.826 1.641a3.998 3.998 0 0 0-5.49-.153l-1.335 1.198-1.336-1.197a3.999 3.999 0 0 0-5.494.154 4 4 0 0 0-.192 5.451L12 18.654l7.02-7.03a4 4 0 0 0-.193-5.454Z"></path>
                      </svg>
                    </i>
                  </button>
                </div>
                <div className="city-title position-relative d-flex align-items-start flex-column h-100 justify-content-end">
                  <p className="fs-5 mb-1">Ankara</p>
                  <p className="fs-7 m-0">Turkey</p>
                </div>
              </div>
            </div>
          </Link>
        </li>
      
      </ul>
    </div>
  );
};

export default FavoriteCitiesContainer;
