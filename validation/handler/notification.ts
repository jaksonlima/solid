import { Errors } from "../error";
import { IValidationHandler, IValidation } from "../validationHandler";

export class Notification implements IValidationHandler {
  #errors: Array<Errors>;

  private constructor(errors: Array<Errors>) {
    this.#errors = errors;
  }

  static create(): Notification {
    return new Notification([]);
  }

  append(anError: Errors): IValidationHandler {
    this.#errors.push(anError);
    return this;
  }

  validate<T>(aValidation: IValidation<T>): T {
    try {
      return aValidation.validate();
    } catch (error) {
      const resultError = error as Error;
      this.#errors.push(Errors.createSimple(resultError.message));
    }
    return null as T;
  }

  getErrors(): Array<Errors> {
    return this.#errors;
  }

  toString(): string {
    return `${this.getErrors()}`;
  }
}
