import './current.scss';

class Current {
  constructor(state) {
    this.state = state;
    this.render();
  }

  render() {
    this.elem = document.createElement('div');
    this.elem.classList.add('current');
    this.bodyRender();
  }

  bodyRender() {
    const {
      geolocation,
      configuration,
      weather,
      time
    } = this.state;
    console.log();
    this.elem.innerHTML = `
    <div class="location">
      <span>${geolocation.formatted}<span>
    </div>
    <div class="date">
      <p>${time.current}</p>
    </div>
    <div class="icon"></div>
    <div class="description"></div>
    <div class="time"></div>
    `;
  }

  update(newState) {
    this.state = newState;
    this.bodyRender();
  }
}

export default Current;
