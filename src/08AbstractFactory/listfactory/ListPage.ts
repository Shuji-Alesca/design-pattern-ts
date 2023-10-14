import { Page } from '../factory/Page'

export class ListPage extends Page {
  public makeHTML (): string {
    let sb = ''
    sb += '<!DOCTYPE html>\n'
    sb += '<html><head><title>\n'
    sb += this.title
    sb += '</title></head>\n'
    sb += '<body>\n'
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
