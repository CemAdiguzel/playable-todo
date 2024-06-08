const { Router } = require("express");
const {
  getUsersTodo,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/appController");
const {
  createUser,
  getUsers,
  getUser,
  login,
} = require("../controllers/userController");

const router = Router();

router.post("/getItems", getUsersTodo);
router.get("/getUsers", getUsers);
router.post("/getUser", getUser);
router.post("/create", createTodo);
router.post("/update", updateTodo);
router.post("/delete", deleteTodo);
router.post("/createUser", createUser);
router.post("/login", login);

module.exports = router;
