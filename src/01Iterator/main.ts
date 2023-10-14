import { BookShelf } from './BookShelf'
import { type Iterator } from './Iterator'
import { Book } from './Book'

const bookShelf: BookShelf = new BookShelf(4)
bookShelf.appendBook(new Book('こころ'))
bookShelf.appendBook(new Book('人間失格'))
bookShelf.appendBook(new Book('君の名は'))
bookShelf.appendBook(new Book('ぐりとぐら'))

console.log('以下本棚の本')
const it: Iterator = bookShelf.iterator()

while (it.hasNext()) {
  console.log((it.next() as Book))
}
