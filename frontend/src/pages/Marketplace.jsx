import React, { useMemo, useState } from "react";
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
  UserCheck,
  PlusCircle,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const propertyTypes = [
  "All",
  "Land",
  "House",
  "Apartment",
  "Commercial Building",
  "Farm",
  "Rental",
];

const properties = [
  {
    id: "1",
    title: "Prime Land in Kanombe",
    location: "Kigali, Kicukiro",
    price: 35000000,
    displayPrice: "35,000,000 RWF",
    deal: "For Sale",
    type: "Land",
    bedrooms: "N/A",
    size: "500 sqm",
    agent: "Kigali Prime Brokers",
    verified: true,
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "2",
    title: "Modern House in Gacuriro",
    location: "Kigali, Gasabo",
    price: 120000000,
    displayPrice: "120,000,000 RWF",
    deal: "For Sale",
    type: "House",
    bedrooms: "5",
    size: "420 sqm",
    agent: "Elite Homes Rwanda",
    verified: true,
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "3",
    title: "Apartment for Rent in Rebero",
    location: "Kigali, Kicukiro",
    price: 450000,
    displayPrice: "450,000 RWF / month",
    deal: "For Rent",
    type: "Apartment",
    bedrooms: "3",
    size: "120 sqm",
    agent: "Rebero Rentals",
    verified: true,
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "4",
    title: "Commercial Building in City Center",
    location: "Kigali, Nyarugenge",
    price: 280000000,
    displayPrice: "280,000,000 RWF",
    deal: "For Sale",
    type: "Commercial Building",
    bedrooms: "N/A",
    size: "900 sqm",
    agent: "Business Properties Ltd",
    verified: true,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "5",
    title: "Farm Land in Bugesera",
    location: "Bugesera, Nyamata",
    price: 18000000,
    displayPrice: "18,000,000 RWF",
    deal: "For Sale",
    type: "Farm",
    bedrooms: "N/A",
    size: "2 hectares",
    agent: "AgriLand Brokers",
    verified: false,
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "6",
    title: "Family Rental House in Kibagabaga",
    location: "Kigali, Gasabo",
    price: 800000,
    displayPrice: "800,000 RWF / month",
    deal: "For Rent",
    type: "Rental",
    bedrooms: "4",
    size: "300 sqm",
    agent: "Kigali Rentals Hub",
    verified: true,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
  },
];

const sellerSteps = [
  "Register as Seller or Broker",
  "Upload ID and property documents",
  "Admin verification",
  "Receive verified seller badge",
  "Add property listing",
  "Choose For Sale or For Rent",
  "Publish listing",
  "Receive buyer or renter inquiries",
  "Book visits and close deal",
];

