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

  debug(message): string {
    return this.log(this.DEBUG, message);
  }

  info(message): string {
    return this.log(this.INFO, message);
  }

  warn(message): string {
    return this.log(this.WARN, message);
  }

  error(message): string {
    return this.log(this.ERROR, message);
  }

  private log(level, message): string {
    let fullMessage = this.LEVELS[level] + ": " + message
    console.log(fullMessage);
    return fullMessage;
  }
}
