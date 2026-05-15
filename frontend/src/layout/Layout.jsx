import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen bg-slate-100">
      {/* TOPBAR */}
      <header className="bg-white border-b border-slate-200 px-6 py-5 sticky top-0 z-50">
        <div className="flex items-center gap-5">
          <div>
            <h1 className="text-4xl font-black text-slate-950">
              BuildWise
            </h1>

            <p className="text-slate-500">
              African Construction Ecosystem
            </p>
          </div>

          <div className="flex-1 flex items-center gap-4 max-w-4xl mx-auto">
            <input
              type="text"
              placeholder="Search lands, houses, rentals, materials..."
              className="flex-1 bg-slate-100 border border-slate-200 rounded-full px-6 py-4 outline-none"
            />

            <button className="btn-primary">
              Search
            </button>
          </div>

          <button className="btn-secondary">
            Add Listing
          </button>

          <div className="w-14 h-14 rounded-full bg-slate-950 text-white flex items-center justify-center text-xl font-black">
            B
          </div>
        </div>
      </header>

      {/* PAGE CONTENT */}
      <main className="p-8">
        <Outlet />
      </main>
    </div>
  );
}