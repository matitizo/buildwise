import React from "react";
import {
  Calculator,
  FileCheck,
  ShieldCheck,
  Hammer,
  Building2,
  ClipboardCheck,
  Ruler,
  HardHat,
  DraftingCompass,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Budget Estimator",
    desc: "Calculate estimated construction cost before starting your project.",
    icon: Calculator,
    path: "/estimator",
  },
  {
    title: "Get Building Permit",
    desc: "Get support to prepare and apply for building permits.",
    icon: FileCheck,
    path: "/permits",
  },
  {
    title: "Escrow Payment",
    desc: "Pay safely while BuildWise protects your money until verification is complete.",
    icon: ShieldCheck,
    path: "/escrow",
  },
  {
    title: "Construction Management",
    desc: "Manage projects, workers, budget, progress and reports in one place.",
    icon: Hammer,
    path: "/projects",
  },
  {
    title: "Find Engineers",
    desc: "Connect with trusted civil engineers for your construction project.",
    icon: HardHat,
    path: "/engineers",
  },
  {
    title: "Find Architects",
    desc: "Find professional architects to design your house or building.",
    icon: DraftingCompass,
    path: "/architects",
  },
  {
    title: "Site Inspection",
    desc: "Request inspection for land, construction site or building quality.",
    icon: ClipboardCheck,
    path: "/inspection",
  },
  {
    title: "Quantity Surveying",
    desc: "Get BOQ, material quantities and professional cost estimation.",
    icon: Ruler,
    path: "/quantity-surveying",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-[#f7f8fb] text-[#050816] px-6 py-14">
      <div className="max-w-7xl mx-auto">
        {/* HERO */}
        <section className="bg-[#050816] text-white rounded-[36px] p-10 md:p-16 mb-12 overflow-hidden relative">
          <div className="relative z-10 max-w-4xl">
            <p className="text-pink-500 font-black tracking-[3px] mb-5">
              BUILDWISE SERVICES
            </p>

            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              Construction services in one smart platform.
            </h1>

            <p className="text-slate-300 text-lg leading-8">
              Access Budget Estimator, Building Permit support, Escrow Payment,
              Construction Management, Engineers, Architects, Site Inspection
              and Quantity Surveying.
            </p>
          </div>

          <div className="absolute -right-24 -bottom-24 w-72 h-72 bg-pink-600/30 rounded-full blur-3xl" />
        </section>

        {/* SERVICES GRID */}
        <section>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-black">
                Choose a service
              </h2>
              <p className="text-slate-500 mt-3">
                Select the service you need and start your request.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <Link
                  to={service.path}
                  key={index}
                  className="bg-white rounded-3xl border border-slate-200 p-7 hover:shadow-2xl hover:-translate-y-1 transition block"
                >
                  <div className="w-16 h-16 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center mb-6">
                    <Icon size={32} />
                  </div>

                  <h3 className="text-xl font-black mb-4">
                    {service.title}
                  </h3>

                  <p className="text-slate-500 leading-7 mb-6">
                    {service.desc}
                  </p>

                  <span className="text-pink-600 font-black inline-flex items-center gap-2">
                    Open service <ArrowRight size={18} />
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-14 bg-white border border-slate-200 rounded-[32px] p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <h2 className="text-3xl font-black mb-3">
              Need help choosing a service?
            </h2>
            <p className="text-slate-500">
              BuildWise can guide you from land search to project completion.
            </p>
          </div>

          <Link
            to="/lands"
            className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-2xl font-black inline-flex items-center gap-2 justify-center"
          >
            Start now <ArrowRight size={20} />
          </Link>
        </section>
      </div>
    </div>
  );
}