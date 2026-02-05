import "./App.css";
import Header from "./MyComponents/Header";
import Dates from "./MyComponents/Dates";
import Footer from "./MyComponents/Footer";
import { AddDate } from "./MyComponents/AddDate";
import About from "./MyComponents/About";
import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  // Load from localStorage
  const getInitialDates = () => {
    const saved = localStorage.getItem("dates");
    return saved ? JSON.parse(saved) : [];
  };

  const [dates, setDates] = useState(getInitialDates);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("dates", JSON.stringify(dates));
  }, [dates]);

  // Add a new important date
  const addDate = (title, date, category, notes) => {
    const newDate = {
      id: Date.now(),
      title,
      date,
      category,
      notes,
      priority: false,
      createdAt: new Date().toISOString(),
    };

    setDates([...dates, newDate]);
  };

  // Delete a date
  const onDelete = (item) => {
    if (window.confirm("Delete this important date?")) {
      setDates(dates.filter((d) => d.id !== item.id));
    }
  };

  // Toggle priority (important)
  const togglePriority = (item) => {
    setDates(
      dates.map((d) =>
        d.id === item.id ? { ...d, priority: !d.priority } : d
      )
    );
  };

  return (
    <Router>
      <Header title="DateAxis+" />

      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={
            <>
              <Dates
                dates={dates}
                onDelete={onDelete}
                onPriority={togglePriority}
              />
            </>
          }
        />

        {/* Add Date page */}
        <Route
          path="/add"
          element={<AddDate addDate={addDate} />}
        />

        {/* Priority Dates */}
        <Route
          path="/priority"
          element={
            <Dates
              dates={dates.filter((d) => d.priority)}
              onDelete={onDelete}
              onPriority={togglePriority}
            />
          }
        />

        {/* About */}
        <Route path="/about" element={<About />} />

      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
