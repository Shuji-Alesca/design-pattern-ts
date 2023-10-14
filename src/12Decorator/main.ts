import { type Display } from './Display'
import { FullBorder } from './FullBorder'
import { SideBorder } from './SideBorder'
import { StringDisplay } from './StringDisplay'

const b1: Display = new StringDisplay('Hello World')
const b2: Display = new SideBorder(b1, '#')
const b3: Display = new FullBorder(b2)
b1.show()
b2.show()
b3.show()
const b4 =
new SideBorder(
  new FullBorder(
    new FullBorder(
      new SideBorder(
        new FullBorder(
          new StringDisplay('Hello worls')
        )
        , '*')
    )
  )
  , '/')
b4.show()
