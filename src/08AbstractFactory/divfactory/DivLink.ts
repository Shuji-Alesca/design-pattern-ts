import { Link } from '../factory/Link'

export class DivLink extends Link {
  public makeHTML (): string {
    return `<div class="LINK"><a href="${this.url}">${this.caption}</a></div>`
  }
}
