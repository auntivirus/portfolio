import React, { useState } from "react";
import { Link } from "react-scroll";
import { ThemeToggle } from "@portfolio/shared";
import { FaBars, FaTimes } from "react-icons/fa";

const Layout = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = ["About", "Experience", "Skills", "Projects", "Contact"];

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar Navigation - Desktop */}
      <aside
        style={{
          width: "280px",
          position: "fixed",
          height: "100vh",
          padding: "3rem 2rem",
          borderRight: "2px solid var(--text-primary)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "var(--bg-color)",
          zIndex: 10,
        }}
        className="sidebar"
      >
        <div>
          {/* Logo */}
          <div style={{ marginBottom: "4rem" }}>
            <h1
              style={{
                fontSize: "2rem",
                fontFamily: "Space Mono, monospace",
                fontWeight: 700,
                marginBottom: "0.5rem",
              }}
            >
              <span className="accent-text">SMIT</span>
            </h1>
            <div className="accent-bar" />
          </div>

          {/* Navigation */}
          <nav>
            <ul
              style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
            >
              {navItems.map((item, index) => (
                <li key={item} style={{ position: "relative" }}>
                  <Link
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    offset={-50}
                    style={{
                      color: "var(--text-secondary)",
                      cursor: "pointer",
                      fontFamily: "Space Mono, monospace",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      transition: "all 0.2s ease",
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                    activeClass="active-link"
                    spy={true}
                  >
                    <span
                      style={{
                        color: "var(--accent)",
                        fontSize: "0.7rem",
                        fontWeight: 400,
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Footer */}
        <div>
          <div style={{ marginBottom: "1rem" }}>
            <ThemeToggle />
          </div>
          <div
            style={{
              fontSize: "0.75rem",
              color: "var(--text-secondary)",
              fontFamily: "Space Mono, monospace",
            }}
          >
            © {new Date().getFullYear()}
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <div
        className="mobile-header"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          padding: "1.5rem 2rem",
          backgroundColor: "var(--bg-color)",
          borderBottom: "2px solid var(--text-primary)",
          display: "none",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 100,
        }}
      >
        <h1
          style={{
            fontSize: "1.5rem",
            fontFamily: "Space Mono, monospace",
            fontWeight: 700,
          }}
        >
          <span className="accent-text">SMIT</span>
        </h1>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: "none",
              border: "none",
              fontSize: "1.5rem",
              color: "var(--text-primary)",
              cursor: "pointer",
            }}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="mobile-menu"
          style={{
            position: "fixed",
            top: "80px",
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "var(--bg-color)",
            padding: "2rem",
            zIndex: 99,
            display: "none",
          }}
        >
          <nav>
            <ul
              style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
            >
              {navItems.map((item, index) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      color: "var(--text-primary)",
                      cursor: "pointer",
                      fontFamily: "Space Mono, monospace",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <span className="accent-text">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main
        style={{
          marginLeft: "280px",
          width: "calc(100% - 280px)",
          padding: "4rem",
        }}
      >
        {children}
      </main>

      <style>{`
        .active-link {
          color: var(--text-primary) !important;
          transform: translateX(8px);
        }
        
        .active-link::before {
          content: '';
          position: absolute;
          left: -2rem;
          top: 50%;
          transform: translateY(-50%);
          width: 40px;
          height: 2px;
          background: var(--accent);
        }
        
        @media (max-width: 768px) {
          .sidebar { 
            display: none !important; 
          }
          .mobile-header {
            display: flex !important;
          }
          .mobile-menu {
            display: block !important;
          }
          main { 
            margin-left: 0 !important;
            width: 100% !important;
            padding: 80px 2rem 4rem 2rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Layout;
