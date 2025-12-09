import React from 'react'
import { TodoItem } from './TodoItem';

export const Todos = (props) => {
  return (
    <div className="container todo-list-wrapper">
      <h3 className="my-3 todo-list-title">Your Tasks</h3>

      {props.todos.length === 0 ? (
        <p className="empty-message">✨ No tasks yet. Add one above !</p>
      ) : (
        props.todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.sno}
            onDelete={props.onDelete}
            onFavorite={props.onFavorite}
          />
        ))
      )}
    </div>
  );
};

export default Todos;
