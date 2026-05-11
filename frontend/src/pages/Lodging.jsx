import React from "react";

const lodgingData = [
  {
    id: 1,
    title: "Kigali Lodge",
    type: "Lodge",
    district: "Gasabo",
    price: "45,000",
    wifi: true,
    breakfast: true,
    parking: true,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945",
  },
  {
    id: 2,
    title: "Maison de Passage",
    type: "Maison de Passage",
    district: "Kicukiro",
    price: "25,000",
    wifi: true,
    breakfast: false,
    parking: true,
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
  },
];

export default function Lodging() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="page-title">Lodging Marketplace</h1>

        <p className="text-slate-600">
          Maison de passage & lodge booking platform.
        </p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {lodgingData.map((item) => (
          <div key={item.id} className="card card-hover">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-5">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">
                  {item.title}
                </h3>

                <span className="badge-success">
                  Verified
                </span>
              </div>

              <p className="text-slate-500">
                {item.district}
              </p>

              <p className="text-blue-700 font-bold mt-2">
                {item.price} RWF / night
              </p>

              <div className="mt-3 text-sm text-slate-600 space-y-1">
                <p>🛏️ {item.type}</p>
                {item.wifi && <p>✔ WiFi</p>}
                {item.breakfast && <p>✔ Breakfast</p>}
                {item.parking && <p>✔ Parking</p>}
              </div>

              <div className="grid grid-cols-2 gap-2 mt-5">
                <button className="btn-secondary">
                  View Details
                </button>

                <button className="btn-primary">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}