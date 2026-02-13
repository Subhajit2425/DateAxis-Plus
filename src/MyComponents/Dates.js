import React from "react";
import DatesItem from "./DatesItem";

const Dates = ({ dates, onDelete, onPriority }) => {
  // 🔹 Today (start of day)
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // 🔹 Filter upcoming dates only
  const upcomingDates = dates.filter((item) => {
    const itemDate = new Date(item.date);
    itemDate.setHours(0, 0, 0, 0);

    return itemDate >= today;
  });


  // 🔹 Sort ascending (nearest first)
  const sortedDates = [...upcomingDates].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  return (
    <div style={styles.pageWrapper}>
      {/* Header */}
      <div style={styles.headerRow}>
        <div>
          <h2 style={styles.title}>Upcoming Dates</h2>
          <p style={styles.subtitle}>
            Track exams, medical visits, legal events, and personal milestones
          </p>
        </div>
      </div>

      {/* Content */}
      {sortedDates.length === 0 ? (
        <div style={styles.emptyCard}>
          <p style={styles.emptyText}>
            No upcoming dates.<br />
            Click <strong>“Add Date”</strong> to get started.
          </p>
        </div>
      ) : (
        <div style={styles.listWrapper}>
          {sortedDates.map((item) => (
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

export default Dates;


const styles = {
  pageWrapper: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "32px 20px 60px",
  },

  headerRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "28px",
    gap: "20px",
    flexWrap: "wrap",
  },

  title: {
    fontSize: "28px",
    fontWeight: 700,
    color: "#0f172a", // MedAxis dark
    marginBottom: "6px",
  },

  subtitle: {
    fontSize: "14px",
    color: "#64748b",
  },

  addButton: {
    backgroundColor: "#2563eb", // MedAxis blue
    color: "#fff",
    border: "none",
    padding: "10px 18px",
    borderRadius: "10px",
    fontSize: "14px",
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.25s ease",
  },

  listWrapper: {
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
    marginTop: "20px",
  },

  emptyIcon: {
    fontSize: "26px",
    display: "block",
    marginBottom: "10px",
  },

  emptyText: {
    fontSize: "15px",
    color: "#475569",
    lineHeight: "1.6",
  },
};
