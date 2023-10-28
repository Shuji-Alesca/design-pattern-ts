import { NumberGenerator } from './NumberGenerator'

export class RandomNumberGenerator extends NumberGenerator {
  private number: number = 0

  public getNumber (): number {
    return this.number
  }

  public execute (): void {
    for (let i = 0; i < 20; i++) {
      this.number = Math.floor(Math.random() * 50)
      this.notifyObserver()
    }
  }
}
