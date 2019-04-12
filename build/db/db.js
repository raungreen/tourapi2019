"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_promise_1 = __importDefault(require("pg-promise"));
exports.pgp = pg_promise_1.default();
const dbConf = {
    host: 'localhost',
    port: 5432,
    database: 'tourdb',
    user: 'tourdb_admin',
    password: 'postgres'
};
exports.db = exports.pgp(dbConf);
