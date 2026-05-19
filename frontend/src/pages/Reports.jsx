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

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

const reportData = [
  { month: "Jan", revenue: 12000000, projects: 3, properties: 8, orders: 12 },
  { month: "Feb", revenue: 18000000, projects: 5, properties: 10, orders: 18 },
  { month: "Mar", revenue: 15000000, projects: 4, properties: 12, orders: 16 },
  { month: "Apr", revenue: 26000000, projects: 8, properties: 17, orders: 25 },
  { month: "May", revenue: 32000000, projects: 10, properties: 22, orders: 31 },
  { month: "Jun", revenue: 41000000, projects: 13, properties: 27, orders: 40 },
];

export default function Reports() {
  const [period, setPeriod] = useState("Monthly");

  const totals = useMemo(() => {
    const revenue = reportData.reduce((sum, item) => sum + item.revenue, 0);
    const projects = reportData.reduce((sum, item) => sum + item.projects, 0);
    const properties = reportData.reduce((sum, item) => sum + item.properties, 0);
    const orders = reportData.reduce((sum, item) => sum + item.orders, 0);

    return { revenue, projects, properties, orders };
  }, []);

  function money(value) {
    return `${Number(value || 0).toLocaleString()} RWF`;
  }

  const maxRevenue = Math.max(...reportData.map((item) => item.revenue));
  const maxOrders = Math.max(...reportData.map((item) => item.orders));

  return (
    <div className="min-h-screen bg-[#f7f8fb] text-[#050816] px-6 py-8">
      <section className="bg-[#050816] text-white rounded-[30px] p-8 md:p-12 mb-8">
        <p className="text-pink-500 font-black mb-3">BUILDWISE REPORTS</p>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-black mb-4">
              Raporo n’imibare y’imikorere ya BuildWise.
            </h1>

            <p className="text-slate-300 max-w-3xl leading-8">
              Reba uko imishinga, property listings, materials orders,
              escrow payments n’amafaranga yinjiye bihagaze.
            </p>
          </div>

          <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-xl font-black flex items-center justify-center gap-2">
            <Download size={18} />
            Export Report
          </button>
        </div>
      </section>

      <section className="grid md:grid-cols-4 gap-5 mb-8">
        <StatCard
          icon={Wallet}
          label="Total Revenue"
          value={money(totals.revenue)}
          trend="+24%"
        />

        <StatCard
          icon={Building2}
          label="Projects"
          value={totals.projects}
          trend="+12%"
        />

        <StatCard
          icon={Home}
          label="Properties"
          value={totals.properties}
          trend="+18%"
        />

        <StatCard
          icon={ShoppingCart}
          label="Orders"
          value={totals.orders}
          trend="+31%"
        />
      </section>

      <section className="bg-white border border-slate-200 rounded-[28px] p-6 shadow-sm mb-8">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
          <div>
            <h2 className="text-3xl font-black">Analytics Overview</h2>
            <p className="text-slate-500 mt-1">
              Monthly performance summary.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <select
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
              className="bg-slate-50 rounded-xl px-4 py-3 outline-none font-black"
            >
              <option>Weekly</option>
              <option>Monthly</option>
              <option>Yearly</option>
            </select>

            <button
              onClick={() => setPeriod("Monthly")}
              className="border border-slate-300 px-4 py-3 rounded-xl font-black flex items-center gap-2"
            >
              <RefreshCcw size={17} />
              Reset
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <ChartCard title="Revenue Growth">
            <div className="h-72 flex items-end gap-4">
              {reportData.map((item) => (
                <div key={item.month} className="flex-1 flex flex-col items-center gap-2">
                  <div
                    className="w-full rounded-t-2xl bg-pink-600"
                    style={{
                      height: `${(item.revenue / maxRevenue) * 220}px`,
                    }}
                  />
                  <span className="text-sm font-black text-slate-500">
                    {item.month}
                  </span>
                </div>
              ))}
            </div>
          </ChartCard>

          <ChartCard title="Materials Orders">
            <div className="h-72 flex items-end gap-4">
              {reportData.map((item) => (
                <div key={item.month} className="flex-1 flex flex-col items-center gap-2">
                  <div
                    className="w-full rounded-t-2xl bg-[#050816]"
                    style={{
                      height: `${(item.orders / maxOrders) * 220}px`,
                    }}
                  />
                  <span className="text-sm font-black text-slate-500">
                    {item.month}
                  </span>
                </div>
              ))}
            </div>
          </ChartCard>
        </div>
      </section>

      <section className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-[28px] p-6 shadow-sm">
          <h2 className="text-3xl font-black mb-5">Detailed Report</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500">
                  <th className="py-3">Month</th>
                  <th className="py-3">Revenue</th>
                  <th className="py-3">Projects</th>
                  <th className="py-3">Properties</th>
                  <th className="py-3">Orders</th>
                </tr>
              </thead>

              <tbody>
                {reportData.map((item) => (
                  <tr key={item.month} className="border-b border-slate-100">
                    <td className="py-4 font-black">{item.month}</td>
                    <td className="py-4 font-black text-emerald-600">
                      {money(item.revenue)}
                    </td>
                    <td className="py-4">{item.projects}</td>
                    <td className="py-4">{item.properties}</td>
                    <td className="py-4">{item.orders}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <aside className="space-y-6">
          <InsightCard
            icon={TrendingUp}
            title="Growth Insight"
            text="Revenue yiyongereye cyane muri Apr kugeza Jun bitewe na materials orders n’imishinga mishya."
          />

          <InsightCard
            icon={Users}
            title="User Activity"
            text="Abakoresha benshi bari gukoresha marketplace na budget estimator."
          />

          <InsightCard
            icon={ShieldCheck}
            title="Escrow Trust"
            text="Escrow transactions zifasha kongera icyizere hagati y’abaguzi n’abagurisha."
          />

          <InsightCard
            icon={CalendarDays}
            title="Next Action"
            text="Komeza gukurikirana weekly reports no kongera verified suppliers."
          />
        </aside>
      </section>
    </div>
  );
}

function StatCard({ icon: Icon, label, value, trend }) {
  return (
    <div className="bg-white border border-slate-200 rounded-[24px] p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center">
          <Icon size={24} />
        </div>

        <span className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-lg font-black text-sm">
          {trend}
        </span>
      </div>

      <p className="text-slate-500 font-bold mb-1">{label}</p>
      <h3 className="text-2xl font-black">{value}</h3>
    </div>
  );
}

function ChartCard({ title, children }) {
  return (
    <div className="bg-slate-50 rounded-[24px] p-5">
      <div className="flex items-center gap-2 mb-5">
        <BarChart3 className="text-pink-600" />
        <h3 className="text-xl font-black">{title}</h3>
      </div>

      {children}
    </div>
  );
}

function InsightCard({ icon: Icon, title, text }) {
  return (
    <div className="bg-white border border-slate-200 rounded-[24px] p-5 shadow-sm">
      <div className="w-12 h-12 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center mb-4">
        <Icon size={24} />
      </div>

      <h3 className="text-xl font-black mb-2">{title}</h3>
      <p className="text-slate-500 leading-7">{text}</p>
    </div>
  );
}