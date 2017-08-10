import { Action } from "../action";

export class Click extends Action {
  executeAction(args): any {
    // execute click here
    return super.executeAction("click", args);
  }
}
