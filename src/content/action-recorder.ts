import { Logger } from "../logger";
import { MessageHandler } from "./message-handler";

export class ActionRecorder {
  messageHandler: MessageHandler = new MessageHandler();

  clickHandler() {
    document.addEventListener('click', e => {
      console.log(e);
      let data = {
        type: e.type,
        elementId: e.srcElement.id,
        elementClasses: e.srcElement.classList
      };
      this.messageHandler.sendMessage(data);
    });
  }

  keydownHandler() {
    document.addEventListener('keydown', e => {
      console.log(e);
    });
  }

  constructor() {
    Logger.info((<any>this).constructor.name, 'Action Recorder constructed');
    this.keydownHandler();
    this.clickHandler();
  }
}
