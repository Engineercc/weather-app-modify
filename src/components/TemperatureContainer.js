import React from "react";
import { Link } from "react-router-dom";
import gif from "../assets/images/loading.gif";
import { useGlobalContext } from "../context/weather_context";
import Loading from "./Loading";
import sunsetIcon from "../assets/images/sunset.svg";
const TemperatureContainer = () => {
  const {
    loading,
    temp,
    country,
    cityName,
    getDate,
    feelsLike,
    humidity,
    sunSet,
    sunRise,
  } = useGlobalContext();

  return (
    <div className="col-5 bg-blue position-relative">
      <div className="bg-img position-absolute">
        <img src={gif} alt="" className="img-fluid" />
        <div className="img-cover"></div>
      </div>

      <div className="details-container">
        <div className="p-0">
          <div className="today-weather bg-black ">
            <div className="d-flex h-100 flex-column aling-items-center justify-content-start">
              <div className="p-3">
                <nav className="navbar navbar-light bg-transparent">
                  <Link to="/favorite-cities" className="btn btn-link">
                    <i className="icon small">
                      <svg
                        width="18"
                        height="18"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12.001 4.529a5.998 5.998 0 0 1 8.242.228 6 6 0 0 1 .236 8.236l-8.48 8.492-8.478-8.492a6 6 0 0 1 8.48-8.464Z"></path>
                      </svg>
                    </i>
                    Favorite Cities{" "}
                    <span className="badge bg-light text-dark">44</span>
                  </Link>
                  <Link to="/" className="btn btn-link">
                    <i className="icon small">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 -0.5 24 24"
                        id="meteor-icon-kit__solid-home"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#ffffff"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                        <g id="SVGRepo_iconCarrier">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.49613 11.9696L11.4961 6.13622C11.8075 5.95459 12.1925 5.95459 12.5039 6.13622L22.5039 11.9696C22.8111 12.1488 23 12.4777 23 12.8333V21.8423C23 22.3946 22.5523 22.8423 22 22.8423H2C1.44772 22.8423 1 22.3946 1 21.8423V12.8333C1 12.4777 1.18891 12.1488 1.49613 11.9696zM0 9.1013V7.41667C0 7.061 0.188911 6.7321 0.496129 6.55289L11.4961 0.13622C11.8075 -0.045407 12.1925 -0.045407 12.5039 0.13622L23.5039 6.55289C23.8111 6.7321 24 7.061 24 7.41667V9.1013C24 9.6535 23.5523 10.1013 23 10.1013C22.8229 10.1013 22.6491 10.0543 22.4961 9.965L12.5039 4.13622C12.1925 3.95459 11.8075 3.95459 11.4961 4.13622L1.50387 9.965C1.02682 10.2433 0.414501 10.0822 0.136221 9.6051C0.0470084 9.4522 0 9.2783 0 9.1013zM6 13.8423C5.44772 13.8423 5 14.29 5 14.8423V17.8423C5 18.3946 5.44772 18.8423 6 18.8423H9C9.55229 18.8423 10 18.3946 10 17.8423V14.8423C10 14.29 9.55229 13.8423 9 13.8423H6zM14 13.8423C13.4477 13.8423 13 14.29 13 14.8423V22.8423H18V14.8423C18 14.29 17.5523 13.8423 17 13.8423H14z"
                            fill="#ffffff"
                          />
                        </g>
                      </svg>
                    </i>{" "}
                    Anasayfa
                    <span className="badge bg-light text-dark"></span>
                  </Link>
                </nav>
              </div>
              {loading && <Loading />}
              {temp ? (
                <div className="flex-grow-1">
                  <div className=" h-100 d-flex align-items-center justify-content-center flex-column">
                    <div>
                      <div className="d-flex align-items-center">
                        <div className="me-4">
                          <i className="icon big white">
                            {
                              <img src="http://openweathermap.org/img/wn/01d@2x.png" />
                            }
                          </i>
                        </div>
                        <div>
                          <p className="fs-5 mb-0">Today</p>
                          <p className=" fs-6 m-0 grayed-out">{getDate()}</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 mb-1">
                      <h1 className="fs-1 m-0 weather-c position-relative">
                        <b>{temp}</b>
                        <i>°C</i>
                      </h1>
                    </div>
                    <div className="mb-4">
                      <p className="fs-5 grayed-out text-capitalize">
                        {cityName}, {country}
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-5">
                      <div>
                        <p className="fs-7 m-0 grayed-out">
                          <i className="icon small">
                            <svg
                              width="24"
                              height="24"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Zm-1-11v6h2v-6h-2Zm0-4v2h2V7h-2Z"></path>
                            </svg>
                          </i>{" "}
                          Feels like {feelsLike} °C
                        </p>
                      </div>                    
                      <div>
                        <p className="fs-7 m-0 grayed-out">
                          <i className="icon small me-2">
                            <svg
                              width="18"
                              height="18"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12ZM11 1h2v3h-2V1Zm0 19h2v3h-2v-3ZM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93v-.001ZM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121Zm2.121-14.85 1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121v-.001ZM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121ZM23 11v2h-3v-2h3ZM4 11v2H1v-2h3Z"></path>
                            </svg>
                          </i>
                          Sunrise {sunRise}
                        </p>
                      </div>
                      <div>
                        <p className="fs-7 m-0 grayed-out">
                          <i className="icon small me-2">
                            <img src={sunsetIcon} alt="" />
                          </i>
                          Sunset {sunSet}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemperatureContainer;
