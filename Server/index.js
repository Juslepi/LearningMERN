const express = require("express");
const route = require("./routes/route");
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient } = require("mongodb");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// DB
const uri = process.env.MONGO_ATLAS_KEY;
const client = new MongoClient(uri);
const db = client.db();

// Routes
app.get("/api/messages", async (req, res) => {
  await client.connect();

  const messages = db.collection("messages");

  const cursor = messages.find();
  cursor.sort({ date: -1 });
  const all = await cursor.toArray();

  res.json(all);
});

app.post("/api/messages/", async (req, res) => {
  try {
    await client.connect();

    const collection = db.collection("messages");

    let messageDocument = {
      author: req.body.author,
      message: req.body.message,
      date: req.body.date,
    };

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

app.use("/api", route);

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
