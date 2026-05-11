import React, { useMemo, useState } from "react";

const lodgingData = [
  {
    id: 1,
    title: "Kigali Comfort Lodge",
    type: "Lodge",
    district: "Gasabo",
    sector: "Kacyiru",
    price: "45,000",
    rooms: 12,
    wifi: true,
    breakfast: true,
    parking: true,
    pool: false,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
  },
  {
    id: 2,
    title: "Maison de Passage Kicukiro",
    type: "Maison de Passage",
    district: "Kicukiro",
    sector: "Gatenga",
    price: "25,000",
    rooms: 5,
    wifi: true,
    breakfast: false,
    parking: true,
    pool: false,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
  },
];

export default function Lodging() {
  const [activeTab, setActiveTab] = useState("maison");
  const [search, setSearch] = useState("");

  const filteredData = useMemo(() => {
    return lodgingData.filter((item) => {
      const matchesTab =
        activeTab === "maison"
          ? item.type === "Maison de Passage"
          : item.type === "Lodge";

      const matchesSearch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.district.toLowerCase().includes(search.toLowerCase()) ||
        item.sector.toLowerCase().includes(search.toLowerCase());

      return matchesTab && matchesSearch;
    });
  }, [activeTab, search]);

  return (
    <div>
      <div className="mb-8">
        <h1 className="page-title">Lodging Marketplace</h1>
        <p className="text-slate-600">
          Maison de Passage na Lodge byo gucumbikamo abakiriya.
        </p>
      </div>

      <div className="card p-5 mb-8">
        <div className="flex flex-wrap gap-3 mb-5">
          <button
            onClick={() => setActiveTab("maison")}
            className={`px-5 py-3 rounded-xl font-semibold ${
              activeTab === "maison"
                ? "bg-blue-600 text-white"
                : "bg-slate-100 text-slate-700"
            }`}
          >
            Maison de Passage
          </button>

          <button
            onClick={() => setActiveTab("lodge")}
            className={`px-5 py-3 rounded-xl font-semibold ${
              activeTab === "lodge"
                ? "bg-blue-600 text-white"
                : "bg-slate-100 text-slate-700"
            }`}
          >
            Lodge
          </button>
        </div>

        <input
          type="text"
          placeholder="Search by location, name..."
          className="input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <h2 className="section-title mb-5">
        {activeTab === "maison" ? "Maison de Passage" : "Lodge"}
      </h2>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredData.map((item) => (
          <div key={item.id} className="card card-hover">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-5">
              <div className="flex justify-between gap-3 items-start">
                <div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-slate-500">
                    {item.sector} - {item.district}
                  </p>
                </div>

                <span className="badge-success">Verified</span>
              </div>

              <p className="text-blue-700 font-bold mt-3">
                {item.price} RWF / night
              </p>

              <div className="mt-3 text-sm text-slate-600 space-y-1">
                <p>🛏️ {item.type}</p>
                <p>🚪 {item.rooms} Rooms</p>
                {item.wifi && <p>✔ WiFi</p>}
                {item.breakfast && <p>✔ Breakfast</p>}
                {item.parking && <p>✔ Parking</p>}
                {item.pool && <p>✔ Swimming Pool</p>}
              </div>

              <div className="grid grid-cols-2 gap-2 mt-5">
                <button className="btn-secondary">View Details</button>
                <button className="btn-primary">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredData.length === 0 && (
        <div className="card p-8 text-center text-slate-500 mt-6">
          Nta lodging ibonetse.
        </div>
      )}
    </div>
  );
}