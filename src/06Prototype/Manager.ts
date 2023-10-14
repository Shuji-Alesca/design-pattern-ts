import { type Product } from './Product'

export class Manager {
  private readonly showcase: Map<string, Product> = new Map<string, Product>()

  public register (name: string, prototype: Product): void {
    this.showcase.set(name, prototype)
  }

  public create (prototypeName: string): Product {
    const p: Product | undefined = this.showcase.get(prototypeName)
    if (p == null) throw new Error('prototype is undefined.')
    return p.createCopy()
  }
}
