import { PrintBanner } from './PrintBanner'

const print: PrintBanner = new PrintBanner('Inheritance version')
console.log(print.printWeak())
console.log(print.printStrong())
