export class Singleton {
  private static readonly singleton: Singleton = new Singleton()
  private constructor () {
    console.log('インスタンスを生成しました')
  }

  public static getInstance (): Singleton {
    return Singleton.singleton
  }
}
