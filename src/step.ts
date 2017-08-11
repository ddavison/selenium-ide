import { Logger } from "./logger";
import { By } from "./by";

export class Step {
  // logger: Logger;
  action: string;
  by: By;
  selector: string;

  constructor() {
    // this.logger = new Logger();
  }

  executeAction(action, args) {
    // log the action
    Logger.info(action, args);
    // execute the action

  }
}
