// import './app.scss';

class App {
  constructor() {
    this.render();
  }
  render() {
    this.elem = document.createElement('div');
    this.elem.classList.add('weather');
    this.elem.innerHTML = `<h1>WeatherApp</h1>`
  }
}

export default App;