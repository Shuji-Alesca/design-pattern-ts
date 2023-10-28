import { type Observer } from './Observer'

export abstract class NumberGenerator {
  private observers: Observer[] = []
  public addObserver (observer: Observer): void {
    this.observers.push(observer)
  }

  public deleteObserver (observer: Observer): void {
    this.observers = this.observers.filter(o => o !== observer)
  }

  public notifyObserver (): void {
    for (const observer of this.observers) {
      observer.update(this)
    }
  }
  public abstract getNumber (): number
  public abstract execute (): void
}
