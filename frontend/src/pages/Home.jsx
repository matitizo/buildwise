import React from "react";
import { Link } from "react-router-dom";

const modules = [
  {
    number: "1",
    title: "i-Mjengo",
    subtitle: "Uburyo bworoshye bwo kubaka no gucunga imishinga y’ubwubatsi",
    text: "Tangiza umushinga, bara budget, shaka ibibanza, gura ibikoresho kandi wishyure mu buryo bwizewe.",
    link: "/construction",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd",
    big: true,
  },
  {
    number: "2",
    title: "Isoko ry’Ibibanza",
    subtitle: "Land Marketplace",
    text: "Shaka ibibanza ukoresheje location, ingano, igiciro na status.",
    link: "/lands",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
  },
  {
    number: "3",
    title: "Kubara Igiciro",
    subtitle: "Cost Estimator",
    text: "Bara igiciro cy’inzu, ibikoresho, imirimo n’izindi ndyoheshabikorwa.",
    link: "/construction",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
  },
  {
    number: "4",
    title: "Isoko ry’Ibikoresho",
    subtitle: "Materials Shop",
    text: "Gura ciment, ibyuma, amatafari, umucanga n’ibindi bikoresho.",
    link: "/materials",
    image: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0",
  },
  {
    number: "5",
    title: "Dashboard ya Admin",
    subtitle: "Admin Control Center",
    text: "Genzura users, listings, payments, reports na analytics.",
    link: "/admin",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },
  {
    number: "6",
    title: "Escrow Monitor",
    subtitle: "Construction Payment Protection",
    text: "Amafaranga abikwa kugeza umurimo wemejwe mbere yo kurekurwa.",
    link: "/construction",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
  },
];

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="grid lg:grid-cols-3 gap-6">
        {modules.map((item) => (
          <Link
            key={item.number}
            to={item.link}
            className={`card overflow-hidden hover:shadow-2xl transition group ${
              item.big ? "lg:col-span-1" : ""
            }`}
          >
            <div className="p-5 border-b flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-black">
                {item.number}
              </span>
              <h2 className="font-black text-xl uppercase">{item.title}</h2>
            </div>

            <div className="relative h-56">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 text-white">
                <p className="font-bold text-blue-200">{item.subtitle}</p>
                <h3 className="text-2xl font-black mt-1">{item.title}</h3>
              </div>
            </div>

            <div className="p-5">
              <p className="text-slate-600">{item.text}</p>

              <div className="mt-5 flex gap-3">
                <button className="btn-primary">Fungura</button>
                <button className="btn-secondary">Reba uko ikora</button>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <section className="card p-6">
        <h2 className="text-2xl font-black mb-5">Incamake ya BuildWise</h2>

        <div className="grid md:grid-cols-4 gap-4">
          {[
            ["1,250+", "Imishinga"],
            ["850+", "Abakiriya"],
            ["300+", "Abafatanyabikorwa"],
            ["12+", "Intara/Akarere"],
          ].map(([value, label]) => (
            <div key={label} className="bg-slate-50 rounded-2xl p-5">
              <p className="text-3xl font-black text-blue-700">{value}</p>
              <p className="text-slate-500 font-semibold">{label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}