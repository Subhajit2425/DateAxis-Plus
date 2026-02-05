import React, { useState } from 'react';

export const AddDate = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [showError, setShowError] = useState(false);

    const submit = (e) => {
        e.preventDefault();

        if (title.trim() === "" || desc.trim() === "") {
            setShowError(true);
            return;
        }

        setShowError(false);
        addTodo(title.trim(), desc.trim());

        // Clear the form
        setTitle("");
        setDesc("");
    };

    return (
        <div className="container my-3">
            <div className="todo-card">
                <h3>Add a Date</h3>
                <form onSubmit={submit}>
                    
                    {/* Title Field */}
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            placeholder="Todo Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <label htmlFor="title">Date Title</label>
                    </div>

                    {/* Description Field */}
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="desc"
                            placeholder="Todo Description"
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                        />
                        <label htmlFor="desc">Date Description</label>
                    </div>

                    {/* Submit */}
                    <button type="submit" className="btn btn-sm btn-success btn-modern">
                        Add Date
                    </button>

                    {/* Error Text */}
                    {showError && (title.trim() === "" || desc.trim() === "") && (
                        <p className="text-danger mt-2">* Title & Description cannot be blank.</p>
                    )}
                </form>
            </div>
        </div>
    );
};
