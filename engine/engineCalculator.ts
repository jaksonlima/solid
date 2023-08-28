export interface IEngineCalculator {
  setPercentage(percentage: number): string;
  setOrder(aName: string): Map<string, number>;
}
