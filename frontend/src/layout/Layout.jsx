import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import {
  Home,
  Building2,
  ShoppingCart,
  Wrench,
  LayoutDashboard,
  Search,
  Bell,
  Menu,
  X,
} from "lucide-react";

export default function Layout() {
  const [openMenu, setOpenMenu] = useState(false);

  const navClass = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-black transition
    ${
      isActive
        ? "bg-pink-50 text-pink-600"
        : "text-[#050816] hover:bg-slate-100"
    }`;

  const mobileNavClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl font-black transition
    ${
      isActive
        ? "bg-pink-50 text-pink-600"
        : "text-[#050816] hover:bg-slate-100"
    }`;

  return (
    <div className="min-h-screen bg-[#f7f8fb]">
      <header className="bg-white sticky top-0 z-50 border-b border-slate-200 shadow-sm">
        <div className="px-5 lg:px-8 h-[74px] flex items-center justify-between gap-5">
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-11 h-11 rounded-xl bg-pink-600 text-white flex items-center justify-center font-black text-xl">
              B
            </div>

            <div>
              <h1 className="font-black text-2xl leading-none">BuildWise</h1>
              <p className="text-xs text-slate-500 mt-1">
                Construction Platform
              </p>
            </div>
          </div>

          <div className="hidden xl:flex items-center gap-3 bg-slate-100 rounded-full px-4 py-2 w-[300px]">
            <Search size={17} className="text-slate-500" />
            <input
              type="text"
              placeholder="Shakisha..."
              className="bg-transparent outline-none w-full text-sm font-semibold"
            />
          </div>

          <nav className="hidden lg:flex items-center gap-2">
            <NavLink to="/" className={navClass}>
              <Home size={17} />
              Home
            </NavLink>

            <NavLink to="/marketplace" className={navClass}>
              <Building2 size={17} />
              Marketplace
            </NavLink>

            <NavLink to="/materials" className={navClass}>
              <ShoppingCart size={17} />
              Materials
            </NavLink>

            <NavLink to="/services" className={navClass}>
              <Wrench size={17} />
              Services
            </NavLink>

            <NavLink to="/admin" className={navClass}>
              <LayoutDashboard size={17} />
              Admin
            </NavLink>
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <button className="hidden md:flex w-10 h-10 rounded-full bg-slate-100 items-center justify-center hover:bg-slate-200 relative">
              <Bell size={18} />
              <span className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-pink-600" />
            </button>

            <button className="hidden md:flex w-11 h-11 rounded-full bg-[#050816] text-white items-center justify-center font-black">
              B
            </button>

            <button
              onClick={() => setOpenMenu(!openMenu)}
              className="lg:hidden w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center"
            >
              {openMenu ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {openMenu && (
          <div className="lg:hidden px-5 pb-5 bg-white border-t border-slate-100">
            <div className="flex items-center gap-3 bg-slate-100 rounded-full px-4 py-3 my-4">
              <Search size={17} className="text-slate-500" />
              <input
                type="text"
                placeholder="Shakisha..."
                className="bg-transparent outline-none w-full text-sm font-semibold"
              />
            </div>

            <nav className="grid gap-2">
              <NavLink
                to="/"
                onClick={() => setOpenMenu(false)}
                className={mobileNavClass}
              >
                <Home size={19} />
                Home
              </NavLink>

              <NavLink
                to="/marketplace"
                onClick={() => setOpenMenu(false)}
                className={mobileNavClass}
              >
                <Building2 size={19} />
                Marketplace
              </NavLink>

              <NavLink
                to="/materials"
                onClick={() => setOpenMenu(false)}
                className={mobileNavClass}
              >
                <ShoppingCart size={19} />
                Materials
              </NavLink>

              <NavLink
                to="/services"
                onClick={() => setOpenMenu(false)}
                className={mobileNavClass}
              >
                <Wrench size={19} />
                Services
              </NavLink>

              <NavLink
                to="/admin"
                onClick={() => setOpenMenu(false)}
                className={mobileNavClass}
              >
                <LayoutDashboard size={19} />
                Admin
              </NavLink>
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