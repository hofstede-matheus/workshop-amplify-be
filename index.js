const express = require("express");
const serverless = require("serverless-http");
const app = express();

app.get("/", (req, res) => {
  console.log("Hello, World!");
  res.send("Hello, World!");
});

// module.exports.handler = serverless(app);
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
