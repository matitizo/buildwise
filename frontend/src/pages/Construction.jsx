import React from "react";

const constructionModules = [
  {
    title: "Projects",
    description:
      "Track construction progress, workers, timelines na reports.",
    icon: "🏗️",
  },
  {
    title: "Budget Estimator",
    description:
      "Bara amafaranga y’ubwubatsi mbere yo gutangira project.",
    icon: "🧮",
  },
  {
    title: "Building Permit",
    description:
      "Sabira ibyangombwa byo kubaka online.",
    icon: "📄",
  },
  {
    title: "Escrow",
    description:
      "Amafaranga abikwa neza kugeza construction irangiye.",
    icon: "🔒",
  },
];

export default function Construction() {
  return (
    <div className="space-y-10">
      {/* HERO */}
      <section className="rounded-[2rem] overflow-hidden bg-slate-950 text-white grid lg:grid-cols-2">
        <div className="p-8 md:p-14">
          <p className="text-blue-400 font-bold mb-4">
            BuildWise Construction System
          </p>

          <h1 className="text-4xl md:text-6xl font-black leading-tight">
            Build, manage and secure construction projects.
          </h1>

          <p className="text-slate-300 text-lg mt-6">
            Projects, estimator, building permit na escrow
            byose muri system imwe.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <button className="btn-primary">
              Start Project
            </button>

            <button className="btn-secondary text-slate-950">
              Apply Permit
            </button>
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd"
          alt="construction"
          className="w-full h-full min-h-[420px] object-cover opacity-70"
        />
      </section>

      {/* MODULES */}
      <section>
        <h2 className="text-3xl font-black text-slate-950 mb-6">
          Construction Modules
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {constructionModules.map((item) => (
            <div
              key={item.title}
              className="card p-6 hover:shadow-2xl transition"
            >
              <div className="text-5xl mb-5">
                {item.icon}
              </div>

              <h3 className="text-2xl font-black">
                {item.title}
              </h3>

              <p className="text-slate-500 mt-4">
                {item.description}
              </p>

              <button className="btn-primary mt-6">
                Open Module
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* BUILDING PERMIT */}
      <section className="card p-8">
        <p className="text-rose-500 font-bold mb-3">
          Get Building Permit
        </p>

        <h2 className="text-4xl font-black text-slate-950">
          Building Permit Workflow
        </h2>

        <div className="grid md:grid-cols-5 gap-4 mt-8">
          {[
            "Upload Documents",
            "Auto Document Check",
            "Architect Help",
            "Engineer Review",
            "Permit Processing",
          ].map((step, index) => (
            <div
              key={step}
              className="bg-slate-50 rounded-2xl p-5 border border-slate-200"
            >
              <p className="text-sm font-bold text-rose-500 mb-2">
                STEP {index + 1}
              </p>

              <h3 className="font-black text-lg">
                {step}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* ESCROW */}
      <section className="bg-white rounded-[2rem] border border-slate-200 p-8">
        <p className="text-green-500 font-bold mb-3">
          Escrow Protection
        </p>

        <h2 className="text-4xl font-black text-slate-950">
          Secure Construction Payments
        </h2>

        <div className="grid md:grid-cols-4 gap-5 mt-8">
          {[
            "Buyer Pays Securely",
            "Funds Held by System",
            "Work Verification",
            "Release Payment",
          ].map((item) => (
            <div
              key={item}
              className="bg-slate-50 rounded-2xl p-5 border border-slate-200"
            >
              <h3 className="font-black text-lg">
                🔐 {item}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}