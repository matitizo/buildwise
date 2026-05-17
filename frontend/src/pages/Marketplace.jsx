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
  PlusCircle,
  Upload,
} from "lucide-react";

import { Link } from "react-router-dom";

const initialProperties = [
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
];

const propertyTypes = [
  "Ikibanza",
  "Inzu yo guturamo",
  "Inzu y’ubucuruzi",
  "Apartment",
  "Umurima",
];

export default function Marketplace() {
  const [properties, setProperties] =
    useState(initialProperties);

  const [mode, setMode] = useState("buy");

  const [showPublish, setShowPublish] =
    useState(false);

  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [sector, setSector] = useState("");

  const [type, setType] = useState("Byose");

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const [form, setForm] = useState({
    title: "",
    province: "",
    district: "",
    sector: "",
    type: "Ikibanza",
    deal: "Kigurishwa",
    price: "",
    bedrooms: "",
    size: "",
    agent: "",
    image: "",
  });

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
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
        type === "Byose" ||
        property.type === type;

      const minMatch =
        minPrice === "" ||
        property.price >= Number(minPrice);

      const maxMatch =
        maxPrice === "" ||
        property.price <= Number(maxPrice);

      return (
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
    province,
    district,
    sector,
    type,
    minPrice,
    maxPrice,
  ]);

  function handlePublish(e) {
    e.preventDefault();

    const newProperty = {
      id: Date.now().toString(),

      title: form.title,

      province: form.province,

      district: form.district,

      sector: form.sector,

      location: `${form.province}, ${form.district}, ${form.sector}`,

      price: Number(form.price),

      displayPrice:
        Number(form.price).toLocaleString() +
        " RWF",

      deal: form.deal,

      type: form.type,

      bedrooms:
        form.bedrooms === ""
          ? "N/A"
          : form.bedrooms,

      size:
        form.size === ""
          ? "N/A"
          : form.size,

      agent: form.agent,

      verified: true,

      image:
        form.image === ""
          ? "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
          : form.image,
    };

    setProperties([newProperty, ...properties]);

    setShowPublish(false);

    setForm({
      title: "",
      province: "",
      district: "",
      sector: "",
      type: "Ikibanza",
      deal: "Kigurishwa",
      price: "",
      bedrooms: "",
      size: "",
      agent: "",
      image: "",
    });
  }

  function deleteProperty(id) {
    setProperties(
      properties.filter(
        (property) => property.id !== id
      )
    );
  }

  return (
    <div className="min-h-screen bg-[#f7f8fb] text-[#050816]">

      {/* HEADER */}

      <section className="bg-white border-b border-slate-200 px-6 py-5">

        <div className="flex flex-wrap items-center justify-between gap-5">

          <div className="flex flex-wrap items-center gap-8 font-black text-lg">

            <button
              onClick={() => setMode("buy")}
              className="hover:text-pink-600"
            >
              Buy
            </button>

            <button
              onClick={() => setMode("rent")}
              className="hover:text-pink-600"
            >
              Rent
            </button>

            <button
              onClick={() => setMode("sell")}
              className="hover:text-pink-600"
            >
              Sell
            </button>

          </div>

          <div className="flex items-center gap-4">

            <button
              onClick={() =>
                setShowPublish(true)
              }
              className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-xl font-black flex items-center gap-2"
            >
              <PlusCircle size={20} />
              Publish Property
            </button>

            <button className="border border-pink-600 text-pink-600 px-6 py-3 rounded-xl font-black hover:bg-pink-50">
              Sign In
            </button>

          </div>

        </div>
      </section>

      {/* SEARCH */}

      <section className="px-6 pt-8">

        <div className="bg-white rounded-[32px] shadow-xl border border-slate-200 p-6">

          <h2 className="text-3xl font-black mb-6">
            Shakisha Property
          </h2>

          <div className="grid md:grid-cols-6 gap-4">

            <input
              placeholder="Province"
              value={province}
              onChange={(e) =>
                setProvince(e.target.value)
              }
              className="bg-slate-50 rounded-2xl px-4 py-4 outline-none"
            />

            <input
              placeholder="Akarere"
              value={district}
              onChange={(e) =>
                setDistrict(e.target.value)
              }
              className="bg-slate-50 rounded-2xl px-4 py-4 outline-none"
            />

            <input
              placeholder="Umurenge"
              value={sector}
              onChange={(e) =>
                setSector(e.target.value)
              }
              className="bg-slate-50 rounded-2xl px-4 py-4 outline-none"
            />

            <select
              value={type}
              onChange={(e) =>
                setType(e.target.value)
              }
              className="bg-slate-50 rounded-2xl px-4 py-4 outline-none"
            >
              <option>Byose</option>

              {propertyTypes.map((item) => (
                <option key={item}>
                  {item}
                </option>
              ))}
            </select>

            <input
              type="number"
              placeholder="Minimum Price"
              value={minPrice}
              onChange={(e) =>
                setMinPrice(e.target.value)
              }
              className="bg-slate-50 rounded-2xl px-4 py-4 outline-none"
            />

            <input
              type="number"
              placeholder="Maximum Price"
              value={maxPrice}
              onChange={(e) =>
                setMaxPrice(e.target.value)
              }
              className="bg-slate-50 rounded-2xl px-4 py-4 outline-none"
            />

          </div>

          <button className="mt-5 bg-[#050816] hover:bg-black text-white px-8 py-4 rounded-2xl font-black inline-flex items-center gap-2">
            <Search size={22} />
            Shakisha
          </button>

        </div>
      </section>

      {/* PUBLISH FORM */}

      {showPublish && (

        <section className="px-6 pt-10">

          <div className="bg-white rounded-[32px] border border-slate-200 shadow-xl p-8">

            <div className="flex items-center gap-3 mb-8">

              <Upload
                size={30}
                className="text-pink-600"
              />

              <h2 className="text-4xl font-black">
                Publish Property
              </h2>

            </div>

            <form
              onSubmit={handlePublish}
              className="grid md:grid-cols-2 gap-5"
            >

              <input
                required
                placeholder="Property Title"
                value={form.title}
                onChange={(e) =>
                  setForm({
                    ...form,
                    title: e.target.value,
                  })
                }
                className="bg-slate-50 rounded-2xl px-5 py-4 outline-none"
              />

              <select
                value={form.type}
                onChange={(e) =>
                  setForm({
                    ...form,
                    type: e.target.value,
                  })
                }
                className="bg-slate-50 rounded-2xl px-5 py-4 outline-none"
              >
                {propertyTypes.map((item) => (
                  <option key={item}>
                    {item}
                  </option>
                ))}
              </select>

              <input
                required
                placeholder="Province"
                value={form.province}
                onChange={(e) =>
                  setForm({
                    ...form,
                    province: e.target.value,
                  })
                }
                className="bg-slate-50 rounded-2xl px-5 py-4 outline-none"
              />

              <input
                required
                placeholder="Akarere"
                value={form.district}
                onChange={(e) =>
                  setForm({
                    ...form,
                    district: e.target.value,
                  })
                }
                className="bg-slate-50 rounded-2xl px-5 py-4 outline-none"
              />

              <input
                required
                placeholder="Umurenge"
                value={form.sector}
                onChange={(e) =>
                  setForm({
                    ...form,
                    sector: e.target.value,
                  })
                }
                className="bg-slate-50 rounded-2xl px-5 py-4 outline-none"
              />

              <input
                required
                type="number"
                placeholder="Price"
                value={form.price}
                onChange={(e) =>
                  setForm({
                    ...form,
                    price: e.target.value,
                  })
                }
                className="bg-slate-50 rounded-2xl px-5 py-4 outline-none"
              />

              <input
                placeholder="Bedrooms"
                value={form.bedrooms}
                onChange={(e) =>
                  setForm({
                    ...form,
                    bedrooms: e.target.value,
                  })
                }
                className="bg-slate-50 rounded-2xl px-5 py-4 outline-none"
              />

              <input
                placeholder="Size"
                value={form.size}
                onChange={(e) =>
                  setForm({
                    ...form,
                    size: e.target.value,
                  })
                }
                className="bg-slate-50 rounded-2xl px-5 py-4 outline-none"
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
                className="bg-slate-50 rounded-2xl px-5 py-4 outline-none"
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
                className="bg-slate-50 rounded-2xl px-5 py-4 outline-none"
              />

              <button className="bg-pink-600 hover:bg-pink-700 text-white rounded-2xl py-5 font-black text-lg">
                Publish Now
              </button>

            </form>
          </div>
        </section>
      )}

      {/* LISTINGS */}

      <section className="px-6 py-10">

        <div className="mb-8">

          <h2 className="text-4xl font-black">
            Property Listings
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