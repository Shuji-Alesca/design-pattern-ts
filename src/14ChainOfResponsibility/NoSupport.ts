import { Support } from './Support'
import { type Trouble } from './Trouble'

export class NoSupport extends Support {
  protected resolve (trouble: Trouble): boolean {
    return false
  }
}
