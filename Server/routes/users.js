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
  const token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({ msg: "No token provided" });
  }

  jwt.verify(token, "secretkey", (err, user) => {
    if (err) {
      return res.status(401).send({ msg: "Unauthorized" });
    }
    next();
  });
};

router.post("/login", async (req, res) => {
  await client.connect();
  users = db.collection("users");

  try {
    const { username, password } = req.body;

    user = await users.findOne({ user: username });

    if (user && (await bcrypt.compare(password, user.password))) {
      jwt.sign({ user }, "secretkey", (err, token) => {
        res.json({
          token,
          username: user.user,
          user_id: user._id,
        });
      });
    } else {
      console.log("Invalid credentials");
      res.status(403).json({ msg: "Invalid credentials" });
    }
  } catch (err) {
    console.log(err);
  } finally {
    client.close();
  }
});

router.post("/testing", verifyToken, (req, res) => {
  console.log(":D");
});

module.exports = router;

// https://www.section.io/engineering-education/how-to-build-authentication-api-with-jwt-token-in-nodejs/
