import './current.scss';

import loader from '../../lib/loader';
import {
  timer,
  getDate,
  translator,
  getSummary,
} from '../../lib/selectors';

class Current {
  constructor(state) {
    this.state = state;
    this.render();
  }

  render() {
    // eslint-disable-next-line no-undef
    this.elem = document.createElement('div');
    this.elem.classList.add('current');
    if (!this.state) {
      this.elem.innerHTML = loader();
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
    const { lang, temp } = configuration;
    this.elem.innerHTML = `
    <div class="current__location">
      <h2>${geolocation.formatted}</h2>
    </div>
    <div class="current__weather">
      <div class="icon current__icon">
        <img src="${description.icon}"></img>
      </div>
      <div class="current__description">
        <p>${getSummary(description.text, lang)}</p>
        <p>${translator('Ощущается как', lang)} ${feelslike[temp]}°${temp}</p>
        <p>${translator('Ветер', lang)} ${windspeed} ${translator('км/ч', lang)}</p>
        <p>${translator('Влажность', lang)} ${humidity}%</p>
      </div>
      <div class="current__date">
        <p>${getDate(time.dayOfWeek, lang)}</p>
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
