import React from "react";
import {
  Building2,
  Heart,
  Wallet,
  FolderKanban,
  ShieldCheck,
  PlusCircle,
} from "lucide-react";

const cards = [
  {
    title: "My Properties",
    value: "12",
    icon: Building2,
  },
  {
    title: "Saved",
    value: "8",
    icon: Heart,
  },
  {
    title: "Orders",
    value: "6",
    icon: Wallet,
  },
  {
    title: "Projects",
    value: "4",
    icon: FolderKanban,
  },
];

export default function UserDashboard() {
  return (
    <div className="min-h-screen bg-[#f7f8fb]">

      <section className="bg-[#050816] text-white rounded-[30px] p-8 mb-8">

        <p className="text-pink-500 font-black mb-3">
          USER DASHBOARD
        </p>

        <h1 className="text-5xl font-black mb-4">
          Murakaza neza muri BuildWise
        </h1>

        <p className="text-slate-300">
          Genzura property, projects, escrow na orders zawe.
        </p>

      </section>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">

        {cards.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="bg-white rounded-[25px] border border-slate-200 p-6"
            >

              <div className="w-12 h-12 bg-pink-50 rounded-xl text-pink-600 flex items-center justify-center mb-4">

                <Icon size={22} />

              </div>

              <h2 className="text-3xl font-black">
                {item.value}
              </h2>

              <p className="text-slate-500">
                {item.title}
              </p>

            </div>

          );

        })}

      </div>

      <div className="grid lg:grid-cols-2 gap-6">

        <div className="bg-white rounded-[25px] p-6 border">

          <h2 className="font-black text-2xl mb-5">
            Quick Actions
          </h2>

          <div className="space-y-4">

            <button className="w-full bg-pink-600 text-white p-4 rounded-xl font-black flex items-center justify-center gap-2">

              <PlusCircle size={18}/>
              Add Property

            </button>

            <button className="w-full bg-[#050816] text-white p-4 rounded-xl font-black flex items-center justify-center gap-2">

              <ShieldCheck size={18}/>
              New Escrow

            </button>

          </div>

        </div>

        <div className="bg-white rounded-[25px] p-6 border">

          <h2 className="font-black text-2xl mb-5">
            Recent Activities
          </h2>

          <div className="space-y-4">

            <div className="bg-slate-50 p-4 rounded-xl">
              Saved property added
            </div>

            <div className="bg-slate-50 p-4 rounded-xl">
              Escrow payment completed
            </div>

            <div className="bg-slate-50 p-4 rounded-xl">
              Project updated
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}