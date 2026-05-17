import React, { useState } from "react";
import {
  Home,
  MapPin,
  Building2,
  ShoppingCart,
  ShieldCheck,
  Calculator,
  MoreHorizontal,
  Menu,
  X,
  Bell,
  Globe,
  User,
  PlusCircle,
  ChevronDown,
} from "lucide-react";

import { NavLink, Link } from "react-router-dom";

const navItems = [
  {
    label: "Ahabanza",
    path: "/",
    icon: Home,
  },
  {
    label: "Ibibanza",
    path: "/lands",
    icon: MapPin,
    badge: "BISHYA",
  },
  {
    label: "Ubukode",
    path: "/projects",
    icon: Building2,
  },
  {
    label: "Ibikoresho",
    path: "/materials",
    icon: ShoppingCart,
  },
  {
    label: "Serivisi",
    path: "/escrow",
    icon: ShieldCheck,
    badge: "BISHYA",
  },
  {
    label: "Kubara Budget",
    path: "/estimator",
    icon: Calculator,
  },
];

const moreItems = [
  {
    label: "Reports",
    path: "/reports",
  },
  {
    label: "Settings",
    path: "/settings",
  },
  {
    label: "Dashboard",
    path: "/dashboard",
  },
];

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [moreMenu, setMoreMenu] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false);

  const navClass = ({ isActive }) =>
    `relative flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-2xl text-sm font-black transition ${
      isActive
        ? "text-pink-600 bg-pink-50"
        : "text-[#050816] hover:bg-slate-100 hover:text-pink-600"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200">
      <div className="h-24 px-6 flex items-center justify-between gap-4">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-pink-600 text-white flex items-center justify-center font-black text-2xl shadow-lg">
            B
          </div>

          <div>
            <h1 className="text-3xl font-black leading-none">
              BuildWise
            </h1>

            <p className="text-slate-500 text-sm leading-5">
              Urubuga rw’Ubwubatsi
              <br />
              n’Umutungo
            </p>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden xl:flex items-center gap-2">
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

                <span>{item.label}</span>
              </NavLink>
            );
          })}

          {/* MORE MENU */}
          <div className="relative">
            <button
              onClick={() => setMoreMenu(!moreMenu)}
              className="flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-2xl text-sm font-black hover:bg-slate-100 hover:text-pink-600 transition"
            >
              <MoreHorizontal size={24} />
              <span>Ibindi</span>
            </button>

            {moreMenu && (
              <div className="absolute top-20 right-0 w-56 bg-white border border-slate-200 rounded-3xl shadow-2xl p-3">
                {moreItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setMoreMenu(false)}
                    className={({ isActive }) =>
                      `block px-5 py-3 rounded-2xl font-bold transition ${
                        isActive
                          ? "bg-pink-50 text-pink-600"
                          : "hover:bg-slate-100 text-slate-700"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/lands"
            className="bg-[#050816] hover:bg-pink-600 text-white px-5 py-3 rounded-2xl font-black flex items-center gap-2 transition"
          >
            <PlusCircle size={20} />
            Tangira kugurisha
          </Link>

          {/* LANGUAGE */}
          <button className="w-12 h-12 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition">
            <Globe size={22} />
          </button>

          {/* NOTIFICATIONS */}
          <button className="relative w-12 h-12 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition">
            <Bell size={22} />

            <span className="absolute top-2 right-2 w-3 h-3 rounded-full bg-pink-600 border-2 border-white" />
          </button>

          {/* PROFILE */}
          <div className="relative">
            <button
              onClick={() => setProfileMenu(!profileMenu)}
              className="flex items-center gap-2 bg-[#050816] text-white px-3 py-2 rounded-full"
            >
              <div className="w-9 h-9 rounded-full bg-pink-600 flex items-center justify-center font-black">
                B
              </div>

              <ChevronDown size={18} />
            </button>

            {profileMenu && (
              <div className="absolute top-16 right-0 w-64 bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden">
                <div className="p-5 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-pink-600 text-white flex items-center justify-center font-black">
                      B
                    </div>

                    <div>
                      <h4 className="font-black">
                        BuildWise User
                      </h4>

                      <p className="text-sm text-slate-500">
                        seller@buildwise.rw
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-3">
                  <button className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-slate-100 font-bold transition">
                    <User size={18} />
                    Profile
                  </button>

                  <button className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-slate-100 font-bold transition">
                    <Building2 size={18} />
                    Dashboard
                  </button>

                  <button className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-slate-100 font-bold transition text-red-500">
                    <X size={18} />
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="xl:hidden w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center"
        >
          {mobileMenu ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div className="xl:hidden bg-white border-t border-slate-200 px-6 py-5">
          <div className="grid gap-3">
            {[...navItems, ...moreItems].map((item) => {
              const Icon = item.icon || User;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenu(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 p-4 rounded-2xl font-black transition ${
                      isActive
                        ? "bg-pink-50 text-pink-600"
                        : "bg-slate-50 hover:bg-slate-100"
                    }`
                  }
                >
                  <Icon size={22} />

                  {item.label}

                  {item.badge && (
                    <span className="ml-auto bg-emerald-500 text-white text-xs px-2 py-1 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </NavLink>
              );
            })}
          </div>

          <Link
            to="/lands"
            onClick={() => setMobileMenu(false)}
            className="mt-5 bg-[#050816] text-white w-full py-4 rounded-2xl font-black flex items-center justify-center gap-2"
          >
            <PlusCircle size={20} />
            Tangira kugurisha
          </Link>
        </div>
      )}
    </header>
  );
}