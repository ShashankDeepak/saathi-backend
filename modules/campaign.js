const mongoose = require("mongoose");

const campaignSchema = mongoose.Schema({
  poster: String,

  ngoID: {
    type: String,
    required: true,
    default: "",
  },

  title: {
    type: String,
    required: true,
    default: "",
  },

  about: {
    type: String,
    default: "",
  },

  tags: [String],

  donors: [String],

  phone: {
    type: Number,
    length: 10,
    default: 0,
  },

  email: {
    type: String,
    default: "",
  },

  participated: {
    type: Number,
    required: true,
    min: 0,
    default: 0,
  },

  startDate: { type: Date, default: "" },

  endDate: { type: Date, default: "" },

  hasEnded: { type: Boolean, default: false },

  raised: {
    type: mongoose.Schema.Types.Decimal128,
    min: 0,
    default: 0,
  },

  totalAmount: { type: mongoose.Schema.Types.Decimal128, default: "" },
});

module.exports = mongoose.model("Campaign", campaignSchema);
