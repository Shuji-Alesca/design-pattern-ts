import { LimitSupport } from './LimitSupport'
import { NoSupport } from './NoSupport'
import { OddSupport } from './OddSupport'
import { SpecialSupport } from './SpecialSupport'
import { Trouble } from './Trouble'

const alice = new NoSupport('Alice')
const bob = new LimitSupport('Bob', 100)
const charlie = new SpecialSupport('Charlie', 429)
const diana = new LimitSupport('Diana', 200)
const elmo = new OddSupport('elmo')
const fred = new LimitSupport('Fled', 300)

alice.setNext(bob).setNext(charlie).setNext(diana).setNext(elmo).setNext(fred)

for (let i = 0; i < 500; i++) {
  alice.support(new Trouble(i))
}
