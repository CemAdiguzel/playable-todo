const mongoose = require("mongoose");
const User = require("../models/UserModals");
const appModel = require("../models/Models");

const jwt = require("jsonwebtoken");
const jwtSecret =
  process.env.JWT_SECRET ||
  "6quwsbaf9rmo2SDewFTpU3QoKNScSa8ToZnFb4NpLRa9akMf2kQpPQqiqTywTSie";

module.exports.getUsersTodo = async (req, res) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).send("Unauthorized: No token provided");
  }

  try {
    const decoded = jwt.verify(token, jwtSecret);
    const userId = decoded.id;

    const toDos = await appModel.find({ user: userId }).sort({ updatedAt: -1 });

    if (!toDos.length) {
      return res.status(404).send("No todos found for this user");
    }

    res.status(200).send(toDos);
  } catch (error) {
    console.log(error);
    if (error.name === "JsonWebTokenError") {
      return res.status(401).send("Unauthorized: Invalid token");
    }
    res.status(500).send("An error occurred while retrieving the todos");
  }
};

module.exports.createTodo = async (req, res) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).send("Unauthorized: No token provided");
  }

  const { title, description, image } = req.body;
  try {
    const decoded = jwt.verify(token, jwtSecret);
    const userId = decoded.id;

    const newApp = new appModel({
      title,
      description,
      image,
      user: userId,
      status: "Open",
    });

    const savedApp = await newApp.save();

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send("User not found");
    }

    user.apps.push(savedApp._id);
    await user.save();

    console.log("Todo added successfully");
    console.log(savedApp);
    res.send(savedApp);
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occurred while saving the todo");
  }
};

module.exports.updateTodo = async (req, res) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).send("Unauthorized: No token provided");
  }

  const { _id, title, description, image, status } = req.body;

  const item = await appModel.findById(_id);
  if (!item) {
    return res.status(500).send("Item not found");
  }

  try {
    await appModel.findByIdAndUpdate(_id, {
      title,
      description,
      image,
      status,
    });

    const newItem = await appModel.findById(_id);

    res.status(200).send(newItem);
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occurred while updating the todo");
  }
};

module.exports.deleteTodo = async (req, res) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).send("Unauthorized: No token provided");
  }
  const { _id } = req.body;

  const item = await appModel.findById(_id);
  if (!item) {
    return res.status(500).send("Item not found");
  }
  try {
    appModel
      .findByIdAndDelete(_id)
      .then(() => res.status(200).send("Deleted Success"));
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occurred while deleting the todo");
  }
};
