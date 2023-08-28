export class Errors {
  #origin: string;
  #message: string;

  private constructor(origin: string, message: string) {
    this.#origin = origin;
    this.#message = message;
  }

  static create(origin: string, message: string): Errors {
    return new Errors(origin, message);
  }

  static createSimple(message: string): Errors {
    return new Errors("", message);
  }

  get origin(): string {
    return this.#origin;
  }

  set origin(origin: string) {
    this.#origin = origin;
  }

  get message(): string {
    return this.#message;
  }

  set message(message: string) {
    this.#message = message;
  }

  toString(): string {
    return `Errors(origin=${this.#origin}, message=${this.#message})`;
  }
}
