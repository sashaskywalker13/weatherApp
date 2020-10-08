import './control.scss';

import { translator } from '../../lib/selectors';
import loader from '../../lib/loader';
import {
  RU,
  C,
  EN,
  F,
} from '../../lib/constants';

class Control {
  constructor(state) {
    this.state = state;
    this.render();
  }

  render() {
    // eslint-disable-next-line no-undef
    this.elem = document.createElement('div');
    this.elem.classList.add('control');
    if (!this.state) {
      this.elem.innerHTML = loader();
      return;
    }
    this.renderBody();
  }

  renderBody() {
    const { lang } = this.state.configuration;
    this.body = `
    <div class="control__search">
      <input class="input input__search"></input>
      <button class="button button__search">${translator('Поиск', lang)}</button>
    </div>
    <div class="control__languages">
      <input class="radio" type="radio" id="${RU}" name="language" value="${RU}">
      <label for="${RU}">Русский</label>
      <input class="radio" type="radio" id="${EN}" name="language" value="${EN}">
      <label for="${EN}">English</label>
    </div>
    <div class="control__temperature">
      <input class="radio" type="radio" id="${F}" name="temperature" value="${F}">
      <label for="ru">°F</label>
      <input class="radio" type="radio" id="${C}" name="temperature" value="${C}"
      checked>
      <label for="en">°C</label>
    </div>
      <button class="button button__background">${translator('Смена фона', lang)}</button>
    </div>`;
    this.elem.innerHTML = this.body;
    this.checkedLanguages();
    this.checkedTemperature();
  }

  checkedLanguages() {
    const controlLangRu = this.elem.querySelector('#ru');
    const controlLangEn = this.elem.querySelector('#en');
    if (this.state.configuration.lang === RU) {
      controlLangRu.checked = true;
    } else {
      controlLangEn.checked = true;
    }
  }

  checkedTemperature() {
    const controlTempC = this.elem.querySelector('#C');
    const controlTempF = this.elem.querySelector('#F');
    if (this.state.configuration.temp === C) {
      controlTempC.checked = true;
    } else {
      controlTempF.checked = true;
    }
  }

  update(newState) {
    this.state = newState;
    this.renderBody();
  }
}

export default Control;
