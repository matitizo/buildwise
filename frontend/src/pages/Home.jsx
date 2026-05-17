import React from "react";
import { Link } from "react-router-dom";
import {
  Search,
  MapPin,
  CalendarDays,
  Home as HomeIcon,
  Calculator,
  ShieldCheck,
  FileText,
  ShoppingCart,
  Heart,
  Play,
  Star,
  ArrowRight,
  Hammer,
  Building2,
  CheckCircle,
  Phone,
  Mail,
  Globe,
} from "lucide-react";

const categories = [
  { title: "Isoko ry’Ibibanza", desc: "Shaka ibibanza byemejwe", icon: MapPin },
  { title: "Inzu z’Ubukode", desc: "Inzu na apartments", icon: HomeIcon },
  { title: "Ibikoresho", desc: "Ibikoresho by’ubwubatsi", icon: ShoppingCart },
  { title: "Kubara Budget", desc: "Menya ikiguzi mbere", icon: Calculator },
  { title: "Escrow", desc: "Kwishyura mu mutekano", icon: ShieldCheck },
  { title: "Ibyangombwa", desc: "Ibyangombwa byo kubaka", icon: FileText },
];

const partners = ["BK", "I&M", "MTN MOMO", "AIRTEL", "SP", "RHA"];

const listings = [
  {
    id: "1",
    title: "Ikibanza i Kanombe",
    location: "Kigali, Kicukiro",
    price: "35,000,000 RWF",
    tag: "IKIBANZA",
    img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "2",
    title: "Inzu igezweho i Gacuriro",
    location: "Kigali, Gasabo",
    price: "120,000,000 RWF",
    tag: "INZU",
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "3",
    title: "Apartment i Rebero",
    location: "Kigali, Kicukiro",
    price: "450,000 RWF / ukwezi",
    tag: "APARTMENT",
    img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "4",
    title: "Ikibanza i Nyamata",
    location: "Bugesera, Nyamata",
    price: "18,000,000 RWF",
    tag: "IKIBANZA",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
  },
];

const steps = [
  {
    number: "1",
    title: "Hitamo icyo ushaka",
    desc: "Ikibanza, inzu, ibikoresho, budget cyangwa escrow.",
  },
  {
    number: "2",
    title: "Shakisha byoroshye",
    desc: "Koresha location, budget n’ubwoko bw’umutungo.",
  },
  {
    number: "3",
    title: "Vugana n’uwemejwe",
    desc: "Abagurisha, brokers na suppliers bemejwe.",
  },
  {
    number: "4",
    title: "Kwishyura mu mutekano",
    desc: "Koresha escrow kugira ngo amafaranga arindwe.",
  },
];

