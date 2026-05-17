import React from "react";
import {
  Calculator,
  FileCheck,
  ShieldCheck,
  Hammer,
  Building2,
  ClipboardCheck,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Budget Estimator",
    desc: "Calculate construction cost before starting your project.",
    icon: Calculator,
    path: "/estimator",
  },
  {
    title: "Get Building Permit",
    desc: "Get support to apply for construction permits and required documents.",
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
    desc: "Track projects, workers, budget, progress and reports.",
    icon: Hammer,
    path: "/projects",
  },
  {
    title: "Find Engineers & Architects",
    desc: "Connect with trusted engineers, architects and construction experts.",
    icon: Building2,
    path: "/services",
  },
  {
    title: "Site Inspection",
    desc: "Request land or building inspection before buying or building.",
    icon: ClipboardCheck,
    path: "/services",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-[#f7f8fb] text-[#050816] px-6 py-14">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#050816] text-white rounded-[36px] p-10 md:p-16 mb-12">
          <p className="text-pink-500 font-black mb-4">BUILDWISE SERVICES</p>

          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
            Construction services in one smart platform.
          </h1>

          <p className="text-slate-300 text-lg leading-8 max-w-3xl">
            Access Budget Estimator, Building Permit support, Escrow Payment,
            Construction Management, Engineers, Architects and Site Inspection.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Link
                to={service.path}
                key={index}
                className="bg-white rounded-3xl border border-slate-200 p-8 hover:shadow-2xl transition block"
              >
                <div className="w-16 h-16 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center mb-6">
                  <Icon size={32} />
                </div>

                <h3 className="text-2xl font-black mb-4">{service.title}</h3>

                <p className="text-slate-500 leading-8 mb-6">
                  {service.desc}
                </p>

                <span className="text-pink-600 font-black inline-flex items-center gap-2">
                  Open service <ArrowRight size={18} />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}