export class Trouble {
  private readonly number: number
  constructor (number: number) {
    this.number = number
  }

  public getNumber (): number {
    return this.number
  }

  public toString (): string {
    return `[Trouble ${this.number}]`
  }
}
