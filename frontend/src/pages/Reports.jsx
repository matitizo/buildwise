import React, { useMemo, useState } from "react";
import {
  BarChart3,
  Building2,
  Wallet,
  ShoppingCart,
  Home,
  Download,
  TrendingUp,
  Users,
  ShieldCheck,
  CalendarDays,
  RefreshCcw,
} from "lucide-react";

const reportData = [
  { month: "Mut", revenue: 12000000, projects: 3, properties: 8, orders: 12 },
  { month: "Gas", revenue: 18000000, projects: 5, properties: 10, orders: 18 },
  { month: "Wer", revenue: 15000000, projects: 4, properties: 12, orders: 16 },
  { month: "Mata", revenue: 26000000, projects: 8, properties: 17, orders: 25 },
  { month: "Gic", revenue: 32000000, projects: 10, properties: 22, orders: 31 },
  { month: "Kam", revenue: 41000000, projects: 13, properties: 27, orders: 40 },
];

export default function Reports() {
  const [period, setPeriod] = useState("Buri Kwezi");

  const totals = useMemo(() => {
    return {
      revenue: reportData.reduce((s,x)=>s+x.revenue,0),
      projects: reportData.reduce((s,x)=>s+x.projects,0),
      properties: reportData.reduce((s,x)=>s+x.properties,0),
      orders: reportData.reduce((s,x)=>s+x.orders,0),
    };
  }, []);

  function money(v){
    return `${v.toLocaleString()} RWF`;
  }

  const maxRevenue=Math.max(...reportData.map(x=>x.revenue));

  return (
    <div className="min-h-screen bg-[#f7f8fb] p-6">

      <section className="bg-[#050816] text-white rounded-[30px] p-10 mb-8">
        <p className="text-pink-500 font-black mb-3">
          BUILDWISE RAPORO
        </p>

        <div className="flex justify-between flex-wrap gap-4">

          <div>
            <h1 className="text-5xl font-black mb-4">
              Raporo n’imibare ya BuildWise
            </h1>

            <p className="text-slate-300 max-w-3xl">
              Reba uko imishinga, kugura ibikoresho,
              amafaranga yinjiye ndetse n’imitungo
              ihagaze muri BuildWise.
            </p>
          </div>

          <button
          className="bg-pink-600 px-5 py-3 rounded-xl font-black flex items-center gap-2">
            <Download size={18}/>
            Download Raporo
          </button>

        </div>
      </section>

      <section className="grid md:grid-cols-4 gap-5 mb-8">

        <Card
        icon={Wallet}
        title="Amafaranga Yinjiye"
        value={money(totals.revenue)}
        />

        <Card
        icon={Building2}
        title="Imishinga"
        value={totals.projects}
        />

        <Card
        icon={Home}
        title="Imitungo"
        value={totals.properties}
        />

        <Card
        icon={ShoppingCart}
        title="Orders"
        value={totals.orders}
        />

      </section>


      <section className="bg-white rounded-[30px] p-6 mb-8">

      <div className="flex justify-between mb-6">

      <div>
      <h2 className="text-3xl font-black">
      Isesengura rya BuildWise
      </h2>

      <p className="text-slate-500">
      Raporo y'ibyakozwe
      </p>
      </div>

      <div className="flex gap-3">

      <select
      value={period}
      onChange={(e)=>setPeriod(e.target.value)}
      className="bg-slate-100 rounded-xl px-4 py-3">

      <option>Buri Cyumweru</option>
      <option>Buri Kwezi</option>
      <option>Buri Mwaka</option>

      </select>

      <button
      className="border px-4 py-3 rounded-xl flex gap-2 items-center">
      <RefreshCcw size={16}/>
      Subiza
      </button>

      </div>

      </div>


      <div className="h-[320px] flex items-end gap-5">

      {reportData.map((item)=>(

      <div
      key={item.month}
      className="flex-1 flex flex-col items-center">

      <div
      className="bg-pink-600 w-full rounded-t-xl"
      style={{
      height:`${item.revenue/maxRevenue*250}px`
      }}
      />

      <span className="font-black mt-2">
      {item.month}
      </span>

      </div>

      ))}

      </div>

      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">

      <Info
      icon={TrendingUp}
      title="Izamuka"
      text="Amafaranga yiyongereye cyane."
      />

      <Info
      icon={Users}
      title="Abakoresha"
      text="Abakoresha biyongera buri munsi."
      />

      <Info
      icon={ShieldCheck}
      title="Escrow"
      text="Escrow itanga umutekano."
      />

      <Info
      icon={CalendarDays}
      title="Igikorwa Gikurikira"
      text="Kongera suppliers bemewe."
      />

      </section>

    </div>
  );
}

function Card({icon:Icon,title,value}){
return(

<div className="bg-white rounded-[25px] p-5 shadow">

<div className="w-12 h-12 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center mb-3">
<Icon size={24}/>
</div>

<p className="text-slate-500">{title}</p>

<h2 className="font-black text-2xl">
{value}
</h2>

</div>

)
}

function Info({icon:Icon,title,text}){
return(

<div className="bg-white rounded-[25px] p-5 shadow">

<div className="w-12 h-12 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center mb-3">
<Icon size={24}/>
</div>

<h3 className="font-black text-xl mb-2">
{title}
</h3>

<p className="text-slate-500">
{text}
</p>

</div>

)
}