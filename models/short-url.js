const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  original_url: {
    type: String,
    trim: true,
  },
  short_url: {
    type: String,
    trim: true,
  },
});

const Url = mongoose.model("Url", urlSchema);

module.exports = Url;
