import { Step } from "../step";
import { By } from "../by";
import { VERSION } from "../selenium-ide";
import { ActionHandler } from '../extension/action-handler';
import { MessageHandler } from "../extension/message-handler";

console.log(VERSION);
console.log('Extension Scripts loaded...');
let messageHandler = new MessageHandler();
