import { useState } from "react";

export default function Lands() {
  const [search, setSearch] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedLand, setSelectedLand] = useState(null);
  const [bookingLand, setBookingLand] = useState(null);
  const [reserveLand, setReserveLand] = useState(null);

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
    },
  ]);

  const [newLand, setNewLand] = useState({
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
  });

  const filteredLands = lands.filter((land) => {
    const keyword = search.toLowerCase();

    return (
      land.title.toLowerCase().includes(keyword) ||
      land.district.toLowerCase().includes(keyword) ||
      land.sector.toLowerCase().includes(keyword) ||
      land.type.toLowerCase().includes(keyword) ||
      String(land.price).includes(keyword) ||
      String(land.size).includes(keyword)
    );
  });

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

    setNewLand({
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
    });

    setShowAddForm(false);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-3xl shadow-sm p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div>
          <h1 className="text-4xl font-bold text-slate-800">
            Land Marketplace 📍
          </h1>

          <p className="text-gray-500 mt-2 text-lg">
            Module y’ibibanza: Land Owners, Brokers, Agents na Buyers.
          </p>
        </div>

        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="bg-blue-600 text-white px-6 py-4 rounded-2xl font-semibold hover:bg-blue-700"
        >
          {showAddForm ? "Close Form" : "➕ Add New Land Listing"}
        </button>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <StatCard title="Verified Sellers" value="18" />
        <StatCard title="Land Listings" value={lands.length} />
        <StatCard
          title="Available Lands"
          value={lands.filter((land) => land.sellerVerified).length}
        />
        <StatCard title="Booking Requests" value="7" />
      </div>

      {/* Search */}
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
      </div>

      {/* Add Form */}
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

            <select
              value={newLand.type}
              onChange={(e) => setNewLand({ ...newLand, type: e.target.value })}
              className="bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4"
            >
              <option>Residential</option>
              <option>Commercial</option>
              <option>Farming</option>
            </select>

            <select
              value={newLand.sellerType}
              onChange={(e) =>
                setNewLand({ ...newLand, sellerType: e.target.value })
              }
              className="bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4"
            >
              <option>Land Owner</option>
              <option>Broker/Agent</option>
              <option>Real Estate Agent</option>
            </select>

            <select
              value={newLand.titleStatus}
              onChange={(e) =>
                setNewLand({ ...newLand, titleStatus: e.target.value })
              }
              className="bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4"
            >
              <option>Pending Verification</option>
              <option>Verified Title Deed</option>
              <option>Rejected Documents</option>
            </select>

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

      {/* Cards */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {filteredLands.map((land) => (
          <div
            key={land.id}
            className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition"
          >
            <img
              src={land.image}
              alt={land.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-6">
              <div className="flex justify-between gap-3">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">
                    {land.title}
                  </h3>

                  <p className="text-gray-500 mt-1">{land.size} sqm</p>
                </div>

                <span
                  className={`h-fit px-3 py-2 rounded-full text-sm font-semibold ${
                    land.sellerVerified
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {land.sellerVerified ? "Verified Seller" : "Unverified"}
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
            </div>
          </div>
        ))}
      </div>

      {/* Details Modal */}
      {selectedLand && (
        <Modal onClose={() => setSelectedLand(null)}>
          <div className="space-y-8">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">
              <div>
                <h2 className="text-4xl font-bold text-slate-800">
                  {selectedLand.title}
                </h2>

                <p className="text-gray-500 mt-3 text-lg">
                  {selectedLand.province}, {selectedLand.district},{" "}
                  {selectedLand.sector}
                </p>
              </div>

              <div className="bg-blue-600 text-white px-6 py-4 rounded-2xl">
                <p className="text-sm opacity-80">Land Price</p>

                <h3 className="text-3xl font-bold mt-2">
                  {selectedLand.price.toLocaleString()} Frw
                </h3>
              </div>
            </div>

            <img
              src={selectedLand.image}
              className="w-full h-[400px] object-cover rounded-3xl"
            />

            <div className="grid md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <img
                  key={item}
                  src={selectedLand.image}
                  className="h-32 w-full object-cover rounded-2xl"
                />
              ))}
            </div>

            <div className="grid md:grid-cols-4 gap-5">
              <FeatureCard title="Land Size" value={`${selectedLand.size} sqm`} />
              <FeatureCard title="Type" value={selectedLand.type} />
              <FeatureCard title="Title Status" value={selectedLand.titleStatus} />
              <FeatureCard title="GPS" value={selectedLand.gps} />
            </div>

            <div className="bg-slate-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Land Features
              </h3>

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
              <div className="flex items-center gap-5">
                <div className="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center text-3xl font-bold">
                  {selectedLand.seller.charAt(0)}
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-800">
                    {selectedLand.seller}
                  </h3>

                  <p className="text-gray-500 mt-1">
                    {selectedLand.sellerType}
                  </p>

                  <span
                    className={`inline-block mt-3 px-4 py-2 rounded-full text-sm font-semibold ${
                      selectedLand.sellerVerified
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {selectedLand.sellerVerified
                      ? "✔ Verified Seller"
                      : "Pending Verification"}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-5">
                📍 Location Map
              </h3>

              <iframe
                title="map"
                src="https://maps.google.com/maps?q=kigali&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-[350px] rounded-3xl border-0"
                loading="lazy"
              ></iframe>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Nearby Places
              </h3>

              <div className="grid md:grid-cols-3 gap-5">
                <NearbyCard icon="🏫" title="Schools" desc="5 mins away" />
                <NearbyCard icon="🛣️" title="Main Road" desc="2 mins away" />
                <NearbyCard icon="🛒" title="Shops" desc="3 mins away" />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              <button
                onClick={() => setBookingLand(selectedLand)}
                className="bg-blue-600 text-white py-5 rounded-2xl text-lg font-semibold hover:bg-blue-700"
              >
                📅 Book Site Visit
              </button>

              <button className="bg-green-600 text-white py-5 rounded-2xl text-lg font-semibold hover:bg-green-700">
                💬 WhatsApp Seller
              </button>

              <button
                onClick={() => setReserveLand(selectedLand)}
                className="bg-slate-900 text-white py-5 rounded-2xl text-lg font-semibold hover:bg-slate-800"
              >
                🔒 Reserve This Land
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* Booking Modal */}
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

      {/* Reserve Modal */}
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
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">
      <p className="text-gray-500">{title}</p>

      <h2 className="text-3xl font-bold mt-3 text-slate-800">
        {value}
      </h2>
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

      <h3 className="text-xl font-bold text-slate-800 mt-2">
        {value}
      </h3>
    </div>
  );
}

function Utility({ available, label }) {
  return (
    <div
      className={`rounded-2xl p-5 font-semibold ${
        available
          ? "bg-green-100 text-green-700"
          : "bg-red-100 text-red-700"
      }`}
    >
      {available ? "✔" : "✖"} {label}
    </div>
  );
}

function NearbyCard({ icon, title, desc }) {
  return (
    <div className="bg-white rounded-2xl p-6">
      <div className="text-4xl">{icon}</div>

      <h4 className="text-xl font-bold mt-4">{title}</h4>

      <p className="text-gray-500 mt-2">{desc}</p>
    </div>
  );
}