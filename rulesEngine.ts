import { IEngine } from "./engine";
import { IMobile } from "./mobile";
import { IUnit } from "./unit";

export class RulesEngine<IN> {
  executeRules(input: IN, aIEngines: IEngine<IN>[]): IN {
    return aIEngines.reduce(
      (inputAccumulator, engine) => engine.execute(inputAccumulator),
      input
    );
  }

  executeMobileRules(input: IN, aIEngines: IMobile<IN>[]): IN {
    return aIEngines.reduce(
      (inputAccumulator, engine) => engine.execute(inputAccumulator),
      input
    );
  }

  executeUnitRules(input: IN, aIEngines: IUnit<IN>[]): IN {
    return aIEngines.reduce(
      (inputAccumulator, engine) => engine.execute(inputAccumulator),
      input
    );
  }
}
