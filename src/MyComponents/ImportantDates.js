import React from "react";
import DatesItem from "./DatesItem";

const ImportantDates = ({ dates, onDelete, onPriority }) => {
  const importantDates = dates.filter((item) => item.priority);

  return (
    <div style={styles.pageWrapper}>
      {/* Header */}
      <div style={styles.header}>
        <h2 style={styles.title}>Important Dates</h2>
        <p style={styles.subtitle}>
          Dates you’ve marked as high priority
        </p>
      </div>

      {/* Content */}
      {importantDates.length === 0 ? (
        <div style={styles.emptyCard}>
          <p style={styles.emptyText}>
            No important dates yet.<br />
            Mark a date as important to see it here.
          </p>
        </div>
      ) : (
        <div style={styles.list}>
          {importantDates.map((item) => (
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
