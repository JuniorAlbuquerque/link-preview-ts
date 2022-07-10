"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseHtml = void 0;
const cheerio_1 = require("cheerio");
const parseHtml = (html) => {
    const metaTags = [];
    const htmlContent = (0, cheerio_1.load)(html);
    htmlContent('head meta').map((i, item) => {
        if (!item.attribs)
            return null;
        if (!item.attribs.property)
            return null;
        if (!item.attribs.content)
            return null;
        const property = item.attribs.property;
        const content = item.attribs.content;
        metaTags.push({
            tag: property,
            value: content
        });
    });
    return metaTags;
};
exports.parseHtml = parseHtml;
