// @ts-nocheck
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import reducer from "../reducer";
import { geoLocationFetch, weatherFetch } from "../utils/customFetch";
import moment from "moment/moment";
import images from "./../images";

const WeatherContext = createContext();
const kelvinValue = 273;
const days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];
const initialState = {
  loading: false,
  weatherInfo: [],
  geoLocationInfo: [],
  weatherForecastInfo: [],
  fiveDaysArr: [],
  searchCityValue: "",
};

const WeatherProvider = ({ children }) => {
  const [tabCount, setTabCount] = useState(0);
  const [currentPosition, setCurrentPosition] = useState({});
  const [locationError, setLocationError] = useState(null);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [cityName, setCityName] = useState(state.searchCityValue);
  const temp = Math.round(state.weatherInfo.main?.temp - kelvinValue);
  const country = state.weatherInfo.sys?.country;
  const weatherStatForBg =
    state.weatherInfo.weather && state.weatherInfo?.weather[0].main;
  const feelsLike = Math.round(
    state.weatherInfo.main?.feels_like - kelvinValue
  );
  const humidity = state.weatherInfo.main?.humidity - kelvinValue;
  const weather = state.weatherInfo.weather && state.weatherInfo.weather;
  const timezone = state.weatherInfo?.timezone;

  const calculateSun = (timezone, sunValue) => {
    const value = moment
      .utc(sunValue, "X")
      .add(timezone, "seconds")
      .format("LT");
    return value;
  };
  const sunRise = calculateSun(timezone, state.weatherInfo.sys?.sunrise);
  const sunSet = calculateSun(timezone, state.weatherInfo.sys?.sunset);

  const getDate = () => {
    const date = moment(new Date()).format("MMMM Do YYYY, h:mm:ss");
    return date;
  };

  const handleChange = (e) => {
    dispatch({
      type: "SET_SEARCH_VALUE",
      payload: e.target.value,
    });
  };
  const handleSearch = (e) => {
    e.preventDefault();
    getGeoLocationValues(state.searchCityValue);
    setTabCount(0);
  };

  console.log(state);
  const clearValues = () => {
    dispatch({
      type: "CLEAR_WEATHER_VALUES",
      payload: initialState,
    });
  };

  const FiveDaysForecast = () => {
    dispatch({
      type: "GET_FIVEDAYS_FORECAST_ARR",
      payload: state.weatherForecastInfo,
    });
  };
  const getWeather = async (latValue, lonValue) => {
    dispatch({
      type: "LOADING",
    });
    const weather_url = `/weather?lat=${latValue}&lon=${lonValue}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
    try {
      const response = await weatherFetch.get(weather_url);
      const data = response.data;
      dispatch({
        type: "GET_CURRENT_WEATHER",
        payload: data,
      });
      setCityName(state.searchCityValue);
    } catch (error) {
      console.log(error.msg);
    }
  };

  const getFiveDaysForecast = async (latValue, lonValue) => {
    const forecast_url = `/forecast?lat=${latValue}&lon=${lonValue}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;

    try {
      const response = await weatherFetch.get(forecast_url);
      const data = response.data;
      dispatch({
        type: "GET_FIVE_FORECAST_WEATHER",
        payload: data,
      });
      FiveDaysForecast();
      state.loading = false;
    } catch (error) {
      console.log(error.msg);
    }
  };
  const getGeoLocationValues = async (city) => {
    const geoLoc_url = `/direct?q=${city}&limit=2&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
    try {
      const response = await geoLocationFetch.get(geoLoc_url);
      const data = response.data;
      console.log(data);
      dispatch({
        type: "GET_GEO_INFORMATIONS",
        payload: data,
      });
      const latValue = data[0].lat;
      const lonValue = data[0].lon;
      getWeather(latValue, lonValue);
      getFiveDaysForecast(latValue, lonValue);
      state.loading = false;
    } catch (error) {
      console.log(error.msg);
    }
  };

  const getCurrentLocationUser = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => setCurrentPosition(position.coords),
      (error) => setLocationError(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };
  console.log(currentPosition);
  useEffect(() => {
    getCurrentLocationUser();
  }, []);
  useEffect(() => {
    getWeather(currentPosition?.latitude, currentPosition?.longitude);
    getFiveDaysForecast(currentPosition?.latitude, currentPosition?.longitude);
  }, [currentPosition]);
  useEffect(() => {
    if (!Object.keys(currentPosition).length) return;
    if (weather) {
      const interval = setInterval(() => {
        getGeoLocationValues(state.searchCityValue);
      }, 3600000);
      return () => clearInterval(interval);
    }
  }, [state.searchCityValue, weather]);

  return (
    <WeatherContext.Provider
      value={{
        ...state,
        searchValue: state.searchCityValue,
        currentLocationName: state.weatherInfo.name,
        fiveDaysArr: state.fiveDaysArr,
        weatherStatForBg,
        cityName,
        handleChange,
        handleSearch,
        clearValues,
        temp,
        country,
        getDate,
        feelsLike,
        humidity,
        sunSet,
        sunRise,
        weather,
        tabCount,
        setTabCount,
        days,
        kelvinValue,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(WeatherContext);
};

export { WeatherContext, WeatherProvider };
