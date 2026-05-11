import React, { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "buildwise_houses_for_sale";

const emptyForm = {
  title: "",
  category: "Residential House",
  houseType: "Villa",
  province: "",
  district: "",
  sector: "",
  price: "",
  size: "",
  bedrooms: "",
  bathrooms: "",
  floors: "",
  sellerName: "",
  sellerPhone: "",
  imageUrl: "",
  galleryText: "",
  videoUrl: "",
  mapLocation: "",
  gpsRoute: "",
  description: "",
  titleStatus: "Title Deed Ready",
  propertyCondition: "New",
  furnished: false,
  parking: false,
  security: false,
  garden: false,
  electricity: false,
  water: false,
  internet: false,
};

export default function HousesForSale() {
  const [houses, setHouses] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [selectedHouse, setSelectedHouse] = useState(null);

  const [filters, setFilters] = useState({
    search: "",
    category: "",
    minPrice: "",
    maxPrice: "",
    minBedrooms: "",
  });

  useEffect(() => {
    setHouses(JSON.parse(localStorage.getItem(STORAGE_KEY)) || []);
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(houses));
  }, [houses]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addOrUpdateHouse = (e) => {
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
      sellerVerified: true,
    };

    if (editingId) {
      setHouses(
        houses.map((house) =>
          house.id === editingId ? { ...house, ...payload } : house
        )
      );
      setEditingId(null);
    } else {
      setHouses([
        {
          id: Date.now(),
          ...payload,
          saved: false,
          reserved: false,
          visits: [],
          createdAt: new Date().toLocaleString(),
        },
        ...houses,
      ]);
    }

    setForm(emptyForm);
  };

  const editHouse = (house) => {
    setEditingId(house.id);
    setForm({
      ...emptyForm,
      ...house,
      galleryText: house.gallery?.join(", ") || "",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const deleteHouse = (id) => {
    if (window.confirm("Urashaka koko gusiba iyi nzu?")) {
      setHouses(houses.filter((house) => house.id !== id));
    }
  };

  const toggleSave = (id) => {
    setHouses(
      houses.map((house) =>
        house.id === id ? { ...house, saved: !house.saved } : house
      )
    );
  };

  const bookVisit = (id) => {
    const date = window.prompt("Andika date ushaka gusura iyi nzu:");
    const time = window.prompt("Andika time:");
    const phone = window.prompt("Andika telephone yawe:");

    if (!date || !time || !phone) return;

    setHouses(
      houses.map((house) =>
        house.id === id
          ? {
              ...house,
              visits: [...(house.visits || []), { date, time, phone }],
            }
          : house
      )
    );

    window.alert("House visit booked successfully.");
  };

  const reserveHouse = (id) => {
    const deposit = window.prompt("Andika reservation deposit:");
    if (!deposit) return;

    const commission = Number(deposit) * 0.1;

    setHouses(
      houses.map((house) =>
        house.id === id
          ? {
              ...house,
              reserved: true,
              reservationDeposit: deposit,
              commission,
            }
          : house
      )
    );

    window.alert(
      `Reservation successful.\nCommission: ${commission.toLocaleString()} RWF`
    );
  };

  const filteredHouses = useMemo(() => {
    return houses.filter((house) => {
      const search = filters.search.toLowerCase();
      const price = Number(house.price);
      const bedrooms = Number(house.bedrooms);

      const matchesSearch =
        house.title?.toLowerCase().includes(search) ||
        house.district?.toLowerCase().includes(search) ||
        house.sector?.toLowerCase().includes(search) ||
        house.houseType?.toLowerCase().includes(search);

      return (
        matchesSearch &&
        (!filters.category || house.category === filters.category) &&
        (!filters.minPrice || price >= Number(filters.minPrice)) &&
        (!filters.maxPrice || price <= Number(filters.maxPrice)) &&
        (!filters.minBedrooms || bedrooms >= Number(filters.minBedrooms))
      );
    });
  }, [houses, filters]);

  return (
    <div>
      <div className="mb-8">
        <h1 className="page-title">Amazu Agurishwa</h1>
        <p className="text-slate-600">
          Gucuruza amazu yo guturamo n’amazu y’ubucuruzi.
        </p>
      </div>

      <form onSubmit={addOrUpdateHouse} className="card p-5 mb-8">
        <h2 className="section-title">
          {editingId ? "Hindura inzu" : "Ongeramo inzu igurishwa"}
        </h2>

        <div className="grid md:grid-cols-3 gap-3">
          <input name="title" value={form.title} onChange={handleChange} placeholder="Title" className="input" required />

          <select name="category" value={form.category} onChange={handleChange} className="input">
            <option>Residential House</option>
            <option>Commercial House</option>
          </select>

          <select name="houseType" value={form.houseType} onChange={handleChange} className="input">
            <option>Villa</option>
            <option>Family House</option>
            <option>Apartment Building</option>
            <option>Duplex</option>
            <option>Office Building</option>
            <option>Shop</option>
            <option>Warehouse</option>
            <option>Commercial Building</option>
          </select>

          <input name="province" value={form.province} onChange={handleChange} placeholder="Province" className="input" />
          <input name="district" value={form.district} onChange={handleChange} placeholder="District" className="input" required />
          <input name="sector" value={form.sector} onChange={handleChange} placeholder="Sector" className="input" />

          <input name="price" value={form.price} onChange={handleChange} placeholder="Price RWF" className="input" required />
          <input name="size" value={form.size} onChange={handleChange} placeholder="Size sqm" className="input" />
          <input name="bedrooms" value={form.bedrooms} onChange={handleChange} placeholder="Bedrooms" className="input" />

          <input name="bathrooms" value={form.bathrooms} onChange={handleChange} placeholder="Bathrooms" className="input" />
          <input name="floors" value={form.floors} onChange={handleChange} placeholder="Floors" className="input" />
          <input name="sellerName" value={form.sellerName} onChange={handleChange} placeholder="Seller Name" className="input" />

          <input name="sellerPhone" value={form.sellerPhone} onChange={handleChange} placeholder="Seller Phone" className="input" required />
          <input name="imageUrl" value={form.imageUrl} onChange={handleChange} placeholder="Main Image URL" className="input" />
          <input name="galleryText" value={form.galleryText} onChange={handleChange} placeholder="Gallery URLs, separated by comma" className="input" />

          <input name="videoUrl" value={form.videoUrl} onChange={handleChange} placeholder="Video / Virtual Tour URL" className="input" />
          <input name="mapLocation" value={form.mapLocation} onChange={handleChange} placeholder="Map URL" className="input" />
          <input name="gpsRoute" value={form.gpsRoute} onChange={handleChange} placeholder="GPS Route URL" className="input" />

          <select name="titleStatus" value={form.titleStatus} onChange={handleChange} className="input">
            <option>Title Deed Ready</option>
            <option>Under Verification</option>
            <option>Mortgage Ready</option>
            <option>Reserved</option>
            <option>Sold</option>
          </select>

          <select name="propertyCondition" value={form.propertyCondition} onChange={handleChange} className="input">
            <option>New</option>
            <option>Renovated</option>
            <option>Used</option>
            <option>Needs Repair</option>
          </select>
        </div>

        <div className="grid md:grid-cols-4 gap-3 text-sm mb-4">
          {[
            ["furnished", "Furnished"],
            ["parking", "Parking"],
            ["security", "Security"],
            ["garden", "Garden"],
            ["electricity", "Electricity"],
            ["water", "Water"],
            ["internet", "Internet"],
          ].map(([key, label]) => (
            <label key={key} className="flex gap-2 items-center">
              <input
                type="checkbox"
                checked={form[key]}
                onChange={(e) => setForm({ ...form, [key]: e.target.checked })}
              />
              {label}
            </label>
          ))}
        </div>

        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description / house details"
          className="input min-h-28"
        />

        <button className="btn-primary">
          {editingId ? "Save Changes" : "Add House"}
        </button>
      </form>

      <div className="card p-5 mb-8">
        <h2 className="section-title">Smart Search</h2>

        <div className="grid md:grid-cols-5 gap-3">
          <input placeholder="Search location/type..." className="input" value={filters.search} onChange={(e) => setFilters({ ...filters, search: e.target.value })} />

          <select className="input" value={filters.category} onChange={(e) => setFilters({ ...filters, category: e.target.value })}>
            <option value="">All Categories</option>
            <option>Residential House</option>
            <option>Commercial House</option>
          </select>

          <input placeholder="Min Price" className="input" value={filters.minPrice} onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })} />
          <input placeholder="Max Price" className="input" value={filters.maxPrice} onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })} />
          <input placeholder="Min Bedrooms" className="input" value={filters.minBedrooms} onChange={(e) => setFilters({ ...filters, minBedrooms: e.target.value })} />
        </div>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredHouses.map((house) => (
          <div key={house.id} className="card card-hover">
            {house.imageUrl ? (
              <img src={house.imageUrl} alt={house.title} className="w-full h-52 object-cover" />
            ) : (
              <div className="w-full h-52 bg-slate-200 flex items-center justify-center text-slate-500">
                No Image
              </div>
            )}

            <div className="p-5">
              <div className="flex justify-between gap-3">
                <div>
                  <h3 className="text-lg font-bold">{house.title}</h3>
                  <p className="text-slate-600">{house.sector} - {house.district}</p>
                </div>
                <span className="badge-success">Verified</span>
              </div>

              <p className="font-bold text-blue-700 mt-3">
                {Number(house.price).toLocaleString()} RWF
              </p>

              <p className="text-sm text-slate-500">
                {house.category} • {house.houseType}
              </p>

              <p className="text-sm text-slate-500">
                {house.bedrooms || 0} bedrooms • {house.bathrooms || 0} bathrooms
              </p>

              <div className="mt-3 space-y-1 text-sm text-slate-600">
                {house.parking && <p>✔ Parking</p>}
                {house.furnished && <p>✔ Furnished</p>}
                {house.security && <p>✔ Security</p>}
                {house.water && <p>✔ Water</p>}
                {house.electricity && <p>✔ Electricity</p>}
              </div>

              {house.reserved && (
                <p className="text-orange-600 font-semibold mt-2">Reserved</p>
              )}

              <div className="grid grid-cols-2 gap-2 mt-4">
                <button onClick={() => setSelectedHouse(house)} className="btn-secondary">View Details</button>
                <button onClick={() => bookVisit(house.id)} className="btn-secondary">Book Visit</button>
                <button onClick={() => reserveHouse(house.id)} className="btn-secondary">Reserve</button>
                <button onClick={() => toggleSave(house.id)} className="btn-secondary">{house.saved ? "Saved" : "Save"}</button>

                <a
                  href={`https://wa.me/${house.sellerPhone}?text=Muraho, ndifuza kumenya byinshi kuri iyi nzu: ${house.title}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-whatsapp text-center"
                >
                  WhatsApp
                </a>

                <button onClick={() => editHouse(house)} className="btn-edit">Edit</button>
                <button onClick={() => deleteHouse(house.id)} className="btn-danger">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedHouse && (
        <div className="modal-overlay">
          <div className="modal-content max-w-4xl w-full">
            <h2 className="text-2xl font-bold">{selectedHouse.title}</h2>
            <p className="text-slate-600 mb-4">
              {selectedHouse.province}, {selectedHouse.district}, {selectedHouse.sector}
            </p>

            {selectedHouse.imageUrl && (
              <img src={selectedHouse.imageUrl} alt={selectedHouse.title} className="w-full h-72 object-cover rounded-2xl mb-4" />
            )}

            <p className="mb-4">{selectedHouse.description}</p>

            <div className="grid md:grid-cols-2 gap-3 text-sm bg-slate-50 p-4 rounded-2xl">
              <p><b>Price:</b> {Number(selectedHouse.price).toLocaleString()} RWF</p>
              <p><b>Category:</b> {selectedHouse.category}</p>
              <p><b>Bedrooms:</b> {selectedHouse.bedrooms}</p>
              <p><b>Bathrooms:</b> {selectedHouse.bathrooms}</p>
              <p><b>Condition:</b> {selectedHouse.propertyCondition}</p>
              <p><b>Title Status:</b> {selectedHouse.titleStatus}</p>
              <p><b>Seller:</b> {selectedHouse.sellerName}</p>
              <p><b>Phone:</b> {selectedHouse.sellerPhone}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-3 mt-5">
              {selectedHouse.mapLocation && <a href={selectedHouse.mapLocation} target="_blank" rel="noreferrer" className="btn-secondary text-center">Map</a>}
              {selectedHouse.gpsRoute && <a href={selectedHouse.gpsRoute} target="_blank" rel="noreferrer" className="btn-secondary text-center">GPS Route</a>}
              {selectedHouse.videoUrl && <a href={selectedHouse.videoUrl} target="_blank" rel="noreferrer" className="btn-secondary text-center">Virtual Tour</a>}
              <button onClick={() => bookVisit(selectedHouse.id)} className="btn-secondary">Book Visit</button>
              <a href={`https://wa.me/${selectedHouse.sellerPhone}`} target="_blank" rel="noreferrer" className="btn-whatsapp text-center">Chat Seller</a>
            </div>

            <button onClick={() => setSelectedHouse(null)} className="btn-primary mt-6">
              Funga
            </button>
          </div>
        </div>
      )}
    </div>
  );
}