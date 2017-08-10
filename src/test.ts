import { Driver } from "./driver";
import { Logger } from "./logger";
import { Step } from "./step";

export class Test {
  logger: Logger = new Logger();
  driver: Driver = new Driver();
  name: string;
  steps: Step[];

  run() {
    for (let step of this.steps) {
      let action = step.action;
      let by = step.by;
      let selector = step.selector;

      // new <Action>(args)
    }
  }
}
