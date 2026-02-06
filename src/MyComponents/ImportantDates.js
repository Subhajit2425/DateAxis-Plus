import React from "react";
import DatesItem from "./DatesItem";

const ImportantDates = ({ dates, onDelete, onPriority }) => {
  // 🔹 Today (start of day)
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // 🔹 Filter ONLY upcoming + important dates
  const upcomingImportantDates = dates.filter(
    (item) =>
      item.priority && new Date(item.date) >= today
  );

  // 🔹 Sort ascending (nearest first)
  const sortedImportantDates = [...upcomingImportantDates].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  return (
    <div style={styles.pageWrapper}>
      {/* Header */}
      <div style={styles.header}>
        <h2 style={styles.title}>Important Dates</h2>
        <p style={styles.subtitle}>
          High-priority dates that are coming up
        </p>
      </div>

      {/* Content */}
      {sortedImportantDates.length === 0 ? (
        <div style={styles.emptyCard}>
          <p style={styles.emptyText}>
            No upcoming important dates.<br />
            Mark a future date as important to see it here.
          </p>
        </div>
      ) : (
        <div style={styles.list}>
          {sortedImportantDates.map((item) => (
            <DatesItem
              key={item.id}
              dateItem={item}
              onDelete={onDelete}
              onPriority={onPriority}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImportantDates;


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
    backgroundColor: "#f8fafc",
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
