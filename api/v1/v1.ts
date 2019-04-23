import { Router } from 'express';
import express = require('express');
import path from 'path';
import { logger } from './general/logging';
import { apiCors } from './general/cors';
import { apiValidation } from './general/validation';
import { userRouter } from './users/apiUsers';
import { toursRouter } from './tours/apiTours';
import { apiDownloadImage } from './tours/apiDownloadImage';
import { apiErrorHandler } from './general/errorHandling';
import { urlEncodedParser, jsonParser } from './general/bodyParser';
import { apiTokenSignin } from './auth/tokenSignin';
import { apiSessionVerify } from './auth/sessionVerify';
import { apiLocalSignup } from './auth/localSignup';
import { apiLocalSignin } from './auth/localSignin';
import RateLimiter from 'express-rate-limit';

export let routerV1 = Router();

const limiter = new RateLimiter({
  windowMs: 60 * 1000,
  max: 10
  // delayMs: 0
});

routerV1.use(limiter);

routerV1.use(logger);

routerV1.use(apiCors);

routerV1.use(apiValidation);

routerV1.use(apiSessionVerify);

routerV1.use('/static', express.static(path.resolve('./', 'public', 'img')));

routerV1.get('/', (req, res, next) => {
  res.send('TourBooking API');
});

routerV1.use('/users', userRouter);

routerV1.use('/tours', toursRouter);

routerV1.post('/tokensignin', urlEncodedParser, apiTokenSignin);

routerV1.post('/localsignup', jsonParser, apiLocalSignup);

routerV1.post('/localsignin', jsonParser, apiLocalSignin);

routerV1.get('/static/download/:id', apiDownloadImage);

routerV1.use(apiErrorHandler);
