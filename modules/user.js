const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  userID: {
    type: String,
    default: "",
  },

  name: {
    type: String,
    default: "",
  },

  image: {
    type: String,
    default: "",
  },

  email: {
    type: String,
    default: "",
  },

  address: {
    type: String,
    default: "",
  },

  phone: {
    type: Number,
    default: 0,
  },

  whatsapp: {
    type: Number,
    default: 0,
  },

  gender: {
    type: String,
    default: "",
  },

  numberOfDonations: {
    type: Number,
    default: 0,
  },

  uploads: {
    type: Number,
    default: 0,
  },

  points: {
    type: Number,
    default: 0,
  },

  leaderboardRank: {
    type: Number,
    default: 0,
  },

  notifications: [String],

  campaigns: [String],

  donations: [String],
});

module.exports = mongoose.model("user", userSchema);
