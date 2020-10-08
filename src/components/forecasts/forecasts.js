import './forecasts.scss';

import { getDay } from '../../lib/selectors';
import loader from '../../lib/loader';

class Forecasts {
  constructor(state) {
    this.state = state;
    this.render();
  }

  render() {
    // eslint-disable-next-line no-undef
    this.elem = document.createElement('div');
    this.elem.classList.add('forecasts');
    if (!this.state) {
      this.elem.innerHTML = loader();
      return;
    }
    this.bodyRender();
  }

  bodyRender() {
    this.elem.innerHTML = '';
    const { weather, configuration } = this.state;
    const forecast = Object.values(weather.forecast);
    forecast.forEach((day) => {
      this.elem.innerHTML += `
      <div class="forecasts__block">
        <div class="forecasts__temp">
          <span>${day.avgtemp[configuration.temp]}°${configuration.temp}</span>
        </div>
        <div class="icon forecasts__icon">
          <img src="${day.description.icon}"></img>
        </div>
        <div class="forecasts__date">
          <p>${getDay(day.date, configuration.lang)}</p>
        </div>
      </div>
      `;
    });
  }

  update(newState) {
    this.state = newState;
    this.bodyRender();
  }
}

export default Forecasts;
