"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express = require("express");
const path_1 = __importDefault(require("path"));
const logging_1 = require("./general/logging");
const cors_1 = require("./general/cors");
const validation_1 = require("./general/validation");
const apiUsers_1 = require("./users/apiUsers");
const apiTours_1 = require("./tours/apiTours");
const apiDownloadImage_1 = require("./tours/apiDownloadImage");
const errorHandling_1 = require("./general/errorHandling");
const bodyParser_1 = require("./general/bodyParser");
const tokenSignin_1 = require("./auth/tokenSignin");
const sessionVerify_1 = require("./auth/sessionVerify");
const localSignup_1 = require("./auth/localSignup");
const localSignin_1 = require("./auth/localSignin");
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
exports.routerV1 = express_1.Router();
const limiter = new express_rate_limit_1.default({
    windowMs: 60 * 1000,
    max: 10
    // delayMs: 0
});
exports.routerV1.use(limiter);
exports.routerV1.use(logging_1.logger);
exports.routerV1.use(cors_1.apiCors);
exports.routerV1.use(validation_1.apiValidation);
exports.routerV1.use(sessionVerify_1.apiSessionVerify);
exports.routerV1.use('/static', express.static(path_1.default.resolve('./', 'public', 'img')));
exports.routerV1.get('/', (req, res, next) => {
    res.send('TourBooking API');
});
exports.routerV1.use('/users', apiUsers_1.userRouter);
exports.routerV1.use('/tours', apiTours_1.toursRouter);
exports.routerV1.post('/tokensignin', bodyParser_1.urlEncodedParser, tokenSignin_1.apiTokenSignin);
exports.routerV1.post('/localsignup', bodyParser_1.jsonParser, localSignup_1.apiLocalSignup);
exports.routerV1.post('/localsignin', bodyParser_1.jsonParser, localSignin_1.apiLocalSignin);
exports.routerV1.get('/static/download/:id', apiDownloadImage_1.apiDownloadImage);
exports.routerV1.use(errorHandling_1.apiErrorHandler);
