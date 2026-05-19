import React, { useState } from "react";
import {
  LayoutDashboard,
  BarChart3,
  Settings,
  Users,
  Wallet,
  Building2,
  ShoppingCart,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const tabs = [
    {
      id: "dashboard",
      title: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      id: "reports",
      title: "Reports",
      icon: BarChart3,
    },
    {
      id: "settings",
      title: "Settings",
      icon: Settings,
    },
    {
      id: "users",
      title: "Users",
      icon: Users,
    },
    {
      id: "transactions",
      title: "Transactions",
      icon: Wallet,
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f8fb] p-6">

      {/* Hero */}

      <div className="bg-[#050816] text-white rounded-[30px] p-10 mb-8">

        <p className="text-pink-500 font-black mb-3">
          BUILDWISE ADMIN
        </p>

        <h1 className="text-5xl font-black mb-4">
          Admin Dashboard
        </h1>

        <p className="text-slate-300">
          Genzura reports, users, settings,
          transactions na analytics.
        </p>

      </div>


      <div className="grid lg:grid-cols-[280px_1fr] gap-6">

        {/* Sidebar */}

        <div className="bg-white rounded-[30px] p-5 shadow">

          {tabs.map((tab) => {

            const Icon = tab.icon;

            return (

              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full p-4 rounded-xl mb-3 flex items-center gap-3 font-black
                ${
                  activeTab === tab.id
                    ? "bg-pink-600 text-white"
                    : "bg-slate-100"
                }`}
              >
                <Icon size={20}/>
                {tab.title}

              </button>

            );
          })}

        </div>


        {/* Content */}

        <div>

        {activeTab==="dashboard" && (

        <div>

        <div className="grid md:grid-cols-4 gap-5">

        <Card
        icon={Building2}
        title="Projects"
        value="24"
        />

        <Card
        icon={Users}
        title="Users"
        value="1,240"
        />

        <Card
        icon={ShoppingCart}
        title="Orders"
        value="547"
        />

        <Card
        icon={Wallet}
        title="Revenue"
        value="48M Frw"
        />

        </div>


        <div className="bg-white p-8 rounded-[30px] shadow mt-8">

        <h2 className="text-3xl font-black mb-4">

        Analytics

        </h2>

        <div className="grid md:grid-cols-3 gap-5">

        <SmallCard
        icon={TrendingUp}
        title="Growth"
        value="+24%"
        />

        <SmallCard
        icon={ShieldCheck}
        title="Escrow"
        value="95%"
        />

        <SmallCard
        icon={BarChart3}
        title="Activity"
        value="87%"
        />

        </div>

        </div>

        </div>

        )}


        {activeTab==="reports" && (

        <Box
        title="Reports"
        text="Raporo zose za BuildWise zizagaragara hano."
        />

        )}


        {activeTab==="settings" && (

        <Box
        title="Settings"
        text="Igenamiterere rya system."
        />

        )}


        {activeTab==="users" && (

        <Box
        title="Users"
        text="Abakoresha bose ba BuildWise."
        />

        )}


        {activeTab==="transactions" && (

        <Box
        title="Transactions"
        text="Escrow na payments."
        />

        )}

        </div>

      </div>

    </div>
  );
}


function Card({icon:Icon,title,value}){

return(

<div className="bg-white rounded-[25px] p-5 shadow">

<div className="w-12 h-12 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center mb-3">

<Icon size={24}/>

</div>

<p className="text-slate-500">

{title}

</p>

<h2 className="text-3xl font-black">

{value}

</h2>

</div>

)

}


function SmallCard({icon:Icon,title,value}){

return(

<div className="bg-slate-100 rounded-[20px] p-5">

<Icon className="text-pink-600 mb-3"/>

<p className="text-slate-500">

{title}

</p>

<h2 className="font-black text-2xl">

{value}

</h2>

</div>

)

}


function Box({title,text}){

return(

<div className="bg-white rounded-[30px] p-8 shadow">

<h2 className="text-3xl font-black mb-3">

{title}

</h2>

<p className="text-slate-500">

{text}

</p>

</div>

)

}