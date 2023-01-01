import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import reducer from "../reducer";
import { geoLocationFetch, weatherFetch } from "../utils/customFetch";

const WeatherContext = createContext();

const initialState = {
  loading: false,
  weatherInfo: [],
  geoLocationInfo: [],
  weatherForecastInfo: [],
};
const WeatherProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [searchValue, setSearchValue] = useState("");

  const latValue = state.geoLocationInfo.lat;
  const lonValue = state.geoLocationInfo.lon;
  
  console.log(latValue + "--" + lonValue);
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    getGeoLocationValues(searchValue);
    getWeather(latValue, lonValue);
    getFiveDaysForecast(latValue, lonValue);
   
  };

  const getWeather = async (latValue, lonValue) => {
    const weather_url = `/weather?lat=${latValue}&lon=${lonValue}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
    state.loading = true;
    try {
      const response = await weatherFetch.get(weather_url);
      const data = response.data;
      dispatch({
        type: "GET_CURRENT_WEATHER",
        payload: data,
      });
      state.loading = false;
    } catch (error) {
      console.log(error.msg);
    }
  };

  const getFiveDaysForecast = async (latValue, lonValue) => {
    const forecast_url = `/forecast?lat=${latValue}&lon=${lonValue}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;

    state.loading = true;
    try {
      const response = await weatherFetch.get(forecast_url);
      const data = response.data;
      dispatch({
        type: "GET_FIVE_FORECAST_WEATHER",
        payload: data,
      });
      state.loading = false;
    } catch (error) {
      console.log(error.msg);
    }
  };

  const getGeoLocationValues = async (city) => {
    const geoLoc_url = `/direct?q=${city}&limit=1&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
    state.loading = true;
    try {
      const response = await geoLocationFetch.get(geoLoc_url);
      const data = response.data;
      dispatch({
        type: "GET_GEO_INFORMATIONS",
        payload: data,
      });

      state.loading = false;
    } catch (error) {
      console.log(error.msg);
    }
  };

  useEffect(() => {
  
  }, []);

  return (
    <WeatherContext.Provider
      value={{
        ...state,
        searchValue,
        setSearchValue,
        handleChange,
        handleSearch,
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
