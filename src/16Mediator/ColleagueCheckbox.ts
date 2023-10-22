import { type Colleague } from './Colleague'
import { type Mediator } from './Mediator'

export class ColleagueCheckbox implements Colleague {
  private mediator: Mediator | null = null
  private readonly checkbox: HTMLInputElement

  constructor (caption: string, group: string, state: boolean) {
    this.checkbox = document.createElement('input')
    this.checkbox.type = 'checkbox'
    this.checkbox.name = group
    this.checkbox.checked = state
    this.checkbox.id = caption // ラベルと関連付けるためにidを設定
    // ラベル要素を作成
    const label = document.createElement('label')
    label.htmlFor = caption
    label.textContent = caption
    // チェックボックスとラベルをDOMに追加（ここではbodyに追加）
    document.getElementById('loginForm')?.appendChild(this.checkbox)
    document.getElementById('loginForm')?.appendChild(label)

    this.checkbox.addEventListener('change', () => this.mediator?.colleagueChanged())
  }

  setMediator (mediator: Mediator): void {
    this.mediator = mediator
  }

  setColleagueEnabled (enabled: boolean): void {
    this.checkbox.disabled = !enabled
  }
}
