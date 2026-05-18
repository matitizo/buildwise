import React, { useEffect, useMemo, useState } from "react";
import {
  Search,
  MapPin,
  BedDouble,
  Bath,
  Heart,
  Share2,
  Phone,
  ShieldCheck,
  Upload,
  Trash2,
  RefreshCcw,
  Star,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const rwandaLocations = {
  Kigali: ["Gasabo", "Kicukiro", "Nyarugenge"],
  Northern: ["Musanze", "Burera", "Gakenke", "Gicumbi", "Rulindo"],
  Southern: [
    "Huye",
    "Muhanga",
    "Nyanza",
    "Gisagara",
    "Nyamagabe",
    "Ruhango",
    "Kamonyi",
    "Nyaruguru",
  ],
  Eastern: [
    "Kayonza",
    "Kirehe",
    "Ngoma",
    "Bugesera",
    "Nyagatare",
    "Rwamagana",
    "Gatsibo",
  ],
  Western: ["Rubavu", "Rusizi", "Karongi", "Nyamasheke", "Ngororero", "Rutsiro"],
};

const saleTypes = ["Ikibanza", "Farm", "Inzu yo kubamo", "Inzu y’ubucuruzi"];

const rentTypes = [
  "Farm",
  "Inzu yo kubamo",
  "Inzu y’ubucuruzi",
  "Apartment",
  "Lodging Room",
  "Hotel Room",
  "Maison de Passage",
];

const initialProperties = [
  {
    id: "1",
    propertyFor: "Sale",
    type: "Inzu yo kubamo",
    owner: "Kigali Prime Brokers",
    userType: "Agent",
    province: "Kigali",
    district: "Gasabo",
    price: 120000000,
    bedrooms: "5",
    bathrooms: "4",
    size: "420 sqm",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    video: "",
    description: "Inzu nziza yo guturamo iri ahantu heza i Gasabo.",
    favourite: false,
    featured: true,
  },
  {
    id: "2",
    propertyFor: "Sale",
    type: "Ikibanza",
    owner: "Elite Land Brokers",
    userType: "Broker",
    province: "Kigali",
    district: "Kicukiro",
    price: 35000000,
    bedrooms: "N/A",
    bathrooms: "N/A",
    size: "500 sqm",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    video: "",
    description: "Ikibanza kiri hafi y’umuhanda, gifite documents ziteguye.",
    favourite: false,
    featured: true,
  },
  {
    id: "3",
    propertyFor: "Rent",
    type: "Apartment",
    owner: "Rebero Rentals",
    userType: "Owner",
    province: "Kigali",
    district: "Kicukiro",
    price: 450000,
    bedrooms: "3",
    bathrooms: "2",
    size: "120 sqm",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    video: "",
    description: "Apartment yo gukodesha ifite ibyumba 3 i Rebero.",
    favourite: false,
    featured: false,
  },
];

const emptyForm = {
  propertyFor: "Sale",
  type: "Ikibanza",
  owner: "",
  userType: "",
  province: "",
  district: "",
  size: "",
  price: "",
  bedrooms: "",
  bathrooms: "",
  image: "",
  video: "",
  description: "",
};

const emptySearch = {
  province: "",
  district: "",
  type: "Byose",
  minPrice: "",
  maxPrice: "",
};

export default function Marketplace() {
  const [mode, setMode] = useState("buy");

  const [properties, setProperties] = useState(() => {
    const saved = localStorage.getItem("buildwise_marketplace_properties");
    return saved ? JSON.parse(saved) : initialProperties;
  });

  const [form, setForm] = useState(emptyForm);
  const [search, setSearch] = useState(emptySearch);

  useEffect(() => {
    localStorage.setItem(
      "buildwise_marketplace_properties",
      JSON.stringify(properties)
    );
  }, [properties]);

  const currentTypes = mode === "rent" ? rentTypes : saleTypes;
  const publishTypes = form.propertyFor === "Rent" ? rentTypes : saleTypes;

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const matchFor =
        mode === "buy"
          ? property.propertyFor === "Sale"
          : mode === "rent"
          ? property.propertyFor === "Rent"
          : true;

      const matchProvince =
        !search.province || property.province === search.province;

      const matchDistrict =
        !search.district || property.district === search.district;

      const matchType = search.type === "Byose" || property.type === search.type;

      const matchMin =
        !search.minPrice || Number(property.price) >= Number(search.minPrice);

      const matchMax =
        !search.maxPrice || Number(property.price) <= Number(search.maxPrice);

      return (
        matchFor &&
        matchProvince &&
        matchDistrict &&
        matchType &&
        matchMin &&
        matchMax
      );
    });
  }, [properties, mode, search]);

  function formatPrice(property) {
    const price = Number(property.price || 0).toLocaleString();

    if (property.propertyFor === "Rent") {
      if (
        ["Lodging Room", "Hotel Room", "Maison de Passage"].includes(
          property.type
        )
      ) {
        return `${price} RWF / umunsi`;
      }

      return `${price} RWF / ukwezi`;
    }

    return `${price} RWF`;
  }

  function handlePublish(e) {
    e.preventDefault();

    const newProperty = {
      id: Date.now().toString(),
      ...form,
      price: Number(form.price),
      bedrooms: form.bedrooms || "N/A",
      bathrooms: form.bathrooms || "N/A",
      size: form.size || "N/A",
      image:
        form.image ||
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      favourite: false,
      featured: false,
    };

    setProperties([newProperty, ...properties]);
    setForm(emptyForm);
    setMode("buy");
  }

  function handlePropertyForChange(value) {
    setForm({
      ...emptyForm,
      propertyFor: value,
      type: value === "Rent" ? "Farm" : "Ikibanza",
    });
  }

  function toggleFavourite(id) {
    setProperties(
      properties.map((property) =>
        property.id === id
          ? { ...property, favourite: !property.favourite }
          : property
      )
    );
  }

  function deleteProperty(id) {
    setProperties(properties.filter((property) => property.id !== id));
  }

  function resetFilters() {
    setSearch(emptySearch);
  }

  return (
    <div className="min-h-screen bg-[#f7f8fb] text-[#050816]">
      <section className="bg-white border-b border-slate-200 px-6 py-3">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-7 text-base font-black">
            <button
              onClick={() => setMode("buy")}
              className={mode === "buy" ? "text-pink-600" : ""}
            >
              Buy
            </button>

            <button
              onClick={() => setMode("rent")}
              className={mode === "rent" ? "text-pink-600" : ""}
            >
              Rent
            </button>

            <button
              onClick={() => setMode("publish")}
              className={mode === "publish" ? "text-pink-600" : ""}
            >
              Sell
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setMode("publish")}
              className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-2.5 rounded-xl font-black flex items-center gap-2"
            >
              <Upload size={18} />
              Publish Property
            </button>

            <button className="border border-pink-600 text-pink-600 px-5 py-2.5 rounded-xl font-black">
              Sign In
            </button>
          </div>
        </div>
      </section>

      {(mode === "buy" || mode === "rent") && (
        <section className="px-6 pt-6">
          <div className="bg-white rounded-[26px] shadow-lg border border-slate-200 p-5">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-5">
              <h2 className="text-2xl font-black">
                {mode === "buy"
                  ? "Shakisha Property yo Kugura"
                  : "Shakisha Property yo Gukodesha"}
              </h2>

              <button
                onClick={resetFilters}
                className="border border-slate-300 px-4 py-2 rounded-xl font-black flex items-center gap-2 hover:bg-slate-50"
              >
                <RefreshCcw size={17} />
                Reset Filters
              </button>
            </div>

            <div className="grid md:grid-cols-5 gap-4">
              <select
                value={search.province}
                onChange={(e) =>
                  setSearch({
                    ...search,
                    province: e.target.value,
                    district: "",
                  })
                }
                className="bg-slate-50 rounded-xl px-4 py-3 outline-none"
              >
                <option value="">Hitamo Province</option>
                {Object.keys(rwandaLocations).map((province) => (
                  <option key={province} value={province}>
                    {province}
                  </option>
                ))}
              </select>

              <select
                value={search.district}
                disabled={!search.province}
                onChange={(e) =>
                  setSearch({ ...search, district: e.target.value })
                }
                className="bg-slate-50 rounded-xl px-4 py-3 outline-none disabled:opacity-50"
              >
                <option value="">Hitamo District</option>
                {search.province &&
                  rwandaLocations[search.province].map((district) => (
                    <option key={district} value={district}>
                      {district}
                    </option>
                  ))}
              </select>

              <select
                value={search.type}
                onChange={(e) => setSearch({ ...search, type: e.target.value })}
                className="bg-slate-50 rounded-xl px-4 py-3 outline-none"
              >
                <option>Byose</option>
                {currentTypes.map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>

              <input
                type="number"
                placeholder="Minimum Price"
                value={search.minPrice}
                onChange={(e) =>
                  setSearch({ ...search, minPrice: e.target.value })
                }
                className="bg-slate-50 rounded-xl px-4 py-3 outline-none"
              />

              <input
                type="number"
                placeholder="Maximum Price"
                value={search.maxPrice}
                onChange={(e) =>
                  setSearch({ ...search, maxPrice: e.target.value })
                }
                className="bg-slate-50 rounded-xl px-4 py-3 outline-none"
              />
            </div>

            <button className="mt-4 bg-[#050816] hover:bg-black text-white px-6 py-3 rounded-xl font-black inline-flex items-center gap-2">
              <Search size={19} />
              Shakisha
            </button>
          </div>
        </section>
      )}

      {mode === "publish" && (
        <section className="px-6 pt-6 pb-12">
          <div className="bg-white rounded-[26px] shadow-lg border border-slate-200 p-6">
            <div className="flex items-center gap-3 mb-6">
              <Upload className="text-pink-600" size={26} />
              <h2 className="text-3xl font-black">Publish Property</h2>
            </div>

            <form onSubmit={handlePublish}>
              <div className="grid md:grid-cols-2 gap-4">
                <select
                  value={form.propertyFor}
                  onChange={(e) => handlePropertyForChange(e.target.value)}
                  className="bg-slate-50 rounded-xl px-4 py-3 outline-none"
                >
                  <option value="Sale">Property For Sale</option>
                  <option value="Rent">Property For Rent</option>
                </select>

                <select
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className="bg-slate-50 rounded-xl px-4 py-3 outline-none"
                >
                  {publishTypes.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>

                <input
                  required
                  placeholder="Nyirayo / Supplier / Agent"
                  value={form.owner}
                  onChange={(e) => setForm({ ...form, owner: e.target.value })}
                  className="bg-slate-50 rounded-xl px-4 py-3 outline-none"
                />

                <select
                  required
                  value={form.userType}
                  onChange={(e) =>
                    setForm({ ...form, userType: e.target.value })
                  }
                  className="bg-slate-50 rounded-xl px-4 py-3 outline-none"
                >
                  <option value="">User Type</option>
                  <option>Owner</option>
                  <option>Broker</option>
                  <option>Agent</option>
                </select>

                <select
                  value={form.province}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      province: e.target.value,
                      district: "",
                    })
                  }
                  className="bg-slate-50 rounded-xl px-4 py-3 outline-none"
                  required
                >
                  <option value="">Hitamo Province</option>
                  {Object.keys(rwandaLocations).map((province) => (
                    <option key={province} value={province}>
                      {province}
                    </option>
                  ))}
                </select>

                <select
                  value={form.district}
                  disabled={!form.province}
                  onChange={(e) =>
                    setForm({ ...form, district: e.target.value })
                  }
                  className="bg-slate-50 rounded-xl px-4 py-3 outline-none disabled:opacity-50"
                  required
                >
                  <option value="">Hitamo District</option>
                  {form.province &&
                    rwandaLocations[form.province].map((district) => (
                      <option key={district} value={district}>
                        {district}
                      </option>
                    ))}
                </select>

                <input
                  placeholder="Size"
                  value={form.size}
                  onChange={(e) => setForm({ ...form, size: e.target.value })}
                  className="bg-slate-50 rounded-xl px-4 py-3 outline-none"
                />

                <input
                  type="number"
                  placeholder={
                    form.propertyFor === "Rent" &&
                    ["Lodging Room", "Hotel Room", "Maison de Passage"].includes(
                      form.type
                    )
                      ? "Price per day"
                      : form.propertyFor === "Rent"
                      ? "Price per month"
                      : "Price"
                  }
                  value={form.price}
                  onChange={(e) => setForm({ ...form, price: e.target.value })}
                  className="bg-slate-50 rounded-xl px-4 py-3 outline-none"
                  required
                />

                {(form.type === "Inzu yo kubamo" ||
                  form.type === "Apartment" ||
                  form.type === "Hotel Room" ||
                  form.type === "Maison de Passage") && (
                  <>
                    <input
                      placeholder="Bedrooms"
                      value={form.bedrooms}
                      onChange={(e) =>
                        setForm({ ...form, bedrooms: e.target.value })
                      }
                      className="bg-slate-50 rounded-xl px-4 py-3 outline-none"
                    />

                    <input
                      placeholder="Bathrooms"
                      value={form.bathrooms}
                      onChange={(e) =>
                        setForm({ ...form, bathrooms: e.target.value })
                      }
                      className="bg-slate-50 rounded-xl px-4 py-3 outline-none"
                    />
                  </>
                )}

                <div>
                  <input
                    placeholder="Image URL"
                    value={form.image}
                    onChange={(e) =>
                      setForm({ ...form, image: e.target.value })
                    }
                    className="bg-slate-50 rounded-xl px-4 py-3 outline-none w-full"
                  />

                  {form.image && (
                    <img
                      src={form.image}
                      alt="Preview"
                      className="mt-3 w-full h-40 object-cover rounded-xl border"
                    />
                  )}
                </div>

                <div>
                  <input
                    placeholder="Video URL"
                    value={form.video}
                    onChange={(e) =>
                      setForm({ ...form, video: e.target.value })
                    }
                    className="bg-slate-50 rounded-xl px-4 py-3 outline-none w-full"
                  />

                  {form.video && (
                    <video
                      src={form.video}
                      controls
                      className="mt-3 w-full h-40 object-cover rounded-xl border"
                    />
                  )}
                </div>
              </div>

              <textarea
                required
                placeholder="Description"
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
                className="mt-4 w-full min-h-[140px] bg-slate-50 rounded-xl px-4 py-3 outline-none"
              />

              <button className="mt-5 bg-pink-600 hover:bg-pink-700 text-white px-7 py-3 rounded-xl font-black">
                Publish Now
              </button>
            </form>
          </div>
        </section>
      )}

      {(mode === "buy" || mode === "rent") && (
        <section className="px-6 py-8">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
            <div>
              <h2 className="text-3xl font-black">Property Listings</h2>
              <p className="text-slate-500 mt-1">
                Habonetse properties {filteredProperties.length}
              </p>
            </div>
          </div>

          {filteredProperties.length === 0 ? (
            <div className="bg-white border border-slate-200 rounded-[26px] p-10 text-center">
              <h3 className="text-2xl font-black mb-3">
                Nta property ibonetse
              </h3>
              <p className="text-slate-500 mb-5">
                Gerageza guhindura filters cyangwa usubizeho search.
              </p>
              <button
                onClick={resetFilters}
                className="bg-[#050816] text-white px-6 py-3 rounded-xl font-black"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-6">
              {filteredProperties.map((property) => (
                <div
                  key={property.id}
                  className="bg-white rounded-[26px] overflow-hidden border border-slate-200 hover:shadow-2xl hover:-translate-y-1 transition"
                >
                  <div className="relative h-56 overflow-hidden group">
                    <img
                      src={property.image}
                      alt={property.type}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                    <div className="absolute top-3 left-3 bg-[#050816] text-white px-3 py-1.5 rounded-lg font-black text-sm">
                      {property.propertyFor === "Rent"
                        ? "Ikodeshwa"
                        : "Kigurishwa"}
                    </div>

                    <div className="absolute top-3 right-3 bg-pink-600 text-white px-3 py-1.5 rounded-lg font-black text-sm">
                      {property.type}
                    </div>

                    {property.featured && (
                      <div className="absolute bottom-3 left-3 bg-yellow-400 text-[#050816] px-3 py-1.5 rounded-lg font-black text-xs flex items-center gap-1">
                        <Star size={14} fill="currentColor" />
                        Featured
                      </div>
                    )}
                  </div>

                  <div className="p-5">
                    <h3 className="text-xl font-black mb-2">{property.type}</h3>

                    <p className="text-slate-500 flex items-center gap-2 mb-3">
                      <MapPin size={17} />
                      {property.province}, {property.district}
                    </p>

                    <h4 className="text-emerald-600 text-2xl font-black mb-4">
                      {formatPrice(property)}
                    </h4>

                    <p className="text-slate-500 mb-4 line-clamp-2">
                      {property.description}
                    </p>

                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-slate-50 rounded-xl p-3 flex items-center gap-2">
                        <BedDouble size={17} />
                        <span className="font-bold">{property.bedrooms}</span>
                      </div>

                      <div className="bg-slate-50 rounded-xl p-3 flex items-center gap-2">
                        <Bath size={17} />
                        <span className="font-bold">{property.bathrooms}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <p className="font-black">{property.owner}</p>

                      <div className="bg-emerald-600 text-white px-3 py-1.5 rounded-lg font-black flex items-center gap-1 text-xs">
                        <ShieldCheck size={14} />
                        Verified
                      </div>
                    </div>

                    <div className="grid grid-cols-6 gap-2">
                      <Link
                        to={`/property/${property.id}`}
                        className="col-span-2 bg-[#050816] text-white rounded-xl py-2.5 font-black text-center"
                      >
                        Details
                      </Link>

                      <button
                        onClick={() => toggleFavourite(property.id)}
                        className={`rounded-xl flex items-center justify-center ${
                          property.favourite
                            ? "bg-pink-600 text-white"
                            : "bg-slate-100"
                        }`}
                      >
                        <Heart
                          size={17}
                          fill={property.favourite ? "currentColor" : "none"}
                        />
                      </button>

                      <button className="bg-slate-100 rounded-xl flex items-center justify-center">
                        <Share2 size={17} />
                      </button>

                      <a
                        href={`https://wa.me/250788000000?text=Ndifuza%20amakuru%20kuri%20${encodeURIComponent(
                          property.type
                        )}%20iri%20${encodeURIComponent(
                          property.province + ", " + property.district
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-emerald-600 text-white rounded-xl flex items-center justify-center"
                      >
                        <MessageCircle size={17} />
                      </a>

                      <button
                        onClick={() => deleteProperty(property.id)}
                        className="bg-red-50 text-red-500 rounded-xl flex items-center justify-center"
                      >
                        <Trash2 size={17} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      )}
    </div>
  );
}