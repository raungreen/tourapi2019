"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tourSummary_1 = require("../../../model/shared/tourSummary");
const tourFilters_1 = require("../../../model/shared/tourFilters");
const db_1 = require("../../../db/db");
exports.apiGetTours = (req, res, next) => {
    db_1.db.any('select * from tours').then(tours => {
        const filters = new tourFilters_1.TourFilters(req.query);
        const filteredData = tours.filter(item => {
            let conditions = [
                filters.location ? item.location == filters.location : true,
                filters.priceMin ? item.price > filters.priceMin : true,
                filters.priceMax ? item.price < filters.priceMax : true
            ];
            return conditions.every(value => value == true);
        });
        res.json(filteredData.map((item) => new tourSummary_1.TourSummary(item)));
    });
};
