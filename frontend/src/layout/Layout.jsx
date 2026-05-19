import React, { useState } from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
import {
  Home,
  Building2,
  ShoppingCart,
  Wrench,
  LayoutDashboard,
  Bell,
  Menu,
  X,
} from "lucide-react";

export default function Layout() {
  const [openMenu, setOpenMenu] = useState(false);

  const navClass = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-black transition ${
      isActive
        ? "bg-pink-50 text-pink-600"
        : "text-[#050816] hover:bg-slate-100"
    }`;

  return (
    <div className="min-h-screen bg-[#f7f8fb]">
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="px-6 h-[80px] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-pink-600 text-white flex items-center justify-center font-black text-xl">
              B
            </div>

            <div>
              <h1 className="text-2xl font-black">BuildWise</h1>
              <p className="text-xs text-slate-500">Construction Platform</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-2">
            <NavLink to="/" className={navClass}>
              <Home size={18} />
              Home
            </NavLink>

            <NavLink to="/marketplace" className={navClass}>
              <Building2 size={18} />
              Marketplace
            </NavLink>

            <NavLink to="/materials" className={navClass}>
              <ShoppingCart size={18} />
              Materials
            </NavLink>

            <NavLink to="/services" className={navClass}>
              <Wrench size={18} />
              Services
            </NavLink>

            <NavLink to="/admin" className={navClass}>
              <LayoutDashboard size={18} />
              Admin
            </NavLink>
          </nav>

          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center relative">
              <Bell size={18} />
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-pink-600" />
            </button>

            <Link
              to="/login"
              className="hidden md:flex bg-[#050816] text-white px-4 py-2 rounded-xl font-black text-sm hover:bg-black"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="hidden md:flex bg-pink-600 text-white px-4 py-2 rounded-xl font-black text-sm hover:bg-pink-700"
            >
              Register
            </Link>

            <Link
              to="/profile"
              className="hidden md:flex w-11 h-11 rounded-full bg-[#050816] text-white items-center justify-center font-black"
            >
              B
            </Link>

            <button
              onClick={() => setOpenMenu(!openMenu)}
              className="lg:hidden w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center"
            >
              {openMenu ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {openMenu && (
          <div className="lg:hidden px-5 py-4 border-t bg-white">
            <nav className="flex flex-col gap-3">
              <NavLink to="/" className={navClass}>
                <Home size={18} />
                Home
              </NavLink>

              <NavLink to="/marketplace" className={navClass}>
                <Building2 size={18} />
                Marketplace
              </NavLink>

              <NavLink to="/materials" className={navClass}>
                <ShoppingCart size={18} />
                Materials
              </NavLink>

              <NavLink to="/services" className={navClass}>
                <Wrench size={18} />
                Services
              </NavLink>

              <NavLink to="/admin" className={navClass}>
                <LayoutDashboard size={18} />
                Admin
              </NavLink>

              <Link
                to="/profile"
                onClick={() => setOpenMenu(false)}
                className="bg-slate-100 text-[#050816] p-3 rounded-xl font-black text-center"
              >
                Profile
              </Link>

              <Link
                to="/login"
                onClick={() => setOpenMenu(false)}
                className="bg-[#050816] text-white p-3 rounded-xl font-black text-center"
              >
                Login
              </Link>

              <Link
                to="/register"
                onClick={() => setOpenMenu(false)}
                className="bg-pink-600 text-white p-3 rounded-xl font-black text-center"
              >
                Register
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main className="p-5">
        <Outlet />
      </main>
    </div>
  );
}