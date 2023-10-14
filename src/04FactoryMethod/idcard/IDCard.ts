import { Product } from '../framework/Product'

export class IDCard extends Product {
  private readonly owner: string
  constructor (ownwer: string) {
    super()
    console.log(`${ownwer}のカードを作ります`)
    this.owner = ownwer
  }

  public use (): void {
    console.log(`${this.toString()}を使います`)
  }

  public toString (): string {
    return `[IDCard] ${this.owner}]`
  }

  public getOwner (): string {
    return this.owner
  }
}
