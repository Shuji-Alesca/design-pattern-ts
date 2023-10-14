export interface Product {
  use: (s: string) => void
  createCopy: () => Product
}
