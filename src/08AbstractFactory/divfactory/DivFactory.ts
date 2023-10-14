import { Factory } from '../factory/Factory'
import { type Link } from '../factory/Link'
import { DivLink } from './DivLink'
import { DivPage } from './DivPage'
import { DivTray } from './DivTray'
import { type Page } from '../factory/Page'
import { type Tray } from '../factory/Tray'

export class DivFactory extends Factory {
  public createLink (caption: string, url: string): Link {
    return new DivLink(caption, url)
  }

  public createTray (caption: string): Tray {
    return new DivTray(caption)
  }

  public createPage (title: string, author: string): Page {
    return new DivPage(title, author)
  }
}
