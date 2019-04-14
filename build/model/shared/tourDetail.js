"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tourSummary_1 = require("./tourSummary");
const reviews_1 = require("./reviews");
class TourDetail extends tourSummary_1.TourSummary {
    constructor(tourData, reviewData, tourImages) {
        super(tourData);
        this.tourCategory = tourData.tour_category;
        this.tourDescription = tourData.tour_description;
        this.price = tourData.price;
        this.currency = tourData.currency;
        this.img = tourImages;
        this.reviews = reviewData.map((item) => new reviews_1.Review(item));
    }
}
exports.TourDetail = TourDetail;
