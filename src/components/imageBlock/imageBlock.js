import './imageBlock.scss';

class ImageBlock {
  constructor(state) {
    this.state = state;
    this.render();
  }

  render() {
    this.elem = document.createElement('div');
    this.elem.classList.add('image');
    if (!this.state) {
      this.elem.innerHTML = 'Загружаю';
      return;
    }
    this.bodyRender();
  }

  bodyRender() {
    this.elem.innerHTML = '';
    const { configuration } = this.state;
    this.elem.style.background = `center/ cover no-repeat url(${configuration.background})`;
  }

  update(newState) {
    this.state = newState;
    this.bodyRender();
  }
}

export default ImageBlock;
