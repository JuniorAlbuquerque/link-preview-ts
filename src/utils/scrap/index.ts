import axios from 'axios'

const getPageContent = async (url: string) => {
  const { data } = await axios.get(url)

  return data
}

export {
  getPageContent
}