import './current.scss';

import { timer } from '../../lib/time';
import { getDate, t, getSummary } from '../../lib/translate';

class Current {
  constructor(state) {
    this.state = state;
    this.render();
  }

  render() {
    this.elem = document.createElement('div');
    this.elem.classList.add('current');
    if (!this.state) {
      this.elem.innerHTML = 'Загружаю';
      return;
    }
    this.bodyRender();
  }

  bodyRender() {
    const {
      geolocation,
      configuration,
      weather,
      time,
    } = this.state;
    const {
      description,
      feelslike,
      windspeed,
      humidity,
    } = weather.current;
    this.elem.innerHTML = `
    <div class="current__location">
      <h2>${geolocation.formatted}</h2>
    </div>
    <div class="current__weather">
      <div class="icon current__icon">
        <img src="${description.icon}"></img>
      </div>
      <div class="current__description">
        <p>${getSummary(description.text, configuration.lang)}</p>
        <p>${t('Ощущается как', configuration.lang)} ${feelslike[configuration.temp]}°${configuration.temp}</p>
        <p>${t('Ветер', configuration.lang)} ${windspeed} ${t('км/ч', configuration.lang)}</p>
        <p>${t('Влажность', configuration.lang)} ${humidity}%</p>
      </div>
      <div class="current__date">
        <p>${getDate(time.current, configuration.lang)}</p>
      </div>
      <div class="current__time"></div>
    </div>
    `;
    this.renderTime();
  }

  renderTime() {
    const timeContainer = this.elem.querySelector('.current__time');
    setInterval(() => {
      timeContainer.innerHTML = timer();
    }, 1000);
  }

  update(newState) {
    this.state = newState;
    this.bodyRender();
  }
}

export default Current;
