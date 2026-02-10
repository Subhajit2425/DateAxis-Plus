import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AddDate = ({ addDate }) => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("Personal");
  const [notes, setNotes] = useState("");
  const [showError, setShowError] = useState("");
  const [time, setTime] = useState("");

  const submit = (e) => {
    e.preventDefault();

    if (!title.trim() || !date) {
      setShowError("Event title and date are required.");
      return;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const selectedDateTime = new Date(
      time ? `${date}T${time}` : `${date}T00:00`
    );

    const now = new Date();

    if (selectedDateTime < now) {
      setShowError("You cannot add a past date or time.");
      return;
    }

    // 🔹 Combine date & time
    const dateTime = time
      ? `${date}T${time}`
      : `${date}T00:00`;

    addDate(
      title.trim(),
      dateTime,   // 🔥 use dateTime instead of date
      category,
      notes.trim()
    );

    navigate("/");
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        {/* Header */}
        <div style={styles.header}>
          <h2 style={styles.title}>Add an Important Date</h2>
          <p style={styles.subtitle}>
            Save exams, medical visits, legal events, and personal milestones
          </p>
        </div>

        <form onSubmit={submit}>
          {/* Title */}
          <div style={styles.field}>
            <label style={styles.label}>Event Title</label>
            <input
              type="text"
              style={styles.input}
              placeholder="e.g. Final Semester Exam"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                setShowError("");
              }}
            />
          </div>

          {/* Date */}
          <div style={styles.field}>
            <label style={styles.label}>Event Date</label>
            <input
              type="date"
              style={styles.input}
              value={date}
              min={new Date().toISOString().split("T")[0]}
              onChange={(e) => {
                setDate(e.target.value);
                setShowError("");
              }}
            />
          </div>

          {/* Time (Optional) */}
          <div style={styles.field}>
            <label style={styles.label}>
              Event Time <span style={{ color: "#94a3b8" }}>(optional)</span>
            </label>

            <input
              type="time"
              style={styles.input}
              value={time}
              onChange={(e) => {
                setTime(e.target.value);
                setShowError("");
              }}
            />
          </div>

          {/* Category */}
          <div style={styles.field}>
            <label style={styles.label}>Category</label>
            <select
              style={styles.input}
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                setShowError("");
              }}
            >
              <option>Medical</option>
              <option>Exam</option>
              <option>Legal</option>
              <option>Personal</option>
              <option>Other</option>
            </select>
          </div>

          {/* Notes */}
          <div style={styles.field}>
            <label style={styles.label}>Notes (optional)</label>
            <textarea
              style={{ ...styles.input, height: "90px" }}
              placeholder="Any additional details…"
              value={notes}
              onChange={(e) => {
                setNotes(e.target.value);
                setShowError("");
              }}
            />
          </div>

          {/* Error */}
          {showError && (
            <div style={styles.error}>
              {showError}
            </div>
          )}

          {/* Actions */}
          <div style={styles.actions}>
            <button
              type="button"
              style={styles.secondaryBtn}
              onClick={() => navigate("/")}
            >
              Cancel
            </button>

            <button
              type="submit"
              style={styles.primaryBtn}
              disabled={!title.trim() || !date}
            >
              Save Date
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


const styles = {
  page: {
    minHeight: "calc(100vh - 120px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "60px 20px",
    backgroundColor: "#f8fafc",
  },

  card: {
    width: "100%",
    maxWidth: "520px",
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "28px 30px 32px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
    border: "1px solid #e5e7eb",
  },

  header: {
    marginBottom: "24px",
  },

  title: {
    fontSize: "24px",
    fontWeight: 700,
    color: "#0f172a",
    marginBottom: "6px",
  },

  subtitle: {
    fontSize: "14px",
    color: "#64748b",
    lineHeight: "1.6",
  },

  field: {
    marginBottom: "18px",
  },

  label: {
    display: "block",
    fontSize: "13px",
    fontWeight: 600,
    color: "#334155",
    marginBottom: "6px",
  },

  input: {
    width: "100%",
    padding: "10px 12px",
    fontSize: "14px",
    borderRadius: "10px",
    border: "1px solid #cbd5e1",
    outline: "none",
    transition: "border 0.2s ease",
  },

  error: {
    backgroundColor: "#fee2e2",
    color: "#b91c1c",
    padding: "10px 12px",
    borderRadius: "10px",
    fontSize: "13px",
    marginBottom: "18px",
  },

  actions: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "12px",
    marginTop: "10px",
  },

  primaryBtn: {
    backgroundColor: "#2563eb",
    color: "#ffffff",
    border: "none",
    padding: "10px 18px",
    borderRadius: "10px",
    fontSize: "14px",
    fontWeight: 600,
    cursor: "pointer",
  },

  secondaryBtn: {
    backgroundColor: "#f1f5f9",
    color: "#334155",
    border: "1px solid #e2e8f0",
    padding: "10px 16px",
    borderRadius: "10px",
    fontSize: "14px",
    fontWeight: 500,
    cursor: "pointer",
  },
};
