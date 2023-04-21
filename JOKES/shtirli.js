const puppeteer = require('puppeteer');
 
async function SHT() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://anekdoty.ru/pro-shtirlica/');

  const jokes = await page.$$eval('p', elements => {
    return elements.map(element => element.innerText);
  });

  await browser.close();
  return jokes;
}

module.exports = SHT;
 