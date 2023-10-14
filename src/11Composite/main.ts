import { Directory } from './Directory'
import { File } from './File'

console.log('making root entries')
const rootdir = new Directory('root')
const bindir = new Directory('bin')
const tmpdir = new Directory('tmp')
const usrdir = new Directory('usr')
rootdir.add(bindir)
rootdir.add(tmpdir)
rootdir.add(usrdir)
bindir.add(new File('vi', 10000))
bindir.add(new File('latex', 20000))
rootdir.printList()
console.log('')

console.log('making usr entries')
const yuki = new Directory('yuki')
const hanako = new Directory('hanako')
const tomura = new Directory('tomura')
usrdir.add(yuki)
usrdir.add(hanako)
usrdir.add(tomura)
yuki.add(new File('diary.html', 100))
yuki.add(new File('Composite.java', 200))
hanako.add(new File('memo.txt', 300))
tomura.add(new File('game.doc', 400))
tomura.add(new File('junk.mail', 500))
rootdir.printList()
