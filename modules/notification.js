const mongoose = require("mongoose");

const notificationSchema = mongoose.Schema({
  title: {
    type: String,
    default: "",
  },

  date: {
    type: Date,
    default: Date.now(),
  },

  subtitle: {
    type: String,
    default: "",
  },
});

module.export = mongoose.model("Notification", notificationSchema);
