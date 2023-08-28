import { Errors } from "./error";

export interface IValidationHandler {
  append(anError: Errors): IValidationHandler;

  validate<T>(aValidation: IValidation<T>): T;

  getErrors(): Array<Errors>;
}

export interface IValidation<T> {
  validate(): T;
}
