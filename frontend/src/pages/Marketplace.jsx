import React from "react";

export default function Marketplace() {
  return (
    <div className="min-h-screen bg-[#f7f8fb] p-6">

      <div className="bg-white rounded-[32px] shadow-xl border border-slate-200 p-8">

        {/* HEADER */}

        <div className="flex items-center gap-3 mb-10">

          <div className="text-pink-600 text-3xl">
            ⬆
          </div>

          <h1 className="text-5xl font-black text-[#050816]">
            Publish Property
          </h1>

        </div>

        {/* FORM */}

        <div className="grid md:grid-cols-2 gap-6">

          {/* PROPERTY FOR */}

          <select className="bg-slate-50 rounded-2xl px-5 py-5 outline-none text-lg">

            <option>Property For Sale</option>

            <option>Property For Rent</option>

          </select>

          {/* PROPERTY TYPE */}

          <select className="bg-slate-50 rounded-2xl px-5 py-5 outline-none text-lg">

            <option>Ikibanza</option>

            <option>Farm</option>

            <option>Inzu yo kubamo</option>

            <option>Inzu y’ubucuruzi</option>

            <option>Apartment</option>

            <option>Hotel Room</option>

            <option>Maison de Passage</option>

          </select>

          {/* OWNER / AGENT */}

          <input
            type="text"
            placeholder="Nyirayo / Supplier / Agent"
            className="bg-slate-50 rounded-2xl px-5 py-5 outline-none text-lg"
          />

          {/* USER TYPE */}

          <select className="bg-slate-50 rounded-2xl px-5 py-5 outline-none text-lg">

            <option>User Type</option>

            <option>Owner</option>

            <option>Broker</option>

            <option>Agent</option>

          </select>

          {/* PROVINCE */}

          <select className="bg-slate-50 rounded-2xl px-5 py-5 outline-none text-lg">

            <option>Hitamo Province</option>

            <option>Kigali</option>

            <option>Northern</option>

            <option>Southern</option>

            <option>Eastern</option>

            <option>Western</option>

          </select>

          {/* DISTRICT */}

          <select className="bg-slate-50 rounded-2xl px-5 py-5 outline-none text-lg">

            <option>Hitamo District</option>

          </select>

          {/* SIZE */}

          <input
            type="text"
            placeholder="Size"
            className="bg-slate-50 rounded-2xl px-5 py-5 outline-none text-lg"
          />

          {/* PRICE */}

          <input
            type="number"
            placeholder="Price"
            className="bg-slate-50 rounded-2xl px-5 py-5 outline-none text-lg"
          />

          {/* IMAGE */}

          <input
            type="text"
            placeholder="Image URL"
            className="bg-slate-50 rounded-2xl px-5 py-5 outline-none text-lg"
          />

          {/* VIDEO */}

          <input
            type="text"
            placeholder="Video URL"
            className="bg-slate-50 rounded-2xl px-5 py-5 outline-none text-lg"
          />

        </div>

        {/* DESCRIPTION */}

        <div className="mt-6">

          <textarea
            placeholder="Description"
            className="w-full min-h-[180px] bg-slate-50 rounded-2xl px-5 py-5 outline-none text-lg"
          />

        </div>

        {/* BUTTON */}

        <div className="mt-8">

          <button className="bg-pink-600 hover:bg-pink-700 text-white px-10 py-5 rounded-2xl font-black text-xl transition">
            Publish Now
          </button>

        </div>

      </div>

    </div>
  );
}