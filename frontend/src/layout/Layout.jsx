import React from "react";
import { Outlet, NavLink } from "react-router-dom";

import {
  Home,
  Building2,
  ShoppingCart,
  ShieldCheck,
  Calculator,
  BarChart3,
  Settings,
  Wrench,
} from "lucide-react";

export default function Layout() {
  const navClass = ({ isActive }) =>
    `flex flex-col items-center px-5 py-3 rounded-2xl transition font-bold
    ${
      isActive
        ? "bg-pink-50 text-pink-600"
        : "text-[#050816] hover:bg-slate-100"
    }`;

  return (
    <div className="min-h-screen bg-[#f7f8fb]">

      {/* Navbar */}
      <header className="bg-white border-b sticky top-0 z-50">

        <div className="px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">

            <div className="w-14 h-14 rounded-2xl bg-pink-600 text-white flex items-center justify-center font-black text-2xl">
              B
            </div>

            <div>
              <h1 className="text-3xl font-black">
                BuildWise
              </h1>

              <p className="text-slate-500">
                Construction & Real Estate Platform
              </p>
            </div>

          </div>

          {/* Menu */}

          <nav className="flex items-center gap-2 flex-wrap">

            <NavLink
              to="/"
              className={navClass}
            >
              <Home size={22}/>
              Home
            </NavLink>

            <NavLink
              to="/marketplace"
              className={navClass}
            >
              <Building2 size={22}/>
              Marketplace
            </NavLink>

            <NavLink
              to="/materials"
              className={navClass}
            >
              <ShoppingCart size={22}/>
              Materials
            </NavLink>

            <NavLink
              to="/services"
              className={navClass}
            >
              <Wrench size={22}/>
              Services
            </NavLink>

            <NavLink
              to="/escrow"
              className={navClass}
            >
              <ShieldCheck size={22}/>
              Escrow
            </NavLink>

            <NavLink
              to="/estimator"
              className={navClass}
            >
              <Calculator size={22}/>
              Estimator
            </NavLink>

            <NavLink
              to="/reports"
              className={navClass}
            >
              <BarChart3 size={22}/>
              Reports
            </NavLink>

            <NavLink
              to="/settings"
              className={navClass}
            >
              <Settings size={22}/>
              Settings
            </NavLink>

          </nav>

        </div>

      </header>

      {/* Main Content */}

      <main className="p-6">
        <Outlet />
      </main>

    </div>
  );
}