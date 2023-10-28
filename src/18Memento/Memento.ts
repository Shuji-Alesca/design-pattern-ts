export class Memento {
  private readonly money: number
  private readonly fruits: string[]

  public getMoney (): number {
    return this.money
  }

  constructor (money: number) {
    this.money = money
    this.fruits = []
  }

  addFruit (fruit: string): void {
    this.fruits.push(fruit)
  }

  getFruits (): string[] {
    return [...this.fruits]
  }
}
