const { Pool } = require('pg');

const pg_uri =
  'postgres://lmgitqxr:WA0VBBJyEdk6uEiJ30C_yAL2-NCsoZRL@ziggy.db.elephantsql.com:5432/lmgitqxr';

const pool = new Pool({
  connectionString: pg_uri,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
