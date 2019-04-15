import { RequestHandler } from 'express';

import { TourSummary } from '../../../model/shared/tourSummary';
import { TourFilters } from '../../../model/shared/tourFilters';
import { db } from '../../../db/db';
import { Tour } from '../../../db/tour';
import { tours } from '../../../db/queries/sql';

export const apiGetTours: RequestHandler = (req, res, next) => {
  const filters = new TourFilters(req.query);
  db.any('select * from tours where $1:raw', [filters.getCondition()]).then(
    // db.any(tours.search, { searchCondition: filters.getCondition() }).then(
    tours => {
      res.json(tours.map((item: any) => new TourSummary(item)));
    }
  );
};
