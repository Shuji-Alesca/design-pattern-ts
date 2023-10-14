import { Display } from './Display'

export class StringDisplay extends Display {
  private readonly string: string

  constructor (string: string) {
    super()
    this.string = string
  }

  public getColumns (): number {
    return this.string.length
  }

  public getRows (): number {
    return 1 // 行数は１
  }

  public getRowText (row: number): string {
    if (row !== 0) {
      throw new Error('index is out of bounds')
    }
    return this.string
  }
}
