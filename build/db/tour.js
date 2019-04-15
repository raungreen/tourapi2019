"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const data_1 = require("../data/data");
const tourSchema = new mongoose_1.default.Schema({
    location: String,
    tourTitle: String,
    tourCategory: String,
    tourDescription: String,
    price: Number,
    currency: String,
    img: [String],
    reviews: [
        {
            reviewTitle: String,
            reviewLongText: String,
            stars: Number
        }
    ]
});
exports.Tour = mongoose_1.default.model('Tour', tourSchema);
// Test Data
const testItem1 = data_1.DataStore.tours[0];
// testItem1.reviews  = DataStore.reviews;
const testItem2 = data_1.DataStore.tours[1];
exports.Tour.find().then(data => {
    if (data.length == 0) {
        new exports.Tour(testItem1).save();
        new exports.Tour(testItem2).save();
    }
});
