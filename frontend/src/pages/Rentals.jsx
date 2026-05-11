import React, { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "buildwise_rentals";

const emptyForm = {
  title: "",
  category: "Maison de Passage",
  rentalType: "Daily",
  province: "",
  district: "",
  sector: "",
  price: "",
  bedrooms: "",
  bathrooms: "",
  roomsAvailable: "",
  ownerName: "",
  ownerPhone: "",
  imageUrl: "",
  galleryText: "",
  videoUrl: "",
  mapLocation: "",
  description: "",
  availableFrom: "",
  availableTo: "",
  wifi: false,
  breakfast: false,
  parking: false,
  pool: false,
  security: false,
  furnished: false,
  kitchen: false,
  tv: false,
};

export default function Rentals() {
  const [rentals, setRentals] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [selectedRental, setSelectedRental] = useState(null);

  const [filters, setFilters] = useState({
    search: "",
    category: "",
    minPrice: "",
    maxPrice: "",
  });

  useEffect(() => {
    setRentals(JSON.parse(localStorage.getItem(STORAGE_KEY)) || []);
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(rentals));
  }, [rentals]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addOrUpdateRental = (e) => {
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
      verifiedHost: true,
    };

    if (editingId) {
      setRentals(
        rentals.map((rental) =>
          rental.id === editingId ? { ...rental, ...payload } : rental
        )
      );
      setEditingId(null);
    } else {
      setRentals([
        {
          id: Date.now(),
          ...payload,
          saved: false,
          bookings: [],
          reviews: [],
          createdAt: new Date().toLocaleString(),
        },
        ...rentals,
      ]);
    }

    setForm(emptyForm);
  };

  const editRental = (rental) => {
    setEditingId(rental.id);
    setForm({
      ...emptyForm,
      ...rental,
      galleryText: rental.gallery?.join(", ") || "",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const deleteRental = (id) => {
    if (window.confirm("Urashaka koko gusiba iyi rental?")) {
      setRentals(rentals.filter((rental) => rental.id !== id));
    }
  };

  const toggleSave = (id) => {
    setRentals(
      rentals.map((rental) =>
        rental.id === id ? { ...rental, saved: !rental.saved } : rental
      )
    );
  };

  const bookRental = (id) => {
    const checkIn = window.prompt("Andika check-in date:");
    const checkOut = window.prompt("Andika check-out date:");
    const phone = window.prompt("Andika telephone yawe:");

    if (!checkIn || !checkOut || !phone) return;

    setRentals(
      rentals.map((rental) =>
        rental.id === id
          ? {
              ...rental,
              bookings: [
                ...(rental.bookings || []),
                { checkIn, checkOut, phone },
              ],
            }
          : rental
      )
    );

    window.alert("Booking yako yakiriwe neza.");
  };

  const addReview = (id) => {
    const review = window.prompt("Andika review:");
    if (!review) return;

    setRentals(
      rentals.map((rental) =>
        rental.id === id
          ? {
              ...rental,
              reviews: [...(rental.reviews || []), review],
            }
          : rental
      )
    );
  };

  const filteredRentals = useMemo(() => {
    return rentals.filter((rental) => {
      const search = filters.search.toLowerCase();
      const price = Number(rental.price);

      const matchesSearch =
        rental.title?.toLowerCase().includes(search) ||
        rental.district?.toLowerCase().includes(search) ||
        rental.sector?.toLowerCase().includes(search) ||
        rental.category?.toLowerCase().includes(search);

      return (
        matchesSearch &&
        (!filters.category || rental.category === filters.category) &&
        (!filters.minPrice || price >= Number(filters.minPrice)) &&
        (!filters.maxPrice || price <= Number(filters.maxPrice))
      );
    });
  }, [rentals, filters]);

  return (
    <div>
      <div className="mb-8">
        <h1 className="page-title">Rentals & Lodging</h1>
        <p className="text-slate-600">
          Maison de passage, lodge, apartments n’inzu zikodeshwa.
        </p>
      </div>

      <form onSubmit={addOrUpdateRental} className="card p-5 mb-8">
        <h2 className="section-title">
          {editingId ? "Hindura rental" : "Ongeramo rental / lodging"}
        </h2>

        <div className="grid md:grid-cols-3 gap-3">
          <input name="title" value={form.title} onChange={handleChange} placeholder="Title" className="input" required />

          <select name="category" value={form.category} onChange={handleChange} className="input">
            <option>Maison de Passage</option>
            <option>Lodge</option>
            <option>Apartment</option>
            <option>Rental House</option>
          </select>

          <select name="rentalType" value={form.rentalType} onChange={handleChange} className="input">
            <option>Daily</option>
            <option>Weekly</option>
            <option>Monthly</option>
            <option>Yearly</option>
          </select>

          <input name="province" value={form.province} onChange={handleChange} placeholder="Province" className="input" />
          <input name="district" value={form.district} onChange={handleChange} placeholder="District" className="input" required />
          <input name="sector" value={form.sector} onChange={handleChange} placeholder="Sector" className="input" />

          <input name="price" value={form.price} onChange={handleChange} placeholder="Price RWF" className="input" required />
          <input name="bedrooms" value={form.bedrooms} onChange={handleChange} placeholder="Bedrooms" className="input" />
          <input name="bathrooms" value={form.bathrooms} onChange={handleChange} placeholder="Bathrooms" className="input" />

          <input name="roomsAvailable" value={form.roomsAvailable} onChange={handleChange} placeholder="Rooms Available" className="input" />
          <input name="ownerName" value={form.ownerName} onChange={handleChange} placeholder="Owner / Host Name" className="input" />
          <input name="ownerPhone" value={form.ownerPhone} onChange={handleChange} placeholder="Owner / Host Phone" className="input" required />

          <input name="imageUrl" value={form.imageUrl} onChange={handleChange} placeholder="Main Image URL" className="input" />
          <input name="galleryText" value={form.galleryText} onChange={handleChange} placeholder="Gallery URLs, separated by comma" className="input" />
          <input name="videoUrl" value={form.videoUrl} onChange={handleChange} placeholder="Video URL" className="input" />

          <input name="mapLocation" value={form.mapLocation} onChange={handleChange} placeholder="Map Location URL" className="input" />
          <input name="availableFrom" value={form.availableFrom} onChange={handleChange} placeholder="Available From" className="input" />
          <input name="availableTo" value={form.availableTo} onChange={handleChange} placeholder="Available To" className="input" />
        </div>

        <div className="grid md:grid-cols-4 gap-3 text-sm mb-4">
          {[
            ["wifi", "WiFi"],
            ["breakfast", "Breakfast"],
            ["parking", "Parking"],
            ["pool", "Swimming Pool"],
            ["security", "Security"],
            ["furnished", "Furnished"],
            ["kitchen", "Kitchen"],
            ["tv", "TV"],
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
          placeholder="Description / rules / services"
          className="input min-h-28"
        />

        <button className="btn-primary">
          {editingId ? "Save Changes" : "Add Rental"}
        </button>
      </form>

      <div className="card p-5 mb-8">
        <h2 className="section-title">Smart Search</h2>

        <div className="grid md:grid-cols-4 gap-3">
          <input placeholder="Search location/category..." className="input" value={filters.search} onChange={(e) => setFilters({ ...filters, search: e.target.value })} />

          <select className="input" value={filters.category} onChange={(e) => setFilters({ ...filters, category: e.target.value })}>
            <option value="">All Categories</option>
            <option>Maison de Passage</option>
            <option>Lodge</option>
            <option>Apartment</option>
            <option>Rental House</option>
          </select>

          <input placeholder="Min Price" className="input" value={filters.minPrice} onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })} />
          <input placeholder="Max Price" className="input" value={filters.maxPrice} onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })} />
        </div>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredRentals.map((rental) => (
          <div key={rental.id} className="card card-hover">
            {rental.imageUrl ? (
              <img src={rental.imageUrl} alt={rental.title} className="w-full h-52 object-cover" />
            ) : (
              <div className="w-full h-52 bg-slate-200 flex items-center justify-center text-slate-500">
                No Image
              </div>
            )}

            <div className="p-5">
              <div className="flex justify-between gap-3">
                <div>
                  <h3 className="text-lg font-bold">{rental.title}</h3>
                  <p className="text-slate-600">{rental.sector} - {rental.district}</p>
                </div>
                <span className="badge-success">Verified Host</span>
              </div>

              <p className="font-bold text-blue-700 mt-3">
                {Number(rental.price).toLocaleString()} RWF / {rental.rentalType}
              </p>

              <p className="text-sm text-slate-500">
                {rental.category} • {rental.bedrooms || 0} bedrooms
              </p>

              <div className="mt-3 space-y-1 text-sm text-slate-600">
                {rental.wifi && <p>✔ WiFi</p>}
                {rental.breakfast && <p>✔ Breakfast</p>}
                {rental.parking && <p>✔ Parking</p>}
                {rental.pool && <p>✔ Swimming Pool</p>}
                {rental.security && <p>✔ Security</p>}
              </div>

              <div className="grid grid-cols-2 gap-2 mt-4">
                <button onClick={() => setSelectedRental(rental)} className="btn-secondary">View Details</button>
                <button onClick={() => bookRental(rental.id)} className="btn-secondary">Book Now</button>
                <button onClick={() => toggleSave(rental.id)} className="btn-secondary">{rental.saved ? "Saved" : "Save"}</button>
                <button onClick={() => addReview(rental.id)} className="btn-secondary">Review</button>

                <a
                  href={`https://wa.me/${rental.ownerPhone}?text=Muraho, ndifuza booking kuri: ${rental.title}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-whatsapp text-center"
                >
                  WhatsApp
                </a>

                <button onClick={() => editRental(rental)} className="btn-edit">Edit</button>
                <button onClick={() => deleteRental(rental.id)} className="btn-danger">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedRental && (
        <div className="modal-overlay">
          <div className="modal-content max-w-4xl w-full">
            <h2 className="text-2xl font-bold">{selectedRental.title}</h2>
            <p className="text-slate-600 mb-4">
              {selectedRental.province}, {selectedRental.district}, {selectedRental.sector}
            </p>

            {selectedRental.imageUrl && (
              <img src={selectedRental.imageUrl} alt={selectedRental.title} className="w-full h-72 object-cover rounded-2xl mb-4" />
            )}

            <p className="mb-4">{selectedRental.description}</p>

            <div className="grid md:grid-cols-2 gap-3 text-sm bg-slate-50 p-4 rounded-2xl">
              <p><b>Price:</b> {Number(selectedRental.price).toLocaleString()} RWF / {selectedRental.rentalType}</p>
              <p><b>Category:</b> {selectedRental.category}</p>
              <p><b>Rooms Available:</b> {selectedRental.roomsAvailable}</p>
              <p><b>Bedrooms:</b> {selectedRental.bedrooms}</p>
              <p><b>Bathrooms:</b> {selectedRental.bathrooms}</p>
              <p><b>Available:</b> {selectedRental.availableFrom} - {selectedRental.availableTo}</p>
              <p><b>Host:</b> {selectedRental.ownerName}</p>
              <p><b>Phone:</b> {selectedRental.ownerPhone}</p>
              <p><b>Bookings:</b> {selectedRental.bookings?.length || 0}</p>
              <p><b>Reviews:</b> {selectedRental.reviews?.length || 0}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-3 mt-5">
              {selectedRental.mapLocation && <a href={selectedRental.mapLocation} target="_blank" rel="noreferrer" className="btn-secondary text-center">Map</a>}
              {selectedRental.videoUrl && <a href={selectedRental.videoUrl} target="_blank" rel="noreferrer" className="btn-secondary text-center">Video</a>}
              <button onClick={() => bookRental(selectedRental.id)} className="btn-secondary">Book Now</button>
              <a href={`https://wa.me/${selectedRental.ownerPhone}`} target="_blank" rel="noreferrer" className="btn-whatsapp text-center">Chat Host</a>
            </div>

            <button onClick={() => setSelectedRental(null)} className="btn-primary mt-6">
              Funga
            </button>
          </div>
        </div>
      )}
    </div>
  );
}