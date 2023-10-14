import { type Print } from './Print'
import { Banner } from './Banner'

export class PrintBanner implements Print {
  private readonly banner: Banner

  constructor (string: string) {
    this.banner = new Banner(string)
  }

  printWeak (): string {
    const string = this.banner.showWithParen()
    const border = '='.repeat(string.length)
    return `${border}\n${string}\n${border}\n`
  }

  printStrong (): string {
    const string = this.banner.showWithAster()
    const border = '~'.repeat(string.length)
    return `${border}\n${string}\n${border}\n`
  }
}
