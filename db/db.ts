import pgPromise from 'pg-promise';

export const pgp = pgPromise();

const dbConf = {
  host: '127.0.0.1',
<<<<<<< HEAD
  port: 5432,
  database: 'tourdb',
  user: 'postgres',
=======
  // Use port 5432 for work; port 5433 for personal laptop
  // port: 5432,
  port: 5433,
  database: 'tourdb',
  user: 'tourdb_admin',
>>>>>>> a77c9ef3c8872825fbc687bdf0875a7258442897
  password: 'maurice'
};

export const db = pgp(dbConf);
