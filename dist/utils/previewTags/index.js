"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPreviewData = void 0;
const types_1 = require("../parseHtml/types");
const getPreviewData = (metTags) => {
    const previewData = metTags === null || metTags === void 0 ? void 0 : metTags.reduce((acc, item) => {
        switch (item.tag) {
            case types_1.MetaTagasEnum.description:
                acc.description = item.value;
                break;
            case types_1.MetaTagasEnum.title:
                acc.title = item.value;
                break;
            case types_1.MetaTagasEnum.image:
                acc.image = item.value;
                break;
            case types_1.MetaTagasEnum.url:
                acc.url = item.value;
                break;
            default:
                break;
        }
        return acc;
    }, {
        description: '',
        image: '',
        title: '',
        url: ''
    });
    return previewData;
};
exports.getPreviewData = getPreviewData;
