import type fs from 'fs'

export class HtmlWriter {
  private readonly writer: fs.WriteStream
  constructor (writer: fs.WriteStream) {
    this.writer = writer
  }

  public title (title: string): void {
    this.writer.write('<!DOCTYPE html>')
    this.writer.write('<html>')
    this.writer.write('<head>')
    this.writer.write(`<title>${title}</title>`)
    this.writer.write('</head>')
    this.writer.write('<body>\n')
    this.writer.write(`<h1>${title}</h1>\n`)
  }

  public paragraph (msg: string): void {
    this.writer.write(`<p>${msg}</p>\n`)
  }

  public link (href: string, caption: string): void {
    this.paragraph(`<a href="${href}">${caption}</a>\n`)
  }

  public mailto (mailaddr: string, username: string): void {
    this.link(`mailto: ${mailaddr}`, username)
  }

  public close (): void {
    this.writer.write('</body>')
    this.writer.write('</html>\n')
    this.writer.close()
  }
}
