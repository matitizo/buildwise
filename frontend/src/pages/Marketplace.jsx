import React, { useMemo, useState } from "react";
import {
  Search,
  MapPin,
  Heart,
  Share2,
  Phone,
  MessageCircle,
  ShieldCheck,
  BedDouble,
  Ruler,
  Trash2,
} from "lucide-react";

import { Link } from "react-router-dom";

const defaultProperties = [
  {
    id: "1",
    title: "Ikibanza cyiza i Kanombe",
    province: "Kigali",
    district: "Kicukiro",
    sector: "Kanombe",
    location: "Kigali, Kicukiro, Kanombe",
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
    title: "Inzu yo guturamo i Gacuriro",
    province: "Kigali",
    district: "Gasabo",
    sector: "Kinyinya",
    location: "Kigali, Gasabo, Kinyinya",
    price: 120000000,
    displayPrice: "120,000,000 RWF",
    deal: "Kigurishwa",
    type: "Inzu yo guturamo",
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
    province: "Kigali",
    district: "Kicukiro",
    sector: "Rebero",
    location: "Kigali, Kicukiro, Rebero",
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
  "Inzu yo guturamo",
  "Inzu y’ubucuruzi",
  "Apartment",
  "Umurima",
];

export default function Marketplace() {
  const [properties, setProperties] = useState(defaultProperties);

  const [mode, setMode] = useState("buy");

  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [sector, setSector] = useState("");

  const [type, setType] = useState("Byose");

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const dealMatch =
        mode === "buy"
          ? property.deal === "Kigurishwa"
          : mode === "rent"
          ? property.deal === "Ikodeshwa"
          : true;

      const provinceMatch =
        province === "" ||
        property.province
          .toLowerCase()
          .includes(province.toLowerCase());

      const districtMatch =
        district === "" ||
        property.district
          .toLowerCase()
          .includes(district.toLowerCase());

      const sectorMatch =
        sector === "" ||
        property.sector
          .toLowerCase()
          .includes(sector.toLowerCase());

      const typeMatch =
        type === "Byose" || property.type === type;

      const minMatch =
        minPrice === "" ||
        property.price >= Number(minPrice);

      const maxMatch =
        maxPrice === "" ||
        property.price <= Number(maxPrice);

      return (
        dealMatch &&
        provinceMatch &&
        districtMatch &&
        sectorMatch &&
        typeMatch &&
        minMatch &&
        maxMatch
      );
    });
  }, [
    properties,
    mode,
    province,
    district,
    sector,
    type,
    minPrice,
    maxPrice,
  ]);

  function deleteProperty(id) {
    setProperties(
      properties.filter((item) => item.id !== id)
    );
  }

  return (
    <div className="min-h-screen bg-[#f7f8fb] text-[#050816]">

      {/* TEST */}

      <h1 className="text-5xl font-black text-red-600 px-6 py-6">
        TEST BUY SEARCH
      </h1>

      {/* HEADER */}

      <section className="bg-white border-b border-slate-200 px-6 py-5">

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

          {/* LOGO */}

          <h1 className="text-4xl font-black">
            <span className="text-blue-600">
              property
            </span>

            <span className="text-red-500">
              24
            </span>
          </h1>

          {/* MENUS */}

          <div className="flex flex-wrap items-center gap-8 font-black text-lg">

            <button
              onClick={() => setMode("buy")}
              className={`transition ${
                mode === "buy"
                  ? "text-pink-600"
                  : "text-[#050816]"
              }`}
            >
              Buy
            </button>

            <button
              onClick={() => setMode("rent")}
              className={`transition ${
                mode === "rent"
                  ? "text-pink-600"
                  : "text-[#050816]"
              }`}
            >
              Rent
            </button>

            <button
              onClick={() => setMode("sell")}
              className={`transition ${
                mode === "sell"
                  ? "text-pink-600"
                  : "text-[#050816]"
              }`}
            >
              Sell
            </button>

          </div>

          {/* ACTIONS */}

          <div className="flex items-center gap-4">

            <button className="border border-slate-300 px-6 py-3 rounded-xl font-black hover:bg-slate-50">
              Publish Property
            </button>

            <button className="border border-red-500 text-red-500 px-6 py-3 rounded-xl font-black hover:bg-red-50">
              Sign In
            </button>

          </div>
        </div>
      </section>

      {/* BUY SEARCH */}

      {mode === "buy" && (

        <section className="px-6 pt-8">

          <div className="bg-white rounded-[32px] shadow-xl border border-slate-200 p-6">

            <h2 className="text-3xl font-black mb-6">
              Shakisha Property yo Kugura
            </h2>

            <div className="grid md:grid-cols-6 gap-4">

              {/* PROVINCE */}

              <input
                placeholder="Province"
                value={province}
                onChange={(e) =>
                  setProvince(e.target.value)
                }
                className="bg-slate-50 rounded-2xl px-4 py-4 outline-none font-semibold"
              />

              {/* DISTRICT */}

              <input
                placeholder="Akarere"
                value={district}
                onChange={(e) =>
                  setDistrict(e.target.value)
                }
                className="bg-slate-50 rounded-2xl px-4 py-4 outline-none font-semibold"
              />

              {/* SECTOR */}

              <input
                placeholder="Umurenge"
                value={sector}
                onChange={(e) =>
                  setSector(e.target.value)
                }
                className="bg-slate-50 rounded-2xl px-4 py-4 outline-none font-semibold"
              />

              {/* PROPERTY TYPE */}

              <select
                value={type}
                onChange={(e) =>
                  setType(e.target.value)
                }
                className="bg-slate-50 rounded-2xl px-4 py-4 outline-none font-semibold"
              >
                {propertyTypes.map((item) => (
                  <option key={item}>
                    {item}
                  </option>
                ))}
              </select>

              {/* MIN PRICE */}

              <input
                type="number"
                placeholder="Minimum Price"
                value={minPrice}
                onChange={(e) =>
                  setMinPrice(e.target.value)
                }
                className="bg-slate-50 rounded-2xl px-4 py-4 outline-none font-semibold"
              />

              {/* MAX PRICE */}

              <input
                type="number"
                placeholder="Maximum Price"
                value={maxPrice}
                onChange={(e) =>
                  setMaxPrice(e.target.value)
                }
                className="bg-slate-50 rounded-2xl px-4 py-4 outline-none font-semibold"
              />

            </div>

            <button className="mt-5 bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-2xl font-black inline-flex items-center gap-2">
              <Search size={22} />
              Shakisha
            </button>

          </div>
        </section>
      )}

      {/* RENT */}

      {mode === "rent" && (

        <section className="px-6 pt-8">

          <div className="bg-white rounded-[32px] shadow-xl border border-slate-200 p-6">

            <h2 className="text-3xl font-black mb-4">
              Shakisha Property yo Gukodesha
            </h2>

            <p className="text-slate-500">
              Rent filters zizongerwamo nyuma.
            </p>

          </div>
        </section>
      )}

      {/* PROPERTY LISTINGS */}

      <section className="px-6 py-10">

        <div className="mb-8">

          <h2 className="text-4xl font-black">
            Properties ziri ku isoko
          </h2>

          <p className="text-slate-500 mt-2">
            Habonetse properties{" "}
            {filteredProperties.length}
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {filteredProperties.map((property) => (

            <div
              key={property.id}
              className="bg-white rounded-[32px] overflow-hidden border border-slate-200 hover:shadow-2xl hover:-translate-y-2 transition duration-500"
            >

              {/* IMAGE */}

              <div className="relative h-72 overflow-hidden group">

                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                <span className="absolute top-4 left-4 bg-[#050816] text-white px-4 py-2 rounded-xl font-black text-sm">
                  {property.deal}
                </span>

                <span className="absolute top-4 right-4 bg-pink-600 text-white px-4 py-2 rounded-xl font-black text-sm">
                  {property.type}
                </span>

                {property.verified && (
                  <div className="absolute bottom-4 right-4 bg-emerald-600 text-white px-4 py-2 rounded-xl font-black flex items-center gap-2 text-sm">
                    <ShieldCheck size={16} />
                    Verified
                  </div>
                )}

              </div>

              {/* CONTENT */}

              <div className="p-6">

                <h3 className="text-2xl font-black mb-3">
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