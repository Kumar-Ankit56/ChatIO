const mongoose = require("mongoose");

//Schema
const chatModel = mongoose.Schema({
  chatName: { type: String, trim: true },
  isGroupChat: { type: Boolean, default: false },
  user: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  latestMessage: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Message",
  },
  groupAdmin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

//Model from the Schema
const Chat = mongoose.model("chat", chatModel);
module.exports = Chat;
