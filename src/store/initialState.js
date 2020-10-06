import {
  fetchToPhotoApi,
  fetchToWeatherApi,
  fetchToGeolocationApi,
} from './actions';

const init = async () => {
  const { loc, city } = await fetchToGeolocationApi();
  const backgroundInit = await fetchToPhotoApi();
  const weatherInit = await fetchToWeatherApi(loc);
  return {
    type: 'CHANGE_LOCATION',
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

export default init;
