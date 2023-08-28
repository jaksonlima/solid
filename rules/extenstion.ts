import { InputContext } from "../input/context";
import { IEngineMain } from "../engine/engineMain";

export class Extension implements IEngineMain<InputContext> {
  execute(aCommand: InputContext): InputContext {
    // throw new Error("Error executing Extension");
    aCommand.name += ",Extension";

    return aCommand;
  }
}
