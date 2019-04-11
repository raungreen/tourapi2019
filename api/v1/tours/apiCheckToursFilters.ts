import { RequestHandler } from 'express';
import { TourFilters } from '../../../model/shared/tourFilters';
import { APIError } from '../../../model/shared/messages';

export const apiCheckTourFilters: RequestHandler = (req, res, next) => {
  const filters = new TourFilters(req.query);
  for (let filter of Object.getOwnPropertyNames(req.query)) {
    if (!filters.hasOwnProperty(filter)) {
      next(new APIError('Query String Error', 'No such filter.', 400));
    }
  }
  console.log(filters);
  next();
};
