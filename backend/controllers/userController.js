const userModel = require("../models/UserModals");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const jwtSecret =
  process.env.JWT_SECRET ||
  "6quwsbaf9rmo2SDewFTpU3QoKNScSa8ToZnFb4NpLRa9akMf2kQpPQqiqTywTSie";

module.exports.getUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    res.send(users);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
};

module.exports.getUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email, password });
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
};

module.exports.createUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (user) {
      return res.status(401).send("User already exists!");
    }
    const newUser = await userModel.create({ email, password });

    const token = jwt.sign(
      { id: newUser._id, email: newUser.email },
      jwtSecret,
      {
        expiresIn: "7d",
      }
    );

    res.status(201).send({ user: newUser, token });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
};

module.exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email, password });
    if (!user) {
      return res.status(401).send("Invalid email or password");
    }

    const token = jwt.sign({ id: user._id, email: user.email }, jwtSecret, {
      expiresIn: "7d",
    });

    res.send({ user, token });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
};
