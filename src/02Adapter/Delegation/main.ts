import { type Print } from './Print'
import { PrintBanner } from './PrintBanner'

const print: Print = new PrintBanner('Inheritance version')
console.log(print.printWeak())
console.log(print.printStrong())
