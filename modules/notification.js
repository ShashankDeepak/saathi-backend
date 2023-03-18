const mongoose = require("mongoose");

const notificationSchema = mongoose.Schema({
  userID: {
    type: String,
    default: "",
  },

  title: {
    type: String,
    default: "",
  },

  date: {
    type: String,
    default: "",
  },

  subtitle: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("Notifications", notificationSchema);
