class State {
  constructor() {
    this.subscribers = [];
    this.mainState = {
      lang: 'en',
      temp: 'c',
      background: true,
      city: 'location',
    };
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }

  notifySubscribers() {
    this.subscribers.forEach((subscriber) => subscriber.update(this.mainState));
  }

  changeLang() {
    const newState = {
      ...this.mainState,
      lang: 'ru',
    };
    this.mainState = newState;
    this.notifySubscribers();
  }
}

export default State;
