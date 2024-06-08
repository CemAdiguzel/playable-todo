const mongoose = require("mongoose");

const appSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    image: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      enum: ["Open", "In progress", "Done"],
      default: "Open",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Todo", appSchema);
