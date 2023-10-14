import { type Print } from './Print'
import { Banner } from './Banner'

export class PrintBanner extends Banner implements Print {
  printWeak (): string {
    const string = this.showWithParen()
    const border = '='.repeat(string.length)
    return `${border}\n${string}\n${border}\n`
  }

  printStrong (): string {
    const string = this.showWithAster()
    const border = '~'.repeat(string.length)
    return `${border}\n${string}\n${border}\n`
  }
}
