import { type Product } from './Product'

export abstract class Factory {
  public create (owner: string): Product {
    const p: Product = this.createProduct(owner)
    this.registorProduct(p)
    return p
  }
  protected abstract createProduct (owner: string): Product
  protected abstract registorProduct (product: Product): void
}
