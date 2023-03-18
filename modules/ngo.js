const mongoose = require("mongoose");

const ngoSchema = mongoose.Schema({
  ngoID: {
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

  isVerified: {
    type: boolean,
    default: false,
  },

  about: {
    type: String,
    default: "",
  },

  location: {
    type: String,
    default: "",
  },

  googleMapLink: {
    type: String,
    default: "",
  },

  email: {
    type: String,
    default: "",
  },

  phone: {
    type: Number,
    default: 0,
  },

  instagram: {
    type: String,
    default: "",
  },

  website: {
    type: String,
    default: "",
  },

  tage: [],
});

module.exports = mongoose.model("ngo", ngoSchema);
