import React from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Building2,
  ShoppingCart,
  Calculator,
  ShieldCheck,
  Wrench,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const features = [
  { title: "Marketplace", text: "Gura cyangwa ukodeshe property.", icon: Building2, link: "/marketplace" },
  { title: "Materials", text: "Gura ibikoresho by’ubwubatsi.", icon: ShoppingCart, link: "/materials" },
  { title: "Services", text: "Engineers, permits, inspection.", icon: Wrench, link: "/services" },
  { title: "Budget", text: "Bara ingengo y’imari.", icon: Calculator, link: "/estimator" },
];

const steps = [
  "Shakisha property cyangwa service",
  "Hitamo supplier / agent wemewe",
  "Koresha escrow mu kwishyura",
  "Kurikirana umushinga kugeza urangiye",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f8fb] text-[#050816]">
      <section className="px-6 pt-8">
        <div className="bg-white border border-slate-200 rounded-[32px] overflow-hidden shadow-sm grid lg:grid-cols-2">
          <div className="p-8 md:p-12">
            <p className="text-pink-600 font-black mb-4">
              BUILDWISE CONSTRUCTION PLATFORM
            </p>

            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-5">
              Kubaka, kugura no gucunga umushinga mu buryo bwizewe.
            </h1>

            <p className="text-slate-500 text-lg leading-8 mb-7">
              BuildWise igufasha kubona property, kugura materials, kubara budget,
              kubona services no kwishyura mu mutekano.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/marketplace"
                className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-xl font-black inline-flex items-center gap-2"
              >
                Tangira Gushakisha <Search size={18} />
              </Link>

              <Link
                to="/services"
                className="bg-[#050816] hover:bg-black text-white px-6 py-3 rounded-xl font-black inline-flex items-center gap-2"
              >
                Reba Services <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <div className="h-[360px] lg:h-auto">
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80"
              alt="construction"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-8">
        <div className="grid md:grid-cols-4 gap-5">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                to={item.link}
                className="bg-white border border-slate-200 rounded-[24px] p-5 hover:shadow-xl hover:-translate-y-1 transition"
              >
                <div className="w-12 h-12 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center mb-4">
                  <Icon size={24} />
                </div>

                <h3 className="text-xl font-black mb-2">{item.title}</h3>
                <p className="text-slate-500 leading-7">{item.text}</p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="px-6 pb-8">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-[#050816] text-white rounded-[28px] p-8">
            <p className="text-pink-500 font-black mb-3">UKO BUILDWISE IKORA</p>

            <h2 className="text-3xl md:text-4xl font-black mb-6">
              Inzira yoroshye kuva ku gushakisha kugeza ku kwishyura.
            </h2>

            <div className="space-y-4">
              {steps.map((step) => (
                <div
                  key={step}
                  className="bg-white/10 rounded-2xl p-4 flex items-center gap-3 font-black"
                >
                  <CheckCircle className="text-emerald-400" size={22} />
                  {step}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-[28px] p-8">
            <p className="text-pink-600 font-black mb-3">IMPAMVU BUILDWISE</p>

            <h2 className="text-3xl md:text-4xl font-black mb-6">
              Platform imwe ihuza ubwubatsi n’imitungo.
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              <MiniStat title="Properties" value="120+" />
              <MiniStat title="Suppliers" value="45+" />
              <MiniStat title="Services" value="8+" />
              <MiniStat title="Escrow Trust" value="95%" />
            </div>

            <Link
              to="/admin"
              className="mt-6 inline-flex items-center gap-2 text-pink-600 font-black"
            >
              Reba Admin Dashboard <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 pb-10">
        <div className="bg-gradient-to-r from-[#050816] to-pink-700 text-white rounded-[30px] p-8 md:p-10 text-center">
          <ShieldCheck className="mx-auto mb-4" size={38} />

          <h2 className="text-3xl md:text-4xl font-black mb-3">
            Tangira gukoresha BuildWise uyu munsi
          </h2>

          <p className="text-slate-200 mb-6">
            Gura property, shaka materials, bara budget cyangwa ukoreshe escrow.
          </p>

          <Link
            to="/marketplace"
            className="bg-white text-[#050816] px-7 py-3 rounded-xl font-black inline-flex items-center gap-2"
          >
            Tangira nonaha <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}

function MiniStat({ title, value }) {
  return (
    <div className="bg-slate-50 rounded-2xl p-5">
      <h3 className="text-3xl font-black text-pink-600">{value}</h3>
      <p className="text-slate-500 font-bold">{title}</p>
    </div>
  );
}