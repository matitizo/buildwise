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

    setShowAddForm(false);
  };

  return (
    <div className="space-y-8">
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
          ➕ Add New Land Listing
        </button>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {[
          ["Verified Sellers", "18"],
          ["Land Listings", lands.length],
          ["Available Lands", lands.length],
          ["Booking Requests", "7"],
        ].map(([label, value]) => (
          <div key={label} className="bg-white rounded-3xl p-6 shadow-sm">
            <p className="text-gray-500">{label}</p>
            <h2 className="text-3xl font-bold mt-3 text-slate-800">
              {value}
            </h2>
          </div>
        ))}
      </div>

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

      {showAddForm && (
        <form
          onSubmit={addLand}
          className="bg-white rounded-3xl shadow-sm p-8 space-y-6"
        >
          <h2 className="text-2xl font-bold text-slate-800">
            Publish New Land Listing
          </h2>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              ["title", "Izina ry’ikibanza"],
              ["province", "Province"],
              ["district", "District"],
              ["sector", "Sector"],
              ["cell", "Cell"],
              ["village", "Village"],
              ["gps", "GPS location"],
              ["size", "Size sqm"],
              ["price", "Price RWF"],
              ["image", "Image URL"],
              ["seller", "Seller name"],
              ["comments", "Comments"],
            ].map(([field, label]) => (
              <input
                key={field}
                required={field !== "image"}
                placeholder={label}
                value={newLand[field]}
                onChange={(e) =>
                  setNewLand({ ...newLand, [field]: e.target.value })
                }
                className="bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              />
            ))}

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

            <label className="flex items-center gap-3 bg-slate-50 rounded-2xl px-5 py-4">
              <input
                type="checkbox"
                checked={newLand.road}
                onChange={(e) =>
                  setNewLand({ ...newLand, road: e.target.checked })
                }
              />
              Access road
            </label>

            <label className="flex items-center gap-3 bg-slate-50 rounded-2xl px-5 py-4">
              <input
                type="checkbox"
                checked={newLand.electricity}
                onChange={(e) =>
                  setNewLand({ ...newLand, electricity: e.target.checked })
                }
              />
              Electricity
            </label>

            <label className="flex items-center gap-3 bg-slate-50 rounded-2xl px-5 py-4">
              <input
                type="checkbox"
                checked={newLand.water}
                onChange={(e) =>
                  setNewLand({ ...newLand, water: e.target.checked })
                }
              />
              Water nearby
            </label>
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
                  <p className="text-gray-500 mt-1">
                    {land.size} sqm
                  </p>
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

      {selectedLand && (
        <Modal onClose={() => setSelectedLand(null)}>
          <h2 className="text-3xl font-bold">{selectedLand.title}</h2>
          <img
            src={selectedLand.image}
            className="w-full h-72 object-cover rounded-3xl mt-5"
          />
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <Info label="Location" value={`${selectedLand.province}, ${selectedLand.district}, ${selectedLand.sector}`} />
            <Info label="GPS Route" value={selectedLand.gps} />
            <Info label="Title Status" value={selectedLand.titleStatus} />
            <Info label="Seller" value={`${selectedLand.seller} - ${selectedLand.sellerType}`} />
            <Info label="Nearby" value="Schools, road, shops, water point" />
            <Info label="Comments" value={selectedLand.comments} />
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <button
              onClick={() => setBookingLand(selectedLand)}
              className="bg-blue-600 text-white py-4 rounded-2xl font-semibold"
            >
              📅 Book Site Visit
            </button>
            <button className="bg-slate-900 text-white py-4 rounded-2xl font-semibold">
              💬 Chat Seller
            </button>
          </div>
        </Modal>
      )}

      {bookingLand && (
        <Modal onClose={() => setBookingLand(null)}>
          <h2 className="text-3xl font-bold">Book Site Visit</h2>
          <p className="text-gray-500 mt-2">{bookingLand.title}</p>

          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <input type="date" className="bg-slate-50 border rounded-2xl px-5 py-4" />
            <input type="time" className="bg-slate-50 border rounded-2xl px-5 py-4" />
            <input placeholder="Phone number" className="md:col-span-2 bg-slate-50 border rounded-2xl px-5 py-4" />
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

function Modal({ children, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
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

function Info({ label, value }) {
  return (
    <div className="bg-slate-50 rounded-2xl p-5">
      <p className="text-gray-500 text-sm">{label}</p>
      <h4 className="font-bold text-slate-800 mt-1">{value}</h4>
    </div>
  );
}