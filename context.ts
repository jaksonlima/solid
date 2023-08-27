export class Context {
  #name: string;

  constructor(name: string) {
    this.#name = name;
  }

  public get name(): string {
    return this.#name;
  }

  public set name(name: string) {
    this.#name = name;
  }

  toString(): string {
    return this.#name;
  }
}
