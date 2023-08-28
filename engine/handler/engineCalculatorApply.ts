import { IEngineCalculator } from "../engineCalculator";

export class EngineCalculatorApply implements IEngineCalculator {
  #percentage: string;
  #order: Map<string, number>;

  constructor(percentage: string, order: Map<string, number>) {
    this.#percentage = percentage;
    this.#order = order;
  }

  get percentage(): string {
    return this.#percentage;
  }

  get order(): Map<string, number> {
    return this.#order;
  }

  static create(): EngineCalculatorApply {
    return new EngineCalculatorApply("", new Map());
  }

  setPercentage(percentage: number): string {
    if (!percentage || percentage <= 0) return this.#percentage;

    const result = new Intl.NumberFormat("pt-br", {
      style: "percent",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(percentage);

    this.#percentage = result;

    return result;
  }

  setOrder(aName: string): Map<string, number> {
    this.#order.set(aName, this.#order.size + 1);

    return this.#order;
  }

  toString(): string {
    return `percentage=${this.#percentage}, order=${JSON.stringify(
      Object.fromEntries(this.#order)
    )}`;
  }
}
