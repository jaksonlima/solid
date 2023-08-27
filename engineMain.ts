import { IEngineRoot } from "./engineRoot";

export interface IEngine<IN> extends IEngineRoot {
  execute(aCommand: IN): IN;
}
