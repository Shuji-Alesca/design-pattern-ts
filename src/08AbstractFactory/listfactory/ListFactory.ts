import { Factory } from '../factory/Factory'
import { type Link } from '../factory/Link'
import { ListLink } from './ListLink'
import { ListPage } from './ListPage'
import { ListTray } from './ListTray'
import { type Page } from '../factory/Page'
import { type Tray } from '../factory/Tray'

export class ListFactory extends Factory {
  public createLink (caption: string, url: string): Link {
    return new ListLink(caption, url)
  }

  public createTray (caption: string): Tray {
    return new ListTray(caption)
  }

  public createPage (title: string, author: string): Page {
    return new ListPage(title, author)
  }
}
