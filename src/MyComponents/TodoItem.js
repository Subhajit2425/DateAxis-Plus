import React from 'react';

export const TodoItem = ({ todo, onDelete, onFavorite }) => {
  return (
    <div className="todo-card">
      <div className="todo-text">
        <div className="todo-title">{todo.title}</div>
        <div className="todo-desc">{todo.desc}</div>
      </div>

      <button
        className="btn btn-warning btn-sm mx-2"
        onClick={() => onFavorite(todo)}
      >
        {todo.favorite ? "★" : "☆"}
      </button>
      
      <button className="delete-btn" onClick={() => onDelete(todo)}>
        Delete
      </button>
    </div>
  );
};
