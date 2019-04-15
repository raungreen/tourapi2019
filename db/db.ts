import pgPromise from 'pg-promise';

export const pgp = pgPromise();

const dbConf = {
  host: '127.0.0.1',
  // Use port 5432 for work; port 5433 for personal laptop
  // port: 5432,
  port: 5433,
  database: 'tourdb',
  user: 'tourdb_admin',
  password: 'maurice'
};

export const db = pgp(dbConf);

// Setup for MongoDb below.  Uncomment above to run Postgres
import mongoose from 'mongoose';

export function connectMongo() {
  mongoose.connect(
    'mongodb+srv://toudb_admin:maurice@tourapi-tmwlz.mongodb.net/test?retryWrites=true'
  );
}
