const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const chats = require("./data/data");
const connectDB = require("./config/db");
app.options("*", cors());

const corsOptions = {
  origin: "http://127.0.0.1:5173",
};

connectDB();
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.get("/api/chats", (req, res) => {
  res.send(chats);
});

app.get("/api/chats/:id", (req, res) => {
  const singleChat = chats.find((c) => c._id === req.params.id);
  console.log(req.params.id);
  res.send(singleChat);
  // console.log(JSON.stringify(singleChat));
});

app.listen(parseInt(process.env.PORT), function () {
  console.log(`Server started on port ${process.env.PORT}`);
});
