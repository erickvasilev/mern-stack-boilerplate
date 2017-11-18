const mongoose = require('mongoose');
const env = require('./env/env');

mongoose.Promise = global.Promise;

//const mongoUri = `mongodb://${env.dbName}:${env.key}@${env.dbName}.documents.azure.com:${env.cosmosPort}/?ssl=true`;
const mongoUri = 'mongodb://127.0.0.1/mernapp'

function connect() {
   console.log('database connected');
   return mongoose.connect(mongoUri, { useMongoClient: true });
}

module.exports = {
  connect,
  mongoose
};
