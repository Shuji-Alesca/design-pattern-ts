import { Display } from './Display'

export class CountDisplay extends Display {
  public multiDisplay (times: number): void {
    this.open()
    for (let i = 0; i < times; i++) {
      this.print()
    }
    this.close()
  }
}
