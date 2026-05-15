import React from "react";

const stats = [
  {
    title: "Users",
    value: "1,245",
    icon: "👥",
  },
  {
    title: "Listings",
    value: "856",
    icon: "🏘️",
  },
  {
    title: "Transactions",
    value: "312",
    icon: "💳",
  },
  {
    title: "Revenue",
    value: "48M Frw",
    icon: "📈",
  },
];

const adminModules = [
  "User Management",
  "Listing Approval",
  "Payment Tracking",
  "Fraud Detection",
  "Analytics",
  "Reports",
];

export default function Admin() {
  return (
    <div className="space-y-10">
      {/* HERO */}
      <section className="rounded-[2rem] bg-slate-950 text-white p-8 md:p-12">
        <p className="text-rose-400 font-bold mb-3">
          BuildWise Admin Control Center
        </p>

        <h1 className="text-4xl md:text-6xl font-black leading-tight">
          Manage the entire BuildWise ecosystem.
        </h1>

        <p className="text-slate-300 text-lg mt-6">
          Users, listings, transactions, reports na analytics
          byose muri dashboard imwe.
        </p>
      </section>

      {/* STATS */}
      <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((item) => (
          <div
            key={item.title}
            className="card p-6 hover:shadow-xl transition"
          >
            <div className="text-5xl mb-5">
              {item.icon}
            </div>

            <h2 className="text-4xl font-black">
              {item.value}
            </h2>

            <p className="text-slate-500 mt-2">
              {item.title}
            </p>
          </div>
        ))}
      </section>

      {/* ADMIN MODULES */}
      <section className="card p-8">
        <h2 className="text-3xl font-black text-slate-950">
          Admin Modules
        </h2>

        <div className="grid md:grid-cols-3 xl:grid-cols-6 gap-4 mt-6">
          {adminModules.map((module) => (
            <div
              key={module}
              className="bg-slate-50 rounded-2xl p-5 border border-slate-200 hover:border-rose-300 hover:text-rose-500 transition"
            >
              <h3 className="font-black">
                ⚙️ {module}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* LISTING APPROVAL */}
      <section className="bg-white rounded-[2rem] border border-slate-200 p-8">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <p className="text-blue-500 font-bold mb-2">
              Marketplace Moderation
            </p>

            <h2 className="text-3xl font-black text-slate-950">
              Pending Listing Approvals
            </h2>
          </div>

          <button className="btn-primary">
            View All Listings
          </button>
        </div>

        <div className="overflow-x-auto mt-8">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200 text-left">
                <th className="pb-4 font-black">Listing</th>
                <th className="pb-4 font-black">Type</th>
                <th className="pb-4 font-black">Seller</th>
                <th className="pb-4 font-black">Status</th>
                <th className="pb-4 font-black">Action</th>
              </tr>
            </thead>

            <tbody>
              {[
                {
                  listing: "Kibagabaga Plot",
                  type: "Land",
                  seller: "Jean Claude",
                },
                {
                  listing: "Luxury Villa",
                  type: "House",
                  seller: "Real Estate Ltd",
                },
              ].map((item) => (
                <tr
                  key={item.listing}
                  className="border-b border-slate-100"
                >
                  <td className="py-5 font-bold">
                    {item.listing}
                  </td>

                  <td className="py-5">
                    {item.type}
                  </td>

                  <td className="py-5">
                    {item.seller}
                  </td>

                  <td className="py-5">
                    <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-bold">
                      Pending
                    </span>
                  </td>

                  <td className="py-5">
                    <div className="flex gap-2">
                      <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full font-bold transition">
                        Approve
                      </button>

                      <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full font-bold transition">
                        Reject
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* PAYMENT TRACKING */}
      <section className="card p-8">
        <p className="text-green-500 font-bold mb-2">
          Payment Tracking
        </p>

        <h2 className="text-3xl font-black text-slate-950">
          Escrow & Transaction Monitoring
        </h2>

        <div className="grid md:grid-cols-4 gap-4 mt-6">
          {[
            "Buyer Payments",
            "Escrow Funds",
            "Released Payments",
            "Commission Tracking",
          ].map((item) => (
            <div
              key={item}
              className="bg-slate-50 rounded-2xl p-5 border border-slate-200"
            >
              <h3 className="font-black">
                💰 {item}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}