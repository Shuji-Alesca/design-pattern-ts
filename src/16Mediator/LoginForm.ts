import { ColleagueButton } from './ColleagueButton'
import { ColleagueCheckbox } from './ColleagueCheckbox'
import { ColleagueTextField } from './ColleagueTextField'
import { type Mediator } from './Mediator'

export class LoginForm implements Mediator {
  private readonly checkGuest: ColleagueCheckbox
  private readonly checkLogin: ColleagueCheckbox
  private readonly textUser: ColleagueTextField
  private readonly textPass: ColleagueTextField
  private readonly buttonOK: ColleagueButton
  private readonly buttonCancel: ColleagueButton
  constructor () {
    this.textUser = new ColleagueTextField('', 10, '')
    this.textPass = new ColleagueTextField('', 10, 'password')
    this.checkGuest = new ColleagueCheckbox('Guest', 'g', true)
    this.checkLogin = new ColleagueCheckbox('Login', 'g', false)
    this.buttonOK = new ColleagueButton('OK')
    this.buttonCancel = new ColleagueButton('Cancel')
    this.checkGuest.setMediator(this)
    this.checkLogin.setMediator(this)
    this.textUser.setMediator(this)
    this.textPass.setMediator(this)
    this.buttonOK.setMediator(this)
    this.buttonCancel.setMediator(this)
    this.colleagueChanged()
  }

  colleagueChanged (): void {
    if (this.checkGuest.getState()) {
      // フォームの有効/無効を切り替えるロジックをここに書く
      this.textUser.setColleagueEnabled(false)
      this.textPass.setColleagueEnabled(false)
      this.buttonOK.setColleagueEnabled(true)
    } else {
      this.textUser.setColleagueEnabled(true)
      this.userpassChanged()
    }
  }

  userpassChanged (): void {
    if (this.textUser.getText().length > 0) {
      this.textPass.setColleagueEnabled(true)
      if (this.textPass.getText().length > 0) {
        this.buttonOK.setColleagueEnabled(true)
      } else {
        this.buttonOK.setColleagueEnabled(false)
      }
    } else {
      this.textPass.setColleagueEnabled(false)
      this.buttonOK.setColleagueEnabled(false)
    }
  }
}
