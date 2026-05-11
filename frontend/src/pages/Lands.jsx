import { useState } from "react";

export default function Lands() {
  const [search, setSearch] = useState("");
  const [provinceFilter, setProvinceFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [featuredOnly, setFeaturedOnly] = useState(false);

  const [showAddForm, setShowAddForm] = useState(false);
  const [showSellerForm, setShowSellerForm] = useState(false);
  const [selectedLand, setSelectedLand] = useState(null);
  const [bookingLand, setBookingLand] = useState(null);
  const [reserveLand, setReserveLand] = useState(null);
  const [editingLand, setEditingLand] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [showInquiry, setShowInquiry] = useState(false);
  const [inquiryLand, setInquiryLand] = useState(null);

  const [buyerInquiry, setBuyerInquiry] = useState({
    names: "",
    phone: "",
    message: "",
  });

  const [sellers, setSellers] = useState([
    {
      id: 1,
      names: "Jean Broker",
      phone: "+250788000111",
      email: "jean@buildwise.rw",
      role: "Broker/Agent",
      verified: true,
    },
  ]);

  const [newSeller, setNewSeller] = useState({
    names: "",
    phone: "",
    email: "",
    role: "Land Owner",
    idDocument: "",
    landDocument: "",
    verified: true,
  });

  const emptyLand = {
    title: "",
    province: "",
    district: "",
    sector: "",
    cell: "",
    village: "",
    gps: "",
    size: "",
    price: "",
    type: "Residential",
    image: "",
    road: false,
    electricity: false,
    water: false,
    titleStatus: "Pending Verification",
    seller: "",
    sellerType: "Land Owner",
    sellerVerified: true,
    comments: "",
    status: "Available",
    featured: false,
  };

  const [newLand, setNewLand] = useState(emptyLand);

  const [lands, setLands] = useState([
    {
      id: 1,
      title: "Kibagabaga - Gasabo",
      province: "Kigali",
      district: "Gasabo",
      sector: "Kibagabaga",
      cell: "Kibagabaga",
      village: "Akintwari",
      gps: "-1.9215, 30.1132",
      size: 500,
      price: 25000000,
      type: "Residential",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
      road: true,
      electricity: true,
      water: true,
      titleStatus: "Verified Title Deed",
      seller: "Jean Broker",
      sellerType: "Broker/Agent",
      sellerVerified: true,
      comments: "Ikibanza kiri hafi y'umuhanda, amashuri n’amazi.",
      status: "Available",
      featured: true,
    },
    {
      id: 2,
      title: "Kicukiro - Niboye",
      province: "Kigali",
      district: "Kicukiro",
      sector: "Niboye",
      cell: "Gatare",
      village: "Amahoro",
      gps: "-1.9890, 30.1020",
      size: 700,
      price: 18000000,
      type: "Residential",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      road: true,
      electricity: true,
      water: false,
      titleStatus: "Pending Verification",
      seller: "Uwase Diane",
      sellerType: "Land Owner",
      sellerVerified: false,
      comments: "Ikibanza cyiza cyo kubakamo inzu y’umuryango.",
      status: "Reserved",
      featured: false,
    },
  ]);

  const filteredLands = lands.filter((land) => {
    const keyword = search.toLowerCase();

    const matchesSearch =
      land.title.toLowerCase().includes(keyword) ||
      land.district.toLowerCase().includes(keyword) ||
      land.sector.toLowerCase().includes(keyword) ||
      land.type.toLowerCase().includes(keyword) ||
      String(land.price).includes(keyword) ||
      String(land.size).includes(keyword);

    const matchesProvince = provinceFilter
      ? land.province === provinceFilter
      : true;

    const matchesType = typeFilter ? land.type === typeFilter : true;

    const matchesVerified = verifiedOnly ? land.sellerVerified : true;

    const matchesFeatured = featuredOnly ? land.featured : true;

    return (
      matchesSearch &&
      matchesProvince &&
      matchesType &&
      matchesVerified &&
      matchesFeatured
    );
  });

  const addSeller = (e) => {
    e.preventDefault();

    setSellers([{ ...newSeller, id: Date.now() }, ...sellers]);

    setNewSeller({
      names: "",
      phone: "",
      email: "",
      role: "Land Owner",
      idDocument: "",
      landDocument: "",
      verified: true,
    });

    setShowSellerForm(false);
  };

  const addLand = (e) => {
    e.preventDefault();

    setLands([
      {
        ...newLand,
        id: Date.now(),
        size: Number(newLand.size),
        price: Number(newLand.price),
        image:
          newLand.image ||
          "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
      },
      ...lands,
    ]);

    setNewLand(emptyLand);
    setShowAddForm(false);
  };

  const deleteLand = (id) => {
    setLands(lands.filter((land) => land.id !== id));
  };

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const saveEdit = () => {
    setLands(
      lands.map((land) =>
        land.id === editingLand.id
          ? {
              ...editingLand,
              size: Number(editingLand.size),
              price: Number(editingLand.price),
            }
          : land
      )
    );

    setEditingLand(null);
  };

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-3xl shadow-sm p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div>
          <h1 className="text-4xl font-bold text-slate-800">
            Land Marketplace 📍
          </h1>
          <p className="text-gray-500 mt-2 text-lg">
            Module y’ibibanza: Land Owners, Brokers, Real Estate Agents na
            Buyers.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-3">
          <button
            onClick={() => setShowSellerForm(!showSellerForm)}
            className="bg-slate-900 text-white px-6 py-4 rounded-2xl font-semibold hover:bg-slate-800"
          >
            ✅ Register Seller
          </button>

          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="bg-blue-600 text-white px-6 py-4 rounded-2xl font-semibold hover:bg-blue-700"
          >
            {showAddForm ? "Close Form" : "➕ Add New Land Listing"}
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        <StatCard
          title="Verified Sellers"
          value={sellers.filter((s) => s.verified).length}
        />
        <StatCard title="Land Listings" value={lands.length} />
        <StatCard
          title="Available Lands"
          value={lands.filter((land) => land.status === "Available").length}
        />
        <StatCard title="Saved Lands" value={favorites.length} />
      </div>

      <div className="bg-white rounded-3xl shadow-sm p-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold text-slate-800">
              Seller Verification Center ✅
            </h2>
            <p className="text-gray-500 mt-2 text-lg">
              Land Owner, Broker/Agent cyangwa Real Estate Agent abanza
              kwiyandikisha no kohereza ibyangombwa kugira ngo abe Verified
              Seller.
            </p>
          </div>

          <span className="bg-green-100 text-green-700 px-5 py-3 rounded-2xl font-semibold">
            Fraud Protection Enabled
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <RoleCard
            title="1. Land Owner"
            desc="Nyir’ikibanza yuzuza amazina, telefone, email, ID na title deed."
          />

          <RoleCard
            title="2. Broker / Agent"
            desc="Umuhuza ashyiraho amakuru ye, ID verification n’ibyangombwa by’ubutaka."
          />

          <RoleCard
            title="3. Buyer / Client"
            desc="Umukiriya ashaka ikibanza, akabika gusura cyangwa akishyura reservation."
          />
        </div>

        <div className="mt-8 bg-slate-50 rounded-3xl p-6">
          <h3 className="text-xl font-bold text-slate-800 mb-4">
            Verified Sellers
          </h3>

          <div className="space-y-3">
            {sellers.map((seller) => (
              <div
                key={seller.id}
                className="bg-white rounded-2xl p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3"
              >
                <div>
                  <h4 className="font-bold text-slate-800">{seller.names}</h4>
                  <p className="text-gray-500">
                    {seller.role} • {seller.phone} • {seller.email}
                  </p>
                </div>

                <span
                  className={`px-4 py-2 rounded-full font-semibold ${
                    seller.verified
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {seller.verified ? "Verified Seller" : "Pending"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showSellerForm && (
        <form
          onSubmit={addSeller}
          className="bg-white rounded-3xl shadow-sm p-8 space-y-6"
        >
          <h2 className="text-2xl font-bold text-slate-800">
            Register Seller / Verification
          </h2>

          <div className="grid md:grid-cols-3 gap-5">
            <TextInput
              label="Amazina"
              value={newSeller.names}
              onChange={(value) => setNewSeller({ ...newSeller, names: value })}
            />

            <TextInput
              label="Telefone"
              value={newSeller.phone}
              onChange={(value) => setNewSeller({ ...newSeller, phone: value })}
            />

            <TextInput
              label="Email"
              type="email"
              value={newSeller.email}
              onChange={(value) => setNewSeller({ ...newSeller, email: value })}
            />

            <SelectInput
              value={newSeller.role}
              onChange={(value) => setNewSeller({ ...newSeller, role: value })}
              options={["Land Owner", "Broker/Agent", "Real Estate Agent"]}
            />

            <TextInput
              label="ID verification file / URL"
              value={newSeller.idDocument}
              onChange={(value) =>
                setNewSeller({ ...newSeller, idDocument: value })
              }
            />

            <TextInput
              label="Land documents file / URL"
              value={newSeller.landDocument}
              onChange={(value) =>
                setNewSeller({ ...newSeller, landDocument: value })
              }
            />
          </div>

          <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-slate-800">
            Submit Verification
          </button>
        </form>
      )}

      <div className="bg-white rounded-3xl shadow-sm p-6">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">
          🔍 Smart Land Search Engine
        </h2>

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Andika akarere, budget, size cyangwa type. Urugero: 8000000, Gasabo, 500..."
          className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="grid md:grid-cols-4 gap-4 mt-5">
          <select
            value={provinceFilter}
            onChange={(e) => setProvinceFilter(e.target.value)}
            className="bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4"
          >
            <option value="">All Provinces</option>
            <option value="Kigali">Kigali</option>
            <option value="Northern">Northern</option>
            <option value="Southern">Southern</option>
            <option value="Eastern">Eastern</option>
            <option value="Western">Western</option>
          </select>

          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4"
          >
            <option value="">All Types</option>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
            <option value="Farming">Farming</option>
          </select>

          <label className="flex items-center gap-3 bg-slate-50 rounded-2xl px-5 py-4">
            <input
              type="checkbox"
              checked={verifiedOnly}
              onChange={(e) => setVerifiedOnly(e.target.checked)}
            />
            Verified Sellers Only
          </label>

          <label className="flex items-center gap-3 bg-slate-50 rounded-2xl px-5 py-4">
            <input
              type="checkbox"
              checked={featuredOnly}
              onChange={(e) => setFeaturedOnly(e.target.checked)}
            />
            Featured Listings
          </label>
        </div>
      </div>

      {showAddForm && (
        <form
          onSubmit={addLand}
          className="bg-white rounded-3xl shadow-sm p-8 space-y-6"
        >
          <h2 className="text-2xl font-bold text-slate-800">
            Publish New Land Listing
          </h2>

          <div className="grid md:grid-cols-3 gap-5">
            <TextInput
              label="Izina ry’ikibanza"
              value={newLand.title}
              onChange={(value) => setNewLand({ ...newLand, title: value })}
            />

            <TextInput
              label="Province"
              value={newLand.province}
              onChange={(value) => setNewLand({ ...newLand, province: value })}
            />

            <TextInput
              label="District"
              value={newLand.district}
              onChange={(value) => setNewLand({ ...newLand, district: value })}
            />

            <TextInput
              label="Sector"
              value={newLand.sector}
              onChange={(value) => setNewLand({ ...newLand, sector: value })}
            />

            <TextInput
              label="Cell"
              value={newLand.cell}
              onChange={(value) => setNewLand({ ...newLand, cell: value })}
            />

            <TextInput
              label="Village"
              value={newLand.village}
              onChange={(value) => setNewLand({ ...newLand, village: value })}
            />

            <TextInput
              label="GPS location"
              value={newLand.gps}
              onChange={(value) => setNewLand({ ...newLand, gps: value })}
            />

            <TextInput
              label="Size sqm"
              type="number"
              value={newLand.size}
              onChange={(value) => setNewLand({ ...newLand, size: value })}
            />

            <TextInput
              label="Price RWF"
              type="number"
              value={newLand.price}
              onChange={(value) => setNewLand({ ...newLand, price: value })}
            />

            <TextInput
              label="Image URL"
              required={false}
              value={newLand.image}
              onChange={(value) => setNewLand({ ...newLand, image: value })}
            />

            <TextInput
              label="Seller name"
              value={newLand.seller}
              onChange={(value) => setNewLand({ ...newLand, seller: value })}
            />

            <TextInput
              label="Comments"
              value={newLand.comments}
              onChange={(value) => setNewLand({ ...newLand, comments: value })}
            />

            <SelectInput
              value={newLand.type}
              onChange={(value) => setNewLand({ ...newLand, type: value })}
              options={["Residential", "Commercial", "Farming"]}
            />

            <SelectInput
              value={newLand.sellerType}
              onChange={(value) =>
                setNewLand({ ...newLand, sellerType: value })
              }
              options={["Land Owner", "Broker/Agent", "Real Estate Agent"]}
            />

            <SelectInput
              value={newLand.titleStatus}
              onChange={(value) =>
                setNewLand({ ...newLand, titleStatus: value })
              }
              options={[
                "Pending Verification",
                "Verified Title Deed",
                "Rejected Documents",
              ]}
            />

            <SelectInput
              value={newLand.status}
              onChange={(value) => setNewLand({ ...newLand, status: value })}
              options={["Available", "Reserved", "Sold"]}
            />

            <CheckBox
              label="Featured Listing"
              checked={newLand.featured}
              onChange={(checked) =>
                setNewLand({ ...newLand, featured: checked })
              }
            />

            <CheckBox
              label="Access road"
              checked={newLand.road}
              onChange={(checked) => setNewLand({ ...newLand, road: checked })}
            />

            <CheckBox
              label="Electricity"
              checked={newLand.electricity}
              onChange={(checked) =>
                setNewLand({ ...newLand, electricity: checked })
              }
            />

            <CheckBox
              label="Water nearby"
              checked={newLand.water}
              onChange={(checked) => setNewLand({ ...newLand, water: checked })}
            />
          </div>

          <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-blue-700">
            Publish Listing
          </button>
        </form>
      )}

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {filteredLands.map((land) => (
          <div
            key={land.id}
            className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition"
          >
            <div className="relative">
              <img
                src={land.image}
                alt={land.title}
                className="w-full h-56 object-cover"
              />

              <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                {land.featured && (
                  <span className="bg-yellow-400 text-black px-3 py-2 rounded-full text-xs font-bold">
                    ⭐ Featured
                  </span>
                )}

                <span
                  className={`px-3 py-2 rounded-full text-xs font-bold ${
                    land.status === "Available"
                      ? "bg-green-100 text-green-700"
                      : land.status === "Reserved"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {land.status}
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex justify-between gap-3">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">
                    {land.title}
                  </h3>

                  <p className="text-gray-500 mt-1">
                    {land.district} • {land.size} sqm
                  </p>
                </div>

                <span
                  className={`h-fit px-3 py-2 rounded-full text-sm font-semibold ${
                    land.sellerVerified
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {land.sellerVerified ? "Verified" : "Unverified"}
                </span>
              </div>

              <h4 className="text-2xl font-bold text-blue-600 mt-4">
                {land.price.toLocaleString()} Frw
              </h4>

              <div className="mt-5 space-y-2 text-slate-700">
                <p>{land.road ? "✔" : "✖"} road access</p>
                <p>{land.electricity ? "✔" : "✖"} electricity</p>
                <p>{land.water ? "✔" : "✖"} water nearby</p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <button
                  onClick={() => setSelectedLand(land)}
                  className="bg-blue-600 text-white py-3 rounded-2xl font-semibold"
                >
                  View Details
                </button>

                <button
                  onClick={() => setBookingLand(land)}
                  className="bg-slate-100 text-slate-800 py-3 rounded-2xl font-semibold"
                >
                  Book Visit
                </button>
              </div>

              <button
                onClick={() => setReserveLand(land)}
                className="w-full mt-3 bg-green-600 text-white py-3 rounded-2xl font-semibold"
              >
                Reserve This Land
              </button>

              <div className="grid grid-cols-3 gap-3 mt-3">
                <button
                  onClick={() => setEditingLand(land)}
                  className="bg-slate-100 py-3 rounded-2xl font-semibold"
                >
                  ✏ Edit
                </button>

                <button
                  onClick={() => deleteLand(land.id)}
                  className="bg-red-100 text-red-700 py-3 rounded-2xl font-semibold"
                >
                  🗑 Delete
                </button>

                <button
                  onClick={() => toggleFavorite(land.id)}
                  className={`py-3 rounded-2xl font-semibold ${
                    favorites.includes(land.id)
                      ? "bg-pink-100 text-pink-700"
                      : "bg-slate-100"
                  }`}
                >
                  {favorites.includes(land.id) ? "❤ Saved" : "🤍 Save"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedLand && (
        <Modal onClose={() => setSelectedLand(null)}>
          <div className="space-y-8">
            <div className="flex flex-col lg:flex-row lg:justify-between gap-6">
              <div>
                <h2 className="text-4xl font-bold text-slate-800">
                  {selectedLand.title}
                </h2>

                <p className="text-gray-500 mt-2 text-lg">
                  {selectedLand.province}, {selectedLand.district},{" "}
                  {selectedLand.sector}
                </p>
              </div>

              <div className="bg-blue-600 text-white px-6 py-4 rounded-2xl">
                <p className="text-sm opacity-80">Land Price</p>
                <h3 className="text-3xl font-bold">
                  {selectedLand.price.toLocaleString()} Frw
                </h3>
              </div>
            </div>

            <img
              src={selectedLand.image}
              className="w-full h-[400px] object-cover rounded-3xl"
            />

            <div className="grid md:grid-cols-4 gap-5">
              <FeatureCard
                title="Land Size"
                value={`${selectedLand.size} sqm`}
              />
              <FeatureCard title="Type" value={selectedLand.type} />
              <FeatureCard
                title="Title Status"
                value={selectedLand.titleStatus}
              />
              <FeatureCard title="GPS" value={selectedLand.gps} />
            </div>

            <div className="bg-slate-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-5">Land Features</h3>

              <div className="grid md:grid-cols-3 gap-5">
                <Utility available={selectedLand.road} label="Road Access" />
                <Utility
                  available={selectedLand.electricity}
                  label="Electricity"
                />
                <Utility available={selectedLand.water} label="Water Nearby" />
              </div>
            </div>

            <div className="bg-white border rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-5">Seller Profile</h3>

              <p className="font-bold text-xl">{selectedLand.seller}</p>
              <p className="text-gray-500">{selectedLand.sellerType}</p>

              <span
                className={`inline-block mt-4 px-4 py-2 rounded-full font-semibold ${
                  selectedLand.sellerVerified
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {selectedLand.sellerVerified
                  ? "✔ Verified Seller"
                  : "Pending Verification"}
              </span>

              <p className="mt-5 text-gray-600">{selectedLand.comments}</p>
            </div>

            <iframe
              title="map"
              src="https://maps.google.com/maps?q=kigali&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-[350px] rounded-3xl border-0"
              loading="lazy"
            ></iframe>

            <div className="grid md:grid-cols-3 gap-5">
              <button
                onClick={() => setBookingLand(selectedLand)}
                className="bg-blue-600 text-white py-5 rounded-2xl text-lg font-semibold"
              >
                📅 Book Site Visit
              </button>

              <a
                href={`https://wa.me/250788000111?text=Hello%20I%20am%20interested%20in%20${encodeURIComponent(
                  selectedLand.title
                )}`}
                target="_blank"
                rel="noreferrer"
                className="bg-green-600 text-white py-5 rounded-2xl text-lg font-semibold text-center"
              >
                💬 WhatsApp Seller
              </a>

              <button
                onClick={() => {
                  setInquiryLand(selectedLand);
                  setShowInquiry(true);
                }}
                className="bg-slate-900 text-white py-5 rounded-2xl text-lg font-semibold"
              >
                ✉ Send Inquiry
              </button>
            </div>
          </div>
        </Modal>
      )}

      {bookingLand && (
        <Modal onClose={() => setBookingLand(null)}>
          <h2 className="text-3xl font-bold">Book Site Visit</h2>
          <p className="text-gray-500 mt-2">{bookingLand.title}</p>

          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <input
              type="date"
              className="bg-slate-50 border rounded-2xl px-5 py-4"
            />
            <input
              type="time"
              className="bg-slate-50 border rounded-2xl px-5 py-4"
            />
            <input
              placeholder="Phone number"
              className="md:col-span-2 bg-slate-50 border rounded-2xl px-5 py-4"
            />
          </div>

          <button
            onClick={() => setBookingLand(null)}
            className="mt-6 bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold"
          >
            Confirm Booking
          </button>
        </Modal>
      )}

      {reserveLand && (
        <Modal onClose={() => setReserveLand(null)}>
          <h2 className="text-3xl font-bold">Reserve This Land</h2>
          <p className="text-gray-500 mt-2">{reserveLand.title}</p>

          <div className="bg-green-50 rounded-3xl p-6 mt-6">
            <p className="text-gray-600">Reservation Deposit</p>

            <h3 className="text-3xl font-bold text-green-700 mt-2">
              500,000 Frw
            </h3>

            <p className="text-sm text-gray-500 mt-3">
              Amafaranga azabikwa na platform kugeza transaction irangiye.
              Platform ikuramo commission transaction irangiye.
            </p>
          </div>

          <button
            onClick={() => setReserveLand(null)}
            className="mt-6 bg-green-600 text-white px-8 py-4 rounded-2xl font-semibold"
          >
            Pay Reservation Deposit
          </button>
        </Modal>
      )}

      {showInquiry && inquiryLand && (
        <Modal
          onClose={() => {
            setShowInquiry(false);
            setInquiryLand(null);
          }}
        >
          <h2 className="text-3xl font-bold">Buyer Inquiry</h2>
          <p className="text-gray-500 mt-2">{inquiryLand.title}</p>

          <div className="grid gap-5 mt-6">
            <input
              placeholder="Your names"
              value={buyerInquiry.names}
              onChange={(e) =>
                setBuyerInquiry({ ...buyerInquiry, names: e.target.value })
              }
              className="bg-slate-50 border rounded-2xl px-5 py-4"
            />

            <input
              placeholder="Phone number"
              value={buyerInquiry.phone}
              onChange={(e) =>
                setBuyerInquiry({ ...buyerInquiry, phone: e.target.value })
              }
              className="bg-slate-50 border rounded-2xl px-5 py-4"
            />

            <textarea
              rows="5"
              placeholder="Message"
              value={buyerInquiry.message}
              onChange={(e) =>
                setBuyerInquiry({ ...buyerInquiry, message: e.target.value })
              }
              className="bg-slate-50 border rounded-2xl px-5 py-4"
            />
          </div>

          <button
            onClick={() => {
              alert("Inquiry sent successfully!");
              setBuyerInquiry({ names: "", phone: "", message: "" });
              setShowInquiry(false);
              setInquiryLand(null);
            }}
            className="mt-6 bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold"
          >
            Send Inquiry
          </button>
        </Modal>
      )}

      {editingLand && (
        <Modal onClose={() => setEditingLand(null)}>
          <h2 className="text-3xl font-bold mb-6">Edit Land Listing</h2>

          <div className="grid md:grid-cols-2 gap-5">
            <input
              value={editingLand.title}
              onChange={(e) =>
                setEditingLand({ ...editingLand, title: e.target.value })
              }
              className="bg-slate-50 border rounded-2xl px-5 py-4"
            />

            <input
              type="number"
              value={editingLand.price}
              onChange={(e) =>
                setEditingLand({ ...editingLand, price: e.target.value })
              }
              className="bg-slate-50 border rounded-2xl px-5 py-4"
            />

            <input
              type="number"
              value={editingLand.size}
              onChange={(e) =>
                setEditingLand({ ...editingLand, size: e.target.value })
              }
              className="bg-slate-50 border rounded-2xl px-5 py-4"
            />

            <SelectInput
              value={editingLand.status}
              onChange={(value) =>
                setEditingLand({ ...editingLand, status: value })
              }
              options={["Available", "Reserved", "Sold"]}
            />

            <SelectInput
              value={String(editingLand.sellerVerified)}
              onChange={(value) =>
                setEditingLand({
                  ...editingLand,
                  sellerVerified: value === "true",
                })
              }
              options={["true", "false"]}
            />

            <SelectInput
              value={String(editingLand.featured)}
              onChange={(value) =>
                setEditingLand({
                  ...editingLand,
                  featured: value === "true",
                })
              }
              options={["true", "false"]}
            />
          </div>

          <button
            onClick={saveEdit}
            className="mt-6 bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold"
          >
            Save Changes
          </button>
        </Modal>
      )}
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">
      <p className="text-gray-500">{title}</p>
      <h2 className="text-3xl font-bold mt-3 text-slate-800">{value}</h2>
    </div>
  );
}

function RoleCard({ title, desc }) {
  return (
    <div className="bg-slate-50 rounded-3xl p-6">
      <h3 className="text-xl font-bold text-slate-800">{title}</h3>
      <p className="text-gray-500 mt-2">{desc}</p>
    </div>
  );
}

function TextInput({ label, value, onChange, type = "text", required = true }) {
  return (
    <input
      required={required}
      type={type}
      placeholder={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}

function SelectInput({ value, onChange, options }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4"
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option === "true" ? "Yes" : option === "false" ? "No" : option}
        </option>
      ))}
    </select>
  );
}

function CheckBox({ label, checked, onChange }) {
  return (
    <label className="flex items-center gap-3 bg-slate-50 rounded-2xl px-5 py-4">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      {label}
    </label>
  );
}

function Modal({ children, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl p-8 max-w-5xl w-full max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="float-right bg-slate-100 px-4 py-2 rounded-xl font-semibold"
        >
          ✖
        </button>

        {children}
      </div>
    </div>
  );
}

function FeatureCard({ title, value }) {
  return (
    <div className="bg-white border rounded-3xl p-6">
      <p className="text-gray-500 text-sm">{title}</p>
      <h3 className="text-xl font-bold text-slate-800 mt-2">{value}</h3>
    </div>
  );
}

function Utility({ available, label }) {
  return (
    <div
      className={`rounded-2xl p-5 font-semibold ${
        available ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
      }`}
    >
      {available ? "✔" : "✖"} {label}
    </div>
  );
}