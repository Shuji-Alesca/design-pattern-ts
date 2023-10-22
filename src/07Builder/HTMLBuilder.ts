import { type Builder } from './Builder'
import fs from 'fs'

export class HTMLBuilder implements Builder {
  private filename: string = 'untitled.html'
  private sb: string = ''

  makeTitle (title: string): void {
    this.filename = `./src/07Builder/${title}.html`
    this.sb += '<!DOCTYPE html>\n'
    this.sb += '<html>\n'
    this.sb += '<head><title>'
    this.sb += title
    this.sb += '</title></head>\n'
    this.sb += '<body>\n'
    this.sb += '<h1>'
    this.sb += title
    this.sb += '<h1>\n\n'
  }

  makeString (str: string): void {
    this.sb += '<p>'
    this.sb += str
    this.sb += '</p>\n\n'
  }

  makeItems (items: string[]): void {
    this.sb += '<ul>'
    for (const item of items) {
      this.sb += '<li>'
      this.sb += item
      this.sb += '</li>\n'
    }
    this.sb += '</ul>\n\n'
  }

  close (): void {
    this.sb += '</body>'
    this.sb += '</html>\n'
    fs.writeFile(this.filename, this.sb, (err: any) => {
      if (err != null) throw err
      console.log('正常に書き込みが完了しました')
    })
  }

  public getHTMLResult (): string {
    return this.filename
  }
}
