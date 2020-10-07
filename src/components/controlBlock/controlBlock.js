import './controlBlock.scss';

import { t } from '../../lib/translate';

class Control {
  constructor(state) {
    this.state = state;
    this.render();
  }

  render() {
    this.elem = document.createElement('div');
    this.elem.classList.add('control');
    if (!this.state) {
      this.elem.innerHTML = 'Загружаю';
      return;
    }
    this.renderBody();
  }

  renderBody() {
    this.body = `
    <div>
      <div class="control__languages">
      <input type="radio" id="ru" name="language" value="ru">
      <label for="ru">Русский</label>
      <input type="radio" id="en" name="language" value="en">
      <label for="en">English</label>
      </div>
      <input class="control__search"></input>
      <button class="button__search">${t('Поиск', this.state.configuration.lang)}</button>
      </div>
      <div class="control__temperature">
      <input type="radio" id="F" name="temperature" value="F">
      <label for="ru">°F</label>
      <input type="radio" id="C" name="temperature" value="C"
      checked>
      <label for="en">°C</label>
      </div>
      <button class="control__background">${t('Смена фона', this.state.configuration.lang)}</button>
    </div>`;
    this.elem.innerHTML = this.body;
    const controlLangRu = this.elem.querySelector('#ru');
    const controlLangEn = this.elem.querySelector('#en');
    if (this.state.configuration.lang === 'ru') {
      controlLangRu.checked = true;
    } else {
      controlLangEn.checked = true;
    }
    const controlTempC = this.elem.querySelector('#C');
    const controlTempF = this.elem.querySelector('#F');
    if (this.state.configuration.temp === 'C') {
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
