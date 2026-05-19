import React, { useEffect, useMemo, useState } from "react";
import {
  ShieldCheck,
  PlusCircle,
  Wallet,
  UserRound,
  FileCheck,
  CheckCircle,
  Clock,
  LockKeyhole,
  Send,
  Trash2,
  Search,
  RefreshCcw,
  BadgeCheck,
} from "lucide-react";

const defaultEscrows = [
  {
    id: "1",
    title: "Reserve Ikibanza i Kanombe",
    buyer: "Jean Claude",
    seller: "Kigali Prime Brokers",
    amount: 35000000,
    type: "Property Purchase",
    milestone: "Documents Verification",
    status: "Pending Verification",
    contractVerified: true,
    createdAt: "2026-05-18",
  },
  {
    id: "2",
    title: "Construction Milestone Payment",
    buyer: "Aline Uwase",
    seller: "Prime Contractors Ltd",
    amount: 12000000,
    type: "Construction Milestone",
    milestone: "Foundation Completed",
    status: "Ready to Release",
    contractVerified: true,
    createdAt: "2026-05-20",
  },
];

const emptyForm = {
  title: "",
  buyer: "",
  seller: "",
  amount: "",
  type: "Property Purchase",
  milestone: "Documents Verification",
  status: "Pending Verification",
  contractVerified: true,
};

const statuses = [
  "Pending Verification",
  "Funds Secured",
  "Ready to Release",
  "Released",
  "Disputed",
];

const types = [
  "Property Purchase",
  "Property Rent",
  "Construction Milestone",
  "Materials Payment",
];