const whyChoose = [
  "Abagurisha n’aba brokers bemejwe",
  "Kwishyura binyuze muri escrow",
  "Kubara budget mbere yo kubaka",
  "Guhuza abakiriya na suppliers bizewe",
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

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f8fb] text-[#050816]">
      {/* HERO */}
      <section className="px-6 pt-10">
        <div className="grid lg:grid-cols-2 overflow-hidden rounded-[36px] bg-[#050816] shadow-xl">
          <div className="p-10 lg:p-14 text-white flex flex-col justify-center">
            <p className="text-pink-500 font-bold mb-6">
              BuildWise Construction System
            </p>

            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              Kubaka, kugura no gucunga umushinga mu buryo bwizewe.
            </h1>

            <p className="text-slate-300 text-lg leading-8 mb-8 max-w-xl">
              BuildWise igufasha gushaka ibibanza, ibikoresho, abatekinisiye,
              kubara budget no kwishyura mu mutekano.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-2xl font-bold">
                Tangira umushinga
              </button>

              <button className="bg-white text-[#050816] px-8 py-4 rounded-2xl font-bold flex items-center gap-2">
                <Play size={20} />
                Reba uko bikora
              </button>
            </div>
          </div>

          <div className="relative min-h-[420px]">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80"
              alt="Construction"
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-8 right-8 bg-white rounded-3xl p-5 shadow-xl">
              <h3 className="text-emerald-600 font-black text-3xl">1,200+</h3>
              <p className="text-slate-500">Abakoresha</p>
            </div>
          </div>
        </div>

        {/* SEARCH */}
        <div className="-mt-10 relative z-10 bg-white rounded-3xl shadow-xl p-5 grid md:grid-cols-5 gap-4 items-center">
          <div className="flex items-center gap-3 md:border-r border-slate-200">
            <MapPin />
            <div>
              <h4 className="font-bold">Aho ushaka</h4>
              <p className="text-slate-400 text-sm">Andika akarere</p>
            </div>
          </div>

          <div className="flex items-center gap-3 md:border-r border-slate-200">
            <CalendarDays />
            <div>
              <h4 className="font-bold">Igihe</h4>
              <p className="text-slate-400 text-sm">Igihe icyo ari cyo cyose</p>
            </div>
          </div>

          <div className="flex items-center gap-3 md:border-r border-slate-200">
            <HomeIcon />
            <div>
              <h4 className="font-bold">Urashaka iki?</h4>
              <p className="text-slate-400 text-sm">Ikibanza, inzu...</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Calculator />
            <div>
              <h4 className="font-bold">Budget</h4>
              <p className="text-slate-400 text-sm">Ingengo y’imari</p>
            </div>
          </div>

          <button className="bg-pink-600 hover:bg-pink-700 text-white w-16 h-16 rounded-full flex items-center justify-center md:ml-auto">
            <Search size={30} />
          </button>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-6">
          {categories.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-xl transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center mb-6">
                  <Icon size={26} />
                </div>
                <h3 className="text-xl font-black mb-3">{item.title}</h3>
                <p className="text-slate-500 leading-7">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* PARTNERS */}
      <section className="px-6 pb-16 text-center">
        <p className="text-pink-600 font-black tracking-[4px] mb-4">
          ABAFATANYABIKORWA
        </p>

        <h2 className="text-3xl md:text-4xl font-black mb-4">
          BuildWise yizewe n’ibigo bikomeye
        </h2>

        <p className="text-slate-500 mb-10">
          Dufatanya n’ibigo by’imari, suppliers, real estate companies
          n’abubatsi batandukanye.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-2xl h-24 flex items-center justify-center font-black text-slate-700 shadow-sm"
            >
              {partner}
            </div>
          ))}
        </div>
      </section>

      {/* LISTINGS */}
      <section className="px-6 pb-16">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-black">Ibiri ku isoko</h2>
            <p className="text-slate-500 mt-2">
              Ibibanza, inzu na apartments byatoranyijwe.
            </p>
          </div>

          <button className="text-pink-600 font-bold flex items-center gap-2">
            Reba byose <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {listings.map((item) => (
            <Link
              to={`/property/${item.id}`}
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-2xl transition border border-slate-100 block"
            >
              <div className="relative h-60">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

                <span className="absolute top-4 left-4 bg-emerald-600 text-white text-sm font-black px-4 py-2 rounded-lg">
                  {item.tag}
                </span>

                <button className="absolute top-4 right-4 bg-white w-12 h-12 rounded-full flex items-center justify-center shadow">
                  <Heart size={22} />
                </button>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-black mb-3">{item.title}</h3>
                <p className="text-slate-500 mb-6">{item.location}</p>
                <h4 className="text-emerald-600 font-black text-2xl">
                  {item.price}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 pb-16">
        <h2 className="text-3xl font-black mb-3">Uko BuildWise ikora</h2>
        <p className="text-slate-500 mb-10">
          Inzira yoroshye kuva ku gushaka ikibanza kugeza ku kwishyura mu
          mutekano.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-3xl border border-slate-200 p-8"
            >
              <div className="w-14 h-14 rounded-full bg-pink-600 text-white flex items-center justify-center text-xl font-black mb-8">
                {step.number}
              </div>
              <h3 className="text-2xl font-black mb-4">{step.title}</h3>
              <p className="text-slate-500 leading-8">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="px-6 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center bg-white rounded-[36px] border border-slate-200 p-8 lg:p-12 shadow-sm">
          <div>
            <p className="text-pink-600 font-black mb-5">
              Impamvu wahitamo BuildWise
            </p>

            <h2 className="text-4xl font-black leading-tight mb-8">
              Twubaka system ifasha abakiriya n’abubatsi gukorana icyizere.
            </h2>

            <div className="space-y-5">
              {whyChoose.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#f7f8fb] rounded-2xl p-5 flex items-center gap-4 font-bold"
                >
                  <CheckCircle className="text-emerald-600" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
            alt="Engineer drawing plan"
            className="w-full h-[420px] object-cover rounded-[28px]"
          />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-6 pb-16">
        <div className="text-center mb-10">
          <p className="text-pink-600 font-black tracking-[4px] mb-4">
            UBUHAMYA
          </p>

          <h2 className="text-3xl md:text-4xl font-black">
            Ibyo abakoresha bavuga kuri BuildWise
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-full bg-pink-600 text-white flex items-center justify-center text-xl font-black">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h4 className="font-black text-lg">{item.name}</h4>
                  <p className="text-slate-500">{item.role}</p>
                </div>
              </div>

              <p className="text-slate-600 leading-8 mb-8">“{item.text}”</p>

              <div className="flex gap-1 text-yellow-500">
                {[1, 2, 3, 4, 5].map((n) => (
                  <Star key={n} size={20} fill="currentColor" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-16">
        <div className="rounded-[36px] bg-gradient-to-r from-[#050816] to-pink-700 text-white text-center px-8 py-20">
          <div className="mx-auto w-18 h-18 rounded-2xl bg-white/10 flex items-center justify-center mb-8">
            <Hammer size={34} />
          </div>

          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Tangira umushinga wawe uyu munsi
          </h2>

          <p className="text-slate-200 max-w-3xl mx-auto leading-8 mb-10">
            BuildWise igufasha kuva ku gushaka ikibanza, kugura ibikoresho,
            kubara budget kugeza ku kwishyura mu buryo bwizewe.
          </p>

          <button className="bg-white text-[#050816] px-10 py-5 rounded-2xl font-black inline-flex items-center gap-3">
            Tangira nonaha
            <ArrowRight />
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-200 px-6 py-12">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <h2 className="text-3xl font-black mb-4">BuildWise</h2>
            <p className="text-slate-500 leading-8">
              Platform ifasha mu bwubatsi, kugura ibibanza, ibikoresho,
              kwishyura no gucunga imishinga.
            </p>
          </div>

          <div>
            <h3 className="font-black mb-4">Serivisi</h3>
            <ul className="space-y-3 text-slate-500">
              <li>Ibibanza</li>
              <li>Ibikoresho</li>
              <li>Escrow</li>
              <li>Kubara Budget</li>
            </ul>
          </div>

          <div>
            <h3 className="font-black mb-4">Company</h3>
            <ul className="space-y-3 text-slate-500">
              <li>Ibitwerekeye</li>
              <li>Twandikire</li>
              <li>Ubufasha</li>
            </ul>
          </div>

          <div>
            <h3 className="font-black mb-4">Twandikire</h3>
            <div className="space-y-3 text-slate-500">
              <p className="flex items-center gap-3">
                <Globe size={18} />
                Kigali, Rwanda
              </p>
              <p className="flex items-center gap-3">
                <Mail size={18} />
                info@buildwise.rw
              </p>
              <p className="flex items-center gap-3">
                <Phone size={18} />
                +250 7XX XXX XXX
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 mt-10 pt-6 text-slate-500">
          © 2026 BuildWise. Uburenganzira bwose burabitswe.
        </div>
      </footer>
    </div>
  );
}