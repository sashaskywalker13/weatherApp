// action { type: CHANGE_TEMP, payload: 'C'}
import { fetchToGeocodingApi, fetchToGeolocationApi } from './actions';

const initialState = {
  lang: 'en',
  temp: 'C',
  background: 'str',
  city: 'location',
};

export default function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_TEMP': {
      return {
        ...state,
        temp: action.payload,
      };
    }
    case 'FETCH': {
      return {
        ...state,
        data: action.payload,
      };
    }
    case 'CHANGE_LANG': {
      return {
        ...state,
        lang: action.payload,
      };
    }
    case 'CHANGE_BACK': {
      return {
        ...state,
        background: action.payload.urls.regular,
      };
    }
    case 'CHANGE_LOCATION': {
      return {
        ...state,
        geolocation: action.payload.geolocation,
        weather: action.payload.weather,
        time: action.payload,
      };
    }
    default:
      return state;
  }
}
