import { Logger } from "./logger";

export class Action {
  logger: Logger;

  constructor() {
    this.logger = new Logger();
  }

  executeAction(args) {
    this.logger.info(args);
  }
}
