import { Border } from './Border'

export class FullBorder extends Border {
  public getColumns (): number {
    return 1 + this.display.getColumns() + 1 // displayで表示する文字数に、両端のborderを1ずつ足す
  }

  public getRows (): number {
    return 1 + this.display.getRows() + 1 // 行数は表示する文字列の行数に、上下のborderの行数を1ずつ足す
  }

  public getRowText (row: number): string {
    if (row === 0) {
      // 上側のborder
      return `+${this.makeLine('-', this.display.getColumns())}+`
    } else if (row === this.display.getRows() + 1) {
      // 下側のborder
      return `+${this.makeLine('-', this.display.getColumns())}+`
    } else {
      return `|${this.display.getRowText(row - 1)}|`
    }
  }

  private makeLine (ch: string, count: number): string {
    let line = ''
    for (let i = 0; i < count; i++) {
      line += ch
    }
    return line
  }
}
