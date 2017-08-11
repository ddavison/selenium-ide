export class MessageHandler {
  browser: any;
  runtime: any;

  constructor() {
    if (chrome) {
      this.browser = chrome;
    }

    this.runtime = this.browser.runtime;
  }

  sendMessage(message: any) {
    // let request = JSON.stringify(message);
    // debugger;
    this.runtime.sendMessage(message, response => {
      //console.log(response);
    });
    console.log('Message sent');
  }
}
