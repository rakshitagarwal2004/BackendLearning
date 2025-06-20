const express = require("express");
const router = express.Router();

//import controller
const { createTodo } = require("../controllers/createTodo");
const { getTodos,getTodoById } = require("../controllers/getTodo.js");
const { updateTodo} = require("../controllers/updateTodo");
const { deleteTodo} = require("../controllers/deleteTodo");

//define APi routes
router.post("/createTodo", createTodo);//path  ko controller se connect karna
router.get("/getTodos", getTodos);
router.get("/getTodos/:id", getTodoById);
router.put("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);

module.exports = router;