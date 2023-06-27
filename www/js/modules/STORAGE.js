const STORAGE = {

  load(key) {
    const jsonData = window.localStorage.getItem(key);
    if (jsonData !== null) {
      return JSON.parse(jsonData);
    }
    return null;
  },

  save(key, data) {
    const jsonData = JSON.stringify(data);
    window.localStorage.setItem(key, jsonData);
  }
};

export default STORAGE;