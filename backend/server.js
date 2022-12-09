const express = require("express");
const app = express();
let json = require("./data/data.json");
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.get("/api/chats", (req, res) => {
  res.send(json);
});

app.get("/api/chats/:id", (req, res) => {
  const singleChat = json.find((c) => c.id === req.params.id * 1);
  console.log(req.params.id);
  res.send(JSON.stringify(singleChat));
  // console.log(JSON.stringify(singleChat));
});
app.listen(parseInt(process.env.PORT), function () {
  console.log(`Server started on port ${process.env.PORT}`);
});
