import { Link, useLocation } from "react-router-dom";

export default function Layout({ children }) {
  const location = useLocation();

  const menus = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: "🏠",
    },
    {
      name: "Ibibanza",
      path: "/lands",
      icon: "📍",
    },
    {
      name: "Materials",
      path: "/materials",
      icon: "🧱",
    },
    {
      name: "Projects",
      path: "/projects",
      icon: "🏗️",
    },
    {
      name: "Estimator",
      path: "/estimator",
      icon: "🧮",
    },
    {
      name: "Escrow",
      path: "/escrow",
      icon: "🔒",
    },
    {
      name: "Reports",
      path: "/reports",
      icon: "📊",
    },
    {
      name: "Settings",
      path: "/settings",
      icon: "⚙️",
    },
  ];

  return (
    <div style={container}>
      {/* SIDEBAR */}

      <aside style={sidebar}>
        <div>
          <div style={logoBox}>
            <div style={logoIcon}>
              🏗️
            </div>

            <div>
              <h1 style={logo}>
                BuildWise
              </h1>

              <p style={logoSub}>
                Construction OS
              </p>
            </div>
          </div>

          <nav style={nav}>
            {menus.map((menu) => {
              const active =
                location.pathname === menu.path;

              return (
                <Link
                  key={menu.path}
                  to={menu.path}
                  style={{
                    ...link,
                    ...(active
                      ? activeLink
                      : {}),
                  }}
                >
                  <span style={icon}>
                    {menu.icon}
                  </span>

                  {menu.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <button style={logoutBtn}>
          🚪 Logout
        </button>
      </aside>

      {/* MAIN */}

      <main style={main}>
        {/* TOPBAR */}

        <div style={topbar}>
          <div>
            <h2 style={topTitle}>
              BuildWise Platform 🚀
            </h2>

            <p style={subtitle}>
              Smart Construction Management System
            </p>
          </div>

          <div style={rightBox}>
            <button style={circleBtn}>
              🔔
            </button>

            <button style={circleBtn}>
              🌙
            </button>

            <div style={userBox}>
              👤 Admin
            </div>
          </div>
        </div>

        {/* PAGE CONTENT */}

        <div>{children}</div>
      </main>
    </div>
  );
}

/* =========================
   STYLES
========================= */

const container = {
  display: "flex",
  minHeight: "100vh",
  background: "#f1f5f9",
};

const sidebar = {
  width: "280px",
  background: "#071739",
  color: "white",
  padding: "24px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const logoBox = {
  display: "flex",
  alignItems: "center",
  gap: "14px",
  marginBottom: "40px",
};

const logoIcon = {
  width: "60px",
  height: "60px",
  borderRadius: "18px",
  background: "#0f52ff",
  display: "grid",
  placeItems: "center",
  fontSize: "28px",
};

const logo = {
  margin: 0,
  fontSize: "30px",
  fontWeight: "900",
};

const logoSub = {
  margin: "4px 0 0",
  color: "#94a3b8",
};

const nav = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
};

const link = {
  textDecoration: "none",
  color: "white",
  background: "#0f172a",
  padding: "16px",
  borderRadius: "16px",
  fontWeight: "700",
  display: "flex",
  alignItems: "center",
  gap: "14px",
  transition: "0.3s",
};

const activeLink = {
  background: "#0f52ff",
};

const icon = {
  fontSize: "22px",
};

const logoutBtn = {
  background: "#ef4444",
  color: "white",
  border: "none",
  padding: "16px",
  borderRadius: "16px",
  fontWeight: "900",
  cursor: "pointer",
};

const main = {
  flex: 1,
  padding: "24px",
};

const topbar = {
  background: "white",
  borderRadius: "24px",
  padding: "24px",
  marginBottom: "24px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
};

const topTitle = {
  margin: 0,
  color: "#071739",
};

const subtitle = {
  color: "#64748b",
  marginTop: "6px",
};

const rightBox = {
  display: "flex",
  alignItems: "center",
  gap: "14px",
};

const circleBtn = {
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  border: "none",
  background: "#e2e8f0",
  cursor: "pointer",
  fontSize: "20px",
};

const userBox = {
  background: "#e2e8f0",
  padding: "12px 20px",
  borderRadius: "999px",
  fontWeight: "800",
};