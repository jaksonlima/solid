import { InputContext } from "../input/context";
import { IEngineMobile } from "../engine/engineMobile";

export class ExtensionMobile implements IEngineMobile<InputContext> {
  execute(aCommand: InputContext): InputContext {
    // throw new Error("Error executing ExtensionMobile");
    aCommand.name += ",ExtensionMobile";

    return aCommand;
  }
}
