"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tourDetail_1 = require("../../../model/shared/tourDetail");
const static_1 = require("../general/static");
const db_1 = require("../../../db/db");
const messages_1 = require("../../../model/shared/messages");
exports.apiGetTourDetail = (req, res, next) => {
    const tourID = req.params.id;
    db_1.db.one('select * from tours where id = $1', [tourID]).then(selectedTour => {
        if (selectedTour) {
            const imageURLs = selectedTour.img.map(static_1.fileMapper(req.app.get('env')));
            db_1.db.any('select * from reviews where tour_id = $1', [tourID]).then(selectedReviews => {
                res.json(new tourDetail_1.TourDetail(selectedTour, selectedReviews, imageURLs));
            });
        }
        else {
            next(messages_1.APIError.errNotFound);
        }
    });
};
