import { type BigChar } from './BigChar'
import { BigCharFactory } from './BigCharFactory'

export class BigString {
  private readonly bigchars: BigChar[]

  constructor (string: string) {
    const factory: BigCharFactory = BigCharFactory.getInstance()
    this.bigchars = Array.from(string).map(char =>
      factory.getBigChar(char)
    )
  }

  public print (): void {
    this.bigchars.forEach(bigChar => { bigChar.print() })
  }
}
