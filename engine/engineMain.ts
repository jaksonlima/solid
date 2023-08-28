import { IEngineSkippedFailed } from "./engineSkiped";

export interface IEngineMain<IN> extends IEngineSkippedFailed {
  execute(aCommand: IN): IN;
}
