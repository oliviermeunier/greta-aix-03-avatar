export default class Memento {
  constructor(state) {
    this.state = state;
  }

  getState() {
    return this.state;
  }
}