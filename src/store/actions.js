import {
  fetchToGeolocationApi,
  fetchToWeatherApi,
  fetchToPhotoApi,
  fetchToGeocodingApi,
} from './responses';
import {
  CHANGE_LANG,
  CHANGE_BACK,
  CHANGE_TEMP,
  CHANGE_LOCATION,
} from '../lib/constants';

export const getLocation = async () => {
  const location = await fetchToGeolocationApi();
  return location;
};

export const getWeather = async (city) => {
  const { geometry } = await fetchToGeocodingApi(city);
  const { location, current, forecastday } = await fetchToWeatherApi(geometry);
  return {
    current,
    forecastday,
    location,
  };
};

export const changeAppLanguages = (language) => ({
  type: CHANGE_LANG,
  payload: language,
});

export const changesBackground = () => async () => ({
  type: CHANGE_BACK,
  payload: await fetchToPhotoApi(),
});

export const changeTemperature = (temp) => ({
  type: CHANGE_TEMP,
  payload: temp,
});

export const changeLocation = (location) => async () => ({
  type: CHANGE_LOCATION,
  payload: {
    configuration: {
      background: await fetchToPhotoApi(),
    },
    geolocation: await fetchToGeocodingApi(location),
    weather: await getWeather(location),
  },
});

export const initialization = async () => {
  const { loc, city } = await fetchToGeolocationApi();
  const backgroundInit = await fetchToPhotoApi();
  const weatherInit = await fetchToWeatherApi(loc);
  return {
    type: CHANGE_LOCATION,
    payload: {
      configuration: {
        background: backgroundInit,
      },
      geolocation: {
        formatted: city,
        geometry: loc,
      },
      weather: weatherInit,
    },
  };
};
