import { CountDisplay } from './CountDisplay'
import { Display } from './Display'
import { StringDisplayImpl } from './StringDisplayImpl'

const d1: Display = new Display(new StringDisplayImpl('Hello, Japan.'))
const d2: Display = new CountDisplay(new StringDisplayImpl('Hello, World.'))
const d3: CountDisplay = new CountDisplay(new StringDisplayImpl('Hello, Universe.'))
d1.display()
d2.display()
d3.display()
// CountDisplay型を宣言しているのでmultiDisplayを呼び出せる
d3.multiDisplay(5)
