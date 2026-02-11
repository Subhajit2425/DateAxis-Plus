import React, { useEffect, useState } from "react";
import AppLoader from "./MyComponents/AppLoader";
import UserOnboarding from "./MyComponents/UserOnboarding"; // next step
import Header from "./MyComponents/Header";
import BottomNav from "./MyComponents/BottomNav/BottomNav";
import Dates from "./MyComponents/Dates";
import EditDate from "./MyComponents/EditDate";
import ImportantDates from "./MyComponents/ImportantDates";
import CompletedDates from "./MyComponents/CompletedDates";
import Footer from "./MyComponents/Footer";
import { AddDate } from "./MyComponents/AddDate";
import CalendarView from "./MyComponents/CalendarView";
import About from "./MyComponents/About";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(null);

  // Load from localStorage
  const getInitialDates = () => {
    try {
      const saved = localStorage.getItem("dates");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  };

  const [dates, setDates] = useState(getInitialDates);

  useEffect(() => {
    const initApp = async () => {
      // Simulate boot delay (UX polish)
      await new Promise((res) => setTimeout(res, 1200));

      const storedUserId = localStorage.getItem("userId");
      setUserId(storedUserId);
      setLoading(false);
    };

    initApp();
  }, []);


  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("dates", JSON.stringify(dates));
  }, [dates]);

  // Add a new important date
  const addDate = (title, date, category, notes) => {
    const newDate = {
      id: crypto.randomUUID(),
      title,
      date,
      category,
      notes,
      priority: false,
      createdAt: new Date().toISOString(),
    };

    setDates(prev => [...prev, newDate]);
  };

  const updateDate = (updatedItem) => {
    setDates((prev) =>
      prev.map((item) =>
        item.id === updatedItem.id ? updatedItem : item
      )
    );
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

  if (loading) {
    return <AppLoader />;
  }

  if (!userId) {
    return <UserOnboarding onComplete={setUserId} />;
  }

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

        <Route
          path="/edit/:id"
          element={
            <EditDate
              dates={dates}
              onUpdate={updateDate}
            />
          }
        />

        {/* Priority Dates */}
        <Route
          path="/favourite"
          element={
            <ImportantDates
              dates={dates}
              onDelete={onDelete}
              onPriority={togglePriority}
            />
          }
        />

        <Route
          path="/completed"
          element={
            <CompletedDates
              dates={dates}
              onDelete={onDelete}
            />
          }
        />

        <Route
          path="/calendar"
          element={<CalendarView dates={dates} />}
        />

        {/* About */}
        <Route path="/about" element={<About />} />

      </Routes>

      <BottomNav />
      <Footer />
    </Router>
  );
}

export default App;
