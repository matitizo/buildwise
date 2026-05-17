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
  CheckCircle,
  Hammer,
  ArrowRight,
} from "lucide-react";

const navItems = [
  { icon: HomeIcon, label: "Ahabanza" },
  { icon: MapPin, label: "Ibibanza", badge: "BISHYA" },
  { icon: Building2, label: "Ubukode" },
  { icon: ShoppingCart, label: "Ibikoresho" },
  { icon: ShieldCheck, label: "Serivisi", badge: "BISHYA" },
  { icon: Calculator, label: "Kubara Budget" },
  { icon: MoreHorizontal, label: "Ibindi" },
];

const services = [
  { title: "Isoko ry’Ibibanza", text: "Shaka ibibanza byemejwe", icon: MapPin },
  { title: "Inzu z’Ubukode", text: "Inzu na apartments", icon: HomeIcon },
  { title: "Ibikoresho", text: "Ibikoresho by’ubwubatsi", icon: ShoppingCart },
  { title: "Kubara Budget", text: "Menya ikiguzi mbere", icon: Calculator },
  { title: "Escrow", text: "Kwishyura mu mutekano", icon: ShieldCheck },
  { title: "Ibyangombwa", text: "Ibyangombwa byo kubaka", icon: FileText },
];

const partners = ["BK", "I&M", "MTN MOMO", "AIRTEL", "SP", "RHA"];

const properties = [
  {
    title: "Ikibanza i Kanombe",
    location: "Kigali, Kicukiro",
    price: "35,000,000 RWF",
    type: "IKIBANZA",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Inzu igezweho i Gacuriro",
    location: "Kigali, Gasabo",
    price: "120,000,000 RWF",
    type: "INZU",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Apartment i Rebero",
    location: "Kigali, Kicukiro",
    price: "450,000 RWF / ukwezi",
    type: "APARTMENT",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Ikibanza i Nyamata",
    location: "Bugesera, Nyamata",
    price: "18,000,000 RWF",
    type: "IKIBANZA",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
  },
];

const testimonials = [
  {
    name: "Jean Claude",
    role: "Umwubatsi",
    text: "BuildWise yamfashije kubona ibikoresho ku giciro cyiza kandi byihuse.",
  },
  {
    name: "Aline Uwase",
    role: "Umukiriya",
    text: "Nabonye ikibanza cyiza i Kigali kandi escrow yandinze ikibazo cy’ubwambuzi.",
  },
  {
    name: "Eric Habimana",
    role: "Real Estate Broker",
    text: "Iyi system yorohereje abakiriya banjye gushaka ibibanza no kubona amakuru yose.",
  },
];

const steps = [
  {
    title: "Hitamo icyo ushaka",
    text: "Ikibanza, inzu, ibikoresho, budget cyangwa escrow.",
  },
  {
    title: "Shakisha mu buryo bworoshye",
    text: "Koresha location, budget n’ubwoko bw’umutungo.",
  },
  {
    title: "Vugana n’uwemejwe",
    text: "Abagurisha, brokers na suppliers bemejwe.",
  },
  {
    title: "Kora transaction mu mutekano",
    text: "Koresha escrow kugira ngo amafaranga arindwe.",
  },
];

