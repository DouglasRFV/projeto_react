'use strict';

const mongoose = require('mongoose');
const {MongoMemoryServer} = require('mongodb-memory-server');

const mongod = new MongoMemoryServer();

module.exports.connect = async () => {
  const uri = await mongod.getUri();

  const mongooseOpts = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  };

  await mongoose.connect(uri, mongooseOpts);
};

module.exports.close = async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongod.stop();
};
