import { Entry } from './Entry'

export class Directory extends Entry {
  private readonly name: string
  private readonly directory: Entry[] = []

  constructor (name: string) {
    super()
    this.name = name
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

  public printListChild (prefix: string): void {
    console.log(`${prefix}/${this.toString()}`)
    for (const entry of this.directory) {
      entry.printListChild(`${prefix}/${this.name}`)
    }
  }

  public add (entry: Entry): Entry {
    this.directory.push(entry)
    return this
  }
}
