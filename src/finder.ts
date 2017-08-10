export class Finder {

  constructor() {}

  translateSelector(selector): string {
    return "";
  }
  find(selector) {
    return document.querySelector(selector); // only css for now...
  }
}
