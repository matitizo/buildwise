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
  { title: "Land Marketplace", text: "Find verified land", icon: MapPin, color: "emerald" },
  { title: "Rentals", text: "Houses & apartments", icon: HomeIcon, color: "pink" },
  { title: "Materials Shop", text: "Construction materials", icon: ShoppingCart, color: "sky" },
  { title: "Cost Estimator", text: "Estimate your budget", icon: Calculator, color: "orange" },
  { title: "Escrow", text: "Secure payments", icon: ShieldCheck, color: "green" },
  { title: "Permits", text: "Building permits", icon: FileText, color: "purple" },
];

const properties = [
  {
    title: "Land in Kanombe",
    location: "Kigali, Kicukiro",
    price: "35,000,000 RWF",
    type: "LAND",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Modern House in Gacuriro",
    location: "Kigali, Gasabo",
    price: "120,000,000 RWF",
    type: "HOUSE",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Apartment in Rebero",
    location: "Kigali, Kicukiro",
    price: "450,000 RWF / month",
    type: "APARTMENT",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Land in Nyamata",
    location: "Bugesera, Nyamata",
    price: "18,000,000 RWF",
    type: "LAND",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <header className="bg-white sticky top-0 z-50 border-b border-slate-100">
        <div className="max-w-[1500px] mx-auto px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-pink-600 text-white flex items-center justify-center font-black">
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
                <button key={item.label} className="relative flex flex-col items-center gap-1 font-semibold text-sm">
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
            <button className="hidden md:block font-bold text-sm">Become a seller</button>
            <button className="w-11 h-11 rounded-full bg-slate-100 flex items-center justify-center">
              <Globe size={18} />
            </button>
            <button className="w-11 h-11 rounded-full bg-slate-100 flex items-center justify-center">
              <Menu size={20} />
            </button>
            <button className="w-11 h-11 rounded-full bg-slate-950 text-white font-bold">B</button>
          </div>
        </div>
      </header>

      <main className="max-w-[1500px] mx-auto px-8 pt-8">
        <section className="relative rounded-[28px] overflow-hidden shadow-sm">
          <div className="grid lg:grid-cols-2 min-h-[480px]">
            <div className="bg-[#060b1a] text-white p-12 md:p-20 flex flex-col justify-center">
              <p className="text-pink-500 font-bold mb-6">
                BuildWise Construction System
              </p>

              <h2 className="text-4xl md:text-6xl font-black leading-tight">
                Build, manage and secure construction projects.
              </h2>

              <p className="text-slate-300 mt-7 max-w-xl text-lg leading-8">
                The all-in-one platform to find land, materials, professionals
                and manage your construction projects with confidence.
              </p>

              <div className="flex flex-wrap gap-4 mt-9">
                <button className="px-7 py-4 rounded-xl bg-pink-600 text-white font-bold">
                  Start your project
                </button>
                <button className="px-7 py-4 rounded-xl bg-white text-slate-950 font-bold flex items-center gap-2">
                  <Play size={18} />
                  Watch how it works
                </button>
              </div>
            </div>

            <div className="relative min-h-[360px]">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1400&auto=format&fit=crop"
                alt="Construction"
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute bottom-16 right-12 bg-white rounded-2xl px-5 py-4 shadow-xl flex items-center gap-4">
                <div className="flex -space-x-3">
                  <div className="w-9 h-9 rounded-full bg-slate-300 border-2 border-white" />
                  <div className="w-9 h-9 rounded-full bg-slate-400 border-2 border-white" />
                  <div className="w-9 h-9 rounded-full bg-slate-500 border-2 border-white" />
                </div>
                <div>
                  <p className="font-black text-emerald-600">1,200+</p>
                  <p className="text-sm text-slate-500">Happy users</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute left-1/2 -bottom-10 -translate-x-1/2 w-[88%] bg-white rounded-2xl shadow-xl border border-slate-100 p-3 hidden lg:grid grid-cols-[1fr_1fr_1.3fr_1fr_auto] gap-2">
            <SearchBox icon={<MapPin />} title="Where" placeholder="Search location, city or area" />
            <SearchBox icon={<CalendarDays />} title="When" placeholder="Any time" />
            <SearchBox icon={<HomeIcon />} title="What are you looking for?" placeholder="Land, house, materials, services..." />
            <SearchBox icon={<Calculator />} title="Budget" placeholder="Any budget" noBorder />
            <button className="w-16 h-16 rounded-full bg-pink-600 text-white flex items-center justify-center">
              <Search size={26} />
            </button>
          </div>
        </section>

        <section className="pt-20 pb-10 grid sm:grid-cols-2 lg:grid-cols-6 gap-5">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="bg-white rounded-2xl border border-slate-200 p-5 hover:shadow-xl transition">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 text-pink-600 flex items-center justify-center mb-4">
                  <Icon size={24} />
                </div>
                <h3 className="font-black">{item.title}</h3>
                <p className="text-sm text-slate-500 mt-1">{item.text}</p>
              </div>
            );
          })}
        </section>

        <section className="py-10">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-black">Featured Properties</h2>
              <p className="text-slate-500 mt-1">Handpicked land, houses and apartments.</p>
            </div>
            <button className="text-pink-600 font-bold">View all →</button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {properties.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition">
                <div className="relative">
                  <img src={item.image} alt={item.title} className="h-48 w-full object-cover" />
                  <span className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-black px-3 py-1 rounded-lg">
                    {item.type}
                  </span>
                  <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow">
                    <Heart size={19} />
                  </button>
                </div>

                <div className="p-5">
                  <h3 className="font-black text-lg">{item.title}</h3>
                  <p className="text-slate-500 mt-1">{item.location}</p>
                  <p className="text-emerald-600 font-black mt-4">{item.price}</p>
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
    <div className={`flex items-center gap-4 px-5 ${noBorder ? "" : "border-r border-slate-200"}`}>
      <div className="text-slate-800">{icon}</div>
      <div>
        <p className="font-bold text-sm">{title}</p>
        <input className="outline-none text-slate-500 w-full" placeholder={placeholder} />
      </div>
    </div>
  );
}