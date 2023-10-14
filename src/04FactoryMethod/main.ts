import { type Factory } from './framework/Factory'
import { IDCardFactory } from './idcard/IDCardFactory'

const factory: Factory = new IDCardFactory()
const card1 = factory.create('Tanaka')
const card2 = factory.create('Suzuki')
const card3 = factory.create('Sato')

card1.use()
card2.use()
card3.use()
