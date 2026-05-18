import React, { useMemo, useState } from "react";
import {
  Calculator,
  Home,
  Layers,
  BedDouble,
  Bath,
  Hammer,
  ShieldCheck,
  Wallet,
  BrickWall,
  Users,
  FileText,
  RefreshCcw,
} from "lucide-react";

export default function Estimator() {
  const [form, setForm] = useState({
    houseType: "Residential House",
    floors: 1,
    bedrooms: 3,
    bathrooms: 2,
    foundation: "Standard Foundation",
    roofing: "Iron Sheets",
    quality: "Standard",
    area: 120,
  });

  const estimate = useMemo(() => {
    const qualityRate = {
      Basic: 280000,
      Standard: 420000,
      Premium: 650000,
      Luxury: 900000,
    };

    const foundationRate = {
      "Simple Foundation": 0.9,
      "Standard Foundation": 1,
      "Deep Foundation": 1.25,
      "Reinforced Foundation": 1.45,
    };

    const roofingRate = {
      "Iron Sheets": 1,
      "Tiles Roofing": 1.18,
      "Concrete Roof": 1.35,
      "Modern Flat Roof": 1.5,
    };

    const base =
      Number(form.area) *
      qualityRate[form.quality] *
      Number(form.floors) *
      foundationRate[form.foundation] *
      roofingRate[form.roofing];

    const bedroomExtra = Number(form.bedrooms) * 1200000;
    const bathroomExtra = Number(form.bathrooms) * 1800000;

    const total = base + bedroomExtra + bathroomExtra;
    const materials = total * 0.62;
    const labor = total * 0.25;
    const professional = total * 0.08;
    const contingency = total * 0.05;

    return {
      total,
      materials,
      labor,
      professional,
      contingency,
    };
  }, [form]);

  function money(value) {
    return `${Math.round(value).toLocaleString()} RWF`;
  }

  function resetForm() {
    setForm({
      houseType: "Residential House",
      floors: 1,
      bedrooms: 3,
      bathrooms: 2,
      foundation: "Standard Foundation",
      roofing: "Iron Sheets",
      quality: "Standard",
      area: 120,
    });
  }

  return (
    <div className="min-h-screen bg-[#f7f8fb] text-[#050816] px-6 py-8">
      <section className="bg-[#050816] text-white rounded-[30px] p-8 md:p-12 mb-8">
        <p className="text-pink-500 font-black mb-3">
          BUILDWISE COST ESTIMATOR
        </p>

        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Kubara budget y’ubwubatsi mbere yo gutangira.
        </h1>

        <p className="text-slate-300 max-w-3xl leading-8">
          Injizamo amakuru y’inzu ushaka kubaka, BuildWise igufashe kubona
          estimate y’ibikoresho, abakozi, professional fees na contingency.
        </p>
      </section>

      <div className="grid lg:grid-cols-3 gap-8">
        <section className="lg:col-span-2 bg-white border border-slate-200 rounded-[28px] p-6 shadow-sm">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
            <div>
              <h2 className="text-3xl font-black">Project Information</h2>
              <p className="text-slate-500 mt-1">
                Uzuza amakuru y’umushinga wawe.
              </p>
            </div>

            <button
              onClick={resetForm}
              className="border border-slate-300 px-4 py-2 rounded-xl font-black flex items-center gap-2 hover:bg-slate-50"
            >
              <RefreshCcw size={17} />
              Reset
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Field icon={Home} label="House Type">
              <select
                value={form.houseType}
                onChange={(e) =>
                  setForm({ ...form, houseType: e.target.value })
                }
                className="input"
              >
                <option>Residential House</option>
                <option>Apartment Block</option>
                <option>Commercial Building</option>
                <option>Villa</option>
              </select>
            </Field>

            <Field icon={Layers} label="Number of Floors">
              <input
                type="number"
                min="1"
                value={form.floors}
                onChange={(e) => setForm({ ...form, floors: e.target.value })}
                className="input"
              />
            </Field>

            <Field icon={BedDouble} label="Bedrooms">
              <input
                type="number"
                min="0"
                value={form.bedrooms}
                onChange={(e) => setForm({ ...form, bedrooms: e.target.value })}
                className="input"
              />
            </Field>

            <Field icon={Bath} label="Bathrooms">
              <input
                type="number"
                min="0"
                value={form.bathrooms}
                onChange={(e) =>
                  setForm({ ...form, bathrooms: e.target.value })
                }
                className="input"
              />
            </Field>

            <Field icon={Hammer} label="Foundation Type">
              <select
                value={form.foundation}
                onChange={(e) =>
                  setForm({ ...form, foundation: e.target.value })
                }
                className="input"
              >
                <option>Simple Foundation</option>
                <option>Standard Foundation</option>
                <option>Deep Foundation</option>
                <option>Reinforced Foundation</option>
              </select>
            </Field>

            <Field icon={ShieldCheck} label="Roofing Type">
              <select
                value={form.roofing}
                onChange={(e) => setForm({ ...form, roofing: e.target.value })}
                className="input"
              >
                <option>Iron Sheets</option>
                <option>Tiles Roofing</option>
                <option>Concrete Roof</option>
                <option>Modern Flat Roof</option>
              </select>
            </Field>

            <Field icon={BrickWall} label="Materials Quality">
              <select
                value={form.quality}
                onChange={(e) => setForm({ ...form, quality: e.target.value })}
                className="input"
              >
                <option>Basic</option>
                <option>Standard</option>
                <option>Premium</option>
                <option>Luxury</option>
              </select>
            </Field>

            <Field icon={Calculator} label="Estimated Area (sqm)">
              <input
                type="number"
                min="1"
                value={form.area}
                onChange={(e) => setForm({ ...form, area: e.target.value })}
                className="input"
              />
            </Field>
          </div>
        </section>

        <aside className="space-y-6">
          <div className="bg-[#050816] text-white rounded-[28px] p-6 shadow-sm">
            <p className="text-pink-500 font-black mb-2">TOTAL ESTIMATE</p>

            <h2 className="text-4xl font-black mb-4">
              {money(estimate.total)}
            </h2>

            <p className="text-slate-300 leading-7">
              Iyi estimate ni iy’ibanze. Igomba kugenzurwa na quantity surveyor
              cyangwa engineer mbere yo gutangira kubaka.
            </p>
          </div>

          <ResultCard
            icon={BrickWall}
            title="Materials Cost"
            value={money(estimate.materials)}
          />

          <ResultCard
            icon={Users}
            title="Labor Cost"
            value={money(estimate.labor)}
          />

          <ResultCard
            icon={FileText}
            title="Professional Fees"
            value={money(estimate.professional)}
          />

          <ResultCard
            icon={Wallet}
            title="Contingency"
            value={money(estimate.contingency)}
          />
        </aside>
      </div>

      <section className="mt-8 bg-white border border-slate-200 rounded-[28px] p-6 shadow-sm">
        <h2 className="text-3xl font-black mb-5">BOQ Summary</h2>

        <div className="grid md:grid-cols-4 gap-4">
          <Summary label="Materials" value={money(estimate.materials)} />
          <Summary label="Labor" value={money(estimate.labor)} />
          <Summary
            label="Professional Fees"
            value={money(estimate.professional)}
          />
          <Summary
            label="Contingency"
            value={money(estimate.contingency)}
          />
        </div>
      </section>

      <style>{`
        .input {
          width: 100%;
          background: #f8fafc;
          border-radius: 14px;
          padding: 14px 16px;
          outline: none;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
}

function Field({ icon: Icon, label, children }) {
  return (
    <div>
      <label className="font-black mb-2 flex items-center gap-2">
        <Icon size={18} className="text-pink-600" />
        {label}
      </label>
      {children}
    </div>
  );
}

function ResultCard({ icon: Icon, title, value }) {
  return (
    <div className="bg-white border border-slate-200 rounded-[24px] p-5 shadow-sm">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-11 h-11 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center">
          <Icon size={22} />
        </div>

        <h3 className="font-black">{title}</h3>
      </div>

      <p className="text-2xl font-black text-emerald-600">{value}</p>
    </div>
  );
}

function Summary({ label, value }) {
  return (
    <div className="bg-slate-50 rounded-2xl p-5">
      <p className="text-slate-500 font-bold mb-1">{label}</p>
      <h3 className="text-xl font-black">{value}</h3>
    </div>
  );
}