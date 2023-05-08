const { connect, connection } = require('mongoose');

// TODO: change this to the name of the DB we are using
const connectionString =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/networkDB';

connect(connectionString);

module.exports = connection;