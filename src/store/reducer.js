// action { type: CHANGE_TEMP, payload: 'C'}
import {
  CHANGE_LANG,
  CHANGE_BACK,
  CHANGE_TEMP,
  CHANGE_LOCATION,
} from '../lib/constants';

export default function weatherReducer(state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_TEMP: {
      return {
        ...state,
        configuration: {
          ...state.configuration,
          temp: payload,
        },
      };
    }
    case CHANGE_LANG: {
      return {
        ...state,
        configuration: {
          ...state.configuration,
          lang: payload,
        },
      };
    }
    case CHANGE_BACK: {
      return {
        ...state,
        configuration: {
          ...state.configuration,
          background: payload.urls.regular,
        },
      };
    }
    case CHANGE_LOCATION: {
      const { configuration, weather, geolocation } = payload;
      return {
        ...state,
        configuration: {
          ...state.configuration,
          background: configuration.background.urls.regular,
        },
        geolocation,
        weather: {
          current: {
            description: {
              text: weather.current.condition.text,
              icon: weather.current.condition.icon,
            },
            feelslike: {
              F: weather.current.feelslike_f,
              C: weather.current.feelslike_c,
            },
            windspeed: weather.current.wind_kph,
            humidity: weather.current.humidity,
          },
          forecast: {
            dayone: {
              date: weather.forecastday[0].date,
              description: {
                text: weather.forecastday[0].day.condition.text,
                icon: weather.forecastday[0].day.condition.icon,
              },
              avgtemp: {
                F: weather.forecastday[0].day.avgtemp_f,
                C: weather.forecastday[0].day.avgtemp_c,
              },
              windspeed: weather.forecastday[0].day.maxwind_kph,
              humidity: weather.forecastday[0].day.avghumidity,
            },
            daytwo: {
              date: weather.forecastday[1].date,
              description: {
                text: weather.forecastday[1].day.condition.text,
                icon: weather.forecastday[1].day.condition.icon,
              },
              avgtemp: {
                F: weather.forecastday[1].day.avgtemp_f,
                C: weather.forecastday[1].day.avgtemp_c,
              },
              windspeed: weather.forecastday[1].day.maxwind_kph,
              humidity: weather.forecastday[1].day.avghumidity,
            },
            daytree: {
              date: weather.forecastday[2].date,
              description: {
                text: weather.forecastday[2].day.condition.text,
                icon: weather.forecastday[2].day.condition.icon,
              },
              avgtemp: {
                F: weather.forecastday[2].day.avgtemp_f,
                C: weather.forecastday[2].day.avgtemp_c,
              },
              windspeed: weather.forecastday[2].day.maxwind_kph,
              humidity: weather.forecastday[2].day.avghumidity,
            },
          },
        },
        time: {
          current: weather.location.localtime,
          dayOfWeek: weather.location.localtime_epoch,
        },
      };
    }
    default:
      return state;
  }
}
