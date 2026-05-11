import React, { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "buildwise_lands";
const SELLERS_KEY = "buildwise_sellers";

const emptySellerForm = {
  fullName: "",
  phone: "",
  email: "",
  role: "Land Owner",
  idFileUrl: "",
  landDocumentUrl: "",
};

const emptyLandForm = {
  title: "",
  province: "",
  district: "",
  sector: "",
  type: "Residential",
  price: "",
  size: "",
  sellerPhone: "",
  description: "",
  imageUrl: "",
  videoUrl: "",

  roadAccess: false,
  electricity: false,
  waterNearby: false,

  mapLocation: "",
  gpsRoute: "",
  titleStatus: "Available",
  droneMapUrl: "",
  nearbyPlaces: "",
  visitFee: "5000",
  reservationDeposit: "",
  galleryText: "",
};

export default function Lands() {
  const [sellers, setSellers] = useState([]);
  const [lands, setLands] = useState([]);
  const [selectedLand, setSelectedLand] = useState(null);
  const [editingId, setEditingId] = useState(null);

  const [sellerForm, setSellerForm] = useState(emptySellerForm);
  const [landForm, setLandForm] = useState(emptyLandForm);

  const [filters, setFilters] = useState({
    search: "",
    budgetText: "",
    province: "",
    type: "",
    minPrice: "",
    maxPrice: "",
    minSize: "",
    maxSize: "",
  });

  useEffect(() => {
    setSellers(JSON.parse(localStorage.getItem(SELLERS_KEY)) || []);
    setLands(JSON.parse(localStorage.getItem(STORAGE_KEY)) || []);
  }, []);

  useEffect(() => {
    localStorage.setItem(SELLERS_KEY, JSON.stringify(sellers));
  }, [sellers]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lands));
  }, [lands]);

  const verifiedSellers = sellers.filter((s) => s.verified);

  const extractBudget = (text) => {
    if (!text) return null;
    const numbers = text.replace(/,/g, "").match(/\d+/g);
    if (!numbers) return null;
    return Number(numbers.join(""));
  };

  const handleSellerChange = (e) => {
    setSellerForm({ ...sellerForm, [e.target.name]: e.target.value });
  };

  const handleLandChange = (e) => {
    setLandForm({ ...landForm, [e.target.name]: e.target.value });
  };

  const registerSeller = (e) => {
    e.preventDefault();

    const newSeller = {
      id: Date.now(),
      ...sellerForm,
      verified: true,
      createdAt: new Date().toLocaleString(),
    };

    setSellers([newSeller, ...sellers]);
    setSellerForm(emptySellerForm);
  };

  const addOrUpdateLand = (e) => {
    e.preventDefault();

    const seller = sellers.find((s) => s.phone === landForm.sellerPhone);

    const gallery = landForm.galleryText
      ? landForm.galleryText
          .split(",")
          .map((url) => url.trim())
          .filter(Boolean)
      : [];

    const payload = {
      ...landForm,
      gallery,
      sellerVerified: seller?.verified || false,
      sellerName: seller?.fullName || "Unknown Seller",
    };

    if (editingId) {
      setLands(
        lands.map((land) =>
          land.id === editingId
            ? {
                ...land,
                ...payload,
              }
            : land
        )
      );
      setEditingId(null);
    } else {
      const newLand = {
        id: Date.now(),
        ...payload,
        saved: false,
        reserved: false,
        visits: [],
        inquiries: [],
        commission: 0,
        createdAt: new Date().toLocaleString(),
      };

      setLands([newLand, ...lands]);
    }

    setLandForm(emptyLandForm);
  };

  const editLand = (land) => {
    setEditingId(land.id);
    setLandForm({
      title: land.title || "",
      province: land.province || "",
      district: land.district || "",
      sector: land.sector || "",
      type: land.type || "Residential",
      price: land.price || "",
      size: land.size || "",
      sellerPhone: land.sellerPhone || "",
      description: land.description || "",
      imageUrl: land.imageUrl || "",
      videoUrl: land.videoUrl || "",
      roadAccess: land.roadAccess || false,
      electricity: land.electricity || false,
      waterNearby: land.waterNearby || false,
      mapLocation: land.mapLocation || "",
      gpsRoute: land.gpsRoute || "",
      titleStatus: land.titleStatus || "Available",
      droneMapUrl: land.droneMapUrl || "",
      nearbyPlaces: land.nearbyPlaces || "",
      visitFee: land.visitFee || "5000",
      reservationDeposit: land.reservationDeposit || "",
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
    const phone = window.prompt("Andika telephone yawe:");

    if (!date || !time || !phone) return;

    const land = lands.find((item) => item.id === id);
    const fee = land?.visitFee || "5000";

    window.alert(`Visit booked successfully.\nBooking Fee: ${fee} RWF`);

    setLands(
      lands.map((land) =>
        land.id === id
          ? {
              ...land,
              visits: [...(land.visits || []), { date, time, phone, fee }],
            }
          : land
      )
    );
  };

  const reserveLand = (id) => {
    const deposit = window.prompt("Andika reservation deposit amount:");

    if (!deposit) return;

    const commission = Number(deposit) * 0.1;

    window.alert(
      `Reservation successful.\nDeposit: ${Number(
        deposit
      ).toLocaleString()} RWF\nPlatform Commission: ${commission.toLocaleString()} RWF`
    );

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
  };

  const sendInquiry = (id) => {
    const message = window.prompt("Andika ubutumwa ushaka kohereza:");
    if (!message) return;

    setLands(
      lands.map((land) =>
        land.id === id
          ? {
              ...land,
              inquiries: [...(land.inquiries || []), message],
            }
          : land
      )
    );
  };

  const filteredLands = useMemo(() => {
    const aiBudget = extractBudget(filters.budgetText);

    return lands.filter((land) => {
      const price = Number(land.price);
      const size = Number(land.size);
      const search = filters.search.toLowerCase();

      const matchesSearch =
        land.title?.toLowerCase().includes(search) ||
        land.province?.toLowerCase().includes(search) ||
        land.district?.toLowerCase().includes(search) ||
        land.sector?.toLowerCase().includes(search);

      return (
        matchesSearch &&
        (!aiBudget || price <= aiBudget) &&
        (!filters.province || land.province === filters.province) &&
        (!filters.type || land.type === filters.type) &&
        (!filters.minPrice || price >= Number(filters.minPrice)) &&
        (!filters.maxPrice || price <= Number(filters.maxPrice)) &&
        (!filters.minSize || size >= Number(filters.minSize)) &&
        (!filters.maxSize || size <= Number(filters.maxSize))
      );
    });
  }, [lands, filters]);

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">
          Land Marketplace
        </h1>
        <p className="text-slate-600">
          Isoko ry'ibibanza rihuza banyir'ibibanza, brokers, real estate agents
          n'abaguzi.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <form onSubmit={registerSeller} className="bg-white p-5 rounded-2xl shadow">
          <h2 className="text-xl font-bold mb-4">
            Kwiyandikisha nk'ugurisha ikibanza
          </h2>

          <input
            name="fullName"
            value={sellerForm.fullName}
            onChange={handleSellerChange}
            placeholder="Amazina"
            className="input"
            required
          />

          <input
            name="phone"
            value={sellerForm.phone}
            onChange={handleSellerChange}
            placeholder="Telefone"
            className="input"
            required
          />

          <input
            name="email"
            value={sellerForm.email}
            onChange={handleSellerChange}
            placeholder="Email"
            className="input"
          />

          <select
            name="role"
            value={sellerForm.role}
            onChange={handleSellerChange}
            className="input"
          >
            <option>Land Owner</option>
            <option>Broker/Agent</option>
            <option>Real Estate Company</option>
          </select>

          <input
            name="idFileUrl"
            value={sellerForm.idFileUrl}
            onChange={handleSellerChange}
            placeholder="ID verification file URL"
            className="input"
          />

          <input
            name="landDocumentUrl"
            value={sellerForm.landDocumentUrl}
            onChange={handleSellerChange}
            placeholder="Land document URL"
            className="input"
          />

          <button className="btn-primary">Register & Verify Seller</button>
        </form>

        <form onSubmit={addOrUpdateLand} className="bg-white p-5 rounded-2xl shadow">
          <h2 className="text-xl font-bold mb-4">
            {editingId ? "Hindura ikibanza" : "Ongeramo ikibanza"}
          </h2>

          <input name="title" value={landForm.title} onChange={handleLandChange} placeholder="Title" className="input" required />
          <input name="province" value={landForm.province} onChange={handleLandChange} placeholder="Province" className="input" required />
          <input name="district" value={landForm.district} onChange={handleLandChange} placeholder="District / Akarere" className="input" required />
          <input name="sector" value={landForm.sector} onChange={handleLandChange} placeholder="Sector / Umurenge" className="input" required />

          <select name="type" value={landForm.type} onChange={handleLandChange} className="input">
            <option>Residential</option>
            <option>Commercial</option>
            <option>Agriculture</option>
            <option>Industrial</option>
          </select>

          <input name="price" value={landForm.price} onChange={handleLandChange} placeholder="Price RWF" className="input" required />
          <input name="size" value={landForm.size} onChange={handleLandChange} placeholder="Size sqm" className="input" required />

          <select name="sellerPhone" value={landForm.sellerPhone} onChange={handleLandChange} className="input" required>
            <option value="">Hitamo verified seller</option>
            {verifiedSellers.map((seller) => (
              <option key={seller.id} value={seller.phone}>
                {seller.fullName} - {seller.phone}
              </option>
            ))}
          </select>

          <input name="imageUrl" value={landForm.imageUrl} onChange={handleLandChange} placeholder="Main Photo URL" className="input" />
          <input name="galleryText" value={landForm.galleryText} onChange={handleLandChange} placeholder="Gallery photo URLs, tandukanya na comma" className="input" />
          <input name="videoUrl" value={landForm.videoUrl} onChange={handleLandChange} placeholder="Video URL" className="input" />

          <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
            <label className="flex gap-2 items-center">
              <input type="checkbox" checked={landForm.roadAccess} onChange={(e) => setLandForm({ ...landForm, roadAccess: e.target.checked })} />
              Road Access
            </label>

            <label className="flex gap-2 items-center">
              <input type="checkbox" checked={landForm.electricity} onChange={(e) => setLandForm({ ...landForm, electricity: e.target.checked })} />
              Electricity
            </label>

            <label className="flex gap-2 items-center">
              <input type="checkbox" checked={landForm.waterNearby} onChange={(e) => setLandForm({ ...landForm, waterNearby: e.target.checked })} />
              Water Nearby
            </label>
          </div>

          <input name="mapLocation" value={landForm.mapLocation} onChange={handleLandChange} placeholder="Map Location URL: https://maps.google.com/?q=Kigali" className="input" />
          <input name="gpsRoute" value={landForm.gpsRoute} onChange={handleLandChange} placeholder="GPS Route URL" className="input" />
          <input name="droneMapUrl" value={landForm.droneMapUrl} onChange={handleLandChange} placeholder="Drone Map URL" className="input" />

          <select name="titleStatus" value={landForm.titleStatus} onChange={handleLandChange} className="input">
            <option>Available</option>
            <option>Title Deed Ready</option>
            <option>Under Verification</option>
            <option>Reserved</option>
            <option>Sold</option>
          </select>

          <input name="nearbyPlaces" value={landForm.nearbyPlaces} onChange={handleLandChange} placeholder="Nearby schools / road / hospital" className="input" />
          <input name="visitFee" value={landForm.visitFee} onChange={handleLandChange} placeholder="Visit Booking Fee" className="input" />
          <input name="reservationDeposit" value={landForm.reservationDeposit} onChange={handleLandChange} placeholder="Minimum Reservation Deposit" className="input" />

          <textarea name="description" value={landForm.description} onChange={handleLandChange} placeholder="Title deed summary / description" className="input min-h-24" />

          <button className="btn-primary">
            {editingId ? "Save Changes" : "Add Land Listing"}
          </button>
        </form>
      </div>

      <div className="bg-white p-5 rounded-2xl shadow mb-8">
        <h2 className="text-xl font-bold mb-4">Smart Land Search Engine</h2>

        <div className="grid md:grid-cols-4 gap-3">
          <input
            placeholder="Search: Gasabo, Kibagabaga..."
            className="input"
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
          />

          <input
            placeholder="Mfite 8,000,000 Frw"
            className="input"
            value={filters.budgetText}
            onChange={(e) => setFilters({ ...filters, budgetText: e.target.value })}
          />

          <input
            placeholder="Province"
            className="input"
            value={filters.province}
            onChange={(e) => setFilters({ ...filters, province: e.target.value })}
          />

          <select
            className="input"
            value={filters.type}
            onChange={(e) => setFilters({ ...filters, type: e.target.value })}
          >
            <option value="">All Types</option>
            <option>Residential</option>
            <option>Commercial</option>
            <option>Agriculture</option>
            <option>Industrial</option>
          </select>

          <input placeholder="Min Price" className="input" value={filters.minPrice} onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })} />
          <input placeholder="Max Price" className="input" value={filters.maxPrice} onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })} />
          <input placeholder="Min Size" className="input" value={filters.minSize} onChange={(e) => setFilters({ ...filters, minSize: e.target.value })} />
          <input placeholder="Max Size" className="input" value={filters.maxSize} onChange={(e) => setFilters({ ...filters, maxSize: e.target.value })} />
        </div>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredLands.map((land) => (
          <div key={land.id} className="bg-white rounded-2xl shadow overflow-hidden border border-slate-100">
            {land.imageUrl ? (
              <img src={land.imageUrl} alt={land.title} className="w-full h-52 object-cover" />
            ) : (
              <div className="w-full h-52 bg-slate-200 flex items-center justify-center text-slate-500">
                No Image
              </div>
            )}

            <div className="p-5">
              <div className="flex justify-between gap-3 items-start">
                <div>
                  <h3 className="text-lg font-bold">{land.title}</h3>
                  <p className="text-slate-600">
                    {land.sector} - {land.district}
                  </p>
                </div>

                {land.sellerVerified ? (
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                    Verified
                  </span>
                ) : (
                  <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">
                    Not Verified
                  </span>
                )}
              </div>

              <p className="font-bold text-blue-700 mt-3">
                {Number(land.price).toLocaleString()} RWF
              </p>

              <p className="text-sm text-slate-500">
                {land.size} sqm • {land.type}
              </p>

              <div className="mt-3 space-y-1 text-sm text-slate-600">
                {land.roadAccess && <p>✔ Road Access</p>}
                {land.electricity && <p>✔ Electricity</p>}
                {land.waterNearby && <p>✔ Water Nearby</p>}
              </div>

              <p className="mt-3 text-xs font-semibold text-slate-500">
                Title Status: {land.titleStatus}
              </p>

              {land.reserved && (
                <p className="mt-2 text-sm text-orange-600 font-semibold">
                  Reserved
                </p>
              )}

              <div className="grid grid-cols-2 gap-2 mt-4">
                <button onClick={() => setSelectedLand(land)} className="btn-secondary">
                  View Details
                </button>

                <button onClick={() => bookVisit(land.id)} className="btn-secondary">
                  Book Visit
                </button>

                <button onClick={() => reserveLand(land.id)} className="btn-secondary">
                  Reserve Land
                </button>

                <button onClick={() => sendInquiry(land.id)} className="btn-secondary">
                  Inquiry
                </button>

                <button onClick={() => toggleSave(land.id)} className="btn-secondary">
                  {land.saved ? "Saved" : "Save"}
                </button>

                <a
                  href={`https://wa.me/${land.sellerPhone}?text=Muraho, ndifuza kumenya byinshi kuri iki kibanza: ${land.title}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-whatsapp text-center"
                >
                  Chat Seller
                </a>

                <button onClick={() => editLand(land)} className="btn-edit">
                  Edit
                </button>

                <button onClick={() => deleteLand(land.id)} className="btn-danger">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredLands.length === 0 && (
        <div className="bg-white rounded-2xl shadow p-8 text-center text-slate-500 mt-6">
          Nta kibanza kiraboneka.
        </div>
      )}

      {selectedLand && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white max-w-4xl w-full rounded-2xl p-6 max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-2">{selectedLand.title}</h2>

            <p className="text-slate-600 mb-4">
              {selectedLand.province}, {selectedLand.district}, {selectedLand.sector}
            </p>

            {selectedLand.imageUrl && (
              <img
                src={selectedLand.imageUrl}
                alt={selectedLand.title}
                className="w-full h-72 object-cover rounded-2xl mb-4"
              />
            )}

            {selectedLand.gallery?.length > 0 && (
              <div className="grid md:grid-cols-3 gap-3 mb-4">
                {selectedLand.gallery.map((photo, index) => (
                  <img
                    key={index}
                    src={photo}
                    alt={`gallery-${index}`}
                    className="w-full h-32 object-cover rounded-xl"
                  />
                ))}
              </div>
            )}

            <p className="mb-4">{selectedLand.description}</p>

            <div className="grid md:grid-cols-2 gap-3 text-sm bg-slate-50 p-4 rounded-2xl">
              <p><b>Price:</b> {Number(selectedLand.price).toLocaleString()} RWF</p>
              <p><b>Size:</b> {selectedLand.size} sqm</p>
              <p><b>Type:</b> {selectedLand.type}</p>
              <p><b>Title Status:</b> {selectedLand.titleStatus}</p>
              <p><b>Seller:</b> {selectedLand.sellerName}</p>
              <p><b>Seller Verified:</b> {selectedLand.sellerVerified ? "Yes" : "No"}</p>
              <p><b>Phone:</b> {selectedLand.sellerPhone}</p>
              <p><b>Nearby:</b> {selectedLand.nearbyPlaces}</p>
              <p><b>Visit Fee:</b> {selectedLand.visitFee} RWF</p>
              <p><b>Reservation Deposit:</b> {selectedLand.reservationDeposit || "Not set"} RWF</p>
              <p><b>Commission:</b> {Number(selectedLand.commission || 0).toLocaleString()} RWF</p>
              <p><b>Visits Booked:</b> {selectedLand.visits?.length || 0}</p>
            </div>

            <div className="mt-5 grid md:grid-cols-3 gap-3">
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

              {selectedLand.videoUrl && (
                <a href={selectedLand.videoUrl} target="_blank" rel="noreferrer" className="btn-secondary text-center">
                  Reba Video
                </a>
              )}

              <button onClick={() => bookVisit(selectedLand.id)} className="btn-secondary">
                📅 Book Site Visit
              </button>

              <a
                href={`https://wa.me/${selectedLand.sellerPhone}?text=Muraho, ndifuza kuganira kuri iki kibanza: ${selectedLand.title}`}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp text-center"
              >
                💬 Chat Seller
              </a>
            </div>

            <button onClick={() => setSelectedLand(null)} className="btn-primary mt-6">
              Funga
            </button>
          </div>
        </div>
      )}
    </div>
  );
}