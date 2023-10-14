import { type Iterator } from './Iterator'

export interface Iterable {
  iterator: () => Iterator
}
