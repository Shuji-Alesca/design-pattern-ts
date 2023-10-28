import { type NumberGenerator } from './NumberGenerator'
import { type Observer } from './Observer'

const sleep = async (ms: number | undefined): Promise<void> => { await new Promise(resolve => setTimeout(resolve, ms)) }

export class GraphObserver implements Observer {
  async update (generator: NumberGenerator): Promise<void> {
    process.stdout.write('GraphObserver:')
    const count = generator.getNumber()
    for (let i = 0; i < count; i++) {
      process.stdout.write('*')
    }
    console.log('')
    try {
      await sleep(100)
    } catch {
      console.log('error')
    }
  }
}
