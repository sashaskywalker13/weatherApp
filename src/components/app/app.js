import './app.scss';
import Control from '../controlBlock';
import Current from '../currentWeather';
import ThreeDay from '../threeDay';
import Geolocation from '../geolocation';
import ImageBlock from '../imageBlock';
import Store from '../../store/store';
import weatherReducer from '../../store/reducer';
import {
  changeAppLanguages,
  changesBackground,
  changeTemperature,
  changeLocation,
} from '../../store/actions';

const initialState = {
  configuration: {
    lang: 'ru',
    temp: 'C',
  },
};

class App {
  constructor() {
    this.store = new Store(weatherReducer, initialState);
    this.current = new Current();
    this.control = new Control();
    this.threeDay = new ThreeDay();
    this.geolocation = new Geolocation();
    this.imageBlock = new ImageBlock();
    this.subscribeToStore();
    this.render();
    this.control.elem.addEventListener('click', (event) => this.onClick(event));
  }

  render() {
    this.elem = document.createElement('div');
    this.elem.classList.add('weather');
    this.elem.append(this.control.elem);
    this.elem.append(this.current.elem);
    this.elem.append(this.imageBlock.elem);
    this.elem.append(this.threeDay.elem);
    this.elem.append(this.geolocation.elem);
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
    this.store.subscribe(this.threeDay);
    this.store.subscribe(this.geolocation);
    this.store.subscribe(this.imageBlock);
    this.store.subscribe(this.control);
  }
}

export default App;
