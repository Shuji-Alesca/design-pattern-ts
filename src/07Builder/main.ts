import { Director } from './Director'
import { HTMLBuilder } from './HTMLBuilder'
import { TextBuilder } from './TextBuilder'

const textBuilder: TextBuilder = new TextBuilder()
const textDirector: Director = new Director(textBuilder)
textDirector.construct()
const textResult = textBuilder.getTextResult()
console.log(textResult)

const htmlBuilder: HTMLBuilder = new HTMLBuilder()
const htmlDirector: Director = new Director(htmlBuilder)
htmlDirector.construct()
const htmlResult = htmlBuilder.getHTMLResult()
console.log(htmlResult)
