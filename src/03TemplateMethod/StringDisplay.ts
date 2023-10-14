import { AbstractDisplay } from './AbstractDisplay'

export class StringDisplay extends AbstractDisplay {
  private readonly string: string
  private readonly width: number

  constructor (string: string) {
    super()
    this.string = string
    this.width = string.length
  }

  public open (): void {
    this.printLine()
  }

  public print (): void {
    process.stdout.write(`|${this.string}|\n`)
  }

  public close (): void {
    this.printLine()
  }

  private printLine (): void {
    process.stdout.write('+')
    for (let i = 0; i < this.width; i++) {
      process.stdout.write('-')
    }
    process.stdout.write('+\n')
  }
}
