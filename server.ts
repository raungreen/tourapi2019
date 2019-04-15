import express from 'express';
import { routerV1 } from './api/v1';
// import { connectMongo } from './db/db';
const app = express();

// connectMongo();

app.disable('x-powered-by');

app.use('/v1', routerV1);

app.listen(process.env.PORT || 8091, () => console.log('Server Started...'));