export default function Marketplace() {
  const [deal, setDeal] = useState("All");
  const [type, setType] = useState("All");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("All");

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const matchDeal = deal === "All" || property.deal === deal;
      const matchType = type === "All" || property.type === type;
      const matchLocation =
        location.trim() === "" ||
        property.location.toLowerCase().includes(location.toLowerCase()) ||
        property.title.toLowerCase().includes(location.toLowerCase());

      const matchPrice =
        priceRange === "All" ||
        (priceRange === "Below 50M" && property.price < 50000000) ||
        (priceRange === "50M - 150M" &&
          property.price >= 50000000 &&
          property.price <= 150000000) ||
        (priceRange === "Above 150M" && property.price > 150000000) ||
        (priceRange === "Rent below 1M" &&
          property.deal === "For Rent" &&
          property.price < 1000000);

      return matchDeal && matchType && matchLocation && matchPrice;
    });
  }, [deal, type, location, priceRange]);

  return (
    <div className="min-h-screen bg-[#f7f8fb] text-[#050816]">
      {/* HERO */}
      <section className="px-6 pt-10">
        <div className="bg-[#050816] text-white rounded-[36px] p-8 md:p-14 relative overflow-hidden">
          <div className="relative z-10 max-w-4xl">
            <p className="text-pink-500 font-black tracking-[3px] mb-4">
              LANDS & HOUSE MARKETPLACE
            </p>

            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-5">
              Buy, rent and sell verified properties in one place.
            </h1>

            <p className="text-slate-300 text-lg leading-8 max-w-3xl">
              Search lands, houses, apartments, commercial buildings, farms and
              rentals. Contact verified sellers, book visits and reserve
              properties through escrow.
            </p>
          </div>

          <div className="absolute -right-28 -bottom-28 w-80 h-80 bg-pink-600/30 rounded-full blur-3xl" />
        </div>
      </section>

      {/* SEARCH BAR */}
      <section className="px-6 -mt-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-5">
          <div className="flex flex-wrap gap-3 mb-5">
            {["All", "For Sale", "For Rent"].map((item) => (
              <button
                key={item}
                onClick={() => setDeal(item)}
                className={`px-6 py-3 rounded-2xl font-black transition ${
                  deal === item
                    ? "bg-pink-600 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-pink-50"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            <div className="md:col-span-2 bg-slate-50 rounded-2xl px-4 py-4 flex items-center gap-3">
              <MapPin className="text-pink-600" />
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location / District / City"
                className="bg-transparent outline-none w-full font-semibold"
              />
            </div>

            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="bg-slate-50 rounded-2xl px-4 py-4 outline-none font-semibold"
            >
              {propertyTypes.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>

            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="bg-slate-50 rounded-2xl px-4 py-4 outline-none font-semibold"
            >
              <option>All</option>
              <option>Below 50M</option>
              <option>50M - 150M</option>
              <option>Above 150M</option>
              <option>Rent below 1M</option>
            </select>

            <button className="bg-pink-600 hover:bg-pink-700 text-white rounded-2xl font-black flex items-center justify-center gap-2">
              <Search size={22} />
              Search
            </button>
          </div>
        </div>
      </section>

      {/* CATEGORY FILTERS */}
      <section className="px-6 py-10">
        <div className="flex items-center gap-3 mb-5">
          <SlidersHorizontal className="text-pink-600" />
          <h2 className="text-2xl font-black">Filter Results</h2>
        </div>

        <div className="flex flex-wrap gap-3">
          {propertyTypes.map((item) => (
            <button
              key={item}
              onClick={() => setType(item)}
              className={`px-5 py-3 rounded-2xl font-black transition ${
                type === item
                  ? "bg-[#050816] text-white"
                  : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      {/* LISTINGS */}
      <section className="px-6 pb-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-black">
              Property Listings
            </h2>
            <p className="text-slate-500 mt-2">
              {filteredProperties.length} properties found.
            </p>
          </div>

          <button className="bg-white border border-slate-200 px-5 py-3 rounded-2xl font-black flex items-center gap-2">
            <SlidersHorizontal size={20} />
            Advanced filters
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-2xl transition"
            >
              <div className="relative h-64">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />

                <span className="absolute top-4 left-4 bg-[#050816] text-white px-4 py-2 rounded-xl font-black text-sm">
                  {property.deal}
                </span>

                <span className="absolute top-4 right-4 bg-pink-600 text-white px-4 py-2 rounded-xl font-black text-sm">
                  {property.type}
                </span>

                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-2 rounded-xl flex items-center gap-2 font-bold">
                  <Camera size={18} />
                  Photos / Video
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-2xl font-black leading-tight">
                    {property.title}
                  </h3>

                  {property.verified && (
                    <span className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-xs font-black flex items-center gap-1">
                      <ShieldCheck size={14} />
                      Verified
                    </span>
                  )}
                </div>

                <p className="text-slate-500 flex items-center gap-2 mb-4">
                  <MapPin size={18} />
                  {property.location}
                </p>

                <h4 className="text-emerald-600 text-2xl font-black mb-5">
                  {property.displayPrice}
                </h4>

                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="bg-slate-50 rounded-2xl p-3 flex items-center gap-2">
                    <BedDouble size={18} className="text-pink-600" />
                    <span className="font-bold">{property.bedrooms} beds</span>
                  </div>

                  <div className="bg-slate-50 rounded-2xl p-3 flex items-center gap-2">
                    <Ruler size={18} className="text-pink-600" />
                    <span className="font-bold">{property.size}</span>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-5 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm text-slate-500">Seller / Agent</p>
                    <p className="font-black">{property.agent}</p>
                  </div>

                  <div className="flex gap-2">
                    <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                      <Heart size={19} />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                      <Share2 size={19} />
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

                  <button className="bg-emerald-600 text-white rounded-2xl py-3 font-black flex items-center justify-center">
                    <Phone size={18} />
                  </button>

                  <button className="bg-pink-600 text-white rounded-2xl py-3 font-black flex items-center justify-center">
                    <MessageCircle size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BUYER FLOW */}
      <section className="px-6 pb-14">
        <div className="bg-white rounded-[36px] border border-slate-200 p-8 md:p-12">
          <p className="text-pink-600 font-black mb-4">BUYER / RENTER FLOW</p>

          <h2 className="text-3xl md:text-4xl font-black mb-8">
            From search to successful contract
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              "Search property",
              "View details",
              "Contact seller / agent",
              "Book visit",
              "Negotiate price",
              "Reserve property",
              "Payment / Escrow",
              "Contract / Transfer / Lease",
            ].map((step, index) => (
              <div
                key={index}
                className="bg-[#f7f8fb] rounded-3xl p-5 border border-slate-200"
              >
                <div className="w-11 h-11 rounded-full bg-pink-600 text-white flex items-center justify-center font-black mb-4">
                  {index + 1}
                </div>

                <p className="font-black">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SELLER FLOW */}
      <section className="px-6 pb-16">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-[#050816] text-white rounded-[36px] p-8 md:p-12">
            <p className="text-pink-500 font-black mb-4">
              SELLER / BROKER SYSTEM
            </p>

            <h2 className="text-3xl md:text-4xl font-black leading-tight mb-6">
              Register, verify documents and publish property listings.
            </h2>

            <p className="text-slate-300 leading-8 mb-8">
              Sellers and brokers upload ID plus land or house documents.
              BuildWise admin verifies them before they receive a verified
              seller badge.
            </p>

            <Link
              to="/marketplace"
              className="bg-pink-600 hover:bg-pink-700 text-white px-7 py-4 rounded-2xl font-black inline-flex items-center gap-2"
            >
              <PlusCircle size={20} />
              Register as Seller
            </Link>
          </div>

          <div className="bg-white rounded-[36px] border border-slate-200 p-8 md:p-12">
            <h3 className="text-2xl font-black mb-6">Seller / Broker Steps</h3>

            <div className="space-y-4">
              {sellerSteps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-[#f7f8fb] rounded-2xl p-4"
                >
                  <CheckCircle className="text-emerald-600" />
                  <span className="font-bold">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROPERTY TYPES */}
      <section className="px-6 pb-16">
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-5">
          <TypeCard icon={MapPin} title="Lands" />
          <TypeCard icon={Home} title="Houses" />
          <TypeCard icon={Building2} title="Apartments" />
          <TypeCard icon={Store} title="Commercial" />
          <TypeCard icon={Tractor} title="Farms" />
          <TypeCard icon={FileCheck} title="Documents" />
        </div>
      </section>
    </div>
  );
}

function TypeCard({ icon: Icon, title }) {
  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 text-center hover:shadow-xl transition">
      <div className="w-14 h-14 mx-auto rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center mb-4">
        <Icon size={28} />
      </div>
      <h3 className="font-black">{title}</h3>
    </div>
  );
}