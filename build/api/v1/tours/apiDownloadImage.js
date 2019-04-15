"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const messages_1 = require("../../../model/shared/messages");
const config_1 = require("../../../config");
exports.apiDownloadImage = (req, res, next) => {
    const imageID = req.params.id;
    res.download(path_1.default.join(config_1.__root, 'public', 'img', imageID), err => {
        if (err) {
            next(messages_1.APIError.errServerError());
        }
    });
};
