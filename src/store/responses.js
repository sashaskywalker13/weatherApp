import {
  KEY_FOR_IP_INFO,
  KEY_FOR_WEATHER_API,
  KEY_FOR_PHOTO_API,
  KEY_FOR_GEO_API,
} from './keys';

export const fetchToGeolocationApi = async () => {
  // eslint-disable-next-line no-undef
  const response = await fetch(`https://ipinfo.io/json?token=${KEY_FOR_IP_INFO}`);
  return response.json();
};

export const fetchToWeatherApi = async (geometry) => {
  const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${KEY_FOR_WEATHER_API}&q=${geometry}&days=3`);
  const { current, forecast, location } = await response.json();
  const { forecastday } = forecast;
  return {
    current,
    forecastday,
    location,
  };
};

export const fetchToPhotoApi = async () => {
  const response = await fetch(`https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=nature&client_id=${KEY_FOR_PHOTO_API}`);
  return response.json();
};

// eslint-disable-next-line consistent-return
export const fetchToGeocodingApi = async (city) => {
  try {
    // eslint-disable-next-line no-undef
    const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${KEY_FOR_GEO_API}`);
    const { results } = await response.json();
    const { formatted, geometry } = results[0];
    const { lat, lng } = geometry;
    return {
      formatted,
      geometry: `${lat},${lng}`,
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};
