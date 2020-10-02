import './controlBlock.scss';

class Control {
  constructor() {
    this.render();
  }

  render() {
    this.elem = document.createElement('div');
    this.elem.classList.add('control');
    this.body = `
      <div>
        <span>Блок контроля</span>
        <div class="control__languages">
        <input type="radio" id="ru" name="language" value="ru"
        checked>
        <label for="ru">Русский</label>
        <input type="radio" id="en" name="language" value="en">
        <label for="en">English</label>
        </div>
        <input class="control__search"></input>
        <button class="button__search">искать</button>
        </div>
        <div class="control__temperature">
        <input type="radio" id="F" name="temperature" value="F"
        checked>
        <label for="ru">фаренгейт</label>
        <input type="radio" id="C" name="temperature" value="C">
        <label for="en">Цельсий</label>
        </div>
        <button class="control__background">смена фона</button>
      </div>
    `;
    this.elem.innerHTML = this.body;
  }
}

export default Control;
