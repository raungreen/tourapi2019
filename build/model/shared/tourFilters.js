"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TourFilters {
    constructor(data) {
        this.location = data.location;
        this.priceMin = data.priceMin;
        this.priceMax = data.priceMax;
    }
    getCondition() {
        return [
            this.location ? `location = '${this.location}'` : 'TRUE',
            this.priceMin ? `price > ${this.priceMin}` : 'TRUE',
            this.priceMax ? `price > ${this.priceMax}` : 'TRUE'
        ].join(' AND ');
    }
}
exports.TourFilters = TourFilters;
