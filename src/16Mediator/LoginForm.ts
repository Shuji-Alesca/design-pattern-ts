import { ColleagueButton } from './ColleagueButton'
import { ColleagueCheckbox } from './ColleagueCheckbox'
import { ColleagueTextField } from './ColleagueTextField'
import { type Mediator } from './Mediator'

export class LoginForm implements Mediator {
  constructor () {
    // this.usernameInput = document.getElementById('username') as HTMLInputElement
    // this.passwordInput = document.getElementById('password') as HTMLInputElement

    this.createColleagues()
  }

  createColleagues (): void {
    const buttonOK = new ColleagueButton('OK')
    const textUser = new ColleagueTextField('', 10)
    const textPass = new ColleagueTextField('', 10)
    const checkGuest = new ColleagueCheckbox('Guest', 'g', true)
    const checkLogin = new ColleagueCheckbox('Login', 'g', false)
    buttonOK.setMediator(this)
    textUser.setMediator(this)
    textPass.setMediator(this)
    checkGuest.setMediator(this)
    checkLogin.setMediator(this)
  }

  colleagueChanged (): void {
    // フォームの有効/無効を切り替えるロジックをここに書く
    console.log('colleague changed')
  }
}
