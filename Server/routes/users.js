const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const dababase = require("../db/db");
const jwt = require("jsonwebtoken");

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

// DB
const client = dababase.client;
const db = client.db();

// Verify Token
const verifyToken = (req, res, next) => {
  // Get auth header value
  const bearerHeader = req.headers["authorization"];

  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
};

router.post("/login", async (req, res) => {
  await client.connect();
  users = db.collection("users");

  try {
    const { username, password } = req.body;
    // Validate input
    if (!username && !password) {
      res.status(400).send("Fill all fields");
    }

    user = await users.findOne({ user: username });

    if (user && (await bcrypt.compare(password, user.password))) {
      console.log("user found");
      jwt.sign({ user }, "secretkey", (err, token) => {
        res.json({
          token,
        });
      });
    }
  } catch (err) {
    console.log(err);
  } finally {
    client.close();
  }
});

router.post("/delete", verifyToken, (req, res) => {
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({ msg: "User deleted", authData });
    }
  });
});

router.get("/testing", verifyToken, (req, res) => {
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) res.sendStatus(403);
    else res.json({ msg: "Token here" });
  });
});

module.exports = router;

// https://www.section.io/engineering-education/how-to-build-authentication-api-with-jwt-token-in-nodejs/
