import * as cheerio from "cheerio";
import axios from "axios";
import fs from "fs";

async function scrape() {
  try {
    const result = await axios.get("https://geekster.in");
    // console.log(result.data);

    const $ = cheerio.load(result.data);

    // const paragraphs = [];

    // $("p").each((index, elem) => {
    //   const para = $(elem).text();
    //   paragraphs.push(para);
    // });
    // // console.log(paragraphs);

    // fs.writeFile("paragraphs.txt", paragraphs.join("\n"), (err) => {
    //   if(err) console.log(err);
    // });

    const images = [];

    $("img").each((index, element) => {
      const source = $(element).attr("src");
      console.log(source);
      if (source) {
        const startingPath = "https://geekster.in";
        const absoluteURL = new URL(source, startingPath).href;
        images.push(absoluteURL);
      }
    });

    // console.log("Total Image Count: ", images.length);
  } catch (err) {
    console.log(err);
  }
}

scrape();