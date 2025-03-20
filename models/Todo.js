const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: [true, "Task is required"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Todo", TodoSchema);
