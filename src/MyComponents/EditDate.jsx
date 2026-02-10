import React, { useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditDate = ({ dates, onUpdate }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  // 🔹 Find date safely
  const dateItem = useMemo(
    () => dates.find((d) => d.id === id),
    [dates, id]
  );

  // 🔹 Safe initial values
  const [title, setTitle] = useState(dateItem.title);
  const [category, setCategory] = useState(dateItem.category);
  const [notes, setNotes] = useState(dateItem.notes || "");

  const [date, setDate] = useState(dateItem.date.split("T")[0]);
  const [time, setTime] = useState(
    dateItem.date.includes("T") ? dateItem.date.split("T")[1]?.slice(0, 5) : ""
  );

  const [error, setError] = useState("");

  // 🔹 If not found, do NOT crash
  if (!dateItem) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h3>Date not found</h3>
        <button onClick={() => navigate("/")}>Go back</button>
      </div>
    );
  }

  const submit = (e) => {
    e.preventDefault();

    if (!title.trim() || !date) {
      setError("Title and date are required.");
      return;
    }

    const updatedDateTime = time
      ? `${date}T${time}`
      : `${date}T00:00`;

    if (new Date(updatedDateTime) < new Date()) {
      setError("You cannot set a past date or time.");
      return;
    }

    onUpdate({
      ...dateItem,
      title: title.trim(),
      category,
      notes: notes.trim(),
      date: updatedDateTime,
    });

    navigate("/");
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Edit Date</h2>

        <form onSubmit={submit}>
          {/* Title */}
          <div style={styles.field}>
            <label style={styles.label}>Event Title</label>
            <input
              style={styles.input}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Date */}
          <div style={styles.field}>
            <label style={styles.label}>Event Date</label>
            <input
              type="date"
              style={styles.input}
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          {/* Time */}
          <div style={styles.field}>
            <label style={styles.label}>
              Event Time <span style={{ color: "#94a3b8" }}>(optional)</span>
            </label>
            <input
              type="time"
              style={styles.input}
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>

          {/* Category */}
          <div style={styles.field}>
            <label style={styles.label}>Category</label>
            <select
              style={styles.input}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
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
            <label style={styles.label}>Notes</label>
            <textarea
              style={{ ...styles.input, height: "90px" }}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>

          {error && <div style={styles.error}>{error}</div>}

          <div style={styles.actions}>
            <button
              type="button"
              style={styles.secondaryBtn}
              onClick={() => navigate("/")}
            >
              Cancel
            </button>

            <button type="submit" style={styles.primaryBtn}>
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditDate;


const styles = {
  page: {
    minHeight: "calc(100vh - 120px)",
    display: "flex",
    justifyContent: "center",
    padding: "60px 20px",
    backgroundColor: "#f8fafc",
  },
  card: {
    width: "100%",
    maxWidth: "520px",
    backgroundColor: "#fff",
    borderRadius: "16px",
    padding: "28px 30px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
  },
  title: {
    fontSize: "24px",
    fontWeight: 700,
    marginBottom: "20px",
  },
  field: {
    marginBottom: "16px",
  },
  label: {
    fontSize: "13px",
    fontWeight: 600,
    marginBottom: "6px",
    display: "block",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "10px",
    border: "1px solid #cbd5e1",
  },
  error: {
    backgroundColor: "#fee2e2",
    color: "#b91c1c",
    padding: "10px",
    borderRadius: "10px",
    marginBottom: "16px",
  },
  actions: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "12px",
  },
  primaryBtn: {
    backgroundColor: "#2563eb",
    color: "#fff",
    border: "none",
    padding: "10px 18px",
    borderRadius: "10px",
    cursor: "pointer",
  },
  secondaryBtn: {
    backgroundColor: "#f1f5f9",
    border: "1px solid #e2e8f0",
    padding: "10px 16px",
    borderRadius: "10px",
    cursor: "pointer",
  },
};
