import { IEngineRoot } from "./engineRoot";

export interface IMobile<IN> extends IEngineRoot {
  execute(aCommand: IN): IN;
}
