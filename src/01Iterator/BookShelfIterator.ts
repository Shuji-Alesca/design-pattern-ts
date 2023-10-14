import { type Iterator } from './Iterator'
import { type BookShelf } from './BookShelf'

export class BookShelfIterator implements Iterator {
  private readonly bookShelf: BookShelf
  private index: number

  constructor (bookShelf: BookShelf) {
    this.bookShelf = bookShelf
    this.index = 0
  }

  public hasNext (): boolean {
    if (this.index < this.bookShelf.length) {
      return true
    } else {
      return false
    }
  }

  public next (): unknown {
    return this.bookShelf.getBookAt(this.index++)
  }
}
