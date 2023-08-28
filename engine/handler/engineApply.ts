import { Errors } from "../../validation/error";
import { IValidationHandler } from "../../validation/validationHandler";
import { IEngineCalculator } from "../engineCalculator";
import { IEngineMain } from "../engineMain";
import { IEngineMobile } from "../engineMobile";
import { IEngineUnit } from "../engineUnit";

export class EngineApply<IN> {
  #rules: Array<IEngineMain<IN>>;
  #validationHandler: IValidationHandler;
  #engineCalculator: IEngineCalculator;

  constructor(
    rules: Array<IEngineMain<IN>>,
    validationHandler: IValidationHandler,
    engineCalculator: IEngineCalculator
  ) {
    this.#rules = rules;
    this.#validationHandler = validationHandler;
    this.#engineCalculator = engineCalculator;
  }

  private execute(input: IN, rules: Array<IEngineMain<IN>>): IN {
    let totalRulesExecuted = 0;
    const totalRules = rules.length;

    const result = rules.reduce((inputAccumulator, engine, _, arr) => {
      try {
        const result = engine.execute(inputAccumulator);

        totalRulesExecuted++;

        return result;
      } catch (error) {
        const resultError = error as Error;

        this.#validationHandler.append(
          Errors.create(engine.constructor.name, resultError.message)
        );

        if (!engine.skipFailure) {
          arr.splice(1);
        } else if (!engine.skipFailure()) {
          arr.splice(1);
        }

        return inputAccumulator;
      } finally {
        this.#engineCalculator.setOrder(engine.constructor.name);
      }
    }, input);

    this.#engineCalculator.setPercentage(
      (totalRules / totalRulesExecuted) * 100
    );

    return result;
  }

  executeRules(input: IN): IN {
    return this.execute(input, this.#rules);
  }
}
