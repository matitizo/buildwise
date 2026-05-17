import React, { useEffect, useMemo, useState } from "react";
import {
  Search,
  MapPin,
  Home,
  Building2,
  Tractor,
  Store,
  Heart,
  Share2,
  Phone,
  MessageCircle,
  ShieldCheck,
  SlidersHorizontal,
  BedDouble,
  Ruler,
  Camera,
  FileCheck,
  PlusCircle,
  CheckCircle,
  Trash2,
} from "lucide-react";

import { Link } from "react-router-dom";

const defaultProperties = [
  {
    id: "1",
    title: "Ikibanza cyiza i Kanombe",
    location: "Kigali, Kicukiro",
    price: 35000000,
    displayPrice: "35,000,000 RWF",
    deal: "Kigurishwa",
    type: "Ikibanza",
    bedrooms: "N/A",
    size: "500 sqm",
    agent: "Kigali Prime Brokers",
    verified: true,
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: "2",
    title: "Inzu igezweho i Gacuriro",
    location: "Kigali, Gasabo",
    price: 120000000,
    displayPrice: "120,000,000 RWF",
    deal: "Kigurishwa",
    type: "Inzu",
    bedrooms: "5",
    size: "420 sqm",
    agent: "Elite Homes Rwanda",
    verified: true,
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: "3",
    title: "Apartment yo gukodesha i Rebero",
    location: "Kigali, Kicukiro",
    price: 450000,
    displayPrice: "450,000 RWF / ukwezi",
    deal: "Ikodeshwa",
    type: "Apartment",
    bedrooms: "3",
    size: "120 sqm",
    agent: "Rebero Rentals",
    verified: true,
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
  },
];

const propertyTypes = [
  "Byose",
  "Ikibanza",
  "Inzu",
  "Apartment",
  "Inyubako y’ubucuruzi",
  "Umurima",
  "Ubukode",
];

const emptyForm = {
  title: "",
  location: "",
  price: "",
  deal: "Kigurishwa",
  type: "Ikibanza",
  bedrooms: "",
  size: "",
  agent: "",
  image: "",
};

