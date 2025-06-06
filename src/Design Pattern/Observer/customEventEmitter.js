class CustomEventEmitter {
  constructor() {
    if (CustomEventEmitter.instance instanceof CustomEventEmitter) {
      return CustomEventEmitter.instance;
    }
    this.events = {};
    CustomEventEmitter.instance = this;
  }

  on(eventName, listernerFn) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    let isExistingListerner = this.events[eventName].findIndex(
      (item) => item == listernerFn
    );
    if (isExistingListerner == -1) {
      this.events[eventName].push(listernerFn);
    }
    return this;
  }

  emit(eventName, ...args) {
    if (!this.events[eventName]) {
      return "event Not found";
    }

    this.events[eventName].forEach((listernerFn) => listernerFn(...args));
  }

  off(eventName, listernerFn) {
    if (!this.events[eventName]) {
      return "event Not found";
    }
    this.events[eventName] = this.events[eventName].filter(
      (listener) => listener != listernerFn
    );
  }
}

const eventEmitter = new CustomEventEmitter();
export default eventEmitter;
