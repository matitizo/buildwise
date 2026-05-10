import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div style={container}>
      {/* SIDEBAR */}

      <div style={sidebar}>
        <h1 style={logo}>BuildWise</h1>

        <nav style={nav}>
          <Link to="/dashboard" style={link}>
            Dashboard
          </Link>

          <Link to="/lands" style={link}>
            Ibibanza
          </Link>

          <Link to="/materials" style={link}>
            Materials
          </Link>

          <Link to="/projects" style={link}>
            Projects
          </Link>

          <Link to="/reports" style={link}>
            Reports
          </Link>

          <Link to="/settings" style={link}>
            Settings
          </Link>
        </nav>
      </div>

      {/* MAIN */}

      <div style={main}>
        {/* TOPBAR */}

        <div style={topbar}>
          <div>
            <h2 style={{ margin: 0 }}>
              BuildWise Platform 🚀
            </h2>

            <p style={subtitle}>
              Smart Construction Management System
            </p>
          </div>

          <div style={userBox}>
            <span>👤</span>
            <span>Admin</span>
          </div>
        </div>

        {/* PAGE */}

        <div>{children}</div>
      </div>
    </div>
  );
}

/* =========================
   STYLES
========================= */

const container = {
  display: "flex",
  minHeight: "100vh",
  background: "#e2e8f0",
};

const sidebar = {
  width: "260px",
  background: "#071739",
  color: "white",
  padding: "30px 20px",
};

const logo = {
  marginBottom: "40px",
  fontSize: "34px",
};

const nav = {
  display: "flex",
  flexDirection: "column",
  gap: "18px",
};

const link = {
  color: "white",
  textDecoration: "none",
  background: "#0f172a",
  padding: "14px",
  borderRadius: "12px",
  fontWeight: "700",
};

const main = {
  flex: 1,
  padding: "24px",
};

const topbar = {
  background: "white",
  borderRadius: "22px",
  padding: "24px",
  marginBottom: "24px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const subtitle = {
  color: "#64748b",
};

const userBox = {
  background: "#e2e8f0",
  padding: "12px 20px",
  borderRadius: "999px",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  fontWeight: "800",
};