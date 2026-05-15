import React from "react";

const lands = [
  {
    id: 1,
    title: "Kibagabaga Plot",
    district: "Gasabo",
    size: "500 sqm",
    price: "25,000,000",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
  },
  {
    id: 2,
    title: "Kanombe Residential Plot",
    district: "Kicukiro",
    size: "400 sqm",
    price: "18,000,000",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    id: 3,
    title: "Rusororo Commercial Plot",
    district: "Gasabo",
    size: "800 sqm",
    price: "40,000,000",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156",
  },
];

export default function Lands() {
  return (
    <div className="space-y-10">
      {/* HERO */}
      <section className="rounded-[2rem] bg-white border border-slate-200 p-8">
        <div className="max-w-4xl">
          <p className="text-rose-500 font-bold mb-3">
            BuildWise Land Marketplace
          </p>

          <h1 className="text-4xl md:text-5xl font-black text-slate-950">
            Shaka ikibanza gihuye na budget yawe.
          </h1>

          <p className="text-slate-500 mt-4 text-lg">
            Search smartly using district, budget cyangwa size.
          </p>
        </div>

        {/* SEARCH */}
        <div className="grid md:grid-cols-4 gap-4 mt-8">
          <input
            type="text"
            placeholder="District"
            className="border border-slate-300 rounded-2xl px-5 py-4 outline-none"
          />

          <input
            type="text"
            placeholder="Budget"
            className="border border-slate-300 rounded-2xl px-5 py-4 outline-none"
          />

          <input
            type="text"
            placeholder="Size sqm"
            className="border border-slate-300 rounded-2xl px-5 py-4 outline-none"
          />

          <button className="btn-primary">
            Search Land
          </button>
        </div>
      </section>

      {/* LISTINGS */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-black text-slate-950">
              Available Lands
            </h2>

            <p className="text-slate-500">
              Verified land listings on BuildWise
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {lands.map((land) => (
            <div
              key={land.id}
              className="card overflow-hidden hover:shadow-2xl transition"
            >
              <div className="relative">
                <img
                  src={land.image}
                  alt={land.title}
                  className="w-full h-72 object-cover"
                />

                <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-full text-sm font-bold shadow">
                  ✅ Verified Seller
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-black text-slate-950">
                      {land.title}
                    </h3>

                    <p className="text-slate-500 mt-1">
                      {land.district}
                    </p>
                  </div>

                  <p className="font-bold text-slate-700">
                    {land.size}
                  </p>
                </div>

                <p className="text-3xl font-black text-slate-950 mt-5">
                  {land.price} Frw
                </p>

                <div className="mt-5 space-y-2 text-slate-600">
                  <p>✔ Road Access</p>
                  <p>✔ Electricity</p>
                  <p>✔ Water Nearby</p>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-6">
                  <button className="btn-secondary">
                    View Details
                  </button>

                  <button className="btn-primary">
                    Book Visit
                  </button>

                  <button className="bg-slate-950 hover:bg-slate-800 text-white px-5 py-3 rounded-full font-bold transition">
                    Reserve
                  </button>

                  <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-full font-bold transition">
                    WhatsApp
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}