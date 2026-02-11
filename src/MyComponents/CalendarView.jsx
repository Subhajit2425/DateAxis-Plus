import React, { useMemo, useState } from "react";

const CalendarView = ({ dates }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // 🔹 Get all days of month
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayIndex = new Date(year, month, 1).getDay();

  const startDay = firstDayIndex === 0 ? 6 : firstDayIndex - 1;

  const calendarDays = [];

  for (let i = 0; i < startDay; i++) {
    calendarDays.push(null);
  }

  for (let d = 1; d <= daysInMonth; d++) {
    calendarDays.push(new Date(year, month, d));
  }

  // 🔹 Normalize date (ignore time)
  const normalize = (date) =>
    new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();

  const todayNormalized = normalize(new Date());

  const eventsMap = useMemo(() => {
    const map = {};
    dates.forEach((item) => {
      const d = new Date(item.date);
      const key = normalize(d);
      if (!map[key]) map[key] = [];
      map[key].push(item);
    });
    return map;
  }, [dates]);

  const changeMonth = (direction) => {
    const newDate = new Date(year, month + direction, 1);
    setCurrentDate(newDate);
  };

  return (
    <div style={styles.page}>
      <h2 style={styles.title}>Calendar View</h2>
      <p style={styles.subtitle}>
        Visual overview of all your important dates
      </p>

      <div style={styles.calendarCard}>
        {/* Header */}
        <div style={styles.calendarHeader}>
          <button onClick={() => changeMonth(-1)} style={styles.navBtn}>‹</button>

          <h3 style={styles.monthTitle}>
            {currentDate.toLocaleString("default", {
              month: "long",
              year: "numeric",
            })}
          </h3>

          <button onClick={() => changeMonth(1)} style={styles.navBtn}>›</button>
        </div>

        {/* Weekdays */}
        <div style={styles.weekRow}>
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
            <div key={day} style={styles.weekDay}>{day}</div>
          ))}
        </div>

        {/* Days Grid */}
        <div style={styles.grid}>
          {calendarDays.map((date, index) => {
            if (!date)
              return <div key={index} style={styles.emptyCell}></div>;

            const normalized = normalize(date);
            const isToday = normalized === todayNormalized;
            const isSelected =
              normalized === normalize(selectedDate);
            const hasEvents = eventsMap[normalized];
            const hasImportant =
              hasEvents && hasEvents.some((e) => e.priority);

            return (
              <div
                key={index}
                onClick={() => setSelectedDate(date)}
                style={{
                  ...styles.dayCell,
                  backgroundColor: isSelected
                    ? "#2563eb"
                    : hasImportant
                    ? "#fef3c7"
                    : hasEvents
                    ? "#e0f2fe"
                    : "#ffffff",
                  color: isSelected ? "#ffffff" : "#0f172a",
                  border: isToday ? "2px solid #22c55e" : "1px solid #e2e8f0",
                }}
              >
                {date.getDate()}
              </div>
            );
          })}
        </div>
      </div>

      {/* Events Panel */}
      <div style={styles.eventsPanel}>
        <h3>
          Events on{" "}
          {selectedDate.toLocaleDateString(undefined, {
            weekday: "short",
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </h3>

        {eventsMap[normalize(selectedDate)] ? (
          eventsMap[normalize(selectedDate)].map((event) => (
            <div key={event.id} style={styles.eventCard}>
              <strong>{event.title}</strong>
              <div style={{ fontSize: "13px", color: "#64748b" }}>
                {event.category}
              </div>
            </div>
          ))
        ) : (
          <p style={{ color: "#94a3b8" }}>No events</p>
        )}
      </div>
    </div>
  );
};

export default CalendarView;


const styles = {
  page: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "40px 20px",
  },
  title: {
    fontSize: "28px",
    fontWeight: 700,
    marginBottom: "6px",
  },
  subtitle: {
    color: "#64748b",
    marginBottom: "30px",
  },
  calendarCard: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
  },
  calendarHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  navBtn: {
    background: "none",
    border: "none",
    fontSize: "22px",
    cursor: "pointer",
  },
  monthTitle: {
    fontSize: "18px",
    fontWeight: 600,
  },
  weekRow: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    marginBottom: "10px",
  },
  weekDay: {
    textAlign: "center",
    fontSize: "12px",
    fontWeight: 600,
    color: "#64748b",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    gap: "8px",
  },
  emptyCell: {
    height: "40px",
  },
  dayCell: {
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "14px",
    transition: "all 0.2s ease",
  },
  eventsPanel: {
    marginTop: "40px",
  },
  eventCard: {
    backgroundColor: "#f8fafc",
    padding: "12px",
    borderRadius: "10px",
    marginTop: "10px",
  },
};
