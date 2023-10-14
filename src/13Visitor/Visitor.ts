import { type Directory } from './Directory'
import { type File } from './File'

export interface Visitor {
  visit: (...args: [target: File | Directory]) => void
}
