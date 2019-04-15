"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_promise_1 = __importDefault(require("pg-promise"));
exports.pgp = pg_promise_1.default();
const dbConf = {
    host: '127.0.0.1',
    port: 5432,
    database: 'tourdb',
    user: 'postgres',
    password: 'maurice'
};
exports.db = exports.pgp(dbConf);
// Setup for MongoDb below.  Uncomment above to run Postgres
const mongoose_1 = __importDefault(require("mongoose"));
function connectMongo() {
    mongoose_1.default.connect('mongodb+srv://toudb_admin:maurice@tourapi-tmwlz.mongodb.net/test?retryWrites=true');
}
exports.connectMongo = connectMongo;
