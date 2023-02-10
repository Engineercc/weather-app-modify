import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import gif from "../assets/images/loading.gif";
import { useGlobalContext } from "../context/weather_context";
import Loading from "./Loading";
import sunsetIcon from "../assets/images/sunset.svg";
import moment from "moment/moment";
import images from "../assets/images";
const TemperatureContainer = () => {
  const [time, setTime] = useState("");
  const {
    loading,
    temp,
    country,
    cityName,
    currentLocationName,
    feelsLike,
    humidity,
    sunSet,
    sunRise,
    weather,
    weatherStatForBg,
  } = useGlobalContext();
  // const date = new Date();
  // const getCurrentTime = () => {
  //   const hour = date.getHours();
  //   const minute = date.getMinutes();
  //   const second = date.getSeconds();
  //   const time = `${hour}:${minute}:${second}`;
  //   setTime(time);
  // };
 
  const imagesKey = Object.keys(images);
  const setBgImg = imagesKey.find((image) => {
      if(image.includes(weatherStatForBg?.toLowerCase())) {
        return image;
      }
    });
// console.log(images[setBgImg]);
  let clock = moment(new Date()).format("ddd D MMM YYYY hh:mm:ss A");
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(clock);
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  return (
    <>
      <div className="bg-img position-absolute">
        <img
          src={setBgImg ? images[setBgImg] : images.atmosphere}
          alt=""
          className="img-fluid"
        />
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
                  <div>
                    <i className="icon small">
                      <svg
                        height="18"
                        width="18"
                        version="1.1"
                        fill="#fff"
                        id="_x32_"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 512 512"
                        xmlSpace="preserve"
                      >
                        <g>
                          <path
                            className="st0"
                            d="M181.158,225.346l64.826,50.011l0.902,0.517l0.404,0.226c5.606,3.122,13.027,1.467,17.975-3.979l0.432-0.414
		l79.452-94.002c4.524-5.07,4.599-12.369,0.198-16.282c-4.411-3.922-11.644-2.981-16.15,2.088l-74.268,79.339l-57.338-39.928
		c-5.362-3.95-13.403-2.116-17.947,4.082C175.11,213.184,175.777,221.405,181.158,225.346z"
                          />
                          <path
                            className="st0"
                            d="M100.445,255.99c0-3.434,0.075-6.866,0.438-10.234H60.188c-0.249,3.367-0.315,6.8-0.315,10.234
		c0,3.499,0.066,6.876,0.315,10.252h40.695C100.52,262.866,100.445,259.442,100.445,255.99z"
                          />
                          <path
                            className="st0"
                            d="M172.42,124.797c3.847-2.436,7.774-4.731,11.762-6.772l1.552-0.753l-20.28-35.215
		c-5.074,2.558-10.017,5.398-14.814,8.512l20.289,35.234L172.42,124.797z"
                          />
                          <path
                            className="st0"
                            d="M82.071,165.44l35.23,20.279l8.527-14.795l-35.244-20.289C87.47,155.432,84.634,160.361,82.071,165.44z"
                          />
                          <path
                            className="st0"
                            d="M393.985,327.814c-2.116,3.998-4.341,7.91-6.844,11.701l-1.015,1.486l35.24,20.288
		c3.118-4.797,5.958-9.66,8.582-14.73l-35.15-20.355L393.985,327.814z"
                          />
                          <path
                            className="st0"
                            d="M118.044,327.748l-0.814-1.543l-35.159,20.28c2.502,5.07,5.398,10.008,8.512,14.805l35.244-20.288
		l-1.026-1.486C122.371,335.724,120.076,331.812,118.044,327.748z"
                          />
                          <path
                            className="st0"
                            d="M172.42,387.127l-1.491-1.015l-20.289,35.243c4.798,3.114,9.74,6.02,14.814,8.588l20.28-35.234l-1.552-0.752
		C180.193,391.924,176.266,389.629,172.42,387.127z"
                          />
                          <path
                            className="st0"
                            d="M326.214,117.216l14.81,8.588l20.284-35.234c-4.793-3.114-9.674-5.954-14.73-8.512L326.214,117.216z"
                          />
                          <path
                            className="st0"
                            d="M245.771,411.121v40.644c3.377,0.3,6.8,0.366,10.229,0.366c3.442,0,6.871-0.066,10.238-0.366v-40.644v-0.423
		h-20.467V411.121z"
                          />
                          <path
                            className="st0"
                            d="M266.238,100.878V60.235c-3.367-0.302-6.796-0.367-10.238-0.367c-3.429,0-6.852,0.065-10.229,0.367v40.643
		v0.423h20.467V100.878z"
                          />
                          <path
                            className="st0"
                            d="M326.214,394.774l20.364,35.168c5.056-2.643,9.937-5.474,14.73-8.588l-20.284-35.243L326.214,394.774z"
                          />
                          <path
                            className="st0"
                            d="M429.948,165.44c-2.572-5.079-5.465-10.007-8.582-14.805l-35.24,20.289l8.601,14.795L429.948,165.44z"
                          />
                          <path
                            className="st0"
                            d="M451.826,245.757h-40.69h-0.423v20.486h0.423h40.69c0.254-3.376,0.311-6.8,0.311-10.252
		C452.136,252.557,452.08,249.124,451.826,245.757z"
                          />
                          <path
                            className="st0"
                            d="M256,0C114.606,0.009,0.014,114.61,0.005,256C0.014,397.39,114.606,511.99,256,512
		c141.394-0.01,255.986-114.61,255.995-256C511.986,114.61,397.394,0.009,256,0z M256,478.966
		c-61.627-0.01-117.268-24.926-157.661-65.305C57.964,373.254,33.043,317.617,33.038,256c0.005-61.618,24.926-117.263,65.3-157.652
		C138.732,57.958,194.373,33.042,256,33.033c61.618,0.01,117.258,24.926,157.661,65.315c40.375,40.389,65.296,96.024,65.3,157.652
		c-0.005,61.617-24.926,117.254-65.3,157.661C373.258,454.041,317.618,478.957,256,478.966z"
                          />
                        </g>
                      </svg>
                    </i>{" "}
                    {time}
                    <span className="badge bg-light text-dark"></span>
                  </div>
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
                              <img
                                src={`http://openweathermap.org/img/wn/${
                                  weather[0].icon
                                }@2x.png`}
                                alt={weather[0].icon}
                              />
                            }
                          </i>
                        </div>
                        <div>
                          <p className="fs-5 mb-0">Today</p>
                          {/* <p className=" fs-6 m-0 grayed-out">{time}</p> */}
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
                        {cityName ? cityName : currentLocationName}, {country}
                      </p>
                    </div>
                    <div className="d-flex align-items-center gap-5">
                      {weather.map((item) => {
                        const { id, main, icon } = item;
                        return (
                          <div key={id}>
                            <p className="fs-7 m-0 grayed-out">
                              <img
                                src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                                alt=""
                                width={56}
                              />
                              {main}
                            </p>
                          </div>
                        );
                      })}
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
    </>
  );
};

export default TemperatureContainer;
