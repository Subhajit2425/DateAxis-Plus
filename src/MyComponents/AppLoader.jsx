import React from "react";

const AppLoader = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <div style={styles.logo}>
          DateAxis<span style={styles.plus}>+</span>
        </div>

        <div style={styles.loaderBar}>
          <div style={styles.loaderFill} />
        </div>

        <p style={styles.tagline}>
          Designed to remember what matters
        </p>
      </div>
    </div>
  );
};

export default AppLoader;


const styles = {
  wrapper: {
    height: "100vh",
    width: "100vw",
    backgroundColor: "#0f172a",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    textAlign: "center",
    width: "260px",
  },

  logo: {
    fontSize: "32px",
    fontWeight: 700,
    color: "#e5e7eb",
    marginBottom: "18px",
    letterSpacing: "0.5px",
  },

  plus: {
    color: "#60a5fa",
  },

  loaderBar: {
    width: "100%",
    height: "6px",
    backgroundColor: "#1e293b",
    borderRadius: "999px",
    overflow: "hidden",
    marginBottom: "18px",
  },

  loaderFill: {
    height: "100%",
    width: "100%",
    backgroundColor: "#60a5fa",
    animation: "loaderMove 1.4s ease-in-out infinite",
  },

  tagline: {
    fontSize: "13px",
    color: "#94a3b8",
  },
};
