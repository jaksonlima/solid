import { Context } from "./context";
import { IMobile } from "./engineMobile";

export class Extension implements IMobile<Context> {
  execute(aCommand: Context): Context {
    aCommand.name += ",Extension";

    return aCommand;
  }
}
