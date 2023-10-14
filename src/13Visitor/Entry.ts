import { type Visitor } from './Visitor'
import { type Element } from './Element'

export abstract class Entry implements Element {
  abstract accept (visitor: Visitor): void
  abstract getName (): string
  abstract getSize (): number

  public toString (): string {
    return `${this.getName()} (${this.getSize()})`
  }
}
