import React from "react";
import {
  ArrowLeft,
  MapPin,
  BedDouble,
  Bath,
  Ruler,
  ShieldCheck,
  Heart,
  Share2,
  MessageCircle,
  Phone,
  CalendarDays,
  Wallet,
  FileCheck,
  Star,
  CheckCircle,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

const sampleProperties = [
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
    featured: true,
  },
];

export default function PropertyDetails() {
  const { id } = useParams();

  const saved =
    JSON.parse(localStorage.getItem("buildwise_marketplace_properties")) || [];

  const allProperties = saved.length > 0 ? saved : sampleProperties;

  const property =
    allProperties.find((item) => String(item.id) === String(id)) ||
    allProperties[0];

  const price = Number(property.price || 0).toLocaleString();

  const displayPrice =
    property.propertyFor === "Rent"
      ? `${price} RWF / ukwezi`
      : `${price} RWF`;

  return (
    <div className="min-h-screen bg-[#f7f8fb] text-[#050816] px-6 py-8">
      <Link
        to="/marketplace"
        className="inline-flex items-center gap-2 font-black text-slate-600 hover:text-pink-600 mb-6"
      >
        <ArrowLeft size={20} />
        Subira kuri Marketplace
      </Link>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-white rounded-[28px] border border-slate-200 overflow-hidden shadow-sm">
            <div className="relative h-[430px]">
              <img
                src={property.image}
                alt={property.type}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              <div className="absolute top-5 left-5 bg-[#050816] text-white px-4 py-2 rounded-xl font-black">
                {property.propertyFor === "Rent" ? "Ikodeshwa" : "Kigurishwa"}
              </div>

              <div className="absolute top-5 right-5 flex gap-3">
                <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow">
                  <Heart size={20} />
                </button>

                <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow">
                  <Share2 size={20} />
                </button>
              </div>

              <div className="absolute bottom-5 left-5 text-white">
                <h1 className="text-4xl font-black mb-2">{property.type}</h1>
                <p className="flex items-center gap-2 text-lg">
                  <MapPin size={20} />
                  {property.province}, {property.district}
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-[28px] border border-slate-200 p-7 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5 mb-7">
              <div>
                <p className="text-pink-600 font-black mb-2">
                  PROPERTY DETAILS
                </p>

                <h2 className="text-3xl font-black">{property.type}</h2>

                <p className="text-slate-500 mt-2">
                  Listed by {property.owner} ({property.userType || "Seller"})
                </p>
              </div>

              <div>
                <p className="text-slate-500 font-bold">Price</p>
                <h3 className="text-3xl font-black text-emerald-600">
                  {displayPrice}
                </h3>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <InfoCard icon={BedDouble} label="Bedrooms" value={property.bedrooms} />
              <InfoCard icon={Bath} label="Bathrooms" value={property.bathrooms} />
              <InfoCard icon={Ruler} label="Size" value={property.size} />
              <InfoCard
                icon={ShieldCheck}
                label="Status"
                value="Verified"
              />
            </div>

            <h3 className="text-2xl font-black mb-3">Description</h3>

            <p className="text-slate-600 leading-8">
              {property.description ||
                "Uyu mutungo uri ku isoko rya BuildWise. Ufite amakuru y’ibanze, location, igiciro n’umugurisha wemejwe."}
            </p>
          </section>

          <section className="bg-white rounded-[28px] border border-slate-200 p-7 shadow-sm">
            <h3 className="text-2xl font-black mb-5">Documents & Verification</h3>

            <div className="grid md:grid-cols-3 gap-4">
              {["Owner ID", "Property Documents", "Admin Verification"].map(
                (doc) => (
                  <div
                    key={doc}
                    className="bg-slate-50 rounded-2xl p-5 flex items-center gap-3 font-black"
                  >
                    <FileCheck className="text-emerald-600" />
                    {doc}
                  </div>
                )
              )}
            </div>
          </section>

          <section className="bg-white rounded-[28px] border border-slate-200 p-7 shadow-sm">
            <h3 className="text-2xl font-black mb-5">Map Location</h3>

            <div className="h-72 bg-slate-100 rounded-3xl flex items-center justify-center text-slate-500 font-black">
              Map ya {property.province}, {property.district} izajya hano
            </div>
          </section>

          <section className="bg-white rounded-[28px] border border-slate-200 p-7 shadow-sm">
            <h3 className="text-2xl font-black mb-5">Similar Properties</h3>

            <div className="grid md:grid-cols-2 gap-5">
              {allProperties
                .filter((item) => String(item.id) !== String(property.id))
                .slice(0, 2)
                .map((item) => (
                  <Link
                    to={`/property/${item.id}`}
                    key={item.id}
                    className="border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition"
                  >
                    <img
                      src={item.image}
                      alt={item.type}
                      className="h-40 w-full object-cover"
                    />

                    <div className="p-4">
                      <h4 className="font-black text-lg">{item.type}</h4>
                      <p className="text-slate-500">
                        {item.province}, {item.district}
                      </p>
                      <p className="text-emerald-600 font-black mt-2">
                        {Number(item.price || 0).toLocaleString()} RWF
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </section>
        </div>

        <aside className="space-y-6">
          <section className="bg-white rounded-[28px] border border-slate-200 p-6 shadow-sm lg:sticky lg:top-28">
            <h3 className="text-2xl font-black mb-5">Contact Seller</h3>

            <div className="flex items-center gap-4 mb-5">
              <div className="w-16 h-16 rounded-full bg-pink-600 text-white flex items-center justify-center font-black text-2xl">
                {property.owner?.charAt(0) || "B"}
              </div>

              <div>
                <h4 className="font-black text-lg">{property.owner}</h4>
                <p className="text-slate-500 flex items-center gap-1">
                  <Star size={15} className="text-yellow-500" fill="currentColor" />
                  Verified {property.userType || "Seller"}
                </p>
              </div>
            </div>

            <div className="bg-emerald-50 text-emerald-700 rounded-2xl p-4 mb-5 flex items-center gap-3 font-black">
              <ShieldCheck />
              Verified Seller
            </div>

            <div className="space-y-3">
              <button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-xl font-black flex items-center justify-center gap-2">
                <Phone size={18} />
                Call Seller
              </button>

              <a
                href={`https://wa.me/250788000000?text=Ndifuza%20amakuru%20kuri%20${encodeURIComponent(
                  property.type
                )}%20iri%20${encodeURIComponent(
                  property.province + ", " + property.district
                )}`}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-black flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>

              <button className="w-full bg-[#050816] hover:bg-black text-white py-3 rounded-xl font-black flex items-center justify-center gap-2">
                <CalendarDays size={18} />
                Book Visit
              </button>

              <button className="w-full border-2 border-pink-600 text-pink-600 py-3 rounded-xl font-black flex items-center justify-center gap-2">
                <Wallet size={18} />
                Reserve with Escrow
              </button>
            </div>
          </section>

          <section className="bg-[#050816] text-white rounded-[28px] p-6">
            <h3 className="text-2xl font-black mb-4">Escrow Protection</h3>

            <p className="text-slate-300 leading-7 mb-5">
              Amafaranga abikwa mu mutekano kugeza documents zemejwe n’amasezerano arangiye.
            </p>

            {[
              "Documents verification",
              "Secure payment",
              "Contract support",
              "Ownership transfer support",
            ].map((item) => (
              <p key={item} className="flex items-center gap-2 mb-3">
                <CheckCircle size={18} className="text-emerald-400" />
                {item}
              </p>
            ))}
          </section>
        </aside>
      </div>
    </div>
  );
}

function InfoCard({ icon: Icon, label, value }) {
  return (
    <div className="bg-slate-50 rounded-2xl p-5">
      <Icon className="text-pink-600 mb-3" size={24} />
      <p className="text-slate-500 text-sm">{label}</p>
      <h4 className="font-black text-lg">{value}</h4>
    </div>
  );
}