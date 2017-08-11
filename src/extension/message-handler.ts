export class MessageHandler {
  browser: any;
  runtime: any;

  constructor() {
    console.log('Extension MessageHandler loaded');
    if (chrome) {
      this.browser = chrome;
    }

    this.runtime = this.browser.runtime;
    // debugger;
    // chrome.runtime.onMessage.addListener(
    //   function (request, sender, sendResponse) {
    //     console.log(sender.tab ?
    //       "from a content script:" + sender.tab.url :
    //       "from the extension");
    //     if (request.greeting == "hello")
    //       sendResponse({ farewell: "goodbye" });
    //   });
    this.runtime.onMessage.addListener((request, sender, sendResponse) => {
      // let data = JSON.parse(request);
      // debugger;
      console.log(request);
    });
  }
}
