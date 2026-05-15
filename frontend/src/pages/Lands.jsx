import React, { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "buildwise_airbnb_lands";

const emptyForm = {
  title: "",
  province: "",
  district: "",
  sector: "",
  price: "",
  size: "",
  sellerName: "",
  sellerPhone: "",
  imageUrl: "",
  galleryText: "",
  description: "",
  mapLocation: "",
  gpsRoute: "",
  droneMapUrl: "",
  titleStatus: "Title Deed Ready",
  roadAccess: false,
  electricity: false,
  waterNearby: false,
};

const sampleLands = [
  {
    id: 1,
    title: "Ikibanza cyiza i Kibagabaga",
    province: "Kigali",
    district: "Gasabo",
    sector: "Kibagabaga",
    price: "25000000",
    size: "500",
    sellerName: "Verified Broker",
    sellerPhone: "250788000000",
    imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
    gallery: [],
    description: "Ikibanza kiri ku muhanda, gifite amazi n’amashanyarazi hafi.",
    mapLocation: "https://maps.google.com/?q=Kibagabaga",
    gpsRoute: "https://maps.google.com/?q=Kibagabaga",
    droneMapUrl: "",
    titleStatus: "Title Deed Ready",
    roadAccess: true,
    electricity: true,
    waterNearby: true,
    verified: true,
    reserved: false,
    saved: false,
    visits: [],
  },
  {
    id: 2,
    title: "Residential Plot i Kanombe",
    province: "Kigali",
    district: "Kicukiro",
    sector: "Kanombe",
    price: "18000000",
    size: "400",
    sellerName: "Land Owner",
    sellerPhone: "250788000000",
    imageUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    gallery: [],
    description: "Ikibanza cyo guturamo kiri ahantu hatuje kandi heza.",
    mapLocation: "https://maps.google.com/?q=Kanombe",
    gpsRoute: "https://maps.google.com/?q=Kanombe",
    droneMapUrl: "",
    titleStatus: "Under Verification",
    roadAccess: true,
    electricity: true,
    waterNearby: false,
    verified: true,
    reserved: false,
    saved: false,
    visits: [],
  },
];

export default function Lands() {
  const [lands, setLands] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [selectedLand, setSelectedLand] = useState(null);
  const [editingId, setEditingId] = useState(null);

  const [filters, setFilters] = useState({
    search: "",
    budgetText: "",
    district: "",
    minSize: "",
    maxPrice: "",
  });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    setLands(saved && saved.length > 0 ? saved : sampleLands);
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lands));
  }, [lands]);

  const extractBudget = (text) => {
    if (!text) return null;
    const numbers = text.replace(/,/g, "").match(/\d+/g);
    if (!numbers) return null;
    return Number(numbers.join(""));
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addOrUpdateLand = (e) => {
    e.preventDefault();

    const gallery = form.galleryText
      ? form.galleryText
          .split(",")
          .map((url) => url.trim())
          .filter(Boolean)
      : [];

    const payload = {
      ...form,
      gallery,
      verified: true,
      saved: false,
      reserved: false,
      visits: [],
    };

    if (editingId) {
      setLands(
        lands.map((land) =>
          land.id === editingId ? { ...land, ...payload } : land
        )
      );
      setEditingId(null);
    } else {
      setLands([{ id: Date.now(), ...payload }, ...lands]);
    }

    setForm(emptyForm);
  };

  const editLand = (land) => {
    setEditingId(land.id);
    setForm({
      ...emptyForm,
      ...land,
      galleryText: land.gallery?.join(", ") || "",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const deleteLand = (id) => {
    if (window.confirm("Urashaka koko gusiba iki kibanza?")) {
      setLands(lands.filter((land) => land.id !== id));
    }
  };

  const toggleSave = (id) => {
    setLands(
      lands.map((land) =>
        land.id === id ? { ...land, saved: !land.saved } : land
      )
    );
  };

  const bookVisit = (id) => {
    const date = window.prompt("Andika date ushaka gusura ikibanza:");
    const time = window.prompt("Andika time:");
    const phone = window.prompt("Andika phone number:");

    if (!date || !time || !phone) return;

    setLands(
      lands.map((land) =>
        land.id === id
          ? {
              ...land,
              visits: [...(land.visits || []), { date, time, phone }],
            }
          : land
      )
    );

    window.alert("Site visit booked successfully.");
  };

  const reserveLand = (id) => {
    const deposit = window.prompt("Andika reservation deposit:");
    if (!deposit) return;

    const commission = Number(deposit) * 0.1;

    setLands(
      lands.map((land) =>
        land.id === id
          ? {
              ...land,
              reserved: true,
              reservationDeposit: deposit,
              commission,
              titleStatus: "Reserved",
            }
          : land
      )
    );

    window.alert(
      `Reservation successful.\nCommission: ${commission.toLocaleString()} RWF`
    );
  };

  const filteredLands = useMemo(() => {
    const aiBudget = extractBudget(filters.budgetText);

    return lands.filter((land) => {
      const search = filters.search.toLowerCase();
      const price = Number(land.price);
      const size = Number(land.size);

      const matchesSearch =
        land.title?.toLowerCase().includes(search) ||
        land.province?.toLowerCase().includes(search) ||
        land.district?.toLowerCase().includes(search) ||
        land.sector?.toLowerCase().includes(search);

      return (
        matchesSearch &&
        (!aiBudget || price <= aiBudget) &&
        (!filters.district ||
          land.district?.toLowerCase().includes(filters.district.toLowerCase())) &&
        (!filters.minSize || size >= Number(filters.minSize)) &&
        (!filters.maxPrice || price <= Number(filters.maxPrice))
      );
    });
  }, [lands, filters]);

  return (
    <div className="space-y-8">
      <section className="rounded-[2rem] bg-white border border-slate-200 shadow-sm p-6 md:p-8">
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
          <div>
            <p className="text-rose-500 font-bold mb-2">
              BuildWise Land Marketplace
            </p>

            <h1 className="text-3xl md:text-5xl font-black text-slate-950">
              Shaka ikibanza gihuye na budget yawe.
            </h1>

            <p className="text-slate-500 mt-3 text-lg">
              Smart search, verified sellers, maps, site visit booking na reservation.
            </p>
          </div>

          <div className="bg-slate-950 text-white rounded-[2rem] p-5 min-w-[280px]">
            <p className="text-sm text-slate-300">Active Lands</p>
            <p className="text-5xl font-black mt-2">{lands.length}</p>
            <p className="text-sm text-slate-300 mt-2">
              Verified listings on BuildWise
            </p>
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-5 gap-3">
          <input
            className="input md:col-span-2"
            placeholder="Search: Gasabo, Kibagabaga..."
            value={filters.search}
            onChange={(e) =>
              setFilters({ ...filters, search: e.target.value })
            }
          />

          <input
            className="input"
            placeholder="Mfite 8,000,000 Frw"
            value={filters.budgetText}
            onChange={(e) =>
              setFilters({ ...filters, budgetText: e.target.value })
            }
          />

          <input
            className="input"
            placeholder="District"
            value={filters.district}
            onChange={(e) =>
              setFilters({ ...filters, district: e.target.value })
            }
          />

          <input
            className="input"
            placeholder="Min Size sqm"
            value={filters.minSize}
            onChange={(e) =>
              setFilters({ ...filters, minSize: e.target.value })
            }
          />
        </div>
      </section>

      <form onSubmit={addOrUpdateLand} className="bg-white rounded-[2rem] border border-slate-200 shadow-sm p-6">
        <h2 className="text-2xl font-black text-slate-950 mb-5">
          {editingId ? "Hindura ikibanza" : "Add Land Listing"}
        </h2>

        <div className="grid md:grid-cols-3 gap-3">
          <input name="title" value={form.title} onChange={handleChange} placeholder="Title" className="input" required />
          <input name="province" value={form.province} onChange={handleChange} placeholder="Province" className="input" />
          <input name="district" value={form.district} onChange={handleChange} placeholder="District" className="input" required />
          <input name="sector" value={form.sector} onChange={handleChange} placeholder="Sector" className="input" />
          <input name="price" value={form.price} onChange={handleChange} placeholder="Price RWF" className="input" required />
          <input name="size" value={form.size} onChange={handleChange} placeholder="Size sqm" className="input" required />
          <input name="sellerName" value={form.sellerName} onChange={handleChange} placeholder="Seller Name" className="input" />
          <input name="sellerPhone" value={form.sellerPhone} onChange={handleChange} placeholder="Seller Phone" className="input" required />
          <input name="imageUrl" value={form.imageUrl} onChange={handleChange} placeholder="Main Image URL" className="input" />
          <input name="galleryText" value={form.galleryText} onChange={handleChange} placeholder="Gallery URLs separated by comma" className="input" />
          <input name="mapLocation" value={form.mapLocation} onChange={handleChange} placeholder="Map URL" className="input" />
          <input name="gpsRoute" value={form.gpsRoute} onChange={handleChange} placeholder="GPS Route URL" className="input" />
          <input name="droneMapUrl" value={form.droneMapUrl} onChange={handleChange} placeholder="Drone Map URL" className="input" />

          <select name="titleStatus" value={form.titleStatus} onChange={handleChange} className="input">
            <option>Title Deed Ready</option>
            <option>Under Verification</option>
            <option>Reserved</option>
            <option>Sold</option>
          </select>
        </div>

        <div className="grid md:grid-cols-3 gap-3 text-sm mb-4">
          {[
            ["roadAccess", "Road Access"],
            ["electricity", "Electricity"],
            ["waterNearby", "Water Nearby"],
          ].map(([key, label]) => (
            <label key={key} className="flex gap-2 items-center">
              <input
                type="checkbox"
                checked={form[key]}
                onChange={(e) =>
                  setForm({ ...form, [key]: e.target.checked })
                }
              />
              {label}
            </label>
          ))}
        </div>

        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Title deed summary / description"
          className="input min-h-28"
        />

        <button className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-full font-bold">
          {editingId ? "Save Changes" : "Add Land"}
        </button>
      </form>

      <section>
        <div className="flex items-end justify-between mb-5">
          <div>
            <h2 className="text-2xl font-black text-slate-950">
              Available Lands
            </h2>
            <p className="text-slate-500">
              {filteredLands.length} results found
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredLands.map((land) => (
            <div
              key={land.id}
              className="group bg-white rounded-[2rem] overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition"
            >
              <div className="relative h-72 overflow-hidden">
                {land.imageUrl ? (
                  <img
                    src={land.imageUrl}
                    alt={land.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                    No Image
                  </div>
                )}

                <button
                  onClick={() => toggleSave(land.id)}
                  className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-xl"
                >
                  {land.saved ? "❤️" : "🤍"}
                </button>

                {land.verified && (
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-2 rounded-full text-sm font-bold">
                    ✅ Verified Seller
                  </span>
                )}
              </div>

              <div className="p-5">
                <div className="flex justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-black text-slate-950">
                      {land.title}
                    </h3>
                    <p className="text-slate-500">
                      {land.sector} - {land.district}
                    </p>
                  </div>

                  <p className="text-sm font-bold text-slate-700">
                    {land.size} sqm
                  </p>
                </div>

                <p className="text-xl font-black text-slate-950 mt-3">
                  {Number(land.price).toLocaleString()} RWF
                </p>

                <div className="mt-3 text-sm text-slate-600 space-y-1">
                  {land.roadAccess && <p>✔ Road Access</p>}
                  {land.electricity && <p>✔ Electricity</p>}
                  {land.waterNearby && <p>✔ Water Nearby</p>}
                  <p>📄 {land.titleStatus}</p>
                </div>

                {land.reserved && (
                  <p className="mt-3 text-orange-600 font-bold">
                    Reserved
                  </p>
                )}

                <div className="grid grid-cols-2 gap-2 mt-5">
                  <button
                    onClick={() => setSelectedLand(land)}
                    className="bg-slate-100 hover:bg-slate-200 px-4 py-3 rounded-full font-bold"
                  >
                    View Details
                  </button>

                  <button
                    onClick={() => bookVisit(land.id)}
                    className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-3 rounded-full font-bold"
                  >
                    Book Visit
                  </button>

                  <button
                    onClick={() => reserveLand(land.id)}
                    className="bg-slate-950 hover:bg-slate-800 text-white px-4 py-3 rounded-full font-bold"
                  >
                    Reserve
                  </button>

                  <a
                    href={`https://wa.me/${land.sellerPhone}?text=Muraho, ndifuza kumenya byinshi kuri iki kibanza: ${land.title}`}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-full font-bold text-center"
                  >
                    WhatsApp
                  </a>

                  <button
                    onClick={() => editLand(land)}
                    className="bg-yellow-100 text-yellow-700 px-4 py-3 rounded-full font-bold"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteLand(land.id)}
                    className="bg-red-100 text-red-700 px-4 py-3 rounded-full font-bold"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedLand && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-[2rem] max-w-5xl w-full max-h-[90vh] overflow-y-auto p-6">
            <div className="flex justify-between gap-4 mb-5">
              <div>
                <h2 className="text-3xl font-black text-slate-950">
                  {selectedLand.title}
                </h2>
                <p className="text-slate-500">
                  {selectedLand.province}, {selectedLand.district}, {selectedLand.sector}
                </p>
              </div>

              <button
                onClick={() => setSelectedLand(null)}
                className="w-11 h-11 rounded-full bg-slate-100 font-black"
              >
                ✕
              </button>
            </div>

            {selectedLand.imageUrl && (
              <img
                src={selectedLand.imageUrl}
                alt={selectedLand.title}
                className="w-full h-96 object-cover rounded-[2rem] mb-5"
              />
            )}

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <h3 className="text-xl font-black mb-3">Details</h3>
                <p className="text-slate-600">{selectedLand.description}</p>

                <div className="mt-5 space-y-2 text-slate-700">
                  <p><b>Price:</b> {Number(selectedLand.price).toLocaleString()} RWF</p>
                  <p><b>Size:</b> {selectedLand.size} sqm</p>
                  <p><b>Title Status:</b> {selectedLand.titleStatus}</p>
                  <p><b>Seller:</b> {selectedLand.sellerName}</p>
                  <p><b>Phone:</b> {selectedLand.sellerPhone}</p>
                  <p><b>Visits:</b> {selectedLand.visits?.length || 0}</p>
                </div>
              </div>

              <div className="bg-slate-50 rounded-[2rem] p-5">
                <h3 className="text-xl font-black mb-4">Actions</h3>

                <div className="grid gap-3">
                  {selectedLand.mapLocation && (
                    <a href={selectedLand.mapLocation} target="_blank" rel="noreferrer" className="btn-secondary text-center">
                      Open Map Location
                    </a>
                  )}

                  {selectedLand.gpsRoute && (
                    <a href={selectedLand.gpsRoute} target="_blank" rel="noreferrer" className="btn-secondary text-center">
                      Open GPS Route
                    </a>
                  )}

                  {selectedLand.droneMapUrl && (
                    <a href={selectedLand.droneMapUrl} target="_blank" rel="noreferrer" className="btn-secondary text-center">
                      View Drone Map
                    </a>
                  )}

                  <button onClick={() => bookVisit(selectedLand.id)} className="bg-rose-500 text-white px-5 py-3 rounded-full font-bold">
                    📅 Book Site Visit
                  </button>

                  <a
                    href={`https://wa.me/${selectedLand.sellerPhone}`}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-green-600 text-white px-5 py-3 rounded-full font-bold text-center"
                  >
                    💬 Chat Seller
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}