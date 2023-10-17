import { Support } from './Support'
import { type Trouble } from './Trouble'

export class OddSupport extends Support {
  protected resolve (trouble: Trouble): boolean {
    if (trouble.getNumber() % 2 === 1) {
      return true
    } else {
      return false
    }
  }
}
