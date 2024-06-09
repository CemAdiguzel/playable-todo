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

router.get("/getUsers", getUsers);
router.post("/getItems", getUsersTodo);
router.post("/getUser", getUser);
router.post("/create", createTodo);
router.post("/update", updateTodo);
router.post("/delete", deleteTodo);
router.post("/register", createUser);
router.post("/login", login);

module.exports = router;
