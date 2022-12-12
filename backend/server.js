const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/db");
app.options("*", cors());

const userRoutes = require("./routes/userRoutes");

const corsOptions = {
  origin: "http://127.0.0.1:5173",
};

connectDB();

app.use(cors(corsOptions));

//Receiving data from frontend;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use("/api/user", userRoutes);
app.use("/api/user/login", userRoutes);

app.listen(parseInt(process.env.PORT), function () {
  console.log(`Server started on port ${process.env.PORT}`);
});
