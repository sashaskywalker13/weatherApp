import './app.scss';
import Response from '../fetch';

class App {
  constructor() {
    this.response = new Response();
    this.render();
    this.getGeocoding().then((res) => console.log(res));
  }

  render() {
    this.elem = document.createElement('div');
    this.elem.classList.add('weather');
    this.elem.insertAdjacentHTML('afterbegin', '<div id="map"></h1>');
    // this.getPhoto().then((res) => {
    //   this.elem.insertAdjacentHTML('afterbegin', `<img src="${res}"></img>`);
    // });
  }

  async getLocation() {
    const result = await this.response.fetchToGeolocationApi();
    return result;
  }

  async getWeather() {
    const location = await this.getLocation();
    const result = await this.response.fetchToWeatherApi(location);
    return result;
  }

  async getPhoto() {
    const result = await this.response.fetchToPhotoApi();
    return result.urls.small;
  }

  async getGeocoding() {
    const result = await this.response.fetchToGeocodingApi('Moscow');
    return result;
  }
}

export default App;
