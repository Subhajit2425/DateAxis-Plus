import React from "react";

const DatesItem = ({ dateItem, onDelete, onPriority }) => {
  return (
    <div className="date-card">
      <div className="date-content">
        <div className="date-header">
          <h5 className="date-title">{dateItem.title}</h5>

          <button
            className="priority-btn"
            onClick={() => onPriority(dateItem)}
            title="Mark as important"
          >
            {dateItem.priority ? "★" : "☆"}
          </button>
        </div>

        <div className="date-meta">
          <span className="date-badge">{dateItem.category}</span>
          <span className="date-value">
            {new Date(dateItem.date).toDateString()}
          </span>
        </div>

        {dateItem.notes && (
          <p className="date-notes">{dateItem.notes}</p>
        )}

        <button
          className="delete-btn"
          onClick={() => onDelete(dateItem)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DatesItem;
