class Finder {

  constructor() {}

  find(selector) {
    return document.querySelector(selector); // only css for now...
  }
}

export { Finder };
