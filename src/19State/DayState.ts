import { type Context } from './Context'
import { NightState } from './NightState'
import { type State } from './State'

export class DayState implements State {
  private static readonly singleton = new DayState()

  private constructor () {}

  static getInstance (): State {
    return this.singleton
  }

  doClock (context: Context, hour: number): void {
    if (hour < 9 || hour >= 17) {
      context.changeState(NightState.getInstance())
    }
  }

  doUse (context: Context): void {
    context.recordLog('金庫使用(昼間)\n')
  }

  doAlarm (context: Context): void {
    context.callSecurityCenter('非常ベル(昼間)')
  }

  doPhone (context: Context): void {
    context.callSecurityCenter('通常の通話(昼間)')
  }

  toString (): string {
    return '昼間'
  }
}
