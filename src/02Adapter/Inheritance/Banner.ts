export class Banner {
  private readonly string: string

  constructor (string: string) {
    this.string = string
  }

  public showWithParen (): string {
    return `( ${this.string} )`
  }

  public showWithAster (): string {
    return `* ${this.string} *`
  }
}
