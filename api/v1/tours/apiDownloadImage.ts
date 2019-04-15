import { RequestHandler } from 'express';
import path from 'path';
import { APIError } from '../../../model/shared/messages';
import { __root } from '../../../config';

export const apiDownloadImage: RequestHandler = (req, res, next) => {
  const imageID = req.params.id;
  res.download(path.join(__root, 'public', 'img', imageID), err => {
    if (err) {
      next(APIError.errServerError());
    }
  });
};
