import { Entry } from './Entry'

export class File extends Entry {
  private readonly name: string
  private readonly size: number

  constructor (name: string, size: number) {
    super()
    this.name = name
    this.size = size
  }

  public getName (): string {
    return this.name
  }

  public getSize (): number {
    return this.size
  }

  public printListChild (prefix: string): void {
    console.log(`${prefix}/${this.toString()}`)
  }
}
