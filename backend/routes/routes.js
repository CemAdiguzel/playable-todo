const { Router } = require("express");
const {
  getTodo,
  saveTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/appController");

const router = Router();

router.get("/", getTodo);
router.post("/create", saveTodo);
router.post("/update", updateTodo);
router.post("/delete", deleteTodo);

module.exports = router;
