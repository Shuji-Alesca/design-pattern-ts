import { DisplayImpl } from './DisplayImpl'

export class StringDisplayImpl extends DisplayImpl {
  private readonly string: string
  private readonly width: number

  constructor (string: string) {
    super()
    this.string = string
    this.width = string.length
  }

  public rawOpen (): void {
    this.printLine()
  }

  public rawPrint (): void {
    console.log(`|${this.string}|`)
  }

  public rawClose (): void {
    this.printLine()
  }

  private printLine (): void {
    process.stdout.write('+')
    for (let i = 0; i < this.width; i++) {
      process.stdout.write('-')
    }
    console.log('+')
  }
}
