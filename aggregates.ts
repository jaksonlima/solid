import { Context } from "./context";
import { IUnit } from "./engineUnit";

export class Aggregate implements IUnit<Context> {
  execute(aCommand: Context): Context {
    aCommand.name += ",Aggregate";

    return aCommand;
  }
}
