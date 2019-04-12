import pgPromise from 'pg-promise';

export const pgp = pgPromise();

const dbConf = {
  host: 'localhost',
  port: 5432,
  database: 'tourdb',
  user: 'tourdb_admin',
  password: 'postgres'
};

export const db = pgp(dbConf);
