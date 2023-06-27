class URLBuilder {

  constructor(baseURL) {
    this.url = new URL(baseURL);
  }

  addParam(key, value) {
    this.url.searchParams.append(key, value);
  }

  removeParam(key) {
    this.url.searchParams.delete(key);
  }

  build(path, params = {}) {

    if (path.charAt(0) !== '/') {
      path = '/' + path;
    }

    this.url = new URL(path, this.url);

    if (this.hasProperties(params)) {
      for (const param in params) {
        this.addParam(param, params[param]);
      }
    }

    return this.url.toString();
  }

  hasProperties (obj) {
    return typeof obj === 'object' && obj !== null && Object.keys(obj).length > 0;
  }
}

export { URLBuilder };