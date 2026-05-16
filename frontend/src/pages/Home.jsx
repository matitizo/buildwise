import React from "react";
import { Link } from "react-router-dom";

const categories = [
  { title: "Land Marketplace", icon: "📍", link: "/lands" },
  { title: "Rentals", icon: "🏢", link: "/rentals" },
  { title: "Materials", icon: "🧱", link: "/materials" },
  { title: "Escrow", icon: "🔐", link: "/construction" },
  { title: "Permit", icon: "📄", link: "/construction" },
];

const stats = [
  ["1,250+", "Imishinga yakozwe"],
  ["850+", "Abakoresha"],
  ["300+", "Ibibanza ku isoko"],
  ["120+", "Materials suppliers"],
];

const featured = [
  {
    title: "Ikibanza i Kibagabaga",
    type: "Land",
    location: "Gasabo",
    price: "25,000,000 RWF",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
  },
  {
    title: "Modern Family House",
    type: "House",
    location: "Kicukiro",
    price: "85,000,000 RWF",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
  },
  {
    title: "Apartment Remera",
    type: "Apartment",
    location: "Gasabo",
    price: "450,000 RWF / month",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
  },
];

const modules = [
  {
    number: "1",
    title: "i-Mjengo",
    text: "Tangira umushinga, bara budget, shaka ibibanza, gura ibikoresho kandi wishyure mu buryo bwizewe.",
    link: "/construction",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd",
  },
  {
    number: "2",
    title: "Isoko ry’Ibibanza",
    text: "Shaka ibibanza ukoresheje location, ingano, igiciro na status.",
    link: "/lands",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
  },
  {
    number: "3",
    title: "Kubara Igiciro",
    text: "Bara igiciro cy’inzu, ibikoresho, imirimo n’izindi ndyoheshabikorwa.",
    link: "/construction",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
  },
];

export default function Home() {
  return (
    <div className="space-y-14">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-[2rem] bg-slate-950 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd"
            alt="BuildWise hero"
            className="w-full h-full object-cover opacity-35"
          />
        </div>

        <div className="relative z-10 p-8 md:p-16 max-w-4xl">
          <p className="text-blue-300 font-black mb-4">
            BuildWise African Construction Ecosystem
          </p>

          <h1 className="text-4xl md:text-7xl font-black leading-tight">
            Uburyo bworoshye bwo kubaka, kugura no gucunga imishinga.
          </h1>

          <p className="text-slate-200 text-lg md:text-xl mt-6 leading-relaxed">
            Shaka ikibanza, gura inzu, kodesha, bara budget, saba building
            permit, gura ibikoresho kandi wishyure mu buryo bwizewe.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link to="/construction" className="btn-primary">
              Tangira Umushinga
            </Link>

            <Link to="/lands" className="btn-secondary text-slate-950">
              Shaka Ikibanza
            </Link>
          </div>
        </div>
      </section>

      {/* MODERN CATEGORIES */}
      <section>
        <h2 className="text-3xl font-black mb-6">Modern Categories</h2>

        <div className="grid md:grid-cols-5 gap-4">
          {categories.map((item) => (
            <Link
              key={item.title}
              to={item.link}
              className="card p-6 text-center hover:shadow-xl hover:-translate-y-1 transition"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="font-black">{item.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* MAIN MODULES */}
      <section>
        <h2 className="text-3xl font-black mb-6">BuildWise Modules</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {modules.map((item) => (
            <Link
              key={item.number}
              to={item.link}
              className="card overflow-hidden hover:shadow-2xl transition group"
            >
              <div className="p-5 flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black">
                  {item.number}
                </span>

                <h3 className="text-xl font-black uppercase">
                  {item.title}
                </h3>
              </div>

              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <h3 className="text-2xl font-black">{item.title}</h3>
                </div>
              </div>

              <div className="p-5">
                <p className="text-slate-600">{item.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* STATISTICS */}
      <section className="card p-8">
        <h2 className="text-3xl font-black mb-6">Imibare ya BuildWise</h2>

        <div className="grid md:grid-cols-4 gap-4">
          {stats.map(([value, label]) => (
            <div key={label} className="bg-slate-50 rounded-2xl p-6">
              <p className="text-4xl font-black text-blue-700">{value}</p>
              <p className="text-slate-500 font-semibold mt-2">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED LISTINGS */}
      <section>
        <div className="flex justify-between items-end mb-6">
          <div>
            <p className="text-rose-500 font-bold">Featured Listings</p>
            <h2 className="text-3xl font-black">Ibigezweho ku isoko</h2>
          </div>

          <Link to="/lands" className="text-rose-500 font-bold">
            View all →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((item) => (
            <div
              key={item.title}
              className="card overflow-hidden hover:shadow-2xl transition group"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                <span className="absolute top-4 left-4 bg-white px-4 py-2 rounded-full font-bold shadow">
                  ✅ Verified
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-black">{item.title}</h3>
                <p className="text-slate-500">
                  {item.location} • {item.type}
                </p>
                <p className="text-2xl font-black mt-4">{item.price}</p>

                <div className="grid grid-cols-2 gap-3 mt-6">
                  <button className="btn-secondary">View Details</button>
                  <button className="btn-primary">Book Visit</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONSTRUCTION + MATERIALS */}
      <section className="grid lg:grid-cols-2 gap-6">
        <div className="card p-8">
          <p className="text-blue-500 font-bold mb-2">
            Construction System
          </p>

          <h2 className="text-3xl font-black">
            Projects, Estimator, Permit & Escrow
          </h2>

          <p className="text-slate-500 mt-4">
            Tangiza project, bara budget, saba building permit, kandi ukoreshe
            escrow kugira ngo wishyure mu mutekano.
          </p>

          <Link to="/construction" className="btn-primary inline-block mt-6">
            Open Construction
          </Link>
        </div>

        <div className="card p-8">
          <p className="text-orange-500 font-bold mb-2">Materials Market</p>

          <h2 className="text-3xl font-black">
            Ibikoresho by’ubwubatsi
          </h2>

          <p className="text-slate-500 mt-4">
            Cement, ibyuma, amatafari, umucanga, PVC, paint n’ibindi
            bikoresho biva ku bacuruzi verified.
          </p>

          <Link to="/materials" className="btn-primary inline-block mt-6">
            Open Materials
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="rounded-[2rem] bg-slate-950 text-white p-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-3xl font-black">BuildWise</h2>
            <p className="text-slate-300 mt-3">
              African Construction Ecosystem.
            </p>
          </div>

          <div>
            <h3 className="font-black mb-3">Marketplaces</h3>
            <p className="text-slate-300">Land</p>
            <p className="text-slate-300">Houses</p>
            <p className="text-slate-300">Rentals</p>
          </div>

          <div>
            <h3 className="font-black mb-3">Construction</h3>
            <p className="text-slate-300">Projects</p>
            <p className="text-slate-300">Estimator</p>
            <p className="text-slate-300">Permit</p>
          </div>

          <div>
            <h3 className="font-black mb-3">Contact</h3>
            <p className="text-slate-300">Kigali, Rwanda</p>
            <p className="text-slate-300">WhatsApp / Email / Support</p>
          </div>
        </div>

        <p className="text-slate-400 mt-8">
          © 2026 BuildWise. All rights reserved.
        </p>
      </footer>
    </div>
  );
}