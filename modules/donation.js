const mongoose = require("mongoose");

const donationSchema = mongoose.Schema({
  userID: { type: String, default: "" },

  title: { type: String, default: "" },

  description: { type: String, default: "" },

  location: { type: String, default: "" },

  poster: { type: String, default: "" },

  contact: {
    type: Number,
    length: 10,
    default: 0,
  },

  acceptedByID: { type: String, default: "" },

  isAccepted: { type: Boolean, default: false },

  donationType: { type: String, default: "" },

  additionalDetails: { type: String, default: "" },

  tags: [],
});

module.exports = mongoose.model("Donation", donationSchema);
