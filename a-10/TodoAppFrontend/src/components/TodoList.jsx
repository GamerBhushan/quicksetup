import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./TodoList.css";

const TodoList = ({ todos, onDelete, onToggle, onEdit }) => {
    const [editingId, setEditingId] = useState(null);
    const [editTitle, setEditTitle] = useState("");

    const handleEdit = (todo) => {
        setEditingId(todo._id);
        setEditTitle(todo.title);
    };

    const handleSave = (id) => {
        onEdit(id, editTitle);
        setEditingId(null);
    };

    return (
        <motion.ul
            className="todo-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <AnimatePresence>
                {todos.map((todo) => (
                    <motion.li
                        key={todo._id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                        className={todo.completed ? "completed" : ""}
                    >
                        {editingId === todo._id ? (
                            <>
                                <input
                                    type="text"
                                    value={editTitle}
                                    onChange={(e) => setEditTitle(e.target.value)}
                                />
                                <button onClick={() => handleSave(todo._id)}>Save</button>
                            </>
                        ) : (
                            <>
                                <span
                                    className="todo-title"
                                    onClick={() => onToggle(todo._id, !todo.completed)}
                                >
                                    {todo.title}
                                </span>
                                <div className="todo-actions">
                                    <button onClick={() => handleEdit(todo)}>✏️</button>
                                    <button onClick={() => onDelete(todo._id)}>🗑️</button>
                                </div>
                            </>
                        )}
                    </motion.li>
                ))}
            </AnimatePresence>
        </motion.ul>
    );
};

export default TodoList;
