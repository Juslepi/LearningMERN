const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_ATLAS_KEY;
const client = new MongoClient(uri);
const db = client.db();

module.exports = {
  client,
  db,
};
