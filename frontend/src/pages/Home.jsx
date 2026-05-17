import React from "react";
import {
  Home as HomeIcon,
  MapPin,
  Building2,
  ShoppingCart,
  Calculator,
  ShieldCheck,
  FileText,
  Menu,
  Globe,
  Search,
  Heart,
  CalendarDays,
  Play,
  MoreHorizontal,
} from "lucide-react";

const navItems = [
  { icon: HomeIcon, label: "Homes" },
  { icon: MapPin, label: "Land", badge: "NEW" },
  { icon: Building2, label: "Rentals" },
  { icon: ShoppingCart, label: "Materials" },
  { icon: ShieldCheck, label: "Services", badge: "NEW" },
  { icon: Calculator, label: "Estimator" },
  { icon: MoreHorizontal, label: "More" },
];

const services = [
  { title: "Land Marketplace", text: "Find verified land", icon: MapPin },
  { title: "Rentals", text: "Houses & apartments", icon: HomeIcon },
  { title: "Materials Shop", text: "Construction materials", icon: ShoppingCart },
  { title: "Cost Estimator", text: "Estimate your budget", icon: Calculator },
  { title: "Escrow", text: "Secure payments", icon: ShieldCheck },
  { title: "Permits", text: "Building permits", icon: FileText },
];

const properties = [
  {
    title: "Land in Kanombe",
    location: "Kigali, Kicukiro",
    price: "35,000,000 RWF",
    type: "LAND",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Modern House in Gacuriro",
    location: "Kigali, Gasabo",
    price: "120,000,000 RWF",
    type: "HOUSE",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Apartment in Rebero",
    location: "Kigali, Kicukiro",
    price: "450,000 RWF / month",
    type: "APARTMENT",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Land in Nyamata",
    location: "Bugesera, Nyamata",
    price: "18,000,000 RWF",
    type: "LAND",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f7f7] text-slate-950">
      {/* HEADER */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-[1500px] mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-pink-600 text-white flex items-center justify-center font-black text-xl">
              B
            </div>

            <div>
              <h1 className="text-2xl font-black leading-none">BuildWise</h1>
              <p className="text-xs text-slate-500">Construction Ecosystem</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-12">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.label}
                  className="relative flex flex-col items-center gap-1 text-sm font-semibold"
                >
                  {item.badge && (
                    <span className="absolute -top-4 bg-green-500 text-white text-[10px] px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}

                  <Icon size={22} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden md:block font-bold text-sm">
              Become a seller
            </button>

            <button className="w-11 h-11 rounded-full bg-slate-100 flex items-center justify-center">
              <Globe size={18} />
            </button>

            <button className="w-11 h-11 rounded-full bg-slate-100 flex items-center justify-center">
              <Menu size={20} />
            </button>

            <button className="w-11 h-11 rounded-full bg-slate-950 text-white font-bold">
              B
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-[1500px] mx-auto px-6 pt-10">
        {/* HERO */}
        <section className="rounded-[32px] overflow-hidden shadow-sm">
          <div className="grid lg:grid-cols-2 min-h-[460px]">
            <div className="bg-[#050816] text-white p-10 md:p-14 flex flex-col justify-center">
              <p className="text-pink-500 font-bold mb-5">
                BuildWise Construction System
              </p>

              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                Build, manage and secure construction projects.
              </h2>

              <p className="text-slate-300 mt-6 text-lg leading-8 max-w-xl">
                The all-in-one platform to find land, materials, professionals
                and manage your construction projects with confidence.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <button className="px-7 py-4 rounded-2xl bg-pink-600 hover:bg-pink-700 font-bold">
                  Start your project
                </button>

                <button className="px-7 py-4 rounded-2xl bg-white text-slate-950 font-bold flex items-center gap-2">
                  <Play size={18} />
                  Watch how it works
                </button>
              </div>
            </div>

            <div className="relative min-h-[360px]">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1400&auto=format&fit=crop"
                alt="construction"
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute bottom-10 right-10 bg-white rounded-2xl px-5 py-4 shadow-xl flex items-center gap-4">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full bg-slate-300 border-2 border-white" />
                  <div className="w-10 h-10 rounded-full bg-slate-400 border-2 border-white" />
                  <div className="w-10 h-10 rounded-full bg-slate-500 border-2 border-white" />
                </div>

                <div>
                  <p className="font-black text-emerald-600">1,200+</p>
                  <p className="text-sm text-slate-500">Happy users</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEARCH */}
        <div className="hidden lg:grid max-w-[1280px] mx-auto -mt-6 relative z-20 bg-white rounded-2xl shadow-xl border border-slate-200 p-3 grid-cols-[1fr_1fr_1.4fr_1fr_auto] gap-2">
          <SearchBox
            icon={<MapPin />}
            title="Where"
            placeholder="Search location"
          />

          <SearchBox
            icon={<CalendarDays />}
            title="When"
            placeholder="Any time"
          />

          <SearchBox
            icon={<HomeIcon />}
            title="What are you looking for?"
            placeholder="Land, house, materials..."
          />

          <SearchBox
            icon={<Calculator />}
            title="Budget"
            placeholder="Any budget"
            noBorder
          />

          <button className="w-16 h-16 rounded-full bg-pink-600 hover:bg-pink-700 text-white flex items-center justify-center">
            <Search size={26} />
          </button>
        </div>

        {/* SERVICES */}
        <section className="pt-14 pb-8 grid sm:grid-cols-2 lg:grid-cols-6 gap-5">
          {services.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-slate-200 p-4 min-h-[150px] hover:shadow-xl transition"
              >
                <div className="w-12 h-12 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center mb-4">
                  <Icon size={24} />
                </div>

                <h3 className="font-black text-lg">{item.title}</h3>
                <p className="text-sm text-slate-500 mt-1">{item.text}</p>
              </div>
            );
          })}
        </section>

        {/* FEATURED */}
        <section className="py-10">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-black">Featured Properties</h2>
              <p className="text-slate-500 mt-1">
                Handpicked land, houses and apartments.
              </p>
            </div>

            <button className="text-pink-600 font-bold">View all →</button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {properties.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-52 w-full object-cover"
                  />

                  <span className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-black px-3 py-1 rounded-lg">
                    {item.type}
                  </span>

                  <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow">
                    <Heart size={19} />
                  </button>
                </div>

                <div className="p-5">
                  <h3 className="font-black text-2xl">{item.title}</h3>
                  <p className="text-slate-500 mt-2">{item.location}</p>
                  <p className="text-emerald-600 font-black text-xl mt-5">
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

function SearchBox({ icon, title, placeholder, noBorder }) {
  return (
    <div
      className={`flex items-center gap-4 px-5 ${
        noBorder ? "" : "border-r border-slate-200"
      }`}
    >
      <div className="text-slate-800">{icon}</div>

      <div>
        <p className="font-bold text-sm">{title}</p>

        <input
          className="outline-none text-slate-500 w-full"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}