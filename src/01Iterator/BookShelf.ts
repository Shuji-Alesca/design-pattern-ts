import { BookShelfIterator } from './BookShelfIterator'
import { type Iterable } from './Iterable'
import { type Iterator } from './Iterator'
import { type Book } from './Book'

export class BookShelf implements Iterable {
  private books: Book[]
  private last: number = 0

  public constructor (maxsize: number) {
    this.books = new Array(maxsize)
  }

  public getBookAt (index: number): Book {
    return this.books[index]
  }

  public appendBook (book: Book): void {
    this.books[this.last++] = book
  }

  public get length (): number {
    return this.last
  }

  public iterator (): Iterator {
    return new BookShelfIterator(this)
  }
}
