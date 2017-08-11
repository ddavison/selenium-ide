import { Step } from "./src/step";
import { By } from "./src/by";
import { VERSION } from "./src/selenium-ide";
import { ActionHandler } from './src/extension/action-handler';
import { MessageHandler } from "./src/extension/message-handler";

console.log(VERSION);
console.log('Extension Scripts loaded...');
let messageHandler = new MessageHandler();
