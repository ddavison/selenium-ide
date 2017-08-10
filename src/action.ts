import { Logger } from "./logger";

export class Action {
  logger: Logger;

  constructor() {
    this.logger = new Logger();
  }

  executeAction(action, args) {
    // log the action
    this.logger.info(action, args);
    // execute the action

  }
}
