const express = require("express");
const Todo = require("../models/Todo");

const router = express.Router();

// GET all todos
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// POST a new todo
router.post("/", async (req, res) => {
  try {
    const { task } = req.body; // Ensure we're extracting 'task' from the request

    if (!task) {
      return res.status(400).json({ error: "Task is required" });
    }

    const newTodo = new Todo({ task });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE a todo
router.delete("/:id", async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: "Todo deleted" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
