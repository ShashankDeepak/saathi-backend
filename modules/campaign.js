const mongoose = require("mongoose");

const campaignSchema = mongoose.Schema({
  poster: String,

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

  hasEnded: { type: boolean, default: false },

  raised: {
    type: mongoose.Schema.Types.Decimal128,
    min: 0,
    default: 0,
  },

  totalAmount: { type: mongoose.Schema.Types.Decimal128, default: "" },

  ngoID: {
    type: String,
    required: true,
    default: "",
  },
});

module.exports = mongoose.model("campaign", campaignSchema);
