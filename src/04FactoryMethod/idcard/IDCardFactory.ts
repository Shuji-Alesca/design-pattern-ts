import { Factory } from '../framework/Factory'
import { type Product } from '../framework/Product'
import { IDCard } from './IDCard'

export class IDCardFactory extends Factory {
  protected createProduct (owner: string): Product {
    return new IDCard(owner)
  }

  protected registorProduct (product: Product): void {
    console.log(`${product.toString()}を登録しました`)
  }
}
