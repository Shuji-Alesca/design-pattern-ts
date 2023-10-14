import { type Item } from './Item'
import fs from 'fs'

export abstract class Page {
  protected title: string
  protected author: string
  protected content: Item[] = []

  constructor (title: string, author: string) {
    this.title = title
    this.author = author
  }

  public add (item: Item): void {
    this.content.push(item)
  }

  public output (filename: string): void {
    try {
      fs.writeFile(filename, this.makeHTML(), (err: any) => {
        if (err != null) throw err
        console.log(`${filename} を作成しました。`)
      })
    } catch (e) {
      console.log(e)
    }
  }

  public abstract makeHTML (): string
}
