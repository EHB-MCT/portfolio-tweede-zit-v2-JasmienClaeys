require('dotenv').config({ path: '../../../.env' });

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.POSTGRES_HOST || "127.0.0.1",
      user: process.env.POSTGRES_USER || "dev5",
      password: process.env.POSTGRES_PASSWORD || "dev567",
      database: process.env.POSTGRES_DB || "test",
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
