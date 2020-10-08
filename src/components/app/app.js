import './app.scss';

import Control from '../control';
import Current from '../current';
import Forecasts from '../forecasts';
import Geolocation from '../geolocation';
import Image from '../image';
import Store from '../../store/store';
import weatherReducer from '../../store/reducer';
import { initialState } from '../../lib/selectors';
import {
  changeAppLanguages,
  changesBackground,
  changeTemperature,
  changeLocation,
} from '../../store/actions';

class App {
  constructor() {
    this.addComponents();
    this.subscribeToStore();
    this.render();
    this.control.elem.addEventListener('click', (event) => this.onClick(event));
  }

  render() {
    // eslint-disable-next-line no-undef
    this.elem = document.createElement('div');
    this.elem.classList.add('weather');
    this.elem.append(this.control.elem);
    this.elem.append(this.current.elem);
    this.elem.append(this.image.elem);
    this.elem.append(this.forecasts.elem);
    this.elem.append(this.geolocation.elem);
  }

  onClick({ target }) {
    if (target.classList.contains('button__background')) {
      this.store.dispatch(changesBackground());
    }
    if (target.name === 'language') {
      this.store.dispatch(changeAppLanguages(target.value));
    }
    if (target.name === 'temperature') {
      this.store.dispatch(changeTemperature(target.value));
    }
    if (target.classList.contains('button__search')) {
      const input = this.elem.querySelector('.input__search');
      this.store.dispatch(changeLocation(input.value));
      input.value = '';
    }
  }

  subscribeToStore() {
    this.store.subscribe(this.current);
    this.store.subscribe(this.forecasts);
    this.store.subscribe(this.geolocation);
    this.store.subscribe(this.image);
    this.store.subscribe(this.control);
  }

  addComponents() {
    this.store = new Store(weatherReducer, initialState());
    this.current = new Current();
    this.control = new Control();
    this.forecasts = new Forecasts();
    this.geolocation = new Geolocation();
    this.image = new Image();
  }
}

export default App;
