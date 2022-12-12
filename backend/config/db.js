const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set("strictQuery", true);

//Conntect database with mongoose
const connectDB = async () => {
  await mongoose
    .connect(process.env.DATABASEURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((con) => {
      //console.log(con.connections);
      console.log(`Database is connected `);
    })
    .catch((e) => {
      console.log(e);
    });
};

module.exports = connectDB;
