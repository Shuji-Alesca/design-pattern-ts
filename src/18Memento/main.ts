import { Gamer } from './Gamer'
import { type Memento } from './Memento'

const gamer: Gamer = new Gamer(100)
let memento: Memento = gamer.createMemento()
for (let i = 0; i < 100; i++) {
  console.log(`==== ${i}`)
  console.log(`現状: ${gamer.toString()}`)

  gamer.bet()

  console.log(`現在の所持金: ${gamer.getMoney()}`)

  if (gamer.getMoney() > memento.getMoney()) {
    console.log('所持金が増えたので保存しておこう')
    memento = gamer.createMemento()
  } else if (gamer.getMoney() < memento.getMoney() / 2) {
    console.log('所持金が減ったので復元しよう')
    gamer.restoreMemento(memento)
  }
}
