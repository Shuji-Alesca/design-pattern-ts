export abstract class Entry {
  public abstract getName (): string
  public abstract getSize (): number
  public printList (): void {
    this.printListChild('')
  }
  public abstract printListChild (prefix: string): void

  public toString (): string {
    return `${this.getName()} ( ${this.getSize()} )`
  }
}
