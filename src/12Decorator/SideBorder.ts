import { Border } from './Border'
import { type Display } from './Display'

export class SideBorder extends Border {
  private readonly borderChar: string

  constructor (display: Display, ch: string) {
    super(display)
    this.borderChar = ch
  }

  public getColumns (): number {
    return 1 + this.display.getColumns() + 1 // displayで表示する文字数に、両端のborderを1ずつ足す
  }

  public getRows (): number {
    return this.display.getRows()
  }

  public getRowText (row: number): string {
    return this.borderChar + this.display.getRowText(row) + this.borderChar
  }
}
