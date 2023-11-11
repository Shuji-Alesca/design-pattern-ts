import * as fs from 'fs'

export class BigChar {
  private readonly charname: string
  private readonly fontdata: string

  constructor (charname: string) {
    this.charname = charname
    try {
      const filename: string = `./src/20FlyWeight/big${charname}.txt`
      this.fontdata = fs.readFileSync(filename, 'utf8')
    } catch {
      this.fontdata = `${charname}?`
    }
  }

  public print (): void {
    console.log(this.fontdata)
  }
}
