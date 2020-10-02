class Store {
  constructor(reducers, initialState = {}) {
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

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }

  notifySubscribers() {
    this.subscribers.forEach((subscriber) => subscriber.update(this.state));
  }

  get value() {
    return this.state;
  }
}

export default Store;
