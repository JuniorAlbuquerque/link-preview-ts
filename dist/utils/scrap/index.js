"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPageContent = void 0;
const axios_1 = __importDefault(require("axios"));
const getPageContent = (url) => __awaiter(void 0, void 0, void 0, function* () {
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
    // const browser = await playwright.chromium.launch();
    // const page = await browser.newPage();
    // await page.goto(url);
    // const pageContent = await page.content()
    const pageContent = yield axios_1.default.get(url);
    return pageContent.data;
});
exports.getPageContent = getPageContent;
