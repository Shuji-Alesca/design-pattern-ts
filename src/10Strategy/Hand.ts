export class Hand {
  public static readonly ROCK = new Hand('グー', 0)
  public static readonly SCISSORS = new Hand('チョキ', 1)
  public static readonly PAPER = new Hand('パー', 2)
  private static readonly hands: Hand[] = [this.ROCK, this.SCISSORS, this.PAPER]

  private readonly name: string
  private readonly handvalue: number

  constructor (name: string, handvalue: number) {
    this.name = name
    this.handvalue = handvalue
  }

  public static getHand (handvalue: number): Hand {
    const hand = this.hands.find(hand => hand.handvalue === handvalue)
    if (hand != null) return hand
    throw new Error('じゃんけんの手が見つかりませんでした。')
  }

  public isStringThan (h: Hand): boolean {
    return this.fight(h) === 1
  }

  public isWeakerThan (h: Hand): boolean {
    return this.fight(h) === -1
  }

  private fight (h: Hand): number {
    if (this === h) {
      return 0
    } else if ((this.handvalue + 1) % 3 === h.handvalue) {
      return 1
    } else {
      return -1
    }
  }

  public toString (): string {
    return this.name
  }
}
