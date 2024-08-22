import axios from "axios";
import * as cheerio from "cheerio";
import fs from "fs";

const filePath = './amazon-mobile.txt';

async function amazonScrapping() {
    try {
        const response = await axios.get('https://www.amazon.in/s?k=mobile');
        // console.log(response.data);
        // writeFile(filePath, response.data);
        const mobileInformation = [];
        const data = fs.readFileSync(filePath, 'utf8');
        // console.log(data);
        const $ = cheerio.load(data);
        $('.a-price-whole').each((index, tag) => {
            // console.log(tag);
            mobileInformation[index] = {};
            mobileInformation[index].price = $(tag).text();
            // console.log($(tag).text());
        });
        $('.a-size-medium.a-color-base.a-text-normal').each((index, tag) => {
            mobileInformation[index].name = $(tag).text();
            // console.log($(tag).text());
        });
        console.log(mobileInformation);
    } catch (error) {

    }
}
amazonScrapping();

// Function to write data to a file
function writeFile(filePath, data) {
    fs.writeFile(filePath, data, (err) => {
        if (err) {
            console.error('Error writing to file', err);
        } else {
            console.log('File written successfully');
        }
    });
}

function readFile(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file', err);
        } else {
            console.log('File content:', data);
        }
    });
}

// writeFile(filePath, data);
