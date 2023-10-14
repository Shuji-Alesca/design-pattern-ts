import clone from 'clone' // npm i clone && npm i --save-dev @types/cloneでpackageをインストール
import { type Product } from './Product'

export class MessageBox implements Product {
  private readonly decochar: string
  constructor (decochar: string) {
    this.decochar = decochar
  }

  use (s: string): void {
    const decolen = 1 + s.length + 1
    for (let i = 0; i < decolen; i++) {
      process.stdout.write(this.decochar)
    }
    console.log()
    console.log(`${this.decochar}${s}${this.decochar}`)
    for (let i = 0; i < decolen; i++) {
      process.stdout.write(this.decochar)
    }
    console.log()
  }

  createCopy (): Product {
    const p: Product = clone(this)
    return p
  }
}
