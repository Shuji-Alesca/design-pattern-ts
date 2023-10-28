import { type Context } from './Context'
import { DayState } from './DayState'
import { type State } from './State'

export class NightState implements State {
  private static readonly singleton = new NightState()

  private constructor () {}

  static getInstance (): State {
    return this.singleton
  }

  doClock (context: Context, hour: number): void {
    if (hour >= 9 && hour < 17) {
      context.changeState(DayState.getInstance())
    }
  }

  doUse (context: Context): void {
    context.recordLog('非常:夜間の金庫使用!\n')
  }

  doAlarm (context: Context): void {
    context.callSecurityCenter('非常ベル(夜間)')
  }

  doPhone (context: Context): void {
    context.callSecurityCenter('夜間の通話録音')
  }

  toString (): string {
    return '夜間'
  }
}
