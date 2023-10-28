import { SafeFrame } from './SafeFrame'

window.onload = async () => {
  // eslint-disable-next-line no-new
  const frame = new SafeFrame('State Pattern')
  const sleep = async (ms: number | undefined): Promise<void> => { await new Promise(resolve => setTimeout(resolve, ms)) }
  while (true) {
    for (let hour = 0; hour < 24; hour++) {
      frame.setClock(hour)
      await sleep(1000)
    }
  }
}
