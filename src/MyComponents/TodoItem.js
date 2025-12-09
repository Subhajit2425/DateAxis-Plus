import React from 'react';

export const TodoItem = ({ todo, onDelete }) => {
  return (
    <div className="todo-card">
      <div className="todo-text">
        <div className="todo-title">{todo.title}</div>
        <div className="todo-desc">{todo.desc}</div>
      </div>
      <button className="delete-btn" onClick={() => onDelete(todo)}>
        Delete
      </button>
    </div>
  );
};
