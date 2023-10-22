import { type Colleague } from './Colleague'
import { type Mediator } from './Mediator'

export class ColleagueTextField implements Colleague {
  private mediator: Mediator | null = null
  private readonly textField: HTMLInputElement

  constructor (text: string, columns: number, type: string) {
    this.textField = document.createElement('input')
    this.textField.type = type === 'password' ? type : 'text'
    this.textField.value = text
    this.textField.size = columns

    this.textField.addEventListener('input', () => { this.mediator?.colleagueChanged() })
    document.getElementById('loginForm')?.appendChild(this.textField)
  }

  setMediator (mediator: Mediator): void {
    this.mediator = mediator
  }

  setColleagueEnabled (enabled: boolean): void {
    this.textField.disabled = !enabled
    // 無効化されたテキストフィールドの背景色を変更
    this.textField.style.backgroundColor = enabled ? 'white' : 'lightgray'
  }

  getText (): string {
    return this.textField.value
  }
}
