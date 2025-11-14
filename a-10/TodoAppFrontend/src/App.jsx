import React, { useEffect, useState } from "react";
import API from "./api";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { motion } from "framer-motion";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const res = await API.get("/");
    setTodos(res.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async (title) => {
    const res = await API.post("/", { title });
    setTodos([...todos, res.data]);
  };

  const deleteTodo = async (id) => {
    await API.delete(`/${id}`);
    setTodos(todos.filter((t) => t._id !== id));
  };

  const toggleTodo = async (id, completed) => {
    const res = await API.put(`/${id}`, { completed });
    setTodos(todos.map((t) => (t._id === id ? res.data : t)));
  };

  const editTodo = async (id, title) => {
    const res = await API.put(`/${id}`, { title });
    setTodos(todos.map((t) => (t._id === id ? res.data : t)));
  };

  return (
    <motion.div
      className="App"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="app-title">📝 My To-Do List</h1>
      <TodoForm onAdd={addTodo} />
      <TodoList
        todos={todos}
        onDelete={deleteTodo}
        onToggle={toggleTodo}
        onEdit={editTodo}
      />
    </motion.div>
  );
};

export default App;
