import { type Context } from './Context'
import { DayState } from './DayState'
import { type State } from './State'

export class SafeFrame implements Context {
  private readonly textClock: HTMLElement
  private readonly textScreen: HTMLElement
  private readonly buttonUse: HTMLButtonElement
  private readonly buttonAlarm: HTMLButtonElement
  private readonly buttonPhone: HTMLButtonElement
  private readonly buttonExit: HTMLButtonElement

  private state: State = DayState.getInstance()

  constructor (title: string) {
    this.textClock = document.createElement('div')
    this.textClock.setAttribute('cols', '60')
    this.textScreen = document.createElement('textarea')
    this.textScreen.setAttribute('rows', '10')
    this.textScreen.setAttribute('cols', '60')
    this.textScreen.setAttribute('disabled', 'true')

    this.buttonUse = document.createElement('button')
    this.buttonUse.textContent = '金庫使用'
    this.buttonUse.setAttribute('type', 'button')
    this.buttonUse.addEventListener('click', () => { this.state.doUse(this) })

    this.buttonAlarm = document.createElement('button')
    this.buttonAlarm.textContent = '非常ベル'
    this.buttonAlarm.setAttribute('type', 'button')
    this.buttonAlarm.addEventListener('click', () => { this.state.doAlarm(this) })

    this.buttonPhone = document.createElement('button')
    this.buttonPhone.textContent = '通常通話'
    this.buttonPhone.setAttribute('type', 'button')
    this.buttonPhone.addEventListener('click', () => { this.state.doPhone(this) })

    this.buttonExit = document.createElement('button')
    this.buttonExit.textContent = '終了'
    this.buttonExit.setAttribute('type', 'button')
    this.buttonExit.addEventListener('click', () => { window.location.reload() })
    const titleElement = document.getElementById('title')
    if (titleElement != null) titleElement.textContent = title

    const form = document.getElementById('Form')
    if (form != null) {
      form.appendChild(this.textClock)
      form.appendChild(this.textScreen)
      form.appendChild(this.buttonUse)
      form.appendChild(this.buttonAlarm)
      form.appendChild(this.buttonPhone)
      form.appendChild(this.buttonExit)
    }
  }

  setClock (hour: number): void {
    const clockstring: string = `現在時刻は${('00' + hour).slice(-2)}:00`
    console.log(clockstring)
    this.textClock.textContent = clockstring
    this.state.doClock(this, hour)
  }

  changeState (state: State): void {
    console.log(`${this.state.toString()}から${state.toString()}へ状態が変化しました`)
    this.state = state
  }

  callSecurityCenter (msg: string): void {
    const textScreen = this.textScreen
    if (textScreen != null) {
      textScreen.textContent += `call!: ${msg} \n`
    }
  }

  recordLog (msg: string): void {
    const textScreen = this.textScreen
    if (textScreen != null) {
      textScreen.textContent += msg
    }
  }
}
