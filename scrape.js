const puppeteer = require('puppeteer');
require('dotenv').config();

const USER_ID = process.env.KEIRIN_USER_ID;
const PASSWORD = process.env.KEIRIN_PASSWORD;

(async () => {
    const browser = await puppeteer.launch({
        //headless: false,
        defaultViewport: {
            width: 1400,
            height: 800,
        }
    });
    const page = await browser.newPage();

    await page.goto('https://keirin.jp/pc/login');
    await page.type('#txtnetVotingAutId', USER_ID);
    await page.type('#txtnetVotingPass', PASSWORD);
    await page.click('#btnlogin');
    await page.screenshot({
        path: 'keirin01.png',
        fullpage: true
    });

    await browser.close();
})();