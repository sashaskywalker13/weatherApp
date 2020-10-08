import './geolocation.scss';
import createMap from '../../lib/map';
import loader from '../../lib/loader';

class Geolocation {
  constructor(state) {
    this.state = state;
    this.render();
  }

  render() {
    // eslint-disable-next-line no-undef
    this.elem = document.createElement('div');
    this.elem.classList.add('geolocation');
    if (!this.state) {
      this.elem.innerHTML = loader();
      return;
    }
    this.bodyRender();
  }

  bodyRender() {
    const { geometry } = this.state.geolocation;
    const [lat, lng] = geometry.split(',');
    this.elem.innerHTML = '<div id="map"><div>';
    createMap(lng, lat);
  }

  update(newState) {
    this.state = newState;
    this.bodyRender();
  }
}

export default Geolocation;
