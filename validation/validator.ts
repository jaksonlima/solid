import { IValidationHandler } from "./validationHandler";

export abstract class Validator {
  #handler: IValidationHandler;

  protected Validator(handler: IValidationHandler) {
    this.#handler = handler;
  }

  abstract validate();

  validationHandler(): IValidationHandler {
    return this.#handler;
  }
}
