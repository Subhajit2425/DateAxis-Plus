import React, { useState } from 'react';

export const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const [showError, setShowError] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            setShowError(true);
            return;
        }
        setShowError(false);
        addTodo(title, desc);
        setTitle("");
        setDesc("");
    };


    return (
        <div className="container my-3">
            <div className="todo-card">
                <h3>Add a Todo</h3>
                <form onSubmit={submit}>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            placeholder="Todo Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <label htmlFor="title">Todo Title</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="desc"
                            placeholder="Todo Description"
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                        />
                        <label htmlFor="desc">Todo Description</label>
                    </div>


                    <button type="submit" className="btn btn-sm btn-success btn-modern">Add Todo</button>

                    {(!title || !desc) && showError && (
                        <p className="text-danger mt-2">* Title & Description cannot be blank.</p>
                    )}
                </form>
            </div>
        </div>
    )
}


