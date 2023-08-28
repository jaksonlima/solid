import { Errors } from "../error";
import { IValidation, IValidationHandler } from "../validationHandler";

export class Throws implements IValidationHandler {
  static create(): Throws {
    return new Throws();
  }

  append(anError: Errors): IValidationHandler {
    throw new Error(anError.message);
  }

  validate<T>(aValidation: IValidation<T>): T {
    try {
      return aValidation.validate();
    } catch (error) {
      const resultError = error as Error;
      throw new Error(resultError.message);
    }
  }

  getErrors(): Errors[] {
    return [];
  }
}
