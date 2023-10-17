import { Support } from './Support'
import { type Trouble } from './Trouble'

export class SpecialSupport extends Support {
  private readonly number: number
  constructor (name: string, number: number) {
    super(name)
    this.number = number
  }

  protected resolve (trouble: Trouble): boolean {
    if (trouble.getNumber() === this.number) {
      return true
    } else {
      return false
    }
  }
}
