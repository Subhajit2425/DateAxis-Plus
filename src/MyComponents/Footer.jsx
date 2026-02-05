import React, { useEffect, useState } from "react";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { APP_VERSION } from "../config/version"; // ✅ version import

export default function Footer() {
    const [showFooter, setShowFooter] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolledToBottom =
                window.innerHeight + window.scrollY >=
                document.body.offsetHeight - 10;

            setShowFooter(scrolledToBottom);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const footerStyle = {
        backgroundColor: "#0f172a",
        color: "#e5e7eb",
        padding: "60px 20px 30px",
        marginTop: "60px",
        borderTop: "1px solid #1e293b",
        transition: "opacity 0.6s ease, transform 0.6s ease",
        opacity: showFooter ? 1 : 0,
        transform: showFooter ? "translateY(0)" : "translateY(24px)",
    };

    const containerStyle = {
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        maxWidth: "1200px",
        margin: "0 auto",
        gap: "30px",
    };

    const columnStyle = {
        flex: 1,
        minWidth: "220px",
    };

    const linkStyle = {
        color: "#cbd5f5",
        textDecoration: "none",
        display: "block",
        margin: "8px 0",
        fontSize: "14px",
        opacity: 0.85,
    };

    const socialIconStyle = {
        color: "#cbd5f5",
        marginRight: "16px",
        fontSize: "26px",
        cursor: "pointer",
        transition: "transform 0.3s ease, color 0.3s ease",
    };

    const copyrightStyle = {
        color: "#94a3b8",
        textAlign: "center",
        marginTop: "40px",
        paddingTop: "20px",
        borderTop: "1px solid #1e293b",
        fontSize: "13px",
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        flexWrap: "wrap",
    };

    const socialLinks = [
        {
            icon: Facebook,
            url: "https://www.facebook.com/profile.php?id=61586741157245",
            label: "Facebook",
        },
        {
            icon: Twitter, // X
            url: "https://x.com/MedAxisPlus",
            label: "X",
        },
        {
            icon: Instagram,
            url: "https://www.instagram.com/medaxisplus/",
            label: "Instagram",
        },
        {
            icon: LinkedIn,
            url: "https://www.linkedin.com/in/medaxis-support-17643b39b/",
            label: "LinkedIn",
        },
    ];

    return (
        <footer className="desktop-footer" style={footerStyle}>
            <div style={containerStyle}>
                {/* Column 1 */}
                <div style={columnStyle}>
                    <h3 style={{ color: "#60a5fa", marginBottom: "14px" }}>
                        DateAxis<span style={{ color: "#e5e7eb" }}>+</span>
                    </h3>
                    <p style={{ fontSize: "14px", lineHeight: "1.7", opacity: 0.9 }}>
                        DateAxis+ helps you track and remember important life dates —
                        medical, exams, legal, and personal milestones — in one calm place.
                    </p>
                </div>

                {/* Column 2 */}
                <div style={columnStyle}>
                    <h4 style={{ marginBottom: "12px" }}>Quick Links</h4>
                    <Link to="/" style={linkStyle}>Home</Link>
                    <Link to="/add" style={linkStyle}>Add Date</Link>
                    <Link to="/favourite" style={linkStyle}>Important Dates</Link>
                    <Link to="/about" style={linkStyle}>About</Link>
                </div>

                {/* Column 3 */}
                <div style={columnStyle}>
                    <h4 style={{ marginBottom: "12px" }}>Contact</h4>
                    <p style={{ fontSize: "14px", opacity: 0.9 }}>
                        medaxisplus@gmail.com
                    </p>
                    <p style={{ fontSize: "14px", opacity: 0.9 }}>
                        +91 62953 530XX
                    </p>

                    <div style={{ marginTop: "14px", display: "flex", alignItems: "center" }}>
                        {socialLinks.map(({ icon: Icon, url, label }, i) => (
                            <a
                                key={i}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                style={{ textDecoration: "none" }}
                            >
                                <Icon
                                    style={socialIconStyle}
                                    onMouseEnter={(e) => {
                                        e.target.style.color = "#60a5fa";
                                        e.target.style.transform = "scale(1.15)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.color = "#cbd5f5";
                                        e.target.style.transform = "scale(1)";
                                    }}
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer bottom */}
            <div style={copyrightStyle}>
                <span>© {new Date().getFullYear()} DateAxis+</span>
                <span>•</span>
                <span>v{APP_VERSION}</span>
                <span>•</span>
                <span>All rights reserved</span>
            </div>
        </footer>
    );
}
