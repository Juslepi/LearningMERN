const express = require("express");
const router = express.Router();

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

// DB
const database = require("../db/db");
const client = database.client;
const db = database.db;

router.get("/", async (req, res) => {
  await client.connect();

  const messages = db.collection("messages");

  const cursor = messages.find();
  cursor.sort({ date: 1, time: -1 });
  const all = await cursor.toArray();

  res.json(all);
});

router.post("/", async (req, res) => {
  try {
    await client.connect();

    const collection = db.collection("messages");

    let messageDocument = {
      author: req.body.author,
      message: req.body.message,
      date: req.body.date,
      time: req.body.time,
    };

    console.log(messageDocument);
    // Insert document and wait for promise
    await collection.insertOne(messageDocument);
    // Find one document
    const myDoc = await collection.findOne(messageDocument);
    res.json(myDoc).status(200);
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
});

module.exports = router;