export default function Escrow() {
  const [escrows, setEscrows] = useState(() => {
    const saved = localStorage.getItem("buildwise_escrows");
    return saved ? JSON.parse(saved) : defaultEscrows;
  });

  const [form, setForm] = useState(emptyForm);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem("buildwise_escrows", JSON.stringify(escrows));
  }, [escrows]);

  const filteredEscrows = useMemo(() => {
    return escrows.filter((item) => {
      const matchSearch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.buyer.toLowerCase().includes(search.toLowerCase()) ||
        item.seller.toLowerCase().includes(search.toLowerCase()) ||
        item.type.toLowerCase().includes(search.toLowerCase());

      const matchStatus =
        statusFilter === "All" || item.status === statusFilter;

      return matchSearch && matchStatus;
    });
  }, [escrows, search, statusFilter]);

  const totalSecured = escrows.reduce(
    (sum, item) => sum + Number(item.amount || 0),
    0
  );

  const releasedTotal = escrows
    .filter((item) => item.status === "Released")
    .reduce((sum, item) => sum + Number(item.amount || 0), 0);

  const pendingCount = escrows.filter(
    (item) => item.status !== "Released"
  ).length;

  function money(value) {
    return `${Number(value || 0).toLocaleString()} RWF`;
  }

  function createEscrow(e) {
    e.preventDefault();

    const newEscrow = {
      id: Date.now().toString(),
      ...form,
      amount: Number(form.amount || 0),
      createdAt: new Date().toISOString().slice(0, 10),
    };

    setEscrows([newEscrow, ...escrows]);
    setForm(emptyForm);
  }

  function deleteEscrow(id) {
    setEscrows(escrows.filter((item) => item.id !== id));
  }

  function releasePayment(id) {
    setEscrows(
      escrows.map((item) =>
        item.id === id ? { ...item, status: "Released" } : item
      )
    );
  }

  function markFundsSecured(id) {
    setEscrows(
      escrows.map((item) =>
        item.id === id ? { ...item, status: "Funds Secured" } : item
      )
    );
  }

  function resetFilters() {
    setSearch("");
    setStatusFilter("All");
  }

  function statusClass(status) {
    if (status === "Released") return "bg-emerald-600 text-white";
    if (status === "Ready to Release") return "bg-pink-600 text-white";
    if (status === "Funds Secured") return "bg-blue-600 text-white";
    if (status === "Disputed") return "bg-red-500 text-white";
    return "bg-yellow-400 text-[#050816]";
  }

  return (
    <div className="min-h-screen bg-[#f7f8fb] text-[#050816] px-6 py-8">
      <section className="bg-[#050816] text-white rounded-[30px] p-8 md:p-12 mb-8">
        <p className="text-pink-500 font-black mb-3">BUILDWISE ESCROW</p>

        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Secure payments for property and construction.
        </h1>

        <p className="text-slate-300 max-w-3xl leading-8">
          Bika amafaranga mu mutekano, wemeze contracts, ukurikirane milestones,
          hanyuma urekure payment igihe documents cyangwa akazi byemejwe.
        </p>
      </section>

      <section className="grid md:grid-cols-4 gap-5 mb-8">
        <StatCard icon={Wallet} label="Total Secured" value={money(totalSecured)} />
        <StatCard icon={Send} label="Released" value={money(releasedTotal)} />
        <StatCard icon={Clock} label="Pending" value={pendingCount} />
        <StatCard icon={ShieldCheck} label="Transactions" value={escrows.length} />
      </section>

      <div className="grid lg:grid-cols-3 gap-8">
        <section className="bg-white border border-slate-200 rounded-[28px] p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <PlusCircle className="text-pink-600" size={28} />
            <h2 className="text-3xl font-black">Create Escrow</h2>
          </div>

          <form onSubmit={createEscrow} className="space-y-4">
            <input
              required
              placeholder="Transaction Title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="input"
            />

            <input
              required
              placeholder="Buyer / Client"
              value={form.buyer}
              onChange={(e) => setForm({ ...form, buyer: e.target.value })}
              className="input"
            />

            <input
              required
              placeholder="Seller / Contractor"
              value={form.seller}
              onChange={(e) => setForm({ ...form, seller: e.target.value })}
              className="input"
            />

            <input
              required
              type="number"
              placeholder="Amount"
              value={form.amount}
              onChange={(e) => setForm({ ...form, amount: e.target.value })}
              className="input"
            />

            <select
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
              className="input"
            >
              {types.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>

            <input
              required
              placeholder="Milestone / Reason"
              value={form.milestone}
              onChange={(e) => setForm({ ...form, milestone: e.target.value })}
              className="input"
            />

            <select
              value={form.status}
              onChange={(e) => setForm({ ...form, status: e.target.value })}
              className="input"
            >
              {statuses.map((status) => (
                <option key={status}>{status}</option>
              ))}
            </select>

            <button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-xl font-black flex items-center justify-center gap-2">
              <LockKeyhole size={18} />
              Create Secure Escrow
            </button>
          </form>
        </section>

        <section className="lg:col-span-2 space-y-6">
          <div className="bg-white border border-slate-200 rounded-[28px] p-5 shadow-sm">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="md:col-span-2 bg-slate-50 rounded-xl px-4 py-3 flex items-center gap-3">
                <Search className="text-pink-600" size={20} />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search escrow, buyer, seller, type..."
                  className="bg-transparent outline-none w-full font-semibold"
                />
              </div>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="bg-slate-50 rounded-xl px-4 py-3 outline-none font-semibold"
              >
                <option>All</option>
                {statuses.map((status) => (
                  <option key={status}>{status}</option>
                ))}
              </select>
            </div>

            <button
              onClick={resetFilters}
              className="mt-4 border border-slate-300 px-4 py-2 rounded-xl font-black inline-flex items-center gap-2 hover:bg-slate-50"
            >
              <RefreshCcw size={17} />
              Reset Filters
            </button>
          </div>

          {filteredEscrows.length === 0 ? (
            <div className="bg-white border border-slate-200 rounded-[28px] p-10 text-center">
              <ShieldCheck className="mx-auto text-pink-600 mb-4" size={42} />
              <h3 className="text-2xl font-black mb-2">
                Nta escrow transaction ibonetse
              </h3>
              <p className="text-slate-500">
                Gerageza guhindura search cyangwa wongere transaction nshya.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {filteredEscrows.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-slate-200 rounded-[28px] p-6 hover:shadow-2xl hover:-translate-y-1 transition"
                >
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div>
                      <h3 className="text-2xl font-black mb-2">{item.title}</h3>
                      <p className="text-slate-500 font-semibold">
                        {item.type}
                      </p>
                    </div>

                    <button
                      onClick={() => deleteEscrow(item.id)}
                      className="w-10 h-10 rounded-xl bg-red-50 text-red-500 flex items-center justify-center"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-5">
                    <InfoCard icon={UserRound} label="Buyer" value={item.buyer} />
                    <InfoCard icon={UserRound} label="Seller" value={item.seller} />
                    <InfoCard icon={Wallet} label="Amount" value={money(item.amount)} />
                    <InfoCard icon={FileCheck} label="Milestone" value={item.milestone} />
                  </div>

                  <div className="bg-slate-50 rounded-2xl p-4 mb-5">
                    <div className="flex items-center justify-between gap-3 flex-wrap">
                      <span
                        className={`px-4 py-2 rounded-xl font-black text-sm ${statusClass(
                          item.status
                        )}`}
                      >
                        {item.status}
                      </span>

                      <div className="flex items-center gap-2 text-emerald-600 font-black">
                        <BadgeCheck size={18} />
                        Contract Verified
                      </div>
                    </div>

                    <div className="mt-4 h-3 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          item.status === "Released"
                            ? "bg-emerald-600 w-full"
                            : item.status === "Ready to Release"
                            ? "bg-pink-600 w-3/4"
                            : item.status === "Funds Secured"
                            ? "bg-blue-600 w-1/2"
                            : "bg-yellow-400 w-1/4"
                        }`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => markFundsSecured(item.id)}
                      className="bg-[#050816] hover:bg-black text-white py-3 rounded-xl font-black"
                    >
                      Funds Secured
                    </button>

                    <button
                      onClick={() => releasePayment(item.id)}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-black"
                    >
                      Release Payment
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>

      <section className="mt-8 bg-[#050816] text-white rounded-[30px] p-8">
        <h2 className="text-3xl font-black mb-5">Escrow Workflow</h2>

        <div className="grid md:grid-cols-4 gap-5">
          <Workflow number="1" title="Buyer deposits funds" />
          <Workflow number="2" title="Contract is verified" />
          <Workflow number="3" title="Milestone is approved" />
          <Workflow number="4" title="Payment is released" />
        </div>
      </section>

      <style>{`
        .input {
          width: 100%;
          background: #f8fafc;
          border-radius: 14px;
          padding: 14px 16px;
          outline: none;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
}

function StatCard({ icon: Icon, label, value }) {
  return (
    <div className="bg-white border border-slate-200 rounded-[24px] p-5 shadow-sm">
      <div className="w-12 h-12 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center mb-4">
        <Icon size={24} />
      </div>

      <p className="text-slate-500 font-bold mb-1">{label}</p>
      <h3 className="text-2xl font-black">{value}</h3>
    </div>
  );
}

function InfoCard({ icon: Icon, label, value }) {
  return (
    <div className="bg-slate-50 rounded-2xl p-4">
      <Icon size={20} className="text-pink-600 mb-2" />
      <p className="text-slate-500 text-sm">{label}</p>
      <h4 className="font-black truncate">{value}</h4>
    </div>
  );
}

function Workflow({ number, title }) {
  return (
    <div className="bg-white/10 border border-white/10 rounded-2xl p-5">
      <div className="w-10 h-10 rounded-full bg-pink-600 flex items-center justify-center font-black mb-4">
        {number}
      </div>

      <h3 className="font-black">{title}</h3>
    </div>
  );
}