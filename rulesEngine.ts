import { IEngine } from "./engineMain";
import { IMobile } from "./engineMobile";
import { IUnit } from "./engineUnit";

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
