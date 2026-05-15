import React from "react";
import { Link } from "react-router-dom";

const marketplaces = [
  {
    title: "Land Marketplace",
    text: "Gura cyangwa ugurishe ibibanza bifite verified sellers.",
    icon: "📍",
    link: "/lands",
  },
  {
    title: "House Marketplace",
    text: "Residential houses na commercial houses.",
    icon: "🏘️",
    link: "/houses",
  },
  {
    title: "Rentals",
    text: "Residential, commercial, apartments, maison de passage na lodge.",
    icon: "🏢",
    link: "/rentals",
  },
];

const construction = [
  "Projects",
  "Budget Estimator",
  "Building Permit",
  "Escrow",
];

export default function Home() {
  return (
    <div className="space-y-10">
      <section className="rounded-[2rem] overflow-hidden bg-slate-950 text-white grid lg:grid-cols-2">
        <div className="p-8 md:p-14">
          <p className="text-rose-400 font-bold mb-4">
            BuildWise African Construction Ecosystem
          </p>

          <h1 className="text-4xl md:text-6xl font-black leading-tight">
            Gura, ugurishe, ukodeshe kandi wubake mu buryo bwizewe.
          </h1>

          <p className="text-slate-300 text-lg mt-6">
            Platform ihuza land marketplace, house marketplace, rentals,
            construction system, materials market na admin control center.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link to="/lands" className="btn-primary">
              Explore Marketplace
            </Link>

            <Link to="/construction" className="btn-secondary text-slate-950">
              Get Building Permit
            </Link>
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd"
          alt="construction"
          className="w-full h-full min-h-[420px] object-cover opacity-80"
        />
      </section>

      <section>
        <h2 className="text-3xl font-black text-slate-950 mb-6">
          Marketplaces
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {marketplaces.map((item) => (
            <Link key={item.title} to={item.link} className="card p-6 hover:shadow-xl transition">
              <div className="text-5xl mb-5">{item.icon}</div>
              <h3 className="text-2xl font-black">{item.title}</h3>
              <p className="text-slate-500 mt-3">{item.text}</p>
              <p className="text-rose-500 font-bold mt-5">Open →</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="card p-8">
        <p className="text-blue-500 font-bold mb-2">Construction Workflow</p>
        <h2 className="text-3xl font-black mb-6">Construction System</h2>

        <div className="grid md:grid-cols-4 gap-4">
          {construction.map((item) => (
            <Link
              key={item}
              to="/construction"
              className="bg-slate-50 rounded-2xl p-5 font-bold hover:bg-rose-50 hover:text-rose-500 transition"
            >
              🏗️ {item}
            </Link>
          ))}
        </div>
      </section>

      <section className="grid lg:grid-cols-2 gap-6">
        <Link to="/materials" className="card p-8 hover:shadow-xl transition">
          <p className="text-orange-500 font-bold mb-2">Materials Market</p>
          <h2 className="text-3xl font-black">Ibikoresho by’ubwubatsi</h2>
          <p className="text-slate-500 mt-3">
            Supplier signup, upload products, search materials, order and delivery tracking.
          </p>
        </Link>

        <Link to="/admin" className="card p-8 bg-slate-950 text-white hover:shadow-xl transition">
          <p className="text-rose-400 font-bold mb-2">Admin Control Center</p>
          <h2 className="text-3xl font-black">Manage BuildWise</h2>
          <p className="text-slate-300 mt-3">
            User management, listing approval, payment tracking, fraud detection and analytics.
          </p>
        </Link>
      </section>
    </div>
  );
}