import { Entry } from './Entry'
import { type Visitor } from './Visitor'

export class Directory extends Entry implements Iterable<Entry> {
  name: string
  directory: Entry[]

  constructor (name: string) {
    super()
    this.name = name
    this.directory = []
  }

  [Symbol.iterator] (): Iterator<Entry, any, undefined> {
    let index = 0
    return {
      next: () => {
        return {
          done: index >= this.directory.length,
          value: this.directory[index++]
        }
      }
    }
  }

  public getName (): string {
    return this.name
  }

  public getSize (): number {
    let size = 0
    for (const entry of this.directory) {
      size += entry.getSize()
    }
    return size
  }

  public add (entry: Entry): void {
    this.directory.push(entry)
  }

  public accept (visitor: Visitor): void {
    visitor.visit(this)
  }
}
