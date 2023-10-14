import clone from 'clone' // npm i clone && npm i --save-dev @types/cloneでpackageをインストール
import { type Product } from './Product'

export class UnderlinePen implements Product {
  private readonly ulchar: string
  constructor (ulchar: string) {
    this.ulchar = ulchar
  }

  use (s: string): void {
    const ulen = s.length
    console.log(s)
    for (let i = 0; i < ulen; i++) {
      process.stdout.write(this.ulchar)
    }
    console.log()
  }

  createCopy (): Product {
    const p: Product = clone(this)
    return p
  }
}
