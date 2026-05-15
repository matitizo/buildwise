import React from "react";

const houses = [
  {
    id: 1,
    title: "Modern Family House",
    category: "Residential House",
    district: "Kicukiro",
    bedrooms: 4,
    bathrooms: 3,
    price: "85,000,000",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
  },
  {
    id: 2,
    title: "Luxury Villa",
    category: "Residential House",
    district: "Gasabo",
    bedrooms: 5,
    bathrooms: 4,
    price: "160,000,000",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
  },
  {
    id: 3,
    title: "Commercial Building",
    category: "Commercial House",
    district: "Nyarugenge",
    bedrooms: 0,
    bathrooms: 6,
    price: "320,000,000",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
  },
];

export default function Houses() {
  return (
    <div className="space-y-10">
      <section className="rounded-[2rem] bg-white border border-slate-200 p-8">
        <p className="text-rose-500 font-bold mb-3">
          BuildWise House Marketplace
        </p>

        <h1 className="text-4xl md:text-5xl font-black text-slate-950">
          Gura cyangwa ugurishe inzu mu buryo bwizewe.
        </h1>

        <p className="text-slate-500 mt-4 text-lg">
          Residential houses na commercial houses ziri kuri BuildWise.
        </p>

        <div className="grid md:grid-cols-4 gap-4 mt-8">
          <input className="border border-slate-300 rounded-2xl px-5 py-4 outline-none" placeholder="District" />
          <input className="border border-slate-300 rounded-2xl px-5 py-4 outline-none" placeholder="Budget" />
          <input className="border border-slate-300 rounded-2xl px-5 py-4 outline-none" placeholder="Bedrooms" />

          <button className="btn-primary">
            Search House
          </button>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-black text-slate-950 mb-6">
          Houses For Sale
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {houses.map((house) => (
            <div key={house.id} className="card overflow-hidden hover:shadow-2xl transition">
              <div className="relative">
                <img src={house.image} alt={house.title} className="w-full h-72 object-cover" />

                <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-full text-sm font-bold shadow">
                  ✅ Verified Seller
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-black">{house.title}</h3>
                <p className="text-slate-500 mt-1">{house.district} • {house.category}</p>

                <p className="text-3xl font-black mt-5">
                  {house.price} Frw
                </p>

                <div className="mt-5 space-y-2 text-slate-600">
                  {house.bedrooms > 0 && <p>🛏️ {house.bedrooms} Bedrooms</p>}
                  <p>🚿 {house.bathrooms} Bathrooms</p>
                  <p>✔ Parking</p>
                  <p>✔ Water & Electricity</p>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-6">
                  <button className="btn-secondary">View Details</button>
                  <button className="btn-primary">Book Visit</button>
                  <button className="bg-slate-950 hover:bg-slate-800 text-white px-5 py-3 rounded-full font-bold">
                    Reserve
                  </button>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-full font-bold">
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