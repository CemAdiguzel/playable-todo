const mongoose = require("mongoose");

const appSchema = new mongoose.Schema({
  text: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Todo", appSchema);
