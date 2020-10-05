// action { type: CHANGE_TEMP, payload: 'C'}
import { fetchToGeocodingApi, fetchToGeolocationApi } from './actions';

export const initialState = {
  configuration: {
    lang: 'en',
    temp: 'C',
    city: {},
    background: 'url',
  },
  geolocation: {},
  weather: {},
  time: {},
};

export default function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_TEMP': {
      return {
        ...state,
        configuration: {
          ...state.configuration,
          temp: action.payload,
        },
      };
    }
    case 'CHANGE_LANG': {
      return {
        ...state,
        configuration: {
          ...state.configuration,
          lang: action.payload,
        },
      };
    }
    case 'CHANGE_BACK': {
      return {
        ...state,
        configuration: {
          ...state.configuration,
          background: action.payload.urls.regular,
        },
      };
    }
    case 'CHANGE_LOCATION': {
      return {
        ...state,
        configuration: {
          ...state.configuration,
          city: action.payload.geolocation,
        },
        geolocation: action.payload.geolocation,
        weather: {
          current: {
            description: {
              text: action.payload.weather.current.condition.text,
              icon: action.payload.weather.current.condition.icon,
            },
            feelslike: {
              F: action.payload.weather.current.feelslike_f,
              C: action.payload.weather.current.feelslike_c,
            },
            windspeed: action.payload.weather.current.wind_kph,
            humidity: action.payload.weather.current.humidity,
          },
          forecast: {
            dayone: {
              date: action.payload.weather.forecastday[0].date,
              description: {
                text: action.payload.weather.forecastday[0].day.condition.text,
                icon: action.payload.weather.forecastday[0].day.condition.icon,
              },
              avgtemp: {
                F: action.payload.weather.forecastday[0].day.avgtemp_f,
                C: action.payload.weather.forecastday[0].day.avgtemp_c,
              },
              windspeed: action.payload.weather.forecastday[0].day.maxwind_kph,
              humidity: action.payload.weather.forecastday[0].day.avghumidity,
            },
            daytwo: {
              date: action.payload.weather.forecastday[1].date,
              description: {
                text: action.payload.weather.forecastday[1].day.condition.text,
                icon: action.payload.weather.forecastday[1].day.condition.icon,
              },
              avgtemp: {
                F: action.payload.weather.forecastday[1].day.avgtemp_f,
                C: action.payload.weather.forecastday[1].day.avgtemp_c,
              },
              windspeed: action.payload.weather.forecastday[1].day.maxwind_kph,
              humidity: action.payload.weather.forecastday[1].day.avghumidity,
            },
            daytree: {
              date: action.payload.weather.forecastday[2].date,
              description: {
                text: action.payload.weather.forecastday[2].day.condition.text,
                icon: action.payload.weather.forecastday[2].day.condition.icon,
              },
              avgtemp: {
                F: action.payload.weather.forecastday[2].day.avgtemp_f,
                C: action.payload.weather.forecastday[2].day.avgtemp_c,
              },
              windspeed: action.payload.weather.forecastday[2].day.maxwind_kph,
              humidity: action.payload.weather.forecastday[2].day.avghumidity,
            },
          },
        },
        time: {
          current: action.payload.weather.location.localtime,
          dayOfWeek: action.payload.weather.location.localtime_epoch,
        },
      };
    }
    default:
      return state;
  }
}
