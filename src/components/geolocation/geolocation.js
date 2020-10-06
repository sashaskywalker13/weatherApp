import './geolocation.scss';
import createMap from '../mapBlock';

class Geolocation {
  constructor(state) {
    this.state = state;
    this.render();
  }

  render() {
    this.elem = document.createElement('div');
    this.elem.classList.add('geolocation');
    if (!this.state) {
      this.elem.innerHTML = 'Загружаю';
      return;
    }
    this.bodyRender();
  }

  bodyRender() {
    const { geometry } = this.state.geolocation;
    const [lat, lng] = geometry.split(',');
    this.elem.innerHTML = `
    <div id="map"><div>
    `;
    createMap(lng, lat);
  }

  update(newState) {
    this.state = newState;
    this.bodyRender();
  }
}

export default Geolocation;
