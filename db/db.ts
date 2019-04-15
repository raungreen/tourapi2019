import pgPromise from 'pg-promise';

export const pgp = pgPromise();

const dbConf = {
  host: '127.0.0.1',
  port: 5432,
  database: 'tourdb',
  user: 'postgres',
  password: 'maurice'
};

export const db = pgp(dbConf);
