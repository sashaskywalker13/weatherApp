import './app.scss';
import Control from '../controlBlock';
import Current from '../currentWeather';
import Store from '../../store/store';
import weatherReducer from '../../store/reducer';
import {
  changeAppLanguages,
  changesBackground,
  changeTemperature,
  changeLocation,
} from '../../store/actions';

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

class App {
  constructor() {
    this.store = new Store(weatherReducer, initialState);
    this.current = new Current(this.store.value);
    this.control = new Control();
    this.subscribeToStore();
    this.render();
    this.control.elem.addEventListener('click', (event) => this.onClick(event));
  }

  render() {
    this.elem = document.createElement('div');
    this.elem.classList.add('weather');
    this.elem.append(this.control.elem);
    this.elem.append(this.current.elem);
  }

  onClick(event) {
    if (event.target.classList.contains('control__background')) {
      this.store.dispatch(changesBackground());
    }
    if (event.target.name === 'language') {
      this.store.dispatch(changeAppLanguages(event.target.value));
    }
    if (event.target.name === 'temperature') {
      this.store.dispatch(changeTemperature(event.target.value));
    }
    if (event.target.classList.contains('button__search')) {
      const input = this.elem.querySelector('.control__search');
      this.store.dispatch(changeLocation(input.value));
      input.value = '';
    }
  }

  subscribeToStore() {
    this.store.subscribe(this.current);
  }
}

export default App;
