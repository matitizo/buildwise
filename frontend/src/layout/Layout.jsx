import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const navItems = [
  { to: "/", label: "Dashboard" },
  { to: "/projects", label: "Projects" },
  { to: "/lands", label: "Ibibanza" },
  { to: "/houses-for-sale", label: "Amazu Agurishwa" },
  { to: "/rentals", label: "Rentals & Lodging" },
  { to: "/materials", label: "Materials" },
  { to: "/escrow", label: "Escrow" },
  { to: "/estimator", label: "Estimator" },
  { to: "/reports", label: "Reports" },
  { to: "/settings", label: "Settings" },
];

export default function Layout() {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      <aside className="sidebar hidden lg:block">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white">BuildWise</h1>
          <p className="text-sm text-slate-400 mt-1">
            Real Estate & Construction
          </p>
        </div>

        <nav>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                isActive ? "sidebar-link active" : "sidebar-link"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <div className="flex-1 min-w-0">
        <header className="navbar">
          <div>
            <h2 className="navbar-logo">BuildWise</h2>
            <p className="text-sm text-slate-500">
              Smart marketplace for land, houses, rentals and construction
            </p>
          </div>
        </header>

        <div className="lg:hidden bg-slate-900 p-3 overflow-x-auto whitespace-nowrap">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                isActive
                  ? "inline-block bg-blue-700 text-white px-4 py-2 rounded-xl mr-2 text-sm"
                  : "inline-block bg-slate-800 text-slate-200 px-4 py-2 rounded-xl mr-2 text-sm"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <main className="p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}