import { InputContext } from "../input/context";
import { IEngineUnit } from "../engine/engineUnit";

export class ExtensionUnit implements IEngineUnit<InputContext> {
  execute(aCommand: InputContext): InputContext {
    throw new Error("Error executing ExtensionUnit");
    aCommand.name += ",ExtensionUnit";

    return aCommand;
  }
}
