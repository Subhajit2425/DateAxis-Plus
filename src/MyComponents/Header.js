import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = ({ title }) => {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path ? styles.activeLink : styles.link;

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        {/* Brand */}
        <Link to="/" style={styles.brand}>
          <img
            src={process.env.PUBLIC_URL + "/icons/logo512.png"}
            alt="DateAxis Logo"
            style={styles.logo}
          />
          <span>
            DateAxis<span style={styles.plus}>+</span>
          </span>
        </Link>

        {/* Navigation */}
        <nav className="desktop-nav">
          <nav style={styles.nav}>
            <Link to="/" style={isActive("/")}>Home</Link>
            <Link to="/calendar" style={isActive("/calendar")}>Calendar</Link>
            <Link to="/favourite" style={isActive("/favourite")}>Important</Link>
            <Link to="/completed" style={isActive("/completed")}>Completed</Link>
            <Link to="/about" style={isActive("/about")}>About</Link>
          </nav>
        </nav>

        {/* Right Action */}
        <Link to="/add" style={styles.addBtn}>
          + Add Date
        </Link>
      </div>
    </header >
  );
};

export default Header;


const styles = {
  header: {
    backgroundColor: "#0f172a",
    borderBottom: "1px solid #e5e7eb",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },

  logo: {
    width: "36px",
    height: "36px",
    objectFit: "contain",
    marginRight: "10px",
    borderRadius: "10px",
    boxShadow: "0 6px 16px rgba(0,0,0,0.25)",
  },

  plus: {
    marginLeft: "2px",
    fontWeight: "900",
    color: "#38bdf8",
  },

  brand: {
    display: "flex",
    alignItems: "center",
    fontSize: "22px",
    fontWeight: 700,
    color: "#ffffff",
    textDecoration: "none",
    letterSpacing: "0.2px",
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "14px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
  },

  nav: {
    display: "flex",
    gap: "24px",
    alignItems: "center",
  },

  link: {
    fontSize: "14px",
    fontWeight: 500,
    color: "#dfdfdf",
    textDecoration: "none",
    paddingBottom: "4px",
  },

  activeLink: {
    fontSize: "14px",
    fontWeight: 600,
    color: "#4178ed",
    textDecoration: "none",
    borderBottom: "2px solid #2563eb",
    paddingBottom: "4px",
  },

  addBtn: {
    backgroundColor: "#2563eb",
    color: "#ffffff",
    padding: "8px 14px",
    borderRadius: "10px",
    fontSize: "13px",
    fontWeight: 600,
    textDecoration: "none",
    transition: "background-color 0.2s ease",
  },
};
