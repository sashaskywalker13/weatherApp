import './app.scss';
import Response from '../fetch';
import Control from '../controlBlock';
import Store from '../../store/store';
import weatherReducer from '../../store/reducer';
import {
  changeAppLanguages,
  changesBackground,
  changeTemperature,
  changeLocation,
} from '../../store/actions';

class App {
  constructor() {
    this.response = new Response();
    this.control = new Control();
    this.store = new Store(weatherReducer);
    this.store.subscribe(this.response);
    this.render();
    this.control.elem.addEventListener('click', (event) => this.onClick(event));
  }

  render() {
    this.elem = document.createElement('div');
    this.elem.classList.add('weather');
    this.elem.append(this.control.elem);
  }

  async getPhoto() {
    const result = await this.response.fetchToPhotoApi();
    return result.urls.small;
  }

  async getGeocoding() {
    const result = await this.response.fetchToGeocodingApi('Moscow');
    return result;
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
}

export default App;
