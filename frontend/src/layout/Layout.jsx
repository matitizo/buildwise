import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Land", path: "/lands" },
  { label: "Houses", path: "/houses" },
  { label: "Rentals", path: "/rentals" },
  { label: "Construction", path: "/construction" },
  { label: "Materials", path: "/materials" },
  { label: "Admin", path: "/admin" },
];

export default function Layout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f4f7fb]">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center gap-4">
          <Link to="/" className="min-w-fit">
            <h1 className="text-3xl font-black text-slate-950 leading-none">
              BuildWise
            </h1>
            <p className="text-sm text-slate-500">
              African Construction Ecosystem
            </p>
          </Link>

          <div className="hidden lg:flex flex-1 max-w-2xl mx-auto">
            <div className="w-full flex items-center border border-slate-300 rounded-full overflow-hidden bg-white shadow-sm">
              <input
                type="text"
                placeholder="Search lands, houses, rentals, materials..."
                className="flex-1 px-6 py-3 outline-none"
              />

              <button className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-3 font-bold">
                Search
              </button>
            </div>
          </div>

          <nav className="hidden xl:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="px-4 py-2 rounded-full font-bold text-slate-700 hover:bg-slate-100 hover:text-rose-500 transition"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/admin"
            className="hidden md:flex w-12 h-12 rounded-full bg-slate-950 text-white items-center justify-center font-black"
          >
            B
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="xl:hidden ml-auto w-11 h-11 rounded-full bg-slate-950 text-white font-black"
          >
            ☰
          </button>
        </div>

        {open && (
          <div className="xl:hidden border-t border-slate-200 bg-white px-4 py-4">
            <div className="mb-4">
              <div className="w-full flex items-center border border-slate-300 rounded-full overflow-hidden bg-white">
                <input
                  type="text"
                  placeholder="Search..."
                  className="flex-1 px-5 py-3 outline-none"
                />

                <button className="bg-rose-500 text-white px-5 py-3 font-bold">
                  Search
                </button>
              </div>
            </div>

            <div className="grid gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className="px-5 py-3 rounded-2xl bg-slate-50 font-bold hover:bg-rose-50 hover:text-rose-500 transition"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8 fade-up">
        <Outlet />
      </main>
    </div>
  );
}