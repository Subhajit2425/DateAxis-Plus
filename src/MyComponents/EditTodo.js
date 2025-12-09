import React, { useState } from 'react';

export const EditTodo = ({ todo, onUpdate }) => {

  const [title, setTitle] = useState(todo.title);
  const [desc, setDesc] = useState(todo.desc);

  const submit = (e) => {
    e.preventDefault();
    onUpdate({ ...todo, title, desc });
  };

  return (
    <div className="container my-3">
      <h3>Edit Todo</h3>

      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Todo Title</label>
          <input type="text" id="title" className="form-control"
            value={title} onChange={(e)=>setTitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="desc" className="form-label">Todo Description</label>
          <input type="text" id="desc" className="form-control"
            value={desc} onChange={(e)=>setDesc(e.target.value)}
          />
        </div>

        <button className="btn btn-success btn-sm">Update Todo</button>
      </form>
    </div>
  );
};
