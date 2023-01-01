import {
  GET_CURRENT_WEATHER,
  GET_FIVE_FORECAST_WEATHER,
  GET_GEO_INFORMATIONS,
} from "./actions";

const reducer = (state, action) => {
  if (action.type === GET_CURRENT_WEATHER) {
    return {
      ...state,
      weatherInfo: action.payload,
    };
  }
  if (action.type === GET_GEO_INFORMATIONS) {
    return {
      ...state,
      geoLocationInfo: action.payload[0],
    };
  }
  if (action.type === GET_FIVE_FORECAST_WEATHER) {
    return {
      ...state,
      weatherForecastInfo: action.payload,
    };
  }
  return state;
};

export default reducer;
