export const fetchToGeolocationApi = async () => {
  const response = await fetch('https://ipinfo.io/json?token=48cff01480590b');
  return response.json();
};

export const fetchToWeatherApi = async (geometry) => {
  const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=9f70dfdbc57b46d3a2c112036203009&q=${geometry}&days=3`);
  const { current, forecast, location } = await response.json();
  const { forecastday } = forecast;
  return {
    current,
    forecastday,
    location,
  };
};

export const fetchToPhotoApi = async () => {
  const response = await fetch('https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=nature&client_id=Sad4yyK9WVmv9rHEtiLlHGys6hTCrz2Q6njvD-_fnDk');
  return response.json();
};

export const fetchToGeocodingApi = async (city) => {
  try {
    const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${city}&key=525a21417ce04e3eacfb3eb434184295`);
    const { results } = await response.json();
    const { formatted, geometry } = results[0];
    const { lat, lng } = geometry;
    return {
      formatted,
      geometry: `${lat},${lng}`,
    };
  } catch (error) {
    console.error(error);
  }
};

export const getLocation = async () => {
  const result = await fetchToGeolocationApi();
  return result;
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
  type: 'CHANGE_LANG',
  payload: language,
});

export const changesBackground = () => async () => ({
  type: 'CHANGE_BACK',
  payload: await fetchToPhotoApi(),
});

export const changeTemperature = (temp) => ({
  type: 'CHANGE_TEMP',
  payload: temp,
});

export const changeLocation = (location) => async () => ({
  type: 'CHANGE_LOCATION',
  payload: {
    geolocation: await fetchToGeocodingApi(location),
    weather: await getWeather(location),
  },
});
