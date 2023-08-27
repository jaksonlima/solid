import { Context } from "./context";
import { IUnit } from "./unit";

export class Aggregate implements IUnit<Context> {
  execute(aCommand: Context): Context {
    aCommand.name += ",Aggregate";

    return aCommand;
  }
}
