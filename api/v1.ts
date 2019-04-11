import { Router } from 'express';
import express = require('express');
import path from 'path';
import { logger } from './v1/general/logging';
import { apiCors } from './v1/general/cors';
import { apiValidation } from './v1/general/validation';
import { userRouter } from './v1/users/apiUsers';
import { toursRouter } from './v1/tours/apiTours';
import { apiDownloadImage } from './v1/tours/apiDownloadImage';
import { apiErrorHandler } from './v1/general/errorHandling';

export let routerV1 = Router();

routerV1.use(logger);

routerV1.use(apiCors);

routerV1.use(apiValidation);

routerV1.use('/static', express.static(path.resolve('./', 'public', 'img')));

routerV1.get('/', (req, res, next) => {
  res.send('TourBooking API');
});

routerV1.use('/users', userRouter);

routerV1.use('/tours', toursRouter);

routerV1.get('/static/download/:id', apiDownloadImage);

routerV1.use(apiErrorHandler);
