const mongoose = require("mongoose");

const ngoSchema = mongoose.Schema({
  name: {
    type: String,
    default: "",
  },

  image: {
    type: String,
    default: "",
  },

  isVerified: {
    type: Boolean,
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
  donations: [String],

  campaigns: [String],

  tags: [String],
});

module.exports = mongoose.model("Ngo", ngoSchema);
