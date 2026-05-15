import React from "react";

const materials = [
  {
    id: 1,
    name: "Cement",
    category: "Cement & Concrete",
    supplier: "Kigali Hardware Ltd",
    price: "13,500",
    unit: "bag",
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780",
  },
  {
    id: 2,
    name: "Steel Bars",
    category: "Steel",
    supplier: "Rwanda Steel Supply",
    price: "18,000",
    unit: "piece",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122",
  },
  {
    id: 3,
    name: "Bricks",
    category: "Wall Materials",
    supplier: "BuildPro Materials",
    price: "250",
    unit: "piece",
    image:
      "https://images.unsplash.com/photo-1615971677499-5467cbab01c0",
  },
];

export default function Materials() {
  return (
    <div className="space-y-10">
      <section className="rounded-[2rem] bg-white border border-slate-200 p-8">
        <p className="text-orange-500 font-bold mb-3">
          BuildWise Materials Market
        </p>

        <h1 className="text-4xl md:text-5xl font-black text-slate-950">
          Gura ibikoresho by’ubwubatsi ku bacuruzi bizewe.
        </h1>

        <p className="text-slate-500 mt-4 text-lg">
          Supplier signup, upload products, material search, order materials na delivery tracking.
        </p>

        <div className="grid md:grid-cols-4 gap-4 mt-8">
          <input
            className="border border-slate-300 rounded-2xl px-5 py-4 outline-none"
            placeholder="Search material"
          />

          <select className="border border-slate-300 rounded-2xl px-5 py-4 outline-none bg-white">
            <option>All Categories</option>
            <option>Cement</option>
            <option>Steel</option>
            <option>Bricks</option>
            <option>Paint</option>
            <option>Roofing</option>
          </select>

          <input
            className="border border-slate-300 rounded-2xl px-5 py-4 outline-none"
            placeholder="Location"
          />

          <button className="btn-primary">
            Search Materials
          </button>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        {materials.map((item) => (
          <div key={item.id} className="card overflow-hidden hover:shadow-2xl transition">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-64 object-cover"
            />

            <div className="p-6">
              <p className="text-orange-500 font-bold">
                {item.category}
              </p>

              <h3 className="text-2xl font-black mt-2">
                {item.name}
              </h3>

              <p className="text-slate-500 mt-1">
                Supplier: {item.supplier}
              </p>

              <p className="text-3xl font-black mt-5">
                {item.price} Frw / {item.unit}
              </p>

              <div className="grid grid-cols-2 gap-3 mt-6">
                <button className="btn-secondary">
                  View Details
                </button>

                <button className="btn-primary">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="card p-8">
        <h2 className="text-3xl font-black text-slate-950">
          Supplier Workflow
        </h2>

        <div className="grid md:grid-cols-4 gap-4 mt-6">
          {[
            "Supplier Signup",
            "Upload Products",
            "Material Search",
            "Order & Delivery",
          ].map((step, index) => (
            <div key={step} className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
              <p className="text-orange-500 font-bold mb-2">
                STEP {index + 1}
              </p>
              <h3 className="font-black">{step}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}