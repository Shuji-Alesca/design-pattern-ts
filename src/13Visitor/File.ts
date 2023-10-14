import { Entry } from './Entry'
import { type Visitor } from './Visitor'

export class File extends Entry {
  private readonly name: string
  private readonly size: number

  constructor (name: string, size: number) {
    super()
    this.name = name
    this.size = size
  }

  public accept (visitor: Visitor): void {
    visitor.visit(this)
  }

  public getName (): string {
    return this.name
  }

  public getSize (): number {
    return this.size
  }
}