const stats = [
  { number: "1,200+", label: "Abakoresha" },
  { number: "350+", label: "Ibibanza" },
  { number: "90+", label: "Suppliers" },
  { number: "45+", label: "Imishinga" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f7f7] text-slate-950">
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-[1500px] mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-pink-600 text-white flex items-center justify-center font-black text-xl">
              B
            </div>
            <div>
              <h1 className="text-2xl font-black leading-none">BuildWise</h1>
              <p className="text-xs text-slate-500">
                Urubuga rw’Ubwubatsi n’Umutungo
              </p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  className="relative flex flex-col items-center gap-1 text-sm font-semibold hover:text-pink-600 transition"
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
              Tangira kugurisha
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
          <div className="grid lg:grid-cols-2 min-h-[500px]">
            <div className="bg-[#050816] text-white p-8 md:p-12 flex flex-col justify-center">
              <p className="text-pink-500 font-bold mb-4">
                BuildWise Construction System
              </p>
              <h2 className="text-4xl md:text-[52px] font-black leading-[1.05]">
                Kubaka, kugura no gucunga umushinga mu buryo bwizewe.
              </h2>
              <p className="text-slate-300 mt-5 text-lg leading-8 max-w-xl">
                BuildWise igufasha gushaka ibibanza, ibikoresho, abatekinisiye,
                kubara budget no kwishyura mu mutekano ukoresheje escrow.
              </p>

              <div className="flex flex-wrap gap-4 mt-7">
                <button className="px-7 py-4 rounded-2xl bg-pink-600 hover:bg-pink-700 font-bold">
                  Tangira umushinga
                </button>
                <button className="px-7 py-4 rounded-2xl bg-white text-slate-950 font-bold flex items-center gap-2">
                  <Play size={18} />
                  Reba uko bikora
                </button>
              </div>
            </div>

            <div className="relative min-h-[360px]">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1400&auto=format&fit=crop"
                alt="construction"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-8 right-8 bg-white rounded-2xl px-5 py-4 shadow-xl flex items-center gap-4">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full bg-slate-300 border-2 border-white" />
                  <div className="w-10 h-10 rounded-full bg-slate-400 border-2 border-white" />
                  <div className="w-10 h-10 rounded-full bg-slate-500 border-2 border-white" />
                </div>
                <div>
                  <p className="font-black text-emerald-600">1,200+</p>
                  <p className="text-sm text-slate-500">Abakoresha</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEARCH */}
        <div className="hidden lg:grid max-w-[1280px] mx-auto -mt-6 relative z-20 bg-white rounded-2xl shadow-xl border border-slate-200 p-3 grid-cols-[1fr_1fr_1.4fr_1fr_auto] gap-2">
          <SearchBox icon={<MapPin />} title="Aho ushaka" placeholder="Andika akarere cyangwa umujyi" />
          <SearchBox icon={<CalendarDays />} title="Igihe" placeholder="Igihe icyo ari cyo cyose" />
          <SearchBox icon={<HomeIcon />} title="Urashaka iki?" placeholder="Ikibanza, inzu, ibikoresho..." />
          <SearchBox icon={<Calculator />} title="Budget" placeholder="Ingengo y’imari" noBorder />
          <button className="w-16 h-16 rounded-full bg-pink-600 hover:bg-pink-700 text-white flex items-center justify-center">
            <Search size={26} />
          </button>
        </div>

        {/* SERVICES */}
        <section className="pt-16 pb-14 grid sm:grid-cols-2 lg:grid-cols-6 gap-5">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-slate-200 p-4 min-h-[150px] hover:shadow-xl hover:-translate-y-1 transition duration-300"
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

        {/* TRUSTED PARTNERS */}
        <section className="py-10">
          <div className="text-center mb-10">
            <p className="text-pink-600 font-bold uppercase tracking-widest">
              Abafatanyabikorwa
            </p>
            <h2 className="text-3xl md:text-4xl font-black mt-3">
              BuildWise yizewe n’ibigo bikomeye
            </h2>
            <p className="text-slate-500 mt-3 max-w-2xl mx-auto">
              Dufatanya n’ibigo by’imari, suppliers, real estate companies
              ndetse n’abubatsi batandukanye.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {partners.map((partner) => (
              <div
                key={partner}
                className="bg-white border border-slate-200 rounded-2xl h-24 flex items-center justify-center font-black text-slate-700 text-lg hover:shadow-xl hover:-translate-y-1 transition duration-300"
              >
                {partner}
              </div>
            ))}
          </div>
        </section>

        {/* FEATURED */}
        <section className="pt-10 pb-16">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-black">Ibiri ku isoko</h2>
              <p className="text-slate-500 mt-1">
                Ibibanza, inzu na apartments byatoranyijwe.
              </p>
            </div>
            <button className="text-pink-600 font-bold">Reba byose →</button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {properties.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-52 w-full object-cover hover:scale-105 transition duration-500"
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

        {/* TESTIMONIALS */}
        <section className="py-16">
          <div className="text-center mb-12">
            <p className="text-pink-600 font-bold uppercase tracking-widest">
              Ubuhamya
            </p>
            <h2 className="text-3xl md:text-4xl font-black mt-3">
              Ibyo abakoresha bavuga kuri BuildWise
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-7">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="bg-white rounded-[28px] border border-slate-200 p-8 hover:shadow-2xl hover:-translate-y-1 transition duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white flex items-center justify-center font-black text-xl">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-black text-lg">{item.name}</h3>
                    <p className="text-slate-500 text-sm">{item.role}</p>
                  </div>
                </div>
                <p className="text-slate-600 leading-8">“{item.text}”</p>
                <div className="flex gap-1 mt-6 text-yellow-500 text-xl">
                  ★★★★★
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-16">
          <div className="mb-10">
            <h2 className="text-3xl font-black">Uko BuildWise ikora</h2>
            <p className="text-slate-500 mt-2">
              Inzira yoroshye kuva ku gushaka ikibanza kugeza ku kwishyura mu
              mutekano.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="bg-white rounded-3xl border border-slate-200 p-6 hover:shadow-xl hover:-translate-y-1 transition duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-pink-600 text-white flex items-center justify-center font-black mb-5">
                  {index + 1}
                </div>
                <h3 className="font-black text-xl">{step.title}</h3>
                <p className="text-slate-500 mt-3">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* STATS */}
        <section className="py-10">
          <div className="bg-slate-950 text-white rounded-[32px] p-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <h3 className="text-4xl font-black text-pink-500">
                  {stat.number}
                </h3>
                <p className="text-slate-300 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WHY CHOOSE */}
        <section className="py-16 grid lg:grid-cols-2 gap-10 items-center">
          <div className="bg-white rounded-[32px] border border-slate-200 p-8 md:p-10">
            <p className="text-pink-600 font-bold mb-3">
              Impamvu wahitamo BuildWise
            </p>
            <h2 className="text-3xl md:text-4xl font-black">
              Twubaka system ifasha abakiriya n’abubatsi gukorana icyizere.
            </h2>

            <div className="mt-8 space-y-4">
              {[
                "Abagurisha n’aba brokers bemejwe",
                "Kwishyura binyuze muri escrow",
                "Kubara budget mbere yo kubaka",
                "Guhuza abakiriya na suppliers bizewe",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 bg-slate-50 rounded-2xl p-4"
                >
                  <CheckCircle className="text-emerald-600" size={22} />
                  <span className="font-bold">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] overflow-hidden h-[430px]">
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1400&auto=format&fit=crop"
              alt="construction workers"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="bg-gradient-to-r from-slate-950 to-pink-700 rounded-[32px] p-10 md:p-16 text-white text-center">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-white/10 flex items-center justify-center mb-6">
              <Hammer size={30} />
            </div>
            <h2 className="text-3xl md:text-5xl font-black">
              Tangira umushinga wawe uyu munsi
            </h2>
            <p className="text-slate-200 max-w-2xl mx-auto mt-4">
              BuildWise igufasha kuva ku gushaka ikibanza, kugura ibikoresho,
              kubara budget kugeza ku kwishyura mu buryo bwizewe.
            </p>
            <button className="mt-8 px-8 py-4 rounded-2xl bg-white text-slate-950 font-black inline-flex items-center gap-2">
              Tangira nonaha <ArrowRight size={20} />
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-slate-200 mt-10">
        <div className="max-w-[1500px] mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-black">BuildWise</h3>
            <p className="text-slate-500 mt-3">
              Platform ifasha mu bwubatsi, kugura ibibanza, ibikoresho,
              kwishyura no gucunga imishinga.
            </p>
          </div>

          <div>
            <h4 className="font-black mb-3">Serivisi</h4>
            <p className="text-slate-500">Ibibanza</p>
            <p className="text-slate-500">Ibikoresho</p>
            <p className="text-slate-500">Escrow</p>
            <p className="text-slate-500">Kubara Budget</p>
          </div>

          <div>
            <h4 className="font-black mb-3">Company</h4>
            <p className="text-slate-500">Ibitwerekeye</p>
            <p className="text-slate-500">Twandikire</p>
            <p className="text-slate-500">Ubufasha</p>
          </div>

          <div>
            <h4 className="font-black mb-3">Twandikire</h4>
            <p className="text-slate-500">Kigali, Rwanda</p>
            <p className="text-slate-500">info@buildwise.rw</p>
            <p className="text-slate-500">+250 7XX XXX XXX</p>
          </div>
        </div>

        <div className="max-w-[1500px] mx-auto px-6 py-5 border-t border-slate-200 text-sm text-slate-500">
          © 2026 BuildWise. Uburenganzira bwose burabitswe.
        </div>
      </footer>
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