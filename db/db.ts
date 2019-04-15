import pgPromise from 'pg-promise';

export const pgp = pgPromise();

const dbConf = {
  host: '127.0.0.1',
  // Use port 5432 for work; port 5433 for personal laptop
  port: 5432,
  // port: 5433,
  database: 'tourdb',
  user: 'postgres',
  password: 'maurice'
};

export const db = pgp(dbConf);
