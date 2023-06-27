import Memento from './Memento.js';

export default class History {
  
  constructor(onSaveState, onRestoreState, initialStatesData = []) {
    this.states = this.loadStates(initialStatesData);
    this.currentIndex = this.states.length === 0 ? -1 : this.states.length - 1;
    this.onSaveState = onSaveState;
    this.onRestoreState = onRestoreState;
  }

  saveState(state) {
    
    // Delete next states
    this.states.splice(this.currentIndex + 1);

    // Create new Memento and add it into history
    this.states.push(new Memento(state));

    // Set the current index to the new state (last index)
    this.currentIndex = this.states.length - 1;

    // Callback on save
    this.onSaveState(this.states);
  }

  restoreState(index) {

    if (index < 0 || index >= this.states.length) {
      return;
    }

    const memento = this.states[index];
    const state = memento.getState();

    this.currentIndex = index;
    
    // Callback on restore
    this.onRestoreState(state);      
  }

  undo() {
    this.restoreState(this.currentIndex - 1);
  }

  redo() {
    this.restoreState(this.currentIndex + 1);
  }

  loadStates(initialStatesData) {
    return initialStatesData.map(data => new Memento(data.state));
  }
}