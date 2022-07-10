import { load } from 'cheerio'
import { MetaTagasEnum, MetaTags } from './types'

const parseHtml = (html: string) => {
  const metaTags: MetaTags[] = []
  const htmlContent = load(html)
  htmlContent('head meta').map((i, item) => {
    if (!item.attribs) return null
    if (!item.attribs.property) return null
    if (!item.attribs.content) return null

    const property = item.attribs.property as MetaTagasEnum
    const content = item.attribs.content

    metaTags.push({
      tag: property,
      value: content
    })
  })

  return metaTags
}

export {
  parseHtml
}