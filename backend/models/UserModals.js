const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    apps: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "App",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
