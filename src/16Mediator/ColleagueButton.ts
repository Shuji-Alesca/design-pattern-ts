import { type Colleague } from './Colleague'
import { type Mediator } from './Mediator'

export class ColleagueButton implements Colleague {
  private mediator: Mediator | null = null
  private readonly button: HTMLButtonElement

  constructor (caption: string) {
    this.button = document.createElement('button')
    this.button.textContent = caption
    this.button.addEventListener('click', () => { this.mediator?.colleagueChanged() })
    document.getElementById('loginForm')?.appendChild(this.button)
  }

  setMediator (mediator: Mediator): void {
    this.mediator = mediator
  }

  setColleagueEnabled (enabled: boolean): void {
    this.button.disabled = !enabled
  }
}
