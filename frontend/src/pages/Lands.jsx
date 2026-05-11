import { useState } from "react";

export default function Lands() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [districtFilter, setDistrictFilter] = useState("All");

  const lands = [
    {
      title: "Ikibanza - Kicukiro",
      location: "Kigali, Kicukiro",
      district: "Kicukiro",
      price: "18M RWF",
      size: "600m²",
      status: "Available",
      type: "Residential",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
    },
    {
      title: "Residential Plot - Gisozi",
      location: "Kigali, Gasabo",
      district: "Gasabo",
      price: "25M RWF",
      size: "800m²",
      status: "Sold",
      type: "Residential",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
    {
      title: "Commercial Land - Remera",
      location: "Kigali, Remera",
      district: "Gasabo",
      price: "40M RWF",
      size: "1200m²",
      status: "Available",
      type: "Commercial",
      image: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    },
    {
      title: "Ikibanza - Nyamirambo",
      location: "Kigali, Nyarugenge",
      district: "Nyarugenge",
      price: "30M RWF",
      size: "950m²",
      status: "Available",
      type: "Mixed Use",
      image: "https://images.unsplash.com/photo-1448630360428-65456885c650",
    },
  ];

  const filteredLands = lands.filter((land) => {
    const matchesSearch =
      land.title.toLowerCase().includes(search.toLowerCase()) ||
      land.location.toLowerCase().includes(search.toLowerCase()) ||
      land.type.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || land.status === statusFilter;

    const matchesDistrict =
      districtFilter === "All" || land.district === districtFilter;

    return matchesSearch && matchesStatus && matchesDistrict;
  });

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-3xl shadow-sm p-8 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6">
        <div>
          <h1 className="text-4xl font-bold text-slate-800">
            Ibibanza 📍
          </h1>
          <p className="text-gray-500 mt-2 text-lg">
            Shaka, reba, kandi ucunge ibibanza biri kugurishwa kuri BuildWise.
          </p>
        </div>

        <button className="bg-blue-600 text-white px-6 py-4 rounded-2xl font-semibold hover:bg-blue-700 transition">
          + Add Land
        </button>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <p className="text-gray-500">Total Lands</p>
          <h2 className="text-3xl font-bold mt-3 text-slate-800">
            {lands.length}
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <p className="text-gray-500">Available</p>
          <h2 className="text-3xl font-bold mt-3 text-green-600">
            {lands.filter((land) => land.status === "Available").length}
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <p className="text-gray-500">Sold</p>
          <h2 className="text-3xl font-bold mt-3 text-red-500">
            {lands.filter((land) => land.status === "Sold").length}
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <p className="text-gray-500">Districts</p>
          <h2 className="text-3xl font-bold mt-3 text-blue-600">
            3
          </h2>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-sm p-6 grid lg:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Search land, location, type..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="All">All Status</option>
          <option value="Available">Available</option>
          <option value="Sold">Sold</option>
        </select>

        <select
          value={districtFilter}
          onChange={(e) => setDistrictFilter(e.target.value)}
          className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="All">All Districts</option>
          <option value="Kicukiro">Kicukiro</option>
          <option value="Gasabo">Gasabo</option>
          <option value="Nyarugenge">Nyarugenge</option>
        </select>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {filteredLands.map((land, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition"
          >
            <div className="relative">
              <img
                src={land.image}
                alt={land.title}
                className="w-full h-56 object-cover"
              />

              <span
                className={`absolute top-4 right-4 px-4 py-2 rounded-full text-sm font-semibold ${
                  land.status === "Available"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {land.status}
              </span>
            </div>

            <div className="p-6">
              <p className="text-blue-600 font-semibold mb-2">
                {land.type}
              </p>

              <h3 className="text-2xl font-bold text-slate-800">
                {land.title}
              </h3>

              <p className="text-gray-500 mt-2">
                {land.location}
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-2xl p-4">
                  <p className="text-gray-500 text-sm">Size</p>
                  <h4 className="font-bold text-slate-800">
                    {land.size}
                  </h4>
                </div>

                <div className="bg-slate-50 rounded-2xl p-4">
                  <p className="text-gray-500 text-sm">Price</p>
                  <h4 className="font-bold text-blue-600">
                    {land.price}
                  </h4>
                </div>
              </div>

              <button className="w-full mt-6 bg-blue-600 text-white py-4 rounded-2xl font-semibold hover:bg-blue-700 transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredLands.length === 0 && (
        <div className="bg-white rounded-3xl p-10 text-center text-gray-500">
          Nta kibanza gihuye n’ibyo washakishije.
        </div>
      )}
    </div>
  );
}