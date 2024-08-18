require('dotenv').config({ path: '../../../.env' });

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'store',
      user: process.env.POSTGRES_USER || 'dev5',
      password: process.env.POSTGRES_PASSWORD || 'dev567',
      database: process.env.POSTGRES_DB || 'dev5',
      port: 5432,
    },
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },
};
