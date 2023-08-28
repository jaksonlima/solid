import { EngineApply } from "./engine/handler/engineApply";
import { EngineCalculatorApply } from "./engine/handler/engineCalculatorApply";
import { InputContext } from "./input/context";
import { ExtensionMobile } from "./rules/extensionMobile";
import { ExtensionUnit } from "./rules/extensionUnit";
import { Extension } from "./rules/extenstion";
import { Notification } from "./validation/handler/notification";
import { Throws } from "./validation/handler/throws";

const extensionMobile = new ExtensionMobile();
const extensionUnit = new ExtensionUnit();
const extension = new Extension();

const inputContext = new InputContext("CONTEXT INICIADO=");

const notification = Notification.create();
// const throws = Throws.create();

const engineCalculatorApply = EngineCalculatorApply.create();

const engineApply = new EngineApply(
  [extensionMobile, extensionUnit, extension],
  notification,
  engineCalculatorApply
);

const result = engineApply.executeRules(inputContext);

console.log("\n");
console.log(result.toString());
console.log(engineCalculatorApply.toString());
console.log(notification.toString());
console.log("\n");
