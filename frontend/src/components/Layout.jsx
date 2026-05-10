import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Layout({ children }) {
  const location = useLocation();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("buildwise_user");
    localStorage.removeItem("buildwise_token");

    navigate("/login");
  };

  const menus = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: "🏠",
    },

    {
      name: "Projects",
      path: "/projects",
      icon: "🏗️",
    },

    {
      name: "Ibibanza",
      path: "/lands",
      icon: "📍",
    },

    {
      name: "Ibikoresho",
      path: "/materials",
      icon: "🧱",
    },

    {
      name: "Estimator",
      path: "/estimator",
      icon: "💰",
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
      name: "Notifications",
      path: "/notifications",
      icon: "🔔",
    },

    {
      name: "Settings",
      path: "/settings",
      icon: "⚙️",
    },
  ];

  return (
    <div style={layout}>
      {/* SIDEBAR */}
      <aside style={sidebar}>
        <div>
          <div style={logoBox}>
            <div style={logoIcon}>🏗️</div>

            <div>
              <h1 style={logoTitle}>BuildWise</h1>
              <p style={logoSub}>Construction OS</p>
            </div>
          </div>

          <div style={menuList}>
            {menus.map((menu) => {
              const active =
                location.pathname === menu.path;

              return (
                <Link
                  key={menu.path}
                  to={menu.path}
                  style={{
                    ...menuItem,
                    ...(active
                      ? activeMenu
                      : {}),
                  }}
                >
                  <span style={menuIcon}>
                    {menu.icon}
                  </span>

                  <span>{menu.name}</span>
                </Link>
              );
            })}
          </div>
        </div>

        <button
          onClick={logout}
          style={logoutBtn}
        >
          🚪 Logout
        </button>
      </aside>

      {/* MAIN */}
      <main style={main}>
        {/* TOPBAR */}
        <div style={topbar}>
          <div>
            <h2 style={topbarTitle}>
              BuildWise Platform
            </h2>

            <p style={topbarSub}>
              Smart Construction Management System
            </p>
          </div>

          <div style={topbarRight}>
            <button style={circleBtn}>
              🔔
            </button>

            <button style={circleBtn}>
              🌙
            </button>

            <div style={profile}>
              👤 Admin
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div>{children}</div>
      </main>
    </div>
  );
}

const layout = {
  display: "flex",
  minHeight: "100vh",
  background: "#f1f5f9",
};

const sidebar = {
  width: "280px",
  background: "#071739",
  color: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "24px",
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

const logoTitle = {
  margin: 0,
  fontSize: "26px",
};

const logoSub = {
  margin: 0,
  color: "#94a3b8",
};

const menuList = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const menuItem = {
  display: "flex",
  alignItems: "center",
  gap: "14px",
  padding: "16px",
  borderRadius: "16px",
  textDecoration: "none",
  color: "white",
  fontWeight: "700",
};

const activeMenu = {
  background: "#0f52ff",
};

const menuIcon = {
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
  padding: "22px 28px",
  borderRadius: "24px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "24px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
};

const topbarTitle = {
  margin: 0,
  color: "#071739",
};

const topbarSub = {
  margin: "6px 0 0",
  color: "#64748b",
};

const topbarRight = {
  display: "flex",
  alignItems: "center",
  gap: "14px",
};

const circleBtn = {
  width: "52px",
  height: "52px",
  borderRadius: "50%",
  border: "none",
  background: "#e2e8f0",
  cursor: "pointer",
  fontSize: "20px",
};

const profile = {
  background: "#e2e8f0",
  padding: "14px 20px",
  borderRadius: "16px",
  fontWeight: "800",
};