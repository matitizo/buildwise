import React from "react";
import {
  Calculator,
  FileCheck,
  ShieldCheck,
  Hammer,
  HardHat,
  DraftingCompass,
  ClipboardCheck,
  Ruler,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Budget Estimator",
    desc: "Bara amafaranga ashobora gukenerwa mbere yo gutangira umushinga.",
    icon: Calculator,
    path: "/estimator",
  },
  {
    title: "Get Building Permit",
    desc: "Fashwa gutegura documents no gusaba ibyangombwa byo kubaka.",
    icon: FileCheck,
    path: "/services",
  },
  {
    title: "Escrow Payment",
    desc: "Kwishyura mu mutekano kugeza documents n’amasezerano byemejwe.",
    icon: ShieldCheck,
    path: "/escrow",
  },
  {
    title: "Construction Management",
    desc: "Kurikirana abakozi, budget, materials, progress na reports.",
    icon: Hammer,
    path: "/projects",
  },
  {
    title: "Find Engineers",
    desc: "Shaka civil engineers bemewe bagufashe mu mushinga wawe.",
    icon: HardHat,
    path: "/services",
  },
  {
    title: "Find Architects",
    desc: "Shaka architects bagukorera drawings n’igishushanyo cy’inzu.",
    icon: DraftingCompass,
    path: "/services",
  },
  {
    title: "Site Inspection",
    desc: "Saba igenzura ry’ikibanza, inzu cyangwa construction site.",
    icon: ClipboardCheck,
    path: "/services",
  },
  {
    title: "Quantity Surveying",
    desc: "Bona BOQ, quantities, cost breakdown n’igenamigambi ry’ibikoresho.",
    icon: Ruler,
    path: "/services",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-[#f7f8fb] text-[#050816] px-6 py-8">
      <section className="bg-[#050816] text-white rounded-[30px] p-8 md:p-12 mb-8">
        <p className="text-pink-500 font-black mb-3">BUILDWISE SERVICES</p>

        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Serivisi z’ubwubatsi hamwe.
        </h1>

        <p className="text-slate-300 max-w-3xl leading-8">
          Hitamo serivisi ukeneye: kubara budget, kubona building permit,
          escrow payment, construction management, engineers, architects,
          site inspection na quantity surveying.
        </p>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <Link
              to={service.path}
              key={service.title}
              className="bg-white border border-slate-200 rounded-[26px] p-6 hover:shadow-2xl hover:-translate-y-1 transition"
            >
              <div className="w-14 h-14 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center mb-5">
                <Icon size={28} />
              </div>

              <h3 className="text-xl font-black mb-3">{service.title}</h3>

              <p className="text-slate-500 leading-7 mb-5">{service.desc}</p>

              <span className="text-pink-600 font-black inline-flex items-center gap-2">
                Open Service <ArrowRight size={18} />
              </span>
            </Link>
          );
        })}
      </section>

      <section className="mt-8 bg-white border border-slate-200 rounded-[30px] p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
        <div>
          <h2 className="text-3xl font-black mb-2">
            Need help choosing a service?
          </h2>

          <p className="text-slate-500">
            BuildWise ishobora kugufasha kuva ku kibanza kugeza ku mushinga
            urangiye.
          </p>
        </div>

        <Link
          to="/marketplace"
          className="bg-pink-600 hover:bg-pink-700 text-white px-7 py-3 rounded-xl font-black inline-flex items-center justify-center gap-2"
        >
          Start Now <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}