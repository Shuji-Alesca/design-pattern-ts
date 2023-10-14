import { Tray } from '../factory/Tray'

export class DivTray extends Tray {
  public makeHTML (): string {
    let sb: string = ''
    sb += '<p><b>'
    sb += this.caption
    sb += '</p></b>\n'
    sb += '<div class="TRAY">\n'
    for (const item of this.tray) {
      sb += item.makeHTML()
    }
    sb += '</div>\n'
    return sb
  }
}
