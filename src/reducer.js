import {
  GET_CURRENT_WEATHER,
  GET_FIVE_FORECAST_WEATHER,
  GET_GEO_INFORMATIONS,
  CLEAR_WEATHER_VALUES,
  SET_SEARCH_VALUE,
  LOADING,
  GET_FIVEDAYS_FORECAST_ARR,
} from "./actions";

const reducer = (state, action) => {
  if (action.type === LOADING) {
    return {
      ...state,
      loading: true,
    };
  }
  if (action.type === GET_CURRENT_WEATHER) {
    return {
      ...state,
      loading: false,
      weatherInfo: action.payload,
    };
  }
  if (action.type === GET_GEO_INFORMATIONS) {
    return {
      ...state,
      loading: false,
      geoLocationInfo: action.payload[0],
    };
  }
  if (action.type === GET_FIVE_FORECAST_WEATHER) {
    return {
      ...state,
      loading: false,
      weatherForecastInfo: action.payload,
    };
  }

  if (action.type === CLEAR_WEATHER_VALUES) {
    return {
      ...state,
      loading: false,
      weatherInfo: [],
      geoLocationInfo: [],
      weatherForecastInfo: [],
      fiveDaysArr: [],
      searchCityValue: "",
    };
  }

  if (action.type === SET_SEARCH_VALUE) {
    return {
      ...state,
      searchCityValue: action.payload,
    };
  }

  if (action.type === GET_FIVEDAYS_FORECAST_ARR) {
    let itemsPerTab = 8;
    let listArr = Object.values(state.weatherForecastInfo.list);
    const tab = Math.ceil(listArr.length / itemsPerTab);
    const newForecastDays = Array.from({ length: tab }, (_, index) => {
      const start = index * itemsPerTab;
      return listArr.slice(start, start + itemsPerTab);
    });
    return {
      ...state,
      fiveDaysArr: newForecastDays,
    };
  }
  return state;
};

export default reducer;
