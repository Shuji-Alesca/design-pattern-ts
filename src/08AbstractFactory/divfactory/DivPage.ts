import { Page } from '../factory/Page'

export class DivPage extends Page {
  public makeHTML (): string {
    let sb = ''
    sb += '<!DOCTYPE html>\n'
    sb += '<html><head><title>\n'
    sb += this.title
    sb += '</title><style>\n'
    sb += 'div.TRAY { padding: 0.5rem; margin-left: 5rem; border: 1px solid black; }\n'
    sb += 'div.LINK { padding: 0.5rem; background-color: lightgray; }\n'
    sb += '</style></head><body>\n'
    sb += '<h1>\n'
    sb += this.title
    sb += '</h1>\n'
    sb += '<ul>\n'
    for (const item of this.content) {
      sb += item.makeHTML()
    }
    sb += '</ul>\n'
    sb += '<hr><address>\n'
    sb += this.author
    sb += '</address>\n'
    sb += '</body></html>\n'
    return sb
  }
}
