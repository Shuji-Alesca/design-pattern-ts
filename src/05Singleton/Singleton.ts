// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class Singleton {
  private static singleton: Singleton

  private constructor () {}

  public static getInstance (): Singleton {
    if (Singleton.singleton == null) {
      console.log('インスタンスを作成しました')
      Singleton.singleton = new Singleton()
    }

    return Singleton.singleton
  }
}
