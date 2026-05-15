import React from "react";
import { Link } from "react-router-dom";

const stats = [
  { label: "Active Listings", value: "128", icon: "🏘️" },
  { label: "Projects", value: "36", icon: "🏗️" },
  { label: "Permit Requests", value: "14", icon: "🏢" },
  { label: "Escrow Deals", value: "22", icon: "🔐" },
];

const marketplaceCards = [
  {
    title: "Land Marketplace",
    desc: "Gura cyangwa ugurishe ibibanza bifite verified sellers.",
    path: "/lands",
    icon: "📍",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
  },
  {
    title: "House Marketplace",
    desc: "Amazu yo guturamo n’ay’ubucuruzi agurishwa.",
    path: "/houses-for-sale",
    icon: "🏘️",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
  },
  {
    title: "Rentals",
    desc: "Residential renting na commercial renting.",
    path: "/rentals",
    icon: "🏢",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
  },
  {
    title: "Lodging",
    desc: "Maison de Passage na Lodge booking.",
    path: "/lodging",
    icon: "🛏️",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945",
  },
];

const constructionCards = [
  {
    title: "Projects",
    desc: "Kurikirana imishinga y’ubwubatsi.",
    path: "/projects",
    icon: "🏗️",
  },
  {
    title: "Cost Estimator",
    desc: "Bara budget y’ubwubatsi mbere yo gutangira.",
    path: "/estimator",
    icon: "🧮",
  },
  {
    title: "Get Building Permit",
    desc: "Saba ibyangombwa byo kubaka no kugenzura documents.",
    path: "/building-permit",
    icon: "🏢",
  },
  {
    title: "Escrow",
    desc: "Amafaranga abikwa neza kugeza transaction irangiye.",
    path: "/escrow",
    icon: "🔐",
  },
  {
    title: "Materials Market",
    desc: "Gura ibikoresho by’ubwubatsi ku bacuruzi verified.",
    path: "/materials",
    icon: "🧱",
  },
  {
    title: "Reports",
    desc: "Reba reports z’imishinga, payments, n’ubucuruzi.",
    path: "/reports",
    icon: "📊",
  },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <section className="relative overflow-hidden rounded-[2rem] bg-slate-950 text-white p-6 md:p-10">
        <div className="relative z-10 max-w-3xl">
          <p className="text-rose-300 font-bold mb-3">
            BuildWise African Construction Ecosystem
          </p>

          <h1 className="text-3xl md:text-5xl font-black leading-tight">
            Gura, gurisha, ukodeshe, wubake kandi wishyure mu buryo bwizewe.
          </h1>

          <p className="text-slate-300 mt-4 text-lg">
            Platform imwe ihuza land marketplace, house marketplace,
            rentals, lodging, construction system, materials market na escrow.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/lands" className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-full font-bold">
              Explore Marketplace
            </Link>

            <Link to="/building-permit" className="bg-white text-slate-950 px-6 py-3 rounded-full font-bold">
              Get Building Permit
            </Link>
          </div>
        </div>

        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-25 hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
            alt="construction"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="grid md:grid-cols-4 gap-4">
        {stats.map((item) => (
          <div key={item.label} className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm">
            <div className="text-3xl mb-3">{item.icon}</div>
            <p className="text-3xl font-black text-slate-950">{item.value}</p>
            <p className="text-slate-500 font-semibold">{item.label}</p>
          </div>
        ))}
      </section>

      <section>
        <div className="flex items-end justify-between mb-5">
          <div>
            <h2 className="text-2xl font-black text-slate-950">
              Marketplaces
            </h2>
            <p className="text-slate-500">
              Airbnb-style cards za property marketplace.
            </p>
          </div>

          <Link to="/lands" className="text-rose-500 font-bold">
            View all
          </Link>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {marketplaceCards.map((card) => (
            <Link
              key={card.title}
              to={card.path}
              className="group bg-white rounded-[2rem] overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-2 rounded-full font-bold">
                  {card.icon} {card.title}
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-black text-slate-950">
                  {card.title}
                </h3>
                <p className="text-slate-500 mt-1">{card.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-5">
          <h2 className="text-2xl font-black text-slate-950">
            Construction System
          </h2>
          <p className="text-slate-500">
            Projects, permit, estimator, escrow, materials na reports.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {constructionCards.map((card) => (
            <Link
              key={card.title}
              to={card.path}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl transition group"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-3xl mb-5 group-hover:bg-rose-100">
                {card.icon}
              </div>

              <h3 className="text-xl font-black text-slate-950">
                {card.title}
              </h3>

              <p className="text-slate-500 mt-2">{card.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}