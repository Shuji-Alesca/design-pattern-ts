export interface Builder {
  makeTitle: (title: string) => void
  makeString: (str: string) => void
  makeItems: (items: string[]) => void
  close: () => void
}
