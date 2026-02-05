import React, { useState } from "react";
import { createUser } from "../firebase/userService";

const UserOnboarding = ({ onComplete }) => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleContinue = async () => {
    if (!name.trim()) {
      setError("Please enter your name to continue.");
      return;
    }

    try {
      setLoading(true);

      // 🔥 Firestore creates user & returns ID
      const userId = await createUser(name.trim());

      localStorage.setItem("userName", name.trim());

      onComplete(userId);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.title}>
          Welcome to <span style={styles.brand}>DateAxis+</span>
        </h2>

        <p style={styles.subtitle}>
          Let’s personalize your experience.<br />
          What should we call you?
        </p>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setError("");
          }}
          style={styles.input}
          autoFocus
        />

        {error && <div style={styles.error}>{error}</div>}

        <button
          style={styles.button}
          onClick={handleContinue}
          disabled={loading}
        >
          {loading ? "Saving..." : "Continue"}
        </button>

        <p style={styles.note}>
          Your name helps us personalize your experience.
        </p>
      </div>
    </div>
  );
};

export default UserOnboarding;


const styles = {
  wrapper: {
    height: "100vh",
    backgroundColor: "#0f172a",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },

  card: {
    backgroundColor: "#ffffff",
    borderRadius: "18px",
    padding: "36px 32px",
    maxWidth: "420px",
    width: "100%",
    textAlign: "center",
    boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
  },

  title: {
    fontSize: "26px",
    fontWeight: 700,
    color: "#0f172a",
    marginBottom: "10px",
  },

  brand: {
    color: "#2563eb",
  },

  subtitle: {
    fontSize: "14px",
    color: "#64748b",
    marginBottom: "24px",
    lineHeight: "1.6",
  },

  input: {
    width: "100%",
    padding: "12px 14px",
    fontSize: "15px",
    borderRadius: "12px",
    border: "1px solid #cbd5e1",
    outline: "none",
    marginBottom: "12px",
  },

  error: {
    backgroundColor: "#fee2e2",
    color: "#b91c1c",
    padding: "10px",
    borderRadius: "10px",
    fontSize: "13px",
    marginBottom: "14px",
  },

  button: {
    width: "100%",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    padding: "12px",
    borderRadius: "12px",
    border: "none",
    fontSize: "15px",
    fontWeight: 600,
    cursor: "pointer",
    marginTop: "4px",
  },

  note: {
    fontSize: "12px",
    color: "#94a3b8",
    marginTop: "14px",
  },
};
