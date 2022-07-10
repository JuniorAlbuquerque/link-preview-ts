
// Minimal puppeteer get page HTML source code example
const puppeteer = require('puppeteer');
const cherio = require('cheerio');

(async () => {
  const parseHtml = (html) => {
    const metaTags = []
    const htmlContent = cherio.load(html)
    htmlContent('head meta').map((i, item) => {
      if (!item.attribs) return null
      if (!item.attribs.property) return null
      if (!item.attribs.content) return null

      const property = item.attribs.property
      const content = item.attribs.content

      metaTags.push({
        tag: property,
        value: content
      })
    })

    console.log(metaTags)
  }


  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://jnr.vercel.app/', {waitUntil: 'domcontentloaded'});
  // Wait for 5 seconds
  // console.log(await page.content());
  const res = await page.content()
  parseHtml(res)
  // Take screenshot
  await browser.close();
})();