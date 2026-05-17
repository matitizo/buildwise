import React from "react";
import {
  Home,
  Building2,
  ShoppingCart,
  ShieldCheck,
  MoreHorizontal,
  Globe,
  Menu,
} from "lucide-react";

import { NavLink, Link } from "react-router-dom";

const navItems = [
  {
    label: "Home",
    path: "/",
    icon: Home,
  },

  {
    label: "Lands & House Marketplace",
    path: "/marketplace",
    icon: Building2,
    badge: "NEW",
  },

  {
    label: "Materials",
    path: "/materials",
    icon: ShoppingCart,
  },

  {
    label: "Services",
    path: "/services",
    icon: ShieldCheck,
    badge: "NEW",
  },

  {
    label: "More",
    path: "/reports",
    icon: MoreHorizontal,
  },
];

export default function Navbar() {
  const navClass = ({ isActive }) =>
    `relative flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-2xl font-black text-sm transition ${
      isActive
        ? "text-pink-600 bg-pink-50"
        : "text-[#050816] hover:text-pink-600 hover:bg-slate-100"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="h-28 px-6 flex items-center justify-between gap-6">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 min-w-[260px]">
          <div className="w-12 h-12 rounded-2xl bg-pink-600 text-white flex items-center justify-center font-black text-2xl shadow">
            B
          </div>

          <div>
            <h1 className="text-3xl font-black leading-none">
              BuildWise
            </h1>

            <p className="text-slate-500 text-sm leading-5">
              Construction & Real Estate
              <br />
              Platform
            </p>
          </div>
        </Link>

        {/* NAVIGATION */}
        <nav className="hidden lg:flex items-center justify-center flex-1 gap-3">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={navClass}
              >
                {item.badge && (
                  <span className="absolute -top-3 bg-emerald-500 text-white text-[10px] px-3 py-1 rounded-full">
                    {item.badge}
                  </span>
                )}

                <Icon size={24} />

                <span className="text-center leading-5">
                  {item.label}
                </span>
              </NavLink>
            );
          })}
        </nav>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/marketplace"
            className="font-black text-[#050816] hover:text-pink-600 transition"
          >
            Start
            <br />
            Selling
          </Link>

          {/* LANGUAGE */}
          <button className="w-12 h-12 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition">
            <Globe size={22} />
          </button>

          {/* MENU */}
          <button className="w-12 h-12 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition">
            <Menu size={24} />
          </button>

          {/* PROFILE */}
          <button className="w-12 h-12 rounded-full bg-[#050816] text-white flex items-center justify-center font-black text-lg">
            B
          </button>
        </div>

        {/* MOBILE BUTTON */}
        <button className="lg:hidden w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
          <Menu size={26} />
        </button>
      </div>
    </header>
  );
}