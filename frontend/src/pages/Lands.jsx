import React, { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "buildwise_lands";
const SELLERS_KEY = "buildwise_sellers";

export default function Lands() {
  const [sellers, setSellers] = useState([]);
  const [lands, setLands] = useState([]);
  const [selectedLand, setSelectedLand] = useState(null);
  const [editingId, setEditingId] = useState(null);

  const [sellerForm, setSellerForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    role: "Land Owner",
    idFileUrl: "",
    landDocumentUrl: "",
  });

  const [landForm, setLandForm] = useState({
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
  });

  const [filters, setFilters] = useState({
    search: "",
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

    setSellerForm({
      fullName: "",
      phone: "",
      email: "",
      role: "Land Owner",
      idFileUrl: "",
      landDocumentUrl: "",
    });
  };

  const addOrUpdateLand = (e) => {
    e.preventDefault();

    if (editingId) {
      setLands(
        lands.map((land) =>
          land.id === editingId ? { ...land, ...landForm } : land
        )
      );
      setEditingId(null);
    } else {
      const seller = sellers.find((s) => s.phone === landForm.sellerPhone);

      const newLand = {
        id: Date.now(),
        ...landForm,
        saved: false,
        reserved: false,
        visits: [],
        inquiries: [],
        sellerVerified: seller?.verified || false,
        sellerName: seller?.fullName || "Unknown Seller",
        createdAt: new Date().toLocaleString(),
      };

      setLands([newLand, ...lands]);
    }

    setLandForm({
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
    });
  };

  const editLand = (land) => {
    setEditingId(land.id);
    setLandForm({
      title: land.title,
      province: land.province,
      district: land.district,
      sector: land.sector,
      type: land.type,
      price: land.price,
      size: land.size,
      sellerPhone: land.sellerPhone,
      description: land.description,
      imageUrl: land.imageUrl,
      videoUrl: land.videoUrl,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const deleteLand = (id) => {
    if (confirm("Urashaka koko gusiba iki kibanza?")) {
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

  const reserveLand = (id) => {
    setLands(
      lands.map((land) =>
        land.id === id ? { ...land, reserved: true } : land
      )
    );
  };

  const bookVisit = (id) => {
    const visitDate = prompt("Andika itariki ushaka gusura ikibanza:");
    if (!visitDate) return;

    setLands(
      lands.map((land) =>
        land.id === id
          ? { ...land, visits: [...land.visits, visitDate] }
          : land
      )
    );
  };

  const sendInquiry = (id) => {
    const message = prompt("Andika ubutumwa bwawe kuri nyir'ikibanza:");
    if (!message) return;

    setLands(
      lands.map((land) =>
        land.id === id
          ? { ...land, inquiries: [...land.inquiries, message] }
          : land
      )
    );
  };

  const filteredLands = useMemo(() => {
    return lands.filter((land) => {
      const price = Number(land.price);
      const size = Number(land.size);

      return (
        land.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        land.district.toLowerCase().includes(filters.search.toLowerCase()) ||
        land.sector.toLowerCase().includes(filters.search.toLowerCase())
      )
        && (!filters.province || land.province === filters.province)
        && (!filters.type || land.type === filters.type)
        && (!filters.minPrice || price >= Number(filters.minPrice))
        && (!filters.maxPrice || price <= Number(filters.maxPrice))
        && (!filters.minSize || size >= Number(filters.minSize))
        && (!filters.maxSize || size <= Number(filters.maxSize));
    });
  }, [lands, filters]);

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Land Marketplace</h1>
        <p className="text-slate-600">
          Isoko ry'ibibanza rihuza banyir'ibibanza, brokers, real estate agents n'abaguzi.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <form onSubmit={registerSeller} className="bg-white p-5 rounded-2xl shadow">
          <h2 className="text-xl font-bold mb-4">Kwiyandikisha nk'ugurisha ikibanza</h2>

          <input name="fullName" value={sellerForm.fullName} onChange={handleSellerChange} placeholder="Amazina" className="input" required />
          <input name="phone" value={sellerForm.phone} onChange={handleSellerChange} placeholder="Telefone" className="input" required />
          <input name="email" value={sellerForm.email} onChange={handleSellerChange} placeholder="Email" className="input" />

          <select name="role" value={sellerForm.role} onChange={handleSellerChange} className="input">
            <option>Land Owner</option>
            <option>Broker/Agent</option>
            <option>Real Estate Company</option>
          </select>

          <input name="idFileUrl" value={sellerForm.idFileUrl} onChange={handleSellerChange} placeholder="ID verification file URL" className="input" />
          <input name="landDocumentUrl" value={sellerForm.landDocumentUrl} onChange={handleSellerChange} placeholder="Land document URL" className="input" />

          <button className="btn-primary">Register & Verify Seller</button>
        </form>

        <form onSubmit={addOrUpdateLand} className="bg-white p-5 rounded-2xl shadow">
          <h2 className="text-xl font-bold mb-4">
            {editingId ? "Hindura ikibanza" : "Ongeramo ikibanza"}
          </h2>

          <input name="title" value={landForm.title} onChange={handleLandChange} placeholder="Title" className="input" required />
          <input name="province" value={landForm.province} onChange={handleLandChange} placeholder="Province" className="input" required />
          <input name="district" value={landForm.district} onChange={handleLandChange} placeholder="District" className="input" required />
          <input name="sector" value={landForm.sector} onChange={handleLandChange} placeholder="Sector" className="input" required />

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

          <input name="imageUrl" value={landForm.imageUrl} onChange={handleLandChange} placeholder="Photo URL" className="input" />
          <input name="videoUrl" value={landForm.videoUrl} onChange={handleLandChange} placeholder="Video URL" className="input" />

          <textarea name="description" value={landForm.description} onChange={handleLandChange} placeholder="Description" className="input min-h-24" />

          <button className="btn-primary">
            {editingId ? "Save Changes" : "Add Land Listing"}
          </button>
        </form>
      </div>

      <div className="bg-white p-5 rounded-2xl shadow mb-8">
        <h2 className="text-xl font-bold mb-4">Smart Search & Filters</h2>

        <div className="grid md:grid-cols-4 gap-3">
          <input placeholder="Search location/title" className="input" value={filters.search} onChange={(e) => setFilters({ ...filters, search: e.target.value })} />
          <input placeholder="Province" className="input" value={filters.province} onChange={(e) => setFilters({ ...filters, province: e.target.value })} />

          <select className="input" value={filters.type} onChange={(e) => setFilters({ ...filters, type: e.target.value })}>
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
          <div key={land.id} className="bg-white rounded-2xl shadow overflow-hidden">
            {land.imageUrl ? (
              <img src={land.imageUrl} alt={land.title} className="w-full h-48 object-cover" />
            ) : (
              <div className="w-full h-48 bg-slate-200 flex items-center justify-center text-slate-500">
                No Image
              </div>
            )}

            <div className="p-5">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-bold">{land.title}</h3>
                {land.sellerVerified && (
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                    Verified Seller
                  </span>
                )}
              </div>

              <p className="text-slate-600">{land.province}, {land.district}, {land.sector}</p>
              <p className="font-bold text-blue-700 mt-2">{Number(land.price).toLocaleString()} RWF</p>
              <p className="text-sm text-slate-500">{land.size} sqm • {land.type}</p>

              {land.reserved && (
                <p className="mt-2 text-sm text-orange-600 font-semibold">Reserved</p>
              )}

              <div className="grid grid-cols-2 gap-2 mt-4">
                <button onClick={() => setSelectedLand(land)} className="btn-secondary">Details</button>
                <button onClick={() => bookVisit(land.id)} className="btn-secondary">Book Visit</button>
                <button onClick={() => reserveLand(land.id)} className="btn-secondary">Reserve</button>
                <button onClick={() => sendInquiry(land.id)} className="btn-secondary">Inquiry</button>
                <button onClick={() => toggleSave(land.id)} className="btn-secondary">
                  {land.saved ? "Saved" : "Save"}
                </button>

                <a
                  href={`https://wa.me/${land.sellerPhone}?text=Muraho, ndifuza kumenya byinshi kuri iki kibanza: ${land.title}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-whatsapp text-center"
                >
                  WhatsApp
                </a>

                <button onClick={() => editLand(land)} className="btn-edit">Edit</button>
                <button onClick={() => deleteLand(land.id)} className="btn-danger">Delete</button>
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
          <div className="bg-white max-w-2xl w-full rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-2">{selectedLand.title}</h2>
            <p>{selectedLand.description}</p>

            <div className="mt-4 space-y-2 text-sm">
              <p><b>Location:</b> {selectedLand.province}, {selectedLand.district}, {selectedLand.sector}</p>
              <p><b>Price:</b> {Number(selectedLand.price).toLocaleString()} RWF</p>
              <p><b>Size:</b> {selectedLand.size} sqm</p>
              <p><b>Seller:</b> {selectedLand.sellerName}</p>
              <p><b>Phone:</b> {selectedLand.sellerPhone}</p>
              <p><b>Visits booked:</b> {selectedLand.visits.length}</p>
              <p><b>Inquiries:</b> {selectedLand.inquiries.length}</p>
            </div>

            {selectedLand.videoUrl && (
              <a href={selectedLand.videoUrl} target="_blank" rel="noreferrer" className="text-blue-600 block mt-4">
                Reba video y'ikibanza
              </a>
            )}

            <button onClick={() => setSelectedLand(null)} className="btn-primary mt-6">
              Funga
            </button>
          </div>
        </div>
      )}
    </div>
  );
}