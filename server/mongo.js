const mongoose = require('mongoose');
const env = require('./env/env');

mongoose.Promise = global.Promise;

const mongoUri = `mongodb://${env.address}/${env.dbName}`;

function connect() {
   console.log('database connected');
   return mongoose.connect(mongoUri, { useMongoClient: true });
}

module.exports = {
  connect,
  mongoose
};
