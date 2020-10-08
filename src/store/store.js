import { initialization } from './actions';

class Store {
  constructor(reducers, initialState = {}) {
    this.initial();
    this.reducers = reducers;
    this.subscribers = [];
    this.state = this.reducers(initialState, {});
  }

  async dispatch(action) {
    if (typeof action === 'function') {
      const data = await action();
      this.state = this.reducers(this.state, data);
      this.notifySubscribers();
      return;
    }

    this.state = this.reducers(this.state, action);
    this.notifySubscribers();
  }

  async initial() {
    try {
      const data = await initialization();
      this.state = this.reducers(this.state, data);
      this.notifySubscribers();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }

  notifySubscribers() {
    this.subscribers.forEach((subscriber) => subscriber.update(this.state));
    this.saveConftoLocalStorage();
  }

  saveConftoLocalStorage() {
    // eslint-disable-next-line no-undef
    localStorage.setItem('weather', JSON.stringify(this.value.configuration));
  }

  get value() {
    return this.state;
  }
}

export default Store;
