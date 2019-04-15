"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../db");
const path = __importStar(require("path"));
function sql(file) {
    const fullPath = path.join(__dirname, file);
    return new db_1.pgp.QueryFile(fullPath, { minify: true });
}
exports.tours = {
    getDetail: sql('tours/getDetail.sql'),
    getAllReviews: sql('tours/getReviews.sql'),
    search: sql('tours/search.sql'),
    delete: sql('tours/delete.sql')
};
