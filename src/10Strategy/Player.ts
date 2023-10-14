import { type Hand } from './Hand'
import { type Strategy } from './Strategy'

export class Player {
  public name: string
  private readonly strategy: Strategy
  private wincount: number = 0
  private losecount: number = 0
  private gamecount: number = 0

  constructor (name: string, strategy: Strategy) {
    this.name = name
    this.strategy = strategy
  }

  public nextHand (): Hand {
    return this.strategy.nextHand()
  }

  public win (): void {
    this.strategy.study(true)
    this.wincount++
    this.gamecount++
  }

  public lose (): void {
    this.strategy.study(false)
    this.losecount++
    this.gamecount++
  }

  public even (): void {
    this.gamecount++
  }

  public toString (): string {
    return `[${this.name}:${this.gamecount}games, ${this.wincount} win, ${this.losecount} lose]`
  }
}
