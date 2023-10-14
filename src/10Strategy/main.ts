import { type Hand } from './Hand'
import { Player } from './Player'
import { ProbStrategy } from './ProbStrategy'
import { WinningStrategy } from './WinningStrategy'

const player1 = new Player('Taro', new WinningStrategy())
const player2 = new Player('Hana', new ProbStrategy())
for (let i = 0; i < 10000; i++) {
  const nextHand1: Hand = player1.nextHand()
  const nextHand2: Hand = player2.nextHand()
  if (nextHand1.isStringThan(nextHand2)) {
    console.log('Winner:', player1.name)
    player1.win()
    player2.lose()
  } else if (nextHand2.isStringThan(nextHand1)) {
    console.log('Winner:', player2.name)
    player2.win()
    player1.lose()
  } else {
    console.log('Even...')
    player1.even()
    player2.even()
  }
}

console.log('Total result:')
console.log(player1)
console.log(player2)
