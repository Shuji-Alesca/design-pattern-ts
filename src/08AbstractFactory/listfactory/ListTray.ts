import { Tray } from '../factory/Tray'

export class ListTray extends Tray {
  public makeHTML (): string {
    let sb: string = ''
    sb += '<li>\n'
    sb += this.caption
    sb += '\n<ul>\n'
    for (const item of this.tray) {
      sb += item.makeHTML()
    }
    sb += '</ul>\n'
    sb += '</li>\n'
    return sb
  }
}
