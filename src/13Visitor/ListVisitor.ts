import { Directory } from './Directory'
import { File } from './File'
import { type Visitor } from './Visitor'

export class ListVisitor implements Visitor {
  private currentdir: string = ''

  public visit (target: File | Directory): void {
    if (target instanceof File) {
      const file = target
      console.log(`${this.currentdir}/${file.toString()}`)
    }

    if (target instanceof Directory) {
      const directory = target
      console.log(`${this.currentdir}/${directory.toString()}`)
      const savedir = this.currentdir
      this.currentdir = `${this.currentdir}/${directory.getName()}`
      for (const entry of directory) {
        entry.accept(this)
      }
      this.currentdir = savedir
    }
  }
}
