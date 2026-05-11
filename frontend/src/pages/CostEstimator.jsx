import { useState } from "react";

export default function CostEstimator() {
  const [area, setArea] = useState("");
  const [costPerSqm, setCostPerSqm] = useState("");
  const [quality, setQuality] = useState("standard");

  const multiplier =
    quality === "basic" ? 1 : quality === "standard" ? 1.25 : 1.6;

  const total =
    Number(area || 0) * Number(costPerSqm || 0) * multiplier;

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-3xl shadow-sm p-8 flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-slate-800">
            Cost Estimator 🧮
          </h1>
          <p className="text-gray-500 mt-2 text-lg">
            Bara ikiguzi cy’ubwubatsi hashingiwe kuri metero kare.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Construction Details
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-slate-700 font-semibold mb-2">
                Ubuso bw’inzu (m²)
              </label>
              <input
                type="number"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                placeholder="Urugero: 120"
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-slate-700 font-semibold mb-2">
                Igiciro kuri m² (RWF)
              </label>
              <input
                type="number"
                value={costPerSqm}
                onChange={(e) => setCostPerSqm(e.target.value)}
                placeholder="Urugero: 350000"
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-slate-700 font-semibold mb-2">
                Quality Level
              </label>

              <select
                value={quality}
                onChange={(e) => setQuality(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="basic">Basic Finish</option>
                <option value="standard">Standard Finish</option>
                <option value="luxury">Luxury Finish</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-blue-600 rounded-3xl shadow-sm p-8 text-white">
          <p className="text-blue-100">Estimated Total</p>

          <h2 className="text-5xl font-bold mt-4">
            {total.toLocaleString()} RWF
          </h2>

          <div className="mt-8 space-y-4 text-blue-100">
            <p>Ubuso: {area || 0} m²</p>
            <p>Igiciro/m²: {Number(costPerSqm || 0).toLocaleString()} RWF</p>
            <p>Quality: {quality}</p>
          </div>
        </div>
      </div>
    </div>
  );
}