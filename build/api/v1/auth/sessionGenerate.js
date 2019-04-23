"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = __importStar(require("jsonwebtoken"));
const config_1 = require("../../../config");
exports.apiSessionGenerate = (req, res, next) => {
    if (req.user) {
        const token = jwt.sign({ userId: req.user.id }, config_1.sessionTokenSecret, {
            expiresIn: config_1.sessionTokenLifetime
        });
        res.status(200).json({ auth: true, token: token });
    }
};
