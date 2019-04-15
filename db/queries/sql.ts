import { pgp } from '../db';
import * as path from 'path';

function sql(file: string) {
  const fullPath = path.join(__dirname, file);
  return new pgp.QueryFile(fullPath, { minify: true });
}

export const tours = {
  getDetail: sql('tours/getDetail.sql'),
  getAllReviews: sql('tours/getReviews.sql'),
  search: sql('tours/search.sql'),
  delete: sql('tours/delete.sql')
};