export default function Marketplace() {
  const [properties, setProperties] = useState(defaultProperties);

  const [deal, setDeal] = useState("Byose");
  const [type, setType] = useState("Byose");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("Byose");

  const [showSellerForm, setShowSellerForm] = useState(false);

  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    const saved = localStorage.getItem(
      "buildwise_marketplace_properties"
    );

    if (saved) {
      setProperties(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "buildwise_marketplace_properties",
      JSON.stringify(properties)
    );
  }, [properties]);

  function handleDealChange(value) {
    setDeal(value);
    setPriceRange("Byose");
  }

  function handleSubmit(e) {
    e.preventDefault();

    const priceNumber = Number(form.price || 0);

    const newProperty = {
      id: Date.now().toString(),

      title: form.title,

      location: form.location,

      price: priceNumber,

      displayPrice:
        form.deal === "Ikodeshwa"
          ? `${priceNumber.toLocaleString()} RWF / ukwezi`
          : `${priceNumber.toLocaleString()} RWF`,

      deal: form.deal,

      type: form.type,

      bedrooms: form.bedrooms || "N/A",

      size: form.size || "N/A",

      agent: form.agent || "BuildWise Seller",

      verified: true,

      image:
        form.image ||
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    };

    setProperties([newProperty, ...properties]);

    setForm(emptyForm);

    setShowSellerForm(false);
  }

  function deleteProperty(id) {
    setProperties(
      properties.filter((item) => item.id !== id)
    );
  }

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const matchDeal =
        deal === "Byose" || property.deal === deal;

      const matchType =
        type === "Byose" || property.type === type;

      const matchLocation =
        location.trim() === "" ||
        property.location
          .toLowerCase()
          .includes(location.toLowerCase()) ||
        property.title
          .toLowerCase()
          .includes(location.toLowerCase());

      let matchPrice = true;

      if (priceRange === "Munsi ya 50M") {
        matchPrice =
          property.deal === "Kigurishwa" &&
          property.price < 50000000;
      }

      if (priceRange === "50M - 150M") {
        matchPrice =
          property.deal === "Kigurishwa" &&
          property.price >= 50000000 &&
          property.price <= 150000000;
      }

      if (priceRange === "Hejuru ya 150M") {
        matchPrice =
          property.deal === "Kigurishwa" &&
          property.price > 150000000;
      }

      if (priceRange === "Ubukode munsi ya 1M") {
        matchPrice =
          property.deal === "Ikodeshwa" &&
          property.price < 1000000;
      }

      return (
        matchDeal &&
        matchType &&
        matchLocation &&
        matchPrice
      );
    });
  }, [properties, deal, type, location, priceRange]);

  return (
    <div className="min-h-screen bg-[#f7f8fb] text-[#050816]">

      {/* TOP HEADER */}

      <section className="px-6 pt-6">
        <div className="bg-white border border-slate-200 rounded-[24px] px-8 py-5 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-sm">

          {/* LOGO */}

          <div>
            <h1 className="text-4xl font-black">
              <span className="text-[#2563eb]">
                property
              </span>

              <span className="text-red-500">
                24
              </span>
            </h1>
          </div>

          {/* MENU */}

          <div className="flex flex-wrap items-center gap-8 font-black text-lg text-[#050816]">

            <button className="hover:text-pink-600 transition">
              Buy
            </button>

            <button className="hover:text-pink-600 transition">
              Rent
            </button>

            <button className="hover:text-pink-600 transition">
              Sell
            </button>

          </div>

          {/* ACTIONS */}

          <div className="flex items-center gap-4">

            <button className="border border-slate-300 px-6 py-3 rounded-2xl font-black hover:bg-slate-100 transition">
              Publish Property
            </button>

            <button className="border border-red-500 text-red-500 px-6 py-3 rounded-2xl font-black hover:bg-red-50 transition">
              Sign In
            </button>

          </div>
        </div>
      </section>

      {/* SEARCH SECTION */}

      <section className="px-6 pt-6 relative z-10">
        <div className="bg-white rounded-[32px] shadow-xl border border-slate-200 p-5">

          <div className="flex flex-wrap gap-3 mb-5">
            {["Byose", "Kigurishwa", "Ikodeshwa"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => handleDealChange(item)}
                  className={`px-6 py-3 rounded-2xl font-black transition ${
                    deal === item
                      ? "bg-pink-600 text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-pink-50"
                  }`}
                >
                  {item}
                </button>
              )
            )}
          </div>

          <div className="grid md:grid-cols-5 gap-4">

            <div className="md:col-span-2 bg-slate-50 rounded-2xl px-4 py-4 flex items-center gap-3">
              <MapPin className="text-pink-600" />

              <input
                value={location}
                onChange={(e) =>
                  setLocation(e.target.value)
                }
                placeholder="Akarere / Umujyi / Location"
                className="bg-transparent outline-none w-full font-semibold"
              />
            </div>

            <select
              value={type}
              onChange={(e) =>
                setType(e.target.value)
              }
              className="bg-slate-50 rounded-2xl px-4 py-4 outline-none font-semibold"
            >
              {propertyTypes.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>

            <select
              value={priceRange}
              onChange={(e) =>
                setPriceRange(e.target.value)
              }
              className="bg-slate-50 rounded-2xl px-4 py-4 outline-none font-semibold"
            >
              <option>Byose</option>
              <option>Munsi ya 50M</option>
              <option>50M - 150M</option>
              <option>Hejuru ya 150M</option>
              <option>Ubukode munsi ya 1M</option>
            </select>

            <button className="bg-pink-600 hover:bg-pink-700 text-white rounded-2xl font-black flex items-center justify-center gap-2 py-4">
              <Search size={22} />
              Shakisha
            </button>

          </div>
        </div>
      </section>

      {/* PROPERTY LISTINGS */}

      <section className="px-6 py-10">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">

          <div>
            <h2 className="text-4xl font-black">
              Properties ziri ku isoko
            </h2>

            <p className="text-slate-500 mt-2">
              Habonetse properties{" "}
              {filteredProperties.length}
            </p>
          </div>

          <button
            onClick={() =>
              setShowSellerForm(!showSellerForm)
            }
            className="bg-pink-600 text-white px-6 py-4 rounded-2xl font-black flex items-center gap-2"
          >
            <PlusCircle size={20} />
            Shyiraho Property
          </button>
        </div>

        {/* ADD FORM */}

        {showSellerForm && (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-[32px] border border-slate-200 p-8 mb-10 shadow-sm"
          >
            <h3 className="text-3xl font-black mb-6">
              Add Property Listing
            </h3>

            <div className="grid md:grid-cols-3 gap-4">

              <input
                required
                placeholder="Title"
                value={form.title}
                onChange={(e) =>
                  setForm({
                    ...form,
                    title: e.target.value,
                  })
                }
                className="bg-slate-50 rounded-2xl px-4 py-4 outline-none"
              />

              <input
                required
                placeholder="Location"
                value={form.location}
                onChange={(e) =>
                  setForm({
                    ...form,
                    location: e.target.value,
                  })
                }
                className="bg-slate-50 rounded-2xl px-4 py-4 outline-none"
              />

              <input
                required
                type="number"
                placeholder="Igiciro"
                value={form.price}
                onChange={(e) =>
                  setForm({
                    ...form,
                    price: e.target.value,
                  })
                }
                className="bg-slate-50 rounded-2xl px-4 py-4 outline-none"
              />

              <select
                value={form.deal}
                onChange={(e) =>
                  setForm({
                    ...form,
                    deal: e.target.value,
                  })
                }
                className="bg-slate-50 rounded-2xl px-4 py-4 outline-none"
              >
                <option>Kigurishwa</option>
                <option>Ikodeshwa</option>
              </select>

              <select
                value={form.type}
                onChange={(e) =>
                  setForm({
                    ...form,
                    type: e.target.value,
                  })
                }
                className="bg-slate-50 rounded-2xl px-4 py-4 outline-none"
              >
                {propertyTypes
                  .filter((item) => item !== "Byose")
                  .map((item) => (
                    <option key={item}>{item}</option>
                  ))}
              </select>

              <input
                placeholder="Ibyumba"
                value={form.bedrooms}
                onChange={(e) =>
                  setForm({
                    ...form,
                    bedrooms: e.target.value,
                  })
                }
                className="bg-slate-50 rounded-2xl px-4 py-4 outline-none"
              />

              <input
                placeholder="Ingano"
                value={form.size}
                onChange={(e) =>
                  setForm({
                    ...form,
                    size: e.target.value,
                  })
                }
                className="bg-slate-50 rounded-2xl px-4 py-4 outline-none"
              />

              <input
                placeholder="Seller / Agent"
                value={form.agent}
                onChange={(e) =>
                  setForm({
                    ...form,
                    agent: e.target.value,
                  })
                }
                className="bg-slate-50 rounded-2xl px-4 py-4 outline-none"
              />

              <input
                placeholder="Image URL"
                value={form.image}
                onChange={(e) =>
                  setForm({
                    ...form,
                    image: e.target.value,
                  })
                }
                className="bg-slate-50 rounded-2xl px-4 py-4 outline-none"
              />

            </div>

            <button className="mt-6 bg-[#050816] text-white px-8 py-4 rounded-2xl font-black">
              Publish Listing
            </button>
          </form>
        )}

        {/* PROPERTY CARDS */}

        <div className="grid lg:grid-cols-3 gap-8">

          {filteredProperties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-[32px] border border-slate-200 overflow-hidden hover:shadow-2xl transition duration-300"
            >

              <div className="relative h-72 overflow-hidden">

                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />

                <span className="absolute top-4 left-4 bg-[#050816] text-white px-4 py-2 rounded-xl font-black text-sm">
                  {property.deal}
                </span>

                <span className="absolute top-4 right-4 bg-pink-600 text-white px-4 py-2 rounded-xl font-black text-sm">
                  {property.type}
                </span>

                {property.verified && (
                  <div className="absolute bottom-4 left-4 bg-emerald-600 text-white px-4 py-2 rounded-xl font-black flex items-center gap-2 text-sm">
                    <ShieldCheck size={16} />
                    Verified
                  </div>
                )}

              </div>

              <div className="p-6">

                <h3 className="text-2xl font-black leading-tight mb-3">
                  {property.title}
                </h3>

                <p className="text-slate-500 flex items-center gap-2 mb-4">
                  <MapPin size={18} />
                  {property.location}
                </p>

                <h4 className="text-emerald-600 text-3xl font-black mb-5">
                  {property.displayPrice}
                </h4>

                <div className="grid grid-cols-2 gap-3 mb-5">

                  <div className="bg-slate-50 rounded-2xl p-3 flex items-center gap-2">
                    <BedDouble
                      size={18}
                      className="text-pink-600"
                    />

                    <span className="font-bold">
                      {property.bedrooms}
                    </span>
                  </div>

                  <div className="bg-slate-50 rounded-2xl p-3 flex items-center gap-2">
                    <Ruler
                      size={18}
                      className="text-pink-600"
                    />

                    <span className="font-bold">
                      {property.size}
                    </span>
                  </div>

                </div>

                <div className="border-t border-slate-100 pt-5 flex items-center justify-between">

                  <div>
                    <p className="text-sm text-slate-500">
                      Seller / Agent
                    </p>

                    <p className="font-black">
                      {property.agent}
                    </p>
                  </div>

                  <div className="flex gap-2">

                    <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                      <Heart size={18} />
                    </button>

                    <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                      <Share2 size={18} />
                    </button>

                    <button
                      onClick={() =>
                        deleteProperty(property.id)
                      }
                      className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center"
                    >
                      <Trash2 size={18} />
                    </button>

                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mt-5">

                  <Link
                    to={`/property/${property.id}`}
                    className="bg-[#050816] text-white rounded-2xl py-3 font-black text-center"
                  >
                    Details
                  </Link>

                  <button className="bg-emerald-600 text-white rounded-2xl py-3 flex items-center justify-center">
                    <Phone size={18} />
                  </button>

                  <button className="bg-pink-600 text-white rounded-2xl py-3 flex items-center justify-center">
                    <MessageCircle size={18} />
                  </button>

                </div>

              </div>
            </div>
          ))}

        </div>
      </section>
    </div>
  );
}