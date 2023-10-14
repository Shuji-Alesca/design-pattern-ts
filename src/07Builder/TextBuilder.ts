import { type Builder } from './Builder'

export class TextBuilder implements Builder {
  private sb: string = ''

  makeTitle (title: string): void {
    this.sb += '================\n'
    this.sb += '['
    this.sb += title
    this.sb += ']'
  }

  makeString (str: string): void {
    this.sb += '■'
    this.sb += str
    this.sb += '\n\n'
  }

  makeItems (items: string[]): void {
    for (const item of items) {
      this.sb += '  ・'
      this.sb += item
      this.sb += '\n'
    }
    this.sb += '\n'
  }

  close (): void {
    this.sb += '================\n'
  }

  public getTextResult (): string {
    return this.sb
  }
}
