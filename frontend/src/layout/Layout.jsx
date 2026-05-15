import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const marketplaceItems = [
  { to: "/lands", label: "Land Marketplace", icon: "📍" },
  { to: "/houses-for-sale", label: "House Marketplace", icon: "🏘️" },
  { to: "/rentals", label: "Rentals", icon: "🏢" },
  { to: "/lodging", label: "Lodging", icon: "🛏️" },
];

const constructionItems = [
  { to: "/projects", label: "Projects", icon: "🏗️" },
  { to: "/estimator", label: "Estimator", icon: "🧮" },
  { to: "/building-permit", label: "Get Building Permit", icon: "🏢" },
  { to: "/escrow", label: "Escrow", icon: "🔐" },
];

const systemItems = [
  { to: "/materials", label: "Materials Market", icon: "🧱" },
  { to: "/reports", label: "Reports", icon: "📊" },
  { to: "/settings", label: "Settings", icon: "⚙️" },
];

function SidebarLink({ item }) {
  return (
    <NavLink
      to={item.to}
      end={item.to === "/"}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-all ${
          isActive
            ? "bg-rose-500 text-white shadow-lg shadow-rose-500/20"
            : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
        }`
      }
    >
      <span className="text-xl">{item.icon}</span>
      <span>{item.label}</span>
    </NavLink>
  );
}

function SidebarSection({ title, items }) {
  return (
    <div className="mb-6">
      <p className="px-4 mb-2 text-xs font-bold uppercase tracking-wider text-slate-400">
        {title}
      </p>

      <div className="space-y-1">
        {items.map((item) => (
          <SidebarLink key={item.to} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function Layout() {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-80 bg-white border-r border-slate-200 min-h-screen p-5 flex-col">
        <div className="mb-8 px-3">
          <h1 className="text-3xl font-black text-slate-950 tracking-tight">
            BuildWise
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            African Construction Ecosystem
          </p>
        </div>

        <nav className="flex-1 overflow-y-auto pr-1">
          <SidebarSection
            title="Overview"
            items={[{ to: "/", label: "Dashboard", icon: "🏠" }]}
          />

          <SidebarSection title="Marketplaces" items={marketplaceItems} />

          <SidebarSection
            title="Construction System"
            items={constructionItems}
          />

          <SidebarSection title="Business Tools" items={systemItems} />
        </nav>

        <div className="mt-6 p-4 rounded-3xl bg-slate-950 text-white">
          <p className="text-sm font-bold">BuildWise Pro</p>
          <p className="text-xs text-slate-300 mt-1">
            Manage land, houses, construction, payments and reports.
          </p>
        </div>
      </aside>

      {/* Main Area */}
      <div className="flex-1 min-w-0">
        {/* Top Bar */}
        <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-slate-200">
          <div className="px-4 md:px-8 py-4 flex items-center gap-4">
            <div className="lg:hidden">
              <h1 className="text-xl font-black text-slate-950">BuildWise</h1>
            </div>

            <div className="flex-1 max-w-3xl mx-auto hidden md:block">
              <div className="flex items-center bg-white border border-slate-300 rounded-full shadow-sm overflow-hidden">
                <input
                  type="text"
                  placeholder="Search lands, houses, rentals, materials..."
                  className="flex-1 px-6 py-3 outline-none text-sm"
                />

                <button className="bg-rose-500 text-white px-6 py-3 font-semibold hover:bg-rose-600 transition">
                  Search
                </button>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <button className="px-4 py-2 rounded-full border border-slate-300 text-sm font-semibold hover:bg-slate-100">
                Add Listing
              </button>

              <div className="w-10 h-10 rounded-full bg-slate-950 text-white flex items-center justify-center font-bold">
                B
              </div>
            </div>
          </div>

          {/* Mobile Horizontal Nav */}
          <div className="lg:hidden px-3 pb-3 overflow-x-auto whitespace-nowrap">
            {[
              { to: "/", label: "Dashboard", icon: "🏠" },
              ...marketplaceItems,
              ...constructionItems,
              ...systemItems,
            ].map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `inline-flex items-center gap-2 px-4 py-2 rounded-full mr-2 text-sm font-semibold ${
                    isActive
                      ? "bg-rose-500 text-white"
                      : "bg-slate-100 text-slate-700"
                  }`
                }
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </NavLink>
            ))}
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}