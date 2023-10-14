import { Hand } from './Hand'
import { type Strategy } from './Strategy'

export class ProbStrategy implements Strategy {
  private prevHandValue = 0
  private currentHandValue = 0
  private readonly history: number[][] = [[1, 1, 1], [1, 1, 1], [1, 1, 1]]

  nextHand (): Hand {
    // 現在の手の勝利数を上限にランダムな数を生成
    const bet = this.randomNumber(this.getSum(this.currentHandValue))
    let handValue = 0
    if (bet < this.history[this.currentHandValue][0]) {
      // betよりも現在の手の1個前の手がグーの時の勝利数が大きい時はグーを出す
      handValue = 0
    } else if (bet < this.history[this.currentHandValue][0] + this.history[this.currentHandValue][1]) {
      // betよりも現在の手の1個前の手がチョキの出した時の勝利数が大きい時はチョキを出す
      handValue = 1
    } else {
      // それ以外の時はパーを出す
      handValue = 2
    }

    this.prevHandValue = this.currentHandValue
    this.currentHandValue = handValue
    return Hand.getHand(handValue)
  }

  study (win: boolean): void {
    // 勝つと現在の手と1個前の手のパターンの勝利数が増えて、nextHandで選ばれやすくなる
    if (win) {
      this.history[this.prevHandValue][this.currentHandValue]++
    } else {
      this.history[this.prevHandValue][(this.currentHandValue + 1) % 3]++
      this.history[this.prevHandValue][(this.currentHandValue + 2) % 3]++
    }
  }

  private randomNumber (maxNum: number): number {
    return Math.floor(Math.random() * (maxNum + 1))
  }

  private getSum (handValue: number): number {
    let sum = 0
    for (let i = 0; i < 3; i++) {
      sum += this.history[handValue][i]
    }
    return sum
  }
}
