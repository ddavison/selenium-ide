import { Step } from "./src/step";
import { By } from "./src/by";
import { VERSION } from "./src/selenium-ide";
import { ActionHandler } from './src/extension/ActionHandler';
import { MessageHandler } from "./src/extension/MessageHandler";

console.log(VERSION);
console.log('Extension Scripts loaded...');
let messageHandler = new MessageHandler();
