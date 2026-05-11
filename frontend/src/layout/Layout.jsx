import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const navItems = [
  { to: "/", label: "Dashboard", icon: "🏠" },
  { to: "/lands", label: "Land Marketplace", icon: "📍" },
  { to: "/houses-for-sale", label: "House Marketplace", icon: "🏘️" },
  { to: "/rentals", label: "Rentals", icon: "🏢" },
  { to: "/lodging", label: "Lodging", icon: "🛏️" },
  { to: "/projects", label: "Projects", icon: "🏗️" },
  { to: "/materials", label: "Materials", icon: "🧱" },
  { to: "/escrow", label: "Escrow", icon: "🔐" },
  { to: "/estimator", label: "Estimator", icon: "🧮" },
  { to: "/reports", label: "Reports", icon: "📊" },
  { to: "/settings", label: "Settings", icon: "⚙️" },
];

export default function Layout() {
  return (
    <div className="min-h-screen flex bg-slate-100">
      <aside className="w-72 bg-slate-950 text-white min-h-screen p-6 hidden lg:block">
        <h1 className="text-5xl font-bold mb-14">BuildWise</h1>

        <nav className="space-y-3">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `flex items-center gap-4 px-5 py-4 rounded-2xl font-bold text-lg transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "hover:bg-slate-800 text-slate-200"
                }`
              }
            >
              <span className="text-2xl">{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      <div className="flex-1 min-w-0">
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}