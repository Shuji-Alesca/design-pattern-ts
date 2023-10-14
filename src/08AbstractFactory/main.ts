import { Factory } from './factory/Factory'
import { type Tray } from './factory/Tray'
import { type Link } from './factory/Link'
import { type Page } from './factory/Page'
import { ListFactory } from './listfactory/ListFactory'
import { DivFactory } from './divfactory/DivFactory'

// Factoryを継承しているクラスをロード
Factory.factories.push(ListFactory, DivFactory)

const filename = 'DesignPatternSample.html'
const classname = 'DivFactory' // ListFactoryを入力するとlist形式のhtmlが出力される

const factory: Factory = Factory.getFactory(classname)

// Blog
const blog1: Link = factory.createLink('Blog 1', 'https://example.com/blog1')
const blog2: Link = factory.createLink('Blog 2', 'https://example.com/blog2')
const blog3: Link = factory.createLink('Blog 3', 'https://example.com/blog3')

const blogTray: Tray = factory.createTray('Blog Site')
blogTray.add(blog1)
blogTray.add(blog2)
blogTray.add(blog3)

// News
const news1: Link = factory.createLink('News 1', 'https://example.com/news1')
const news2: Link = factory.createLink('News 2', 'https://example.com/news2')
const news3: Tray = factory.createTray('News 3')
news3.add(factory.createLink('News 3(US)', 'https://example.com/news3us'))
news3.add(factory.createLink('News 3(JP)', 'https://example.com/news3jp'))

const newsTray: Tray = factory.createTray('News Site')
newsTray.add(news1)
newsTray.add(news2)
newsTray.add(news3)

const page: Page = factory.createPage('Blog and News', 'Tanaka Taro')
page.add(blogTray)
page.add(newsTray)

page.output(filename)
