import { type NumberGenerator } from './NumberGenerator'
import { type Observer } from './Observer'

const sleep = async (ms: number | undefined): Promise<void> => { await new Promise(resolve => setTimeout(resolve, ms)) }

export class DigitObserver implements Observer {
  async update (generator: NumberGenerator): Promise<void> {
    console.log(`DigitObserver:${generator.getNumber()}`)
    try {
      await sleep(100)
    } catch {
      console.log('error')
    }
  }
}
