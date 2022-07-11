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
// import puppeteer from 'puppeteer'
const chrome_aws_lambda_1 = __importDefault(require("chrome-aws-lambda"));
const getPageContent = (url) => __awaiter(void 0, void 0, void 0, function* () {
    // const browser = await puppeteer.launch();
    const browser = yield chrome_aws_lambda_1.default.puppeteer.launch({
        args: [...chrome_aws_lambda_1.default.args, "--hide-scrollbars", "--disable-web-security"],
        defaultViewport: chrome_aws_lambda_1.default.defaultViewport,
        executablePath: yield chrome_aws_lambda_1.default.executablePath,
        headless: true,
        ignoreHTTPSErrors: true,
    });
    const page = yield browser.newPage();
    yield page.goto(url, { waitUntil: 'domcontentloaded' });
    const pageContent = yield page.content();
    return pageContent;
});
exports.getPageContent = getPageContent;
