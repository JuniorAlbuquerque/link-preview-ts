import { MetaTagasEnum, MetaTags, PreviewLink } from "../parseHtml/types"

const getPreviewData = (metTags: MetaTags[]) => {
  const previewData = metTags?.reduce(
    (acc, item) => {
      switch (item.tag) {
        case MetaTagasEnum.description:
          acc.description = item.value
          break
        case MetaTagasEnum.title:
          acc.title = item.value
          break
        case MetaTagasEnum.image:
          acc.image = item.value
          break
        case MetaTagasEnum.url:
          acc.url = item.value
          break
        default:
          break
      }

      return acc
    },
    {
      description: '',
      image: '',
      title: '',
      url: ''
    } as PreviewLink
  )
 
  return previewData
}

export {
  getPreviewData
}