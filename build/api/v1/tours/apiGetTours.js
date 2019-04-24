"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tourSummary_1 = require("../../../model/shared/tourSummary");
const tourFilters_1 = require("../../../model/shared/tourFilters");
const db_1 = require("../../../db/db");
const catching_1 = require("../general/catching");
exports.apiGetTours = (req, res, next) => {
    const filters = new tourFilters_1.TourFilters(req.query);
    db_1.db.any('select * from tours where $1:raw', [filters.getCondition()]).then(
    // db.any(tours.search, { searchCondition: filters.getCondition() }).then(
    (tours) => {
        const responseData = tours.map(item => new tourSummary_1.TourSummary(item));
        catching_1.cacheSave(responseData);
        res.json(responseData);
    });
};
