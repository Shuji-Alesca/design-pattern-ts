import { type Link } from './Link'
import { type Page } from './Page'
import { type Tray } from './Tray'

export abstract class Factory {
  static factories: Array<Constructable<Factory>> = []

  public static getFactory (className: string): Factory {
    const FactoryInitiator = this.factories.find((factory => factory.name === className))
    if (FactoryInitiator != null) return new FactoryInitiator()
    throw new Error('classが見つかりません')
  }

  public abstract createLink (caption: string, url: string): Link
  public abstract createTray (caption: string): Tray
  public abstract createPage (title: string, author: string): Page
}

// typescriptはclassローダーがないので自前で作る
type Constructable<T> = new (...args: any[]) => T
