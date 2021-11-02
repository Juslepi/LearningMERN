const express = require("express");

const app = express();
const port = process.env.PORT || 5000;

// Routes
const route = require("./routes/route");
const messages = require("./routes/messages");
const users = require("./routes/users");
app.use("/api", route);
app.use("/api/messages", messages);
app.use("/api/users", users);

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
