import fs from 'fs'
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class Database {
  public static GetProperties (dbname: string): Record<string, string> {
    const filename: string = `./src/15Facade/${dbname}.txt`
    let prop: Record<string, string> = {}
    const data = fs.readFileSync(filename, 'utf8')
    prop = JSON.parse(data)
    return prop
  }
}
