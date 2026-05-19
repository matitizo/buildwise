import React, { useState } from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
import {
  Home,
  Building2,
  ShoppingCart,
  Wrench,
  LayoutDashboard,
  UserRound,
  Bell,
  Menu,
  X,
} from "lucide-react";

export default function Layout() {
  const [openMenu, setOpenMenu] = useState(false);

  const navClass = ({ isActive }) =>
    `flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-bold transition-all
    ${
      isActive
        ? "bg-pink-50 text-pink-600"
        : "text-[#050816] hover:bg-slate-100"
    }`;

  return (
    <div className="min-h-screen bg-[#f7f8fb]">
      {/* Navbar */}

      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="px-5 lg:px-8 h-[70px] flex items-center justify-between">

          {/* Logo */}

          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-pink-600 text-white flex items-center justify-center font-black">
              B
            </div>

            <div>
              <h1 className="text-xl font-black leading-none">
                BuildWise
              </h1>

              <p className="text-[11px] text-slate-500">
                Construction Platform
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}

          <nav className="hidden lg:flex items-center gap-2">

            <NavLink to="/" className={navClass}>
              <Home size={16}/>
              Home
            </NavLink>

            <NavLink to="/marketplace" className={navClass}>
              <Building2 size={16}/>
              Marketplace
            </NavLink>

            <NavLink to="/materials" className={navClass}>
              <ShoppingCart size={16}/>
              Materials
            </NavLink>

            <NavLink to="/services" className={navClass}>
              <Wrench size={16}/>
              Services
            </NavLink>

            <NavLink to="/dashboard" className={navClass}>
              <LayoutDashboard size={16}/>
              Dashboard
            </NavLink>

            <NavLink to="/admin" className={navClass}>
              <LayoutDashboard size={16}/>
              Admin
            </NavLink>

            <NavLink to="/profile" className={navClass}>
              <UserRound size={16}/>
              Profile
            </NavLink>

          </nav>

          {/* Right Side */}

          <div className="flex items-center gap-2">

            <button className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center relative">

              <Bell size={16}/>

              <span className="absolute top-2 right-2 w-2 h-2 bg-pink-600 rounded-full"></span>

            </button>

            <Link
              to="/login"
              className="hidden md:flex bg-[#050816] text-white px-4 py-2 rounded-lg text-sm font-bold"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="hidden md:flex bg-pink-600 text-white px-4 py-2 rounded-lg text-sm font-bold"
            >
              Register
            </Link>

            <Link
              to="/profile"
              className="hidden md:flex w-10 h-10 rounded-full bg-[#050816] text-white items-center justify-center font-black"
            >
              B
            </Link>

            {/* Mobile button */}

            <button
              onClick={() => setOpenMenu(!openMenu)}
              className="lg:hidden w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center"
            >
              {openMenu ? <X size={18}/> : <Menu size={18}/>}
            </button>

          </div>
        </div>

        {/* Mobile Menu */}

        {openMenu && (
          <div className="lg:hidden border-t px-5 py-4 bg-white">

            <nav className="flex flex-col gap-2">

              <NavLink to="/" className={navClass}>
                Home
              </NavLink>

              <NavLink to="/marketplace" className={navClass}>
                Marketplace
              </NavLink>

              <NavLink to="/materials" className={navClass}>
                Materials
              </NavLink>

              <NavLink to="/services" className={navClass}>
                Services
              </NavLink>

              <NavLink to="/dashboard" className={navClass}>
                Dashboard
              </NavLink>

              <NavLink to="/admin" className={navClass}>
                Admin
              </NavLink>

              <NavLink to="/profile" className={navClass}>
                Profile
              </NavLink>

              <div className="grid grid-cols-2 gap-3 pt-3">

                <Link
                  to="/login"
                  className="bg-[#050816] text-white p-3 rounded-xl text-center font-bold"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="bg-pink-600 text-white p-3 rounded-xl text-center font-bold"
                >
                  Register
                </Link>

              </div>

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