import './image.scss';

import loader from '../../lib/loader';

class Image {
  constructor(state) {
    this.state = state;
    this.render();
  }

  render() {
    // eslint-disable-next-line no-undef
    this.elem = document.createElement('div');
    this.elem.classList.add('image');
    if (!this.state) {
      this.elem.innerHTML = loader();
      return;
    }
    this.bodyRender();
  }

  bodyRender() {
    this.elem.innerHTML = '';
    const { background } = this.state.configuration;
    this.elem.style.background = `center/ cover no-repeat url(${background})`;
  }

  update(newState) {
    this.state = newState;
    this.bodyRender();
  }
}

export default Image;
