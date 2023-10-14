import { Singleton } from './Singleton'

console.log('start')
const obj1: Singleton = Singleton.getInstance()
const obj2: Singleton = Singleton.getInstance()
if (obj1 === obj2) {
  console.log('obj1とobj2は同じインスタンスです')
} else {
  console.log('obj1とobj2は同じインスタンスではありません')
}
console.log('end')
