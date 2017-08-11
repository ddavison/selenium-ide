export class Logger {
  static DEBUG = 0;
  static INFO  = 1;
  static WARN  = 2;
  static ERROR = 3;

  static LEVELS = {
    0: "[DEBUG]",
    1: "[INFO] ",
    2: "[WARN] ",
    3: "[ERROR]"
  };

  level: number;

  constructor(level = 0) {
    this.level = level;
  }

  static debug(action: string, message): string {
    return this.log(this.DEBUG, action, message);
  }

  static info(action: string, message): string {
    return this.log(this.INFO, action, message);
  }

  static warn(action: string, message): string {
    return this.log(this.WARN, action, message);
  }

  static error(action: string, message): string {
    return this.log(this.ERROR, action, message);
  }

  private static log(level: number, action: string, message): string {
    let fullMessage = this.LEVELS[level] + ": [" + action + "] " + message;
    console.log(fullMessage);
    return fullMessage;
  }
}
