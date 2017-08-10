import { Driver } from "./driver";

export class Test {
  driver: Driver;
  name: string;
  steps: any[];

  run() {
    for (let step in this.steps) {
      // running step
    }
  }
}
