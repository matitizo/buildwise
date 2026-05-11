import React, { useMemo, useState } from "react";

const residentialData = [
  {
    id: 1,
    title: "Modern Apartment",
    type: "Apartment",
    district: "Gasabo",
    price: "450,000",
    bedrooms: 3,
    bathrooms: 2,
    furnished: true,
    parking: true,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
  },
  {
    id: 2,
    title: "Family Rental House",
    type: "Family House",
    district: "Kicukiro",
    price: "700,000",
    bedrooms: 4,
    bathrooms: 3,
    furnished: false,
    parking: true,
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
  },
];

const commercialData = [
  {
    id: 1,
    title: "Commercial Office",
    type: "Office",
    district: "Nyarugenge",
    price: "1,500,000",
    size: "250 sqm",
    parking: true,
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
  },
  {
    id: 2,
    title: "Warehouse",
    type: "Warehouse",
    district: "Gasabo",
    price: "2,000,000",
    size: "500 sqm",
    parking: true,
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
  },
];

export default function Rentals() {
  const [activeTab, setActiveTab] = useState("residential");
  const [search, setSearch] = useState("");

  const currentData = useMemo(() => {
    const data =
      activeTab === "residential" ? residentialData : commercialData;

    return data.filter(
      (item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.district.toLowerCase().includes(search.toLowerCase()) ||
        item.type.toLowerCase().includes(search.toLowerCase())
    );
  }, [activeTab, search]);

  return (
    <div>
      <div className="mb-8">
        <h1 className="page-title">Rentals Marketplace</h1>
        <p className="text-slate-600">
          Gukodesha inzu zo guturamo n’inzu z’ubucuruzi.
        </p>
      </div>

      <div className="card p-5 mb-8">
        <div className="flex flex-wrap gap-3 mb-5">
          <button
            onClick={() => setActiveTab("residential")}
            className={`px-5 py-3 rounded-xl font-semibold ${
              activeTab === "residential"
                ? "bg-blue-600 text-white"
                : "bg-slate-100 text-slate-700"
            }`}
          >
            Residential Rentals
          </button>

          <button
            onClick={() => setActiveTab("commercial")}
            className={`px-5 py-3 rounded-xl font-semibold ${
              activeTab === "commercial"
                ? "bg-blue-600 text-white"
                : "bg-slate-100 text-slate-700"
            }`}
          >
            Commercial Rentals
          </button>
        </div>

        <input
          type="text"
          placeholder="Search by location, type, name..."
          className="input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <h2 className="section-title mb-5">
        {activeTab === "residential"
          ? "Residential Rentals"
          : "Commercial Rentals"}
      </h2>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {currentData.map((item) => (
          <div key={item.id} className="card card-hover">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-slate-500">{item.district}</p>

              <p className="text-blue-700 font-bold mt-2">
                {item.price} RWF / month
              </p>

              <div className="mt-3 text-sm text-slate-600 space-y-1">
                <p>{activeTab === "residential" ? "🏠" : "🏢"} {item.type}</p>

                {activeTab === "residential" ? (
                  <>
                    <p>🛏️ {item.bedrooms} Bedrooms</p>
                    <p>🚿 {item.bathrooms} Bathrooms</p>
                    {item.furnished && <p>✔ Furnished</p>}
                  </>
                ) : (
                  <p>📏 {item.size}</p>
                )}

                {item.parking && <p>✔ Parking</p>}
              </div>

              <div className="grid grid-cols-2 gap-2 mt-5">
                <button className="btn-secondary">View Details</button>
                <button className="btn-primary">Book Visit</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {currentData.length === 0 && (
        <div className="card p-8 text-center text-slate-500 mt-6">
          Nta rental ibonetse.
        </div>
      )}
    </div>
  );
}