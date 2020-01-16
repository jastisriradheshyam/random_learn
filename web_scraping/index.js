'use strict';
const puppeteer = require('puppeteer');

/**
 * @function scrape the page
 * @param {String} url
 * @returns {Promise}
 */
var scrape = async function (url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [element] = await page.$x('//*[@id="priceblock_dealprice"]');
    const prop = await element.getProperty('textContent');
    const price = await prop.jsonValue();
    console.log(price);

    browser.close();
};

scrape('https://www.amazon.in/gp/product/B07DJHXTLJ/')
    .catch(error => console.error(error));