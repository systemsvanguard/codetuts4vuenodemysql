// Dummy File - Password Removed
/* 
For Display purposes only, and to make reading the code make sense.  DB connection password has been removed. 
*/
const env = {
  database: 'fullstacktutorials',
  username: 'full****',
  password: '*******',
  host:     'localhost',
  dialect:  'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000 
  }
};

module.exports = env;
