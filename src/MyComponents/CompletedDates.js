import React from "react";
import DatesItem from "./DatesItem";

const CompletedDates = ({ dates, onDelete }) => {
  const isCompletedDate = (dateStr) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const eventDate = new Date(dateStr);
    eventDate.setHours(0, 0, 0, 0);

    return eventDate < today;
  };

  const completedDates = dates.filter((item) =>
    isCompletedDate(item.date)
  );

  return (
    <div style={styles.pageWrapper}>
      {/* Header */}
      <div style={styles.header}>
        <h2 style={styles.title}>Completed Dates</h2>
        <p style={styles.subtitle}>
          Past events and milestones you’ve already crossed
        </p>
      </div>

      {/* Content */}
      {completedDates.length === 0 ? (
        <div style={styles.emptyCard}>
          <p style={styles.emptyText}>
            No completed dates yet.<br />
            Past events will appear here automatically.
          </p>
        </div>
      ) : (
        <div style={styles.list}>
          {completedDates.map((item) => (
            <DatesItem
              key={item.id}
              dateItem={item}
              onDelete={onDelete}
              onPriority={() => {}}
              completed
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CompletedDates;


const styles = {
  pageWrapper: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "32px 20px 80px",
  },

  header: {
    marginBottom: "28px",
  },

  title: {
    fontSize: "28px",
    fontWeight: 700,
    color: "#0f172a",
    marginBottom: "6px",
  },

  subtitle: {
    fontSize: "14px",
    color: "#64748b",
  },

  list: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },

  emptyCard: {
    backgroundColor: "#f1f5f9",
    border: "1px dashed #cbd5e1",
    borderRadius: "14px",
    padding: "48px 24px",
    textAlign: "center",
    fontSize: "22px",
  },

  emptyText: {
    marginTop: "10px",
    fontSize: "15px",
    color: "#475569",
    lineHeight: "1.6",
  },
};
