import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  const navItems = [
    { name: "Dashboard", path: "/dashboard", icon: "🏠" },
    { name: "Ibibanza", path: "/lands", icon: "📍" },
    { name: "Projects", path: "/projects", icon: "🏗️" },
    { name: "Materials", path: "/materials", icon: "🧱" },
    { name: "Escrow", path: "/escrow", icon: "🔒" },
    { name: "Estimator", path: "/estimator", icon: "🧮" },
    { name: "Reports", path: "/reports", icon: "📊" },
    { name: "Settings", path: "/settings", icon: "⚙️" },
  ];

  return (
    <div className="flex min-h-screen bg-slate-100">

      {/* Sidebar */}
      <div className="w-72 bg-[#071336] text-white p-8">

        <h1 className="text-5xl font-bold mb-14">
          BuildWise
        </h1>

        <nav className="space-y-4">

          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 px-5 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-blue-600 shadow-lg"
                    : "hover:bg-slate-800"
                }`
              }
            >
              <span className="text-2xl">
                {item.icon}
              </span>

              {item.name}
            </NavLink>
          ))}

        </nav>

      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </div>

    </div>
  );
}