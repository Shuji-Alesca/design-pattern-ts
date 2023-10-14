import { type Directory } from './Directory'
import { type File } from './File'

export abstract class Visitor {
  public abstract visit (target: File | Directory): void
  public abstract visit (file: File): void
  public abstract visit (directory: Directory): void
}
