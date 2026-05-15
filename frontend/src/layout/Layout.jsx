import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="px-4 md:px-8 py-4 flex items-center gap-4">
          <div className="flex-1 max-w-4xl">
            <div className="w-full flex items-center border border-slate-300 rounded-full overflow-hidden shadow-sm bg-white">
              <input
                type="text"
                placeholder="Search lands, houses, rentals, materials..."
                className="flex-1 px-6 py-3 outline-none text-sm md:text-base"
              />

              <button className="bg-rose-500 text-white px-6 md:px-10 py-3 font-bold hover:bg-rose-600 transition">
                Search
              </button>
            </div>
          </div>

          <button className="hidden md:block px-5 py-3 rounded-full border border-slate-300 font-bold hover:bg-slate-100">
            Add Listing
          </button>

          <div className="w-11 h-11 rounded-full bg-slate-950 text-white flex items-center justify-center font-black">
            B
          </div>
        </div>
      </header>

      <main className="p-4 md:p-8 max-w-[1600px] mx-auto">
        <Outlet />
      </main>
    </div>
  );
}