import React from "react";
import {
  ArrowLeft,
  MapPin,
  ShieldCheck,
  Heart,
  Share2,
  Phone,
  MessageCircle,
  Star,
  CheckCircle,
  Home,
  Ruler,
  BedDouble,
  Bath,
  Car,
  CalendarDays,
  Wallet,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

const properties = [
  {
    id: "1",
    title: "Ikibanza i Kanombe",
    location: "Kigali, Kicukiro",
    price: "35,000,000 RWF",
    type: "Ikibanza",
    size: "500 sqm",
    bedrooms: "N/A",
    bathrooms: "N/A",
    parking: "N/A",
    mainImage:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: "2",
    title: "Inzu igezweho i Gacuriro",
    location: "Kigali, Gasabo",
    price: "120,000,000 RWF",
    type: "Inzu",
    size: "420 sqm",
    bedrooms: "5",
    bathrooms: "4",
    parking: "2",
    mainImage:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: "3",
    title: "Apartment i Rebero",
    location: "Kigali, Kicukiro",
    price: "450,000 RWF / ukwezi",
    type: "Apartment",
    size: "120 sqm",
    bedrooms: "3",
    bathrooms: "2",
    parking: "1",
    mainImage:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: "4",
    title: "Ikibanza i Nyamata",
    location: "Bugesera, Nyamata",
    price: "18,000,000 RWF",
    type: "Ikibanza",
    size: "600 sqm",
    bedrooms: "N/A",
    bathrooms: "N/A",
    parking: "N/A",
    mainImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    ],
  },
];

export default function PropertyDetails() {
  const { id } = useParams();
  const property = properties.find((item) => item.id === id) || properties[0];

  return (
    <div className="min-h-screen bg-[#f7f8fb] text-[#050816] px-6 py-8">
      <Link
        to="/"
        className="inline-flex items-center gap-2 mb-6 font-bold text-slate-600 hover:text-pink-600"
      >
        <ArrowLeft size={20} />
        Subira ahabanza
      </Link>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-[32px] overflow-hidden shadow border border-slate-200">
            <div className="relative h-[430px]">
              <img
                src={property.mainImage}
                alt={property.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute top-5 left-5 bg-emerald-600 text-white px-5 py-2 rounded-xl font-black flex items-center gap-2">
                <ShieldCheck size={18} />
                Seller yemejwe
              </div>

              <div className="absolute top-5 right-5 flex gap-3">
                <button className="bg-white w-12 h-12 rounded-full flex items-center justify-center shadow">
                  <Heart />
                </button>
                <button className="bg-white w-12 h-12 rounded-full flex items-center justify-center shadow">
                  <Share2 />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 p-4">
              {property.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="property"
                  className="h-32 w-full object-cover rounded-2xl"
                />
              ))}
            </div>
          </div>

          <div className="bg-white rounded-[32px] p-8 mt-8 border border-slate-200 shadow">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <h1 className="text-4xl font-black mb-4">{property.title}</h1>
                <p className="flex items-center gap-2 text-slate-500 text-lg">
                  <MapPin size={20} />
                  {property.location}
                </p>
              </div>

              <div>
                <p className="text-slate-500">Igiciro</p>
                <h2 className="text-3xl font-black text-emerald-600">
                  {property.price}
                </h2>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-8">
              <InfoCard icon={Home} label="Ubwoko" value={property.type} />
              <InfoCard icon={Ruler} label="Ingano" value={property.size} />
              <InfoCard icon={BedDouble} label="Ibyumba" value={property.bedrooms} />
              <InfoCard icon={Bath} label="Ubwiherero" value={property.bathrooms} />
              <InfoCard icon={Car} label="Parking" value={property.parking} />
            </div>

            <div className="mt-10">
              <h3 className="text-2xl font-black mb-4">Ibisobanuro</h3>
              <p className="text-slate-600 leading-8">
                Uyu mutungo uri ahantu heza, wegereye umuhanda, amazi,
                umuriro n’ibindi bikorwa remezo. Wemejwe na BuildWise kugira
                ngo umuguzi agire umutekano mu kugura cyangwa gukodesha.
              </p>
            </div>

            <div className="mt-10">
              <h3 className="text-2xl font-black mb-5">Ibyiza birimo</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Documents zigenzuwe",
                  "Ahantu heza ho gutura",
                  "Umuhanda uri hafi",
                  "Amazi n’umuriro biri hafi",
                  "Ukoresha Escrow payment",
                  "Ushobora kubonana na nyirawo",
                ].map((item, index) => (
                  <p key={index} className="flex items-center gap-3 text-slate-600">
                    <CheckCircle className="text-emerald-600" size={20} />
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[32px] p-8 mt-8 border border-slate-200 shadow">
            <h3 className="text-2xl font-black mb-4">Aho iherereye</h3>
            <div className="h-72 rounded-3xl bg-slate-200 flex items-center justify-center text-slate-500 font-bold">
              Google Map izajya hano
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow sticky top-6">
            <h3 className="text-2xl font-black mb-6">Vugana n’ugurisha</h3>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center font-black text-xl">
                BK
              </div>
              <div>
                <h4 className="font-black text-lg">Broker Kigali Ltd</h4>
                <p className="text-slate-500 flex items-center gap-1">
                  <Star size={16} className="text-yellow-500" fill="currentColor" />
                  4.9 rating
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-4 rounded-2xl font-black flex items-center justify-center gap-2">
                <Phone size={20} />
                Hamagara
              </button>

              <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-2xl font-black flex items-center justify-center gap-2">
                <MessageCircle size={20} />
                WhatsApp
              </button>

              <button className="w-full bg-[#050816] hover:bg-slate-900 text-white py-4 rounded-2xl font-black flex items-center justify-center gap-2">
                <CalendarDays size={20} />
                Saba gusura
              </button>

              <button className="w-full border-2 border-pink-600 text-pink-600 py-4 rounded-2xl font-black flex items-center justify-center gap-2">
                <Wallet size={20} />
                Reserve ukoresheje Escrow
              </button>
            </div>

            <div className="mt-8 bg-pink-50 rounded-2xl p-5">
              <h4 className="font-black mb-2">Escrow irakurinda</h4>
              <p className="text-slate-600 leading-7">
                Amafaranga abikwa mu mutekano kugeza documents zose zemejwe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoCard({ icon: Icon, label, value }) {
  return (
    <div className="bg-[#f7f8fb] rounded-2xl p-5 border border-slate-200">
      <Icon className="text-pink-600 mb-3" size={26} />
      <p className="text-slate-500 text-sm">{label}</p>
      <h4 className="font-black text-lg">{value}</h4>
    </div>
  );
}