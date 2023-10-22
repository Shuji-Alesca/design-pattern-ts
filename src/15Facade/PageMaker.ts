import { createWriteStream } from 'fs'
import { Database } from './Database'
import { HtmlWriter } from './HtmlWriter'

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class PageMaker {
  public static makeWelcomePage (mailaddr: string, filename: string): void {
    try {
      const mailProp = Database.GetProperties('maildata')
      const username: string = mailProp[mailaddr]
      const writer: HtmlWriter = new HtmlWriter(createWriteStream(filename))
      writer.title(`${username}'s web page`)
      writer.paragraph(`Welcome to ${username}'s web page!`)
      writer.paragraph('Nice to meet you')
      writer.mailto(mailaddr, username)
      writer.close()
      console.log(`${filename} is created for ${mailaddr}(${username})`)
    } catch (e) {
      console.log(e)
    }
  }
}
