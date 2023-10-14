import { Link } from '../factory/Link'

export class ListLink extends Link {
  public makeHTML (): string {
    return `<li><a href="${this.url}">${this.caption}</a></li>`
  }
}
