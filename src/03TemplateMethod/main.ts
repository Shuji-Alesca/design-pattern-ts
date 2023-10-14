import { type AbstractDisplay } from './AbstractDisplay'
import { CharDisplay } from './CharDisplay'
import { StringDisplay } from './StringDisplay'

const charDisplay: AbstractDisplay = new CharDisplay('H')
const stringDisplay: AbstractDisplay = new StringDisplay('Hello World')

charDisplay.display()
stringDisplay.display()
