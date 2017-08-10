import { Logger } from "./logger";
import { Finder } from "./finder";

export class Action {
  finder: Finder;
  logger: Logger;

  constructor() {
    this.logger = new Logger();
  }

  executeAction(action, args) {
    this.logger.info(action, args);

  }
}
