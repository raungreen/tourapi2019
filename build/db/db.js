"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_promise_1 = __importDefault(require("pg-promise"));
exports.pgp = pg_promise_1.default();
const dbConf = {
    host: '127.0.0.1',
    // Use port 5432 for work; port 5433 for personal laptop
    port: 5432,
    // port: 5433,
    database: 'tourdb',
    user: 'tourdb_admin',
    password: 'maurice'
};
exports.db = exports.pgp(dbConf);
// Setup for MongoDb below.  Uncomment above to run Postgres
// import mongoose from 'mongoose';
// export function connectMongo() {
//   mongoose.connect(
//     'mongodb+srv://toudb_admin:maurice@tourapi-tmwlz.mongodb.net/test?retryWrites=true'
//   );
// }
