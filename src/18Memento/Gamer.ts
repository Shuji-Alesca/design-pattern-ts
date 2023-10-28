import { Memento } from './Memento'

export class Gamer {
  private money: number
  private fruits: string[] = []

  private readonly fruitsName: string[] = ['リンゴ', 'ぶどう', 'バナナ', 'みかん']

  constructor (money: number) {
    this.money = money
  }

  public getMoney (): number {
    return this.money
  }

  public bet (): void {
    const dice: number = Math.floor(Math.random() * 6) + 1
    if (dice === 1) {
      this.money += 100
      console.log('所持金が増えました')
    } else if (dice === 2) {
      this.money /= 2
      console.log('所持金が半分になりました')
    } else if (dice === 6) {
      const f: string = this.getFruit()
      console.log(`フルーツ(${f})をもらいました`)
      this.fruits.push(f)
    } else {
      console.log('何も起こりませんでした')
    }
  }

  public createMemento (): Memento {
    const m: Memento = new Memento(this.money)
    for (const f of this.fruits) {
      if (f.startsWith('おいしい')) {
        m.addFruit(f)
      }
    }
    return m
  }

  public restoreMemento (memento: Memento): void {
    this.money = memento.getMoney()
    this.fruits = memento.getFruits()
  }

  public toString (): string {
    return `[money = ${this.money}, fruits = ${this.fruits.toString()}]`
  }

  private getFruit (): string {
    const f: string = this.fruitsName[Math.floor(Math.random() * this.fruitsName.length)]
    if (Math.random() < 0.5) {
      return 'おいしい' + f
    } else {
      return f
    }
  }
}
