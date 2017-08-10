import { Driver } from "./driver";
import { Logger } from "./logger";

export class Test {
  logger: Logger = new Logger();
  driver: Driver = new Driver();
  name: string;
  steps: string[][];

  run() {
    for (let step of this.steps) {
      let action = step[0];
      let args = step.shift();

      // new <Action>(args)
    }
  }
}
