import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./BottomNav.css";

import {
  HomeOutlined,
  StarOutline,
  CheckCircleOutline,
  InfoOutlined,
} from "@mui/icons-material";

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

      <NavLink to="/about" className="bottom-nav-item">
        <InfoOutlined />
        <span>About</span>
      </NavLink>
    </div>
  );
};

export default BottomNav;
