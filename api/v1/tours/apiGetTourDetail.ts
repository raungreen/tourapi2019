import { RequestHandler } from 'express';
import { TourDetail } from '../../../model/shared/tourDetail';
import { fileMapper } from '../general/static';
import { db } from '../../../db/db';
import { APIError } from '../../../model/shared/messages';
import { tours } from '../../../db/queries/sql';

export const apiGetTourDetail: RequestHandler = (req, res, next) => {
  const tourID = req.params.id;
  // queries for .sql below
  db.one(tours.getDetail, { id: tourID })
    .then(selectedTour => {
      // db.one('select * from tours where id = $1', [tourID])
      //   .then(selectedTour => {
      const imageURLs = selectedTour.img.map(fileMapper(req.app.get('env')));
      db.any(tours.getAllReviews, { tourID: tourID }).then(selectedReviews => {
        // db.any('select * from reviews where tour_id = $1', [tourID]).then(
        //   selectedReviews => {
        res.json(new TourDetail(selectedTour, selectedReviews, imageURLs));
      });
    })
    .catch(err => {
      console.log(err);
      next(APIError.errNotFound());
    });
};
