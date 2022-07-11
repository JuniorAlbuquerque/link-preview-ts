import playwright from 'playwright'

const getPageContent = async (url: string) => {
  // const browser = await puppeteer.launch();

  // const browser = await chromium.puppeteer.launch({
  //   args: [...chromium.args, "--hide-scrollbars", "--disable-web-security"],
  //   defaultViewport: chromium.defaultViewport,
  //   executablePath: await chromium.executablePath,
  //   headless: true,
  //   ignoreHTTPSErrors: true,
  // })

  // const page = await browser.newPage();

  // await page.goto(url, {waitUntil: 'domcontentloaded'});
  // const pageContent = await page.content()
  const browser = await playwright.chromium.launch();
  const page = await browser.newPage();

  await page.goto(url);
  const pageContent = await page.content()

  return pageContent
}

export {
  getPageContent
}