import './threeDay.scss';

import { getDay } from '../../lib/translate';

class TreeDay {
  constructor(state) {
    this.state = state;
    this.render();
  }

  render() {
    this.elem = document.createElement('div');
    this.elem.classList.add('threeDay');
    this.elem.innerHTML = 'threeDay';
    if (!this.state) {
      this.elem.innerHTML = 'Загружаю';
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
      <div class="threeDay__block">
        <div class="threeDay__temp">
          <span>${day.avgtemp[configuration.temp]}°${configuration.temp}</span>
        </div>
        <div class="icon threeDay__icon">
          <img src="${day.description.icon}"></img>
        </div>
        <div class="threeday__date">
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

export default TreeDay;
