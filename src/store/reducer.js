// action { type: CHANGE_TEMP, payload: 'C'}
export default function weatherReducer(state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case 'CHANGE_TEMP': {
      return {
        ...state,
        configuration: {
          ...state.configuration,
          temp: payload,
        },
      };
    }
    case 'CHANGE_LANG': {
      return {
        ...state,
        configuration: {
          ...state.configuration,
          lang: payload,
        },
      };
    }
    case 'CHANGE_BACK': {
      return {
        ...state,
        configuration: {
          ...state.configuration,
          background: payload.urls.small,
        },
      };
    }
    case 'CHANGE_LOCATION': {
      return {
        ...state,
        configuration: {
          ...state.configuration,
          background: payload.configuration.background.urls.regular,
        },
        geolocation: payload.geolocation,
        weather: {
          current: {
            description: {
              text: payload.weather.current.condition.text,
              icon: payload.weather.current.condition.icon,
            },
            feelslike: {
              F: payload.weather.current.feelslike_f,
              C: payload.weather.current.feelslike_c,
            },
            windspeed: payload.weather.current.wind_kph,
            humidity: payload.weather.current.humidity,
          },
          forecast: {
            dayone: {
              date: payload.weather.forecastday[0].date,
              description: {
                text: payload.weather.forecastday[0].day.condition.text,
                icon: payload.weather.forecastday[0].day.condition.icon,
              },
              avgtemp: {
                F: payload.weather.forecastday[0].day.avgtemp_f,
                C: payload.weather.forecastday[0].day.avgtemp_c,
              },
              windspeed: payload.weather.forecastday[0].day.maxwind_kph,
              humidity: payload.weather.forecastday[0].day.avghumidity,
            },
            daytwo: {
              date: payload.weather.forecastday[1].date,
              description: {
                text: payload.weather.forecastday[1].day.condition.text,
                icon: payload.weather.forecastday[1].day.condition.icon,
              },
              avgtemp: {
                F: payload.weather.forecastday[1].day.avgtemp_f,
                C: payload.weather.forecastday[1].day.avgtemp_c,
              },
              windspeed: payload.weather.forecastday[1].day.maxwind_kph,
              humidity: payload.weather.forecastday[1].day.avghumidity,
            },
            daytree: {
              date: payload.weather.forecastday[2].date,
              description: {
                text: payload.weather.forecastday[2].day.condition.text,
                icon: payload.weather.forecastday[2].day.condition.icon,
              },
              avgtemp: {
                F: payload.weather.forecastday[2].day.avgtemp_f,
                C: payload.weather.forecastday[2].day.avgtemp_c,
              },
              windspeed: payload.weather.forecastday[2].day.maxwind_kph,
              humidity: payload.weather.forecastday[2].day.avghumidity,
            },
          },
        },
        time: {
          current: payload.weather.location.localtime,
          dayOfWeek: payload.weather.location.localtime_epoch,
        },
      };
    }
    default:
      return state;
  }
}
