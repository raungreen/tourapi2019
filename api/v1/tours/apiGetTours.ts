import { RequestHandler } from 'express';

import { TourSummary } from '../../../model/shared/tourSummary';
import { TourFilters } from '../../../model/shared/tourFilters';
import { db } from '../../../db/db';

export const apiGetTours: RequestHandler = (req, res, next) => {
  db.any('select * from tours').then(tours => {
    const filters = new TourFilters(req.query);
    const filteredData = tours.filter(item => {
      let conditions = [
        filters.location ? item.location == filters.location : true,
        filters.priceMin ? item.price > filters.priceMin : true,
        filters.priceMax ? item.price < filters.priceMax : true
      ];
      return conditions.every(value => value == true);
    });
    res.json(filteredData.map((item: any) => new TourSummary(item)));
  });
};
