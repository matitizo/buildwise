import { useState } from "react";

export default function CostEstimator() {
  const [area, setArea] = useState("");
  const [costPerSqm, setCostPerSqm] = useState("");

  const total =
    Number(area || 0) * Number(costPerSqm || 0);

  return (
    <div className="space-y-8">

      {/* Header */}
      <div className="bg-white rounded-3xl shadow-sm p-8">
        <h1 className="text-4xl font-bold text-slate-800">
          Cost Estimator 🧮
        </h1>

        <p className="text-gray-500 mt-3 text-lg">
          Baza ikiguzi cy’ubwubatsi ukoresheje
          metero kare.
        </p>
      </div>

      {/* Form */}
      <div className="bg-white rounded-3xl shadow-sm p-8 max-w-4xl">

        <div className="grid md:grid-cols-2 gap-6">

          {/* Area */}
          <div>
            <label className="block text-slate-700 font-semibold mb-3">
              Ubuso bw’inzu (m²)
            </label>

            <input
              type="number"
              value={area}
              onChange={(e) =>
                setArea(e.target.value)
              }
              placeholder="Urugero: 120"
              className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Cost */}
          <div>
            <label className="block text-slate-700 font-semibold mb-3">
              Igiciro kuri m² (RWF)
            </label>

            <input
              type="number"
              value={costPerSqm}
              onChange={(e) =>
                setCostPerSqm(e.target.value)
              }
              placeholder="Urugero: 350000"
              className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

        </div>

        {/* Result */}
        <div className="mt-10 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-8">

          <p className="text-lg opacity-90">
            Estimated Construction Cost
          </p>

          <h2 className="text-5xl font-bold mt-4">
            {total.toLocaleString()} RWF
          </h2>

        </div>

      </div>

      {/* Example Cards */}
      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white rounded-3xl shadow-sm p-6">
          <h3 className="text-xl font-bold">
            Small House
          </h3>

          <p className="text-gray-500 mt-2">
            80m² modern home
          </p>

          <h2 className="text-2xl font-bold mt-5 text-blue-600">
            28M RWF
          </h2>
        </div>

        <div className="bg-white rounded-3xl shadow-sm p-6">
          <h3 className="text-xl font-bold">
            Family House
          </h3>

          <p className="text-gray-500 mt-2">
            150m² family home
          </p>

          <h2 className="text-2xl font-bold mt-5 text-green-600">
            52M RWF
          </h2>
        </div>

        <div className="bg-white rounded-3xl shadow-sm p-6">
          <h3 className="text-xl font-bold">
            Luxury Villa
          </h3>

          <p className="text-gray-500 mt-2">
            300m² luxury villa
          </p>

          <h2 className="text-2xl font-bold mt-5 text-purple-600">
            120M RWF
          </h2>
        </div>

      </div>

    </div>
  );
}