export class Logger {
  DEBUG = 0;
  INFO  = 1;
  WARN  = 2;
  ERROR = 3;

  LEVELS = {
    0: "[DEBUG]",
    1: "[INFO] ",
    2: "[WARN] ",
    3: "[ERROR]"
  };

  level: number;

  constructor(level = 0) {
    this.level = level;
  }

  debug(action: string, message): string {
    return this.log(this.DEBUG, action, message);
  }

  info(action: string, message): string {
    return this.log(this.INFO, action, message);
  }

  warn(action: string, message): string {
    return this.log(this.WARN, action, message);
  }

  error(action: string, message): string {
    return this.log(this.ERROR, action, message);
  }

  private log(level: number, action: string, message): string {
    let fullMessage = this.LEVELS[level] + ": [" + action + "] " + message;
    console.log(fullMessage);
    return fullMessage;
  }
}
