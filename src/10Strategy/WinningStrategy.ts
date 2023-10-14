import { Hand } from './Hand'
import { type Strategy } from './Strategy'

export class WinningStrategy implements Strategy {
  private readonly randomNumLimit: number = 2
  private won: boolean = false
  private prevHand: Hand = new Hand('グー', 0)

  study (win: boolean): void {
    this.won = win
  }

  public nextHand (): Hand {
    if (!this.won) {
      this.prevHand = Hand.getHand(this.randomNumber())
    }
    return this.prevHand
  }

  private randomNumber (): number {
    return Math.floor(Math.random() * (this.randomNumLimit + 1))
  }
}
