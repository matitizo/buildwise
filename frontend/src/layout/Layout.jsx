import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const navItems = [
  {
    to: "/",
    label: "Dashboard",
    icon: "🏠",
  },

  {
    to: "/lands",
    label: "Land Marketplace",
    icon: "📍",
  },

  {
    to: "/houses-for-sale",
    label: "House Marketplace",
    icon: "🏘️",
  },

  {
    to: "/rentals",
    label: "Rentals",
    icon: "🏢",
  },

  {
    to: "/lodging",
    label: "Lodging",
    icon: "🛏️",
  },

  {
    to: "/projects",
    label: "Projects",
    icon: "🏗️",
  },

  {
    to: "/materials",
    label: "Materials",
    icon: "🧱",
  },

  {
    to: "/escrow",
    label: "Escrow",
    icon: "🔐",
  },

  {
    to: "/estimator",
    label: "Estimator",
    icon: "🧮",
  },

  {
    to: "/reports",
    label: "Reports",
    icon: "📊",
  },

  {
    to: "/settings",
    label: "Settings",
    icon: "⚙️",
  },
];

export default function Layout() {
  return (
    <div className="min-h-screen flex bg-slate-100">
      {/* Sidebar */}
      <aside className="w-72 bg-slate-950 text-white min-h-screen p-6 hidden lg:block">
        <h1 className="text-5xl font-bold mb-14">
          BuildWise
        </h1>

        <nav className="space-y-3">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `flex items-center gap-4 px-5 py-4 rounded-2xl font-bold text-lg transition-all ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "hover:bg-slate-800 text-slate-200"
                }`
              }
            >
              <span className="text-2xl">
                {item.icon}
              </span>

              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 min-w-0">
        {/* Mobile Header */}
        <header className="bg-white border-b px-6 py-4 lg:hidden">
          <h1 className="text-2xl font-bold text-blue-700">
            BuildWise
          </h1>
        </header>

        {/* Mobile Navigation */}
        <div className="lg:hidden bg-slate-950 p-3 overflow-x-auto whitespace-nowrap">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `inline-flex items-center gap-2 px-4 py-2 rounded-xl mr-2 text-sm font-semibold ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "bg-slate-800 text-slate-200"
                }`
              }
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </div>

        {/* Page Content */}
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}