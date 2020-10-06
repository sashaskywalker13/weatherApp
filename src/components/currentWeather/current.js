import './current.scss';

import { timer } from '../../lib/time';

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
    const { description, feelslike, windspeed } = weather.current;
    this.elem.innerHTML = `
    <div class="location">
      <h2>${geolocation.formatted}</h2>
    </div>
    <div class="date">
      <p>${time.current}</p>
    </div>
    <div class="icon">
      <img src="${description.icon}"></img>
    </div>
    <div class="description">
      <p>${description.text}</p>
      <p>${feelslike[configuration.temp]}</p>
      <p>${windspeed}</p>
    </div>
    <div class="time">
    </div>
    `;
    this.renderTime();
  }

  renderTime() {
    const timeContainer = this.elem.querySelector('.time');
    setInterval(() => {
      timeContainer.innerHTML = timer();
    }, 1000);
  }

  update(newState) {
    this.state = newState;
    this.bodyRender();
    console.log(this.state);
  }
}

export default Current;
