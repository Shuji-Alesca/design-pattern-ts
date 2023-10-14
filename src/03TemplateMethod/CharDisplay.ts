import { AbstractDisplay } from './AbstractDisplay'

export class CharDisplay extends AbstractDisplay {
  private readonly char: string

  constructor (char: string) {
    super()
    this.char = char.charAt(0)
  }

  public open (): void {
    process.stdout.write('<<')
  }

  public print (): void {
    process.stdout.write(this.char)
  }

  public close (): void {
    process.stdout.write('>>\n')
  }
}
