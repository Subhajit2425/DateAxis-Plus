import React from "react";
import { useNavigate } from "react-router-dom";
import DatesItem from "./DatesItem";

const Dates = ({ dates, onDelete, onPriority }) => {
  const navigate = useNavigate();

  return (
    <div className="container dates-list-wrapper">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Your Important Dates</h3>

        <button
          className="btn btn-success btn-sm"
          onClick={() => navigate("/add")}
        >
          + Add Date
        </button>
      </div>
      

      {dates.length === 0 ? (
        <p className="empty-message">
          ✨ No important dates yet. Add one above!
        </p>
      ) : (
        dates.map((item) => (
          <DatesItem
            key={item.id}
            dateItem={item}
            onDelete={onDelete}
            onPriority={onPriority}
          />
        ))
      )}
    </div>
  );
};

export default Dates;
