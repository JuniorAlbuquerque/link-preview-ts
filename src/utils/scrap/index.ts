import puppeteer from 'puppeteer'

const getPageContent = async (url: string) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url, {waitUntil: 'domcontentloaded'});
  const pageContent = await page.content()

  return pageContent
}

export {
  getPageContent
}