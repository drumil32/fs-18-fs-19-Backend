import puppeteer from "puppeteer";
import fs from "fs";

async function scrapeUsingPuppet() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://geekster.in");
    await page.setViewport({ width: 600, height: 800 });
    //   await page.waitForSelector("img");
    const srcs = await page.evaluate(() => {
        const images = document.querySelectorAll("img");
        // console.log(images);
        return Array.from(images).map((img) => img.src);
    });

    console.log(srcs);
    //   printPictures(srcs);
    await browser.close();
}

scrapeUsingPuppet();

