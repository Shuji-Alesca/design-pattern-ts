import { type Builder } from './Builder'

export class Director {
  private readonly builder: Builder

  constructor (builder: Builder) {
    this.builder = builder
  }

  public construct (): void {
    this.builder.makeTitle('Greeting')
    this.builder.makeString('一般的な挨拶')
    this.builder.makeItems(['How are you?', 'Hello.', 'Hi.'])
    this.builder.makeString('時間帯に応じた挨拶')
    this.builder.makeItems(['Good morning.', 'Good afternoon.', 'Good evening.'])
    this.builder.close()
  }
}
