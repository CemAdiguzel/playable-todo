const appModel = require("../models/Models");

module.exports.getTodo = async (req, res) => {
  const todo = await appModel.find();
  res.send(todo);
};

module.exports.saveTodo = async (req, res) => {
  const { text } = req.body;
  appModel.create({ text }).then((data) => {
    console.log("add succ");
    console.log(data);
    res.send(data);
  });
};

module.exports.updateTodo = async (req, res) => {
  const { _id, text } = req.body;

  appModel
    .findByIdAndUpdate(_id, { text })
    .then(() => res.send("Updated Success"))
    .catch((err) => console.log(err));
};

module.exports.deleteTodo = async (req, res) => {
  const { _id } = req.body;
  appModel
    .findByIdAndDelete(_id)
    .then(() => res.send("Deleted Success"))
    .catch((err) => console.log(err));
};
