import { BigChar } from './BigChar'

export class BigCharFactory {
  private readonly pool = new Map<string, BigChar>()
  private static readonly singleton: BigCharFactory = new BigCharFactory()

  private constructor () {}

  public static getInstance (): BigCharFactory {
    return this.singleton
  }

  public getBigChar (charname: string): BigChar {
    let bc = this.pool.get(charname)
    if (bc == null) {
      bc = new BigChar(charname)
      this.pool.set(charname, bc)
    }
    return bc
  }
}
