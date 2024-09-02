import { nanoid } from 'nanoid';
import UrlModel from '../model/urlModel.js';

export const shortTheUrl = async (req, res) => {
    const url = req.body.url;
    const uniqueId = nanoid(10);

    const isUrlExists = await UrlModel.findOne({ originalUrl: url }); // TODO: use isExists rather than findOne

    if (isUrlExists) {
        res.status(409).json({ message: 'Url already exists' });
    } else {
        const urlObj = await new UrlModel({ originalUrl: url, shortedUrl: uniqueId }).save();
        res.status(200).json({
            message: "shorted link is generated",
            link: `http://localhost:3000/api/url-shortener/${uniqueId}`
        });
    }
}

export const getOriginalUrl = async (req, res) => {
    const shortUrl = req.params.shortUrl;

    const urlObj = await UrlModel.findOne({ shortedUrl: shortUrl }); // TODO: rather then fetching whole object just take originalUrl from database.
    console.log(urlObj)
    if (urlObj) {
        res.redirect(urlObj.originalUrl);
    } else {
        res.status(404).json({ message: "Shortened URL not found" });
    }
}