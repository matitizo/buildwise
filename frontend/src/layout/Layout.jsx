import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center gap-4">
          <Link to="/" className="text-3xl font-black text-slate-950">
            BuildWise
          </Link>

          <div className="flex-1">
            <div className="hidden md:flex items-center border border-slate-300 rounded-full overflow-hidden bg-white shadow-sm">
              <input
                type="text"
                placeholder="Search lands, houses, rentals..."
                className="flex-1 px-6 py-3 outline-none"
              />

              <button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 font-bold">
                Search
              </button>
            </div>
          </div>

          <Link
            to="/admin"
            className="w-11 h-11 rounded-full bg-slate-950 text-white flex items-center justify-center font-black"
          >
            B
          </Link>
        </div>

        {/* NAVIGATION */}
        <div className="border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex gap-3 overflow-x-auto">
            <Link to="/lands" className="nav-pill">
              📍 Land Marketplace
            </Link>

            <Link to="/houses" className="nav-pill">
              🏘️ Houses
            </Link>

            <Link to="/rentals" className="nav-pill">
              🏢 Rentals
            </Link>

            <Link to="/construction" className="nav-pill">
              🏗️ Construction
            </Link>

            <Link to="/materials" className="nav-pill">
              🧱 Materials
            </Link>

            <Link to="/admin" className="nav-pill">
              ⚙️ Admin
            </Link>
          </div>
        </div>
      </header>

      {/* PAGE */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <Outlet />
      </main>
    </div>
  );
}