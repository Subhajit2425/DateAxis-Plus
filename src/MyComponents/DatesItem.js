import React from "react";
import { useNavigate } from "react-router-dom";

const DatesItem = ({ dateItem, onDelete, onPriority }) => {
  const navigate = useNavigate();

  const eventDate = new Date(dateItem.date);
  const now = new Date();

  const diffMs = eventDate - now;
  const diffDays =
    diffMs > 0
      ? Math.ceil(diffMs / (1000 * 60 * 60 * 24))
      : Math.floor(diffMs / (1000 * 60 * 60 * 24));


  const dateLabel = eventDate.toLocaleDateString(undefined, {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  let timeLabel = null;

  if (
    dateItem.date.includes("T") &&
    !dateItem.date.endsWith("T00:00")
  ) {
    const [, timePart] = dateItem.date.split("T");
    const [hh, mm] = timePart.split(":");
    timeLabel = `${hh}:${mm}`;
  }

  return (
    <div style={styles.card}>
      {/* Header */}
      <div style={styles.header}>
        <div>
          <h4 style={styles.title}>{dateItem.title}</h4>

          <div style={styles.metaRow}>
            <span style={styles.badge}>{dateItem.category}</span>
            <span style={styles.dateText}>
              {dateLabel}
              {timeLabel && (
                <span style={styles.timeText}> • {timeLabel}</span>
              )}
            </span>
          </div>
        </div>

        <button
          onClick={() => onPriority(dateItem)}
          title="Mark as important"
          style={{
            ...styles.priorityBtn,
            color: dateItem.priority ? "#f59e0b" : "#94a3b8",
          }}
        >
          ★
        </button>
      </div>

      {/* Notes */}
      {dateItem.notes && (
        <p style={styles.notes}>{dateItem.notes}</p>
      )}

      {/* Actions */}
      <div style={styles.footer}>
        <span style={styles.daysLeft}>
          {diffMs > 0
            ? diffDays === 0
              ? "Today"
              : `${diffDays} days remaining`
            : `${Math.abs(diffDays)} days ago`}
        </span>

        <div style={{ display: "flex", gap: "10px" }}>
          <button
            style={styles.editBtn}
            onClick={() => navigate(`/edit/${dateItem.id}`)}
          >
            Edit
          </button>

          <button
            style={styles.deleteBtn}
            onClick={() => onDelete(dateItem)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DatesItem;


const styles = {
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "14px",
    padding: "20px 22px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
    border: "1px solid #e5e7eb",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "16px",
  },

  title: {
    fontSize: "18px",
    fontWeight: 600,
    color: "#0f172a",
    marginBottom: "6px",
  },

  metaRow: {
    display: "flex",
    gap: "12px",
    alignItems: "center",
    fontSize: "13px",
  },

  badge: {
    backgroundColor: "#e0f2fe",
    color: "#0369a1",
    padding: "4px 10px",
    borderRadius: "999px",
    fontWeight: 500,
  },

  dateText: {
    color: "#64748b",
  },

  priorityBtn: {
    background: "none",
    border: "none",
    fontSize: "22px",
    cursor: "pointer",
    transition: "transform 0.2s ease",
  },

  notes: {
    marginTop: "14px",
    fontSize: "14px",
    color: "#475569",
    lineHeight: "1.6",
  },

  footer: {
    marginTop: "18px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "16px",
  },

  daysLeft: {
    fontSize: "13px",
    color: "#2563eb",
    fontWeight: 500,
  },

  editBtn: {
    backgroundColor: "#e0f2fe",
    color: "#0369a1",
    border: "none",
    padding: "6px 14px",
    borderRadius: "8px",
    fontSize: "13px",
    fontWeight: 500,
    cursor: "pointer",
  },

  deleteBtn: {
    backgroundColor: "#fee2e2",
    color: "#b91c1c",
    border: "none",
    padding: "6px 14px",
    borderRadius: "8px",
    fontSize: "13px",
    fontWeight: 500,
    cursor: "pointer",
  },
};
