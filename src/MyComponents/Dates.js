import React from "react";
import DatesItem from "./DatesItem";

const Dates = ({ dates, onDelete, onPriority }) => {
  return (
    <div className="container dates-list-wrapper">
      <h3 className="my-3 dates-list-title">Your Important Dates</h3>

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
