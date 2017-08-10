export class Driver {
  findElement(by: Function, selector: string) {
    return by.call(selector)
  }
}
