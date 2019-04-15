"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tourDetail_1 = require("../../../model/shared/tourDetail");
const static_1 = require("../general/static");
const db_1 = require("../../../db/db");
const messages_1 = require("../../../model/shared/messages");
const sql_1 = require("../../../db/queries/sql");
exports.apiGetTourDetail = (req, res, next) => {
    const tourID = req.params.id;
    db_1.db.one(sql_1.tours.getDetail, { id: tourID })
        .then(selectedTour => {
        const imageURLs = selectedTour.img.map(static_1.fileMapper(req.app.get('env')));
        db_1.db.any(sql_1.tours.getAllReviews, { tourID: tourID }).then(selectedReviews => {
            res.json(new tourDetail_1.TourDetail(selectedTour, selectedReviews, imageURLs));
        });
    })
        .catch(err => {
        console.log(err);
        next(messages_1.APIError.errNotFound());
    });
};
