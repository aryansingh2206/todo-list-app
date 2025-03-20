import React, { useEffect, useState } from "react";
import { fetchTodos, addTodo, deleteTodo } from "./api/todoApi";
import "./App.css"; // Import modern styles

function App() {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const todosData = await fetchTodos();
        setTodos(todosData);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };
    loadTodos();
  }, []);

  const handleAddTodo = async () => {
    if (!newTask.trim()) return;

    try {
      console.log("Attempting to add task:", newTask);
      const addedTodo = await addTodo(newTask);
      console.log("Server response:", addedTodo);

      if (addedTodo && addedTodo._id) {
        setTodos([...todos, addedTodo]);
        setNewTask(""); // Clear input
      } else {
        console.error("Failed to add todo:", addedTodo);
      }
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter((todo) => todo._id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <div className="container">
      <h1>📝 To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTodo}>➕ Add</button>
      </div>

      <ul>
        {todos.length === 0 ? (
          <p className="empty-message">No tasks yet. Start adding some! 🚀</p>
        ) : (
          todos.map((todo) => (
            <li key={todo._id} className="todo-item">
              {todo.task}
              <button className="delete-btn" onClick={() => handleDeleteTodo(todo._id)}>
                ❌
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default App;
