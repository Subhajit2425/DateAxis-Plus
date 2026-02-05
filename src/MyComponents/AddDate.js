import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AddDate = ({ addDate }) => {
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [category, setCategory] = useState("Personal");
    const [notes, setNotes] = useState("");
    const [showError, setShowError] = useState(false);

    const submit = (e) => {
        e.preventDefault();

        if (!title.trim() || !date) {
            setShowError(true);
            return;
        }

        setShowError(false);
        addDate(title.trim(), date, category, notes.trim());

        // Reset form
        setTitle("");
        setDate("");
        setCategory("Personal");
        setNotes("");

        navigate("/");
    };

    return (
        <div className="container my-4">
            <div className="date-form-card">
                <h3 className="mb-3">Add an Important Date</h3>

                <form onSubmit={submit}>
                    {/* Title */}
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            placeholder="Event Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <label htmlFor="title">Event Title</label>
                    </div>

                    {/* Date */}
                    <div className="form-floating mb-3">
                        <input
                            type="date"
                            className="form-control"
                            id="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                        <label htmlFor="date">Event Date</label>
                    </div>

                    {/* Category */}
                    <div className="form-floating mb-3">
                        <select
                            className="form-select"
                            id="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option>Medical</option>
                            <option>Exam</option>
                            <option>Legal</option>
                            <option>Personal</option>
                            <option>Other</option>
                        </select>
                        <label htmlFor="category">Category</label>
                    </div>

                    {/* Notes */}
                    <div className="form-floating mb-3">
                        <textarea
                            className="form-control"
                            id="notes"
                            placeholder="Notes"
                            style={{ height: "100px" }}
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                        />
                        <label htmlFor="notes">Notes (optional)</label>
                    </div>

                    {/* Submit */}
                    <button type="submit" className="btn btn-success btn-sm">
                        Save Date
                    </button>

                    {/* Error */}
                    {showError && (
                        <p className="text-danger mt-2">
                            * Event title and date are required.
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
};
