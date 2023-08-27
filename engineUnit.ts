import { IEngineRoot } from "./engineRoot";

export interface IUnit<IN> extends IEngineRoot {
  execute(aCommand: IN): IN;
}
