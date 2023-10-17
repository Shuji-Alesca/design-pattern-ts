import { type Trouble } from './Trouble'

export abstract class Support {
  private readonly name: string
  private next: Support | null

  constructor (name: string) {
    this.name = name
    this.next = null
  }

  public setNext (next: Support): Support {
    this.next = next
    return next
  }

  public support (trouble: Trouble): void {
    if (this.resolve(trouble)) {
      this.done(trouble)
    } else if (this.next !== null) {
      this.next.support(trouble)
    } else {
      this.fail(trouble)
    }
  }

  public toString (): string {
    return `[${this.name}]`
  }

  protected abstract resolve (trouble: Trouble): boolean

  protected done (trouble: Trouble): void {
    console.log(`${trouble.toString()} is resolved by ${this.toString()}`)
  }

  protected fail (trouble: Trouble): void {
    console.log(`${trouble.toString()} cannot be resolved`)
  }
}
