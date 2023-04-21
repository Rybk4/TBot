const puppeteer = require('puppeteer');
 
async function Prog() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://anekdoty.ru/pro-programmistov/');

  const jokes = await page.$$eval('p', elements => {
    return elements.map(element => element.innerText);
  });

  await browser.close();
  return jokes;
}

module.exports = Prog;
 