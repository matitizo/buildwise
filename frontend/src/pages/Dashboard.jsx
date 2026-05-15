import React from "react";
import { Link } from "react-router-dom";

const marketplaceItems = [
  {
    title: "Land Marketplace",
    description: "Gura cyangwa ugurishe ibibanza.",
    icon: "📍",
    link: "/lands",
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "House Marketplace",
    description: "Gura cyangwa ugurishe amazu.",
    icon: "🏡",
    link: "/houses-for-sale",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Rentals",
    description:
      "Residential rentals, commercial rentals, apartments, lodge na maison de passage.",
    icon: "🏨",
    link: "/rentals",
    color: "from-pink-500 to-rose-500",
  },
];

const constructionItems = [
  {
    title: "Projects",
    description: "Track construction projects.",
    icon: "🏗️",
    link: "/projects",
  },
  {
    title: "Budget Estimator",
    description: "Bara budget y’ubwubatsi.",
    icon: "🧮",
    link: "/estimator",
  },
  {
    title: "Building Permit",
    description: "Sabira ibyangombwa byo kubaka online.",
    icon: "📄",
    link: "/building-permit",
  },
  {
    title: "Escrow",
    description: "Secure payment system.",
    icon: "🔒",
    link: "/escrow",
  },
];

export default function Dashboard() {
  return (
    <div className="space-y-10">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-[2rem] bg-slate-950 text-white">
        <div className="grid lg:grid-cols-2 items-center">
          <div className="p-8 md:p-14 z-10">
            <p className="text-rose-400 font-bold mb-4 text-sm md:text-base">
              BuildWise African Construction Ecosystem
            </p>

            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              Gura, ugurishe, ukodeshe kandi wubake mu buryo bwizewe.
            </h1>

            <p className="text-slate-300 text-lg mt-6 leading-relaxed">
              Platform ihuza land marketplace, house marketplace,
              rentals, construction system, materials market na escrow.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/lands"
                className="bg-rose-500 hover:bg-rose-600 text-white px-7 py-4 rounded-full font-bold transition"
              >
                Explore Marketplace
              </Link>

              <Link
                to="/building-permit"
                className="bg-white hover:bg-slate-200 text-slate-950 px-7 py-4 rounded-full font-bold transition"
              >
                Get Building Permit
              </Link>
            </div>
          </div>

          <div className="hidden lg:block h-full min-h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd"
              alt="construction"
              className="w-full h-full object-cover opacity-60"
            />
          </div>
        </div>
      </section>

      {/* MARKETPLACES */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-rose-500 font-bold">
              Marketplace Ecosystem
            </p>

            <h2 className="text-3xl font-black text-slate-950">
              Marketplaces
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {marketplaceItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="group bg-white rounded-[2rem] p-6 border border-slate-200 shadow-sm hover:shadow-2xl transition overflow-hidden relative"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition`}
              />

              <div className="relative z-10">
                <div className="text-5xl mb-5">{item.icon}</div>

                <h3 className="text-2xl font-black text-slate-950">
                  {item.title}
                </h3>

                <p className="text-slate-500 mt-3 leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-6">
                  <span className="inline-flex items-center text-rose-500 font-bold">
                    Open Marketplace →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CONSTRUCTION SYSTEM */}
      <section>
        <div className="mb-6">
          <p className="text-blue-500 font-bold">
            Construction Workflow
          </p>

          <h2 className="text-3xl font-black text-slate-950">
            Construction System
          </h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {constructionItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="bg-white rounded-[2rem] p-6 border border-slate-200 shadow-sm hover:shadow-xl transition"
            >
              <div className="text-5xl mb-5">{item.icon}</div>

              <h3 className="text-xl font-black text-slate-950">
                {item.title}
              </h3>

              <p className="text-slate-500 mt-3">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* MATERIALS MARKET */}
      <section className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-sm">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-orange-500 font-bold mb-3">
              Construction Materials
            </p>

            <h2 className="text-4xl font-black text-slate-950 leading-tight">
              Materials Market
            </h2>

            <p className="text-slate-500 mt-5 text-lg leading-relaxed">
              Shaka ibikoresho by’ubwubatsi, suppliers,
              delivery tracking na online ordering system.
            </p>

            <Link
              to="/materials"
              className="inline-block mt-6 bg-slate-950 hover:bg-slate-800 text-white px-7 py-4 rounded-full font-bold transition"
            >
              Explore Materials
            </Link>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1599707254554-027aeb4deacd"
              alt="materials"
              className="rounded-[2rem] w-full h-[320px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* ADMIN CENTER */}
      <section className="bg-slate-950 rounded-[2rem] p-8 text-white">
        <p className="text-rose-400 font-bold mb-3">
          BuildWise Management
        </p>

        <h2 className="text-4xl font-black">
          Admin Control Center
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 mt-8">
          {[
            "User Management",
            "Listing Approval",
            "Payment Tracking",
            "Fraud Detection",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur rounded-2xl p-5 border border-white/10"
            >
              <h3 className="font-bold text-lg">{item}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}