import { type NumberGenerator } from './NumberGenerator'

export interface Observer {
  update: (generator: NumberGenerator) => void
}
