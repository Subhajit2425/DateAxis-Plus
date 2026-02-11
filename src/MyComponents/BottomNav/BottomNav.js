import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./BottomNav.css";

import {
  HomeOutlined,
  StarOutline,
  CheckCircleOutline,
} from "@mui/icons-material";
import CalendarMonthOutlined from "@mui/icons-material/CalendarMonthOutlined";

const BottomNav = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`bottom-nav ${visible ? "show" : "hide"}`}>
      <NavLink to="/" className="bottom-nav-item">
        <HomeOutlined />
        <span>Home</span>
      </NavLink>

      <NavLink to="/favourite" className="bottom-nav-item">
        <StarOutline />
        <span>Important</span>
      </NavLink>

      <NavLink to="/completed" className="bottom-nav-item">
        <CheckCircleOutline />
        <span>Completed</span>
      </NavLink>

      <NavLink to="/calendar" className="bottom-nav-item">
        <CalendarMonthOutlined />
        <span>Calendar</span>
      </NavLink>
    </div>
  );
};

export default BottomNav;
