import { HTTPClient } from "./HttpClient.js";
import { URLBuilder } from "./URLBuilder.js";
import STORAGE from './STORAGE.js';
import History from './History.js';

const STORAGE_KEY= 'avatar-history';
const BASE_URL = 'http://localhost'; 
const AJAX_PATH = 'avatar/www/ajax.php';

export default class App {

  constructor() {
    this.generateAvatarForm = document.getElementById('generate-avatar-form');
    this.onSubmitGenerate = this.onSubmitGenerate.bind(this);
    this.onSubmitSave = this.onSubmitSave.bind(this);
    this.undo = this.undo.bind(this);
    this.redo = this.redo.bind(this);
    this.refreshAvatar = this.refreshAvatar.bind(this);
    this.urlBuilder = new URLBuilder(BASE_URL);

    const initialStates = this.loadInitialStates();
    this.history = new History(this.onGeneratorAvatar, this.refreshAvatar, initialStates);
    
    this.init();
  }

  async init() {
    this.generateAvatarForm.addEventListener('submit', this.onSubmitGenerate);
    document.getElementById('save-avatar-form').addEventListener('submit', this.onSubmitSave);
    document.getElementById('previous-avatar').addEventListener('click', this.undo);
    document.getElementById('next-avatar').addEventListener('click', this.redo);
    
    const avatarSvg = await this.generateAvatar();
    
    this.refreshAvatar(avatarSvg);
  }

  /**
   * Load array of objects from local storage
   * @returns Object[]
   */
  loadInitialStates() {
    return STORAGE.load(STORAGE_KEY) ?? [];
  }

  /**
   * Manage Previous button action
   */
  undo() {
    this.history.undo();
  }

  /**
   * Manage Next button action
   */
  redo() {
    this.history.redo();
  }

  /**
   * 
   * @param {Memento[]} states 
   */
  onSaveAvatar(states) {
    STORAGE.save(STORAGE_KEY, states);
  }

  /**
   * Display an avatar from its source code
   * @param {string} avatarSrc 
   */
  refreshAvatar(avatarSrc) {
      document.querySelector('.svg-container').innerHTML = avatarSrc;
  }

  /**
   * Ask the server for an avatar
   */
  async generateAvatar() {

      // Get form data
      const size = this.generateAvatarForm.elements.size.value;
      const numberOfColors = this.generateAvatarForm.elements['number-of-colors'].value;

      // Build new Avatar URL
      const url = this.urlBuilder.build(AJAX_PATH, {size, numberOfColors});

      // Gte new Avatar SVG source from the server
      const avatarSvg = await HTTPClient.get(url);

      // Save new Avatar into history
      this.history.saveState(avatarSvg);

      return avatarSvg;
  } 

  /**
   * Manage Avatar Generation
   * @param {SubmitEvent} event 
   */
  async onSubmitGenerate(event) {
      
    event.preventDefault();

    const avatarSvg = await this.generateAvatar();

    this.refreshAvatar(avatarSvg);
  }

  /**
   * Manage Avatar Save 
   * @param {SubmitEvent} event 
   */
  onSubmitSave(event) {

      // Block form submission
      event.preventDefault();

      // Get form data
      const formData = new FormData(event.currentTarget);

      // Build save Avatar URL
      const url = this.urlBuilder.build(AJAX_PATH);

      // Send POST request
      const data = HTTPClient.post(url, formData);
  }
}