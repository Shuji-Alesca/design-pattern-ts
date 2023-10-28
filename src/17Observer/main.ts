import { DigitObserver } from './DigitObserver'
import { GraphObserver } from './GraphObserver'
import { type NumberGenerator } from './NumberGenerator'
import { RandomNumberGenerator } from './RandomNumberGenerator'

const generator: NumberGenerator = new RandomNumberGenerator()
const obsever1 = new DigitObserver()
const obsever2 = new GraphObserver()
generator.addObserver(obsever1)
generator.addObserver(obsever2)
generator.execute()
