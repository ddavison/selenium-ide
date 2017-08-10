import { Step } from "../step";

export class Click extends Step {
  executeAction(args): any {
    // execute click here

    return super.executeAction("click", args);
  }
}
