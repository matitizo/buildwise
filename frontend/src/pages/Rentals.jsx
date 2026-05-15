import React from "react";

const rentals = [
  {
    id: 1,
    title: "Modern Apartment",
    category: "Apartment",
    district: "Gasabo",
    price: "450,000",
    bedrooms: 3,
    bathrooms: 2,
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
  },
  {
    id: 2,
    title: "Commercial Office",
    category: "Commercial Rental",
    district: "Nyarugenge",
    price: "1,500,000",
    bedrooms: 0,
    bathrooms: 4,
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
  },
  {
    id: 3,
    title: "Maison de Passage",
    category: "Maison de Passage",
    district: "Kicukiro",
    price: "35,000/night",
    bedrooms: 1,
    bathrooms: 1,
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
  },
  {
    id: 4,
    title: "Luxury Lodge",
    category: "Lodge",
    district: "Musanze",
    price: "80,000/night",
    bedrooms: 1,
    bathrooms: 1,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945",
  },
];

export default function Rentals() {
  return (
    <div className="space-y-10">
      {/* HERO */}
      <section className="rounded-[2rem] bg-white border border-slate-200 p-8">
        <p className="text-rose-500 font-bold mb-3">
          BuildWise Rentals Marketplace
        </p>

        <h1 className="text-4xl md:text-5xl font-black text-slate-950">
          Shaka aho gukodesha cyangwa gucumbika.
        </h1>

        <p className="text-slate-500 mt-4 text-lg">
          Residential rentals, commercial rentals, apartments,
          maison de passage na lodge.
        </p>

        {/* SEARCH */}
        <div className="grid md:grid-cols-4 gap-4 mt-8">
          <input
            className="border border-slate-300 rounded-2xl px-5 py-4 outline-none"
            placeholder="District"
          />

          <input
            className="border border-slate-300 rounded-2xl px-5 py-4 outline-none"
            placeholder="Budget"
          />

          <select className="border border-slate-300 rounded-2xl px-5 py-4 outline-none bg-white">
            <option>All Rentals</option>
            <option>Residential Rental</option>
            <option>Commercial Rental</option>
            <option>Apartment</option>
            <option>Maison de Passage</option>
            <option>Lodge</option>
          </select>

          <button className="btn-primary">
            Search Rental
          </button>
        </div>
      </section>

      {/* LISTINGS */}
      <section>
        <h2 className="text-3xl font-black text-slate-950 mb-6">
          Available Rentals
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {rentals.map((item) => (
            <div
              key={item.id}
              className="card overflow-hidden hover:shadow-2xl transition"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-72 object-cover"
                />

                <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-full text-sm font-bold shadow">
                  ⭐ Verified
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-black">
                  {item.title}
                </h3>

                <p className="text-slate-500 mt-1">
                  {item.district} • {item.category}
                </p>

                <p className="text-3xl font-black mt-5">
                  {item.price} Frw
                </p>

                <div className="mt-5 space-y-2 text-slate-600">
                  {item.bedrooms > 0 && (
                    <p>🛏️ {item.bedrooms} Bedroom</p>
                  )}

                  <p>🚿 {item.bathrooms} Bathroom</p>

                  <p>✔ WiFi</p>
                  <p>✔ Parking</p>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-6">
                  <button className="btn-secondary">
                    View Details
                  </button>

                  <button className="btn-primary">
                    Book Now
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