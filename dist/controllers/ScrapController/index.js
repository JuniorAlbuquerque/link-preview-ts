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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrapController = void 0;
const parseHtml_1 = require("../../utils/parseHtml");
const previewTags_1 = require("../../utils/previewTags");
const scrap_1 = require("../../utils/scrap");
const express_1 = require("express");
class ScrapController {
    constructor() {
        this.index = async (req, res) => {
            const { url } = req.query;
            // try {
                const pageContent = await scrap_1.getPageContent(url);
                const html = parseHtml_1.parseHtml(pageContent);
                const tags = previewTags_1.getPreviewData(html);
                res.json({html, tags});
            // }
            // catch (error) {
            //     res.status(500).json({
            //         message: 'Erro ao carregar informações da url solicitada',
            //         error,
            //     });
            // }
        };
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.get('/scrap', this.index);
    }
}
exports.ScrapController = ScrapController;
