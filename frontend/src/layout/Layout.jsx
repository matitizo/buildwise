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
    to: "/building-permit",
    label: "Get Building Permit",
    icon: "🏗️",
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
      {/* Desktop Sidebar */}
      <aside className="w-72 bg-slate-950 text-white min-h-screen p-6 hidden lg:block overflow-y-auto">
        <h1 className="text-5xl font-black mb-12 tracking-tight text-white">
          BuildWise
        </h1>

        <nav className="space-y-3">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `flex items-center gap-4 px-5 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg"
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

      {/* Main Area */}
      <div className="flex-1 min-w-0">
        {/* Mobile Header */}
        <header className="lg:hidden bg-slate-950 text-white px-5 py-4 border-b border-slate-800">
          <h1 className="text-2xl font-black">BuildWise</h1>
        </header>

        {/* Mobile Navigation */}
        <div className="lg:hidden bg-slate-950 px-3 py-3 overflow-x-auto whitespace-nowrap border-b border-slate-800">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `inline-flex items-center gap-2 px-4 py-2 rounded-xl mr-2 text-sm font-semibold transition ${
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

        {/* Content */}
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}