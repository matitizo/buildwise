import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const heroSlides = [
  {
    title: "Uburyo bworoshye bwo kubaka no gucunga imishinga.",
    text: "Tangiza umushinga, bara budget, saba permit, wishyure na escrow.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd",
    primary: "Tangira Umushinga",
    secondary: "Shaka Ikibanza",
    primaryLink: "/construction",
    secondaryLink: "/lands",
  },
  {
    title: "Shaka ikibanza, inzu cyangwa rental mu buryo bwizewe.",
    text: "Land marketplace, house marketplace, rentals na verified sellers.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    primary: "Explore Marketplace",
    secondary: "Reba Rentals",
    primaryLink: "/lands",
    secondaryLink: "/rentals",
  },
  {
    title: "Gura ibikoresho by’ubwubatsi ku bacuruzi bizewe.",
    text: "Cement, ibyuma, amatafari, umucanga, PVC, paint n’ibindi.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122",
    primary: "Open Materials",
    secondary: "Construction",
    primaryLink: "/materials",
    secondaryLink: "/construction",
  },
];

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

export default function Home() {
  const [slide, setSlide] = useState(0);
  const current = heroSlides[slide];

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-14">
      {/* HERO SLIDER */}
      <section className="relative overflow-hidden rounded-[2rem] bg-slate-950 text-white min-h-[560px]">
        <img
          src={current.image}
          alt={current.title}
          className="absolute inset-0 w-full h-full object-cover opacity-35 transition-all duration-700"
        />

        <div className="absolute inset-0 gradient-dark opacity-80" />

        <div className="relative z-10 p-8 md:p-16 max-w-5xl">
          <p className="text-blue-300 font-black mb-4">
            BuildWise African Construction Ecosystem
          </p>

          <h1 className="text-4xl md:text-7xl font-black leading-tight">
            {current.title}
          </h1>

          <p className="text-slate-200 text-lg md:text-xl mt-6 leading-relaxed max-w-3xl">
            {current.text}
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link to={current.primaryLink} className="btn-primary">
              {current.primary}
            </Link>

            <Link to={current.secondaryLink} className="btn-secondary text-slate-950">
              {current.secondary}
            </Link>
          </div>

          <div className="flex gap-3 mt-10">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setSlide(index)}
                className={`h-3 rounded-full transition-all ${
                  slide === index ? "w-12 bg-rose-500" : "w-3 bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* MODERN CATEGORIES */}
      <section>
        <h2 className="section-title mb-6">Modern Categories</h2>

        <div className="grid md:grid-cols-5 gap-4">
          {categories.map((item) => (
            <Link
              key={item.title}
              to={item.link}
              className="card p-6 text-center hover-card"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="font-black">{item.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* STATISTICS */}
      <section className="card p-8">
        <h2 className="section-title mb-6">Imibare ya BuildWise</h2>

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
            <h2 className="section-title">Ibigezweho ku isoko</h2>
          </div>

          <Link to="/lands" className="text-rose-500 font-bold">
            View all →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((item) => (
            <div key={item.title} className="card overflow-hidden hover-card group">
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