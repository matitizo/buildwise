import React, { useEffect, useMemo, useState } from "react";
import {
  PlusCircle,
  MapPin,
  CalendarDays,
  Trash2,
  Building2,
  UserRound,
  Wallet,
  BarChart3,
  Search,
  RefreshCcw,
  CheckCircle,
  Clock,
} from "lucide-react";

const defaultProjects = [
  {
    id: "1",
    name: "Inzu yo guturamo i Gacuriro",
    location: "Kigali, Gasabo",
    contractor: "Prime Contractors Ltd",
    budget: 120000000,
    progress: 65,
    status: "In Progress",
    startDate: "2026-05-01",
    endDate: "2026-12-20",
  },
  {
    id: "2",
    name: "Apartment Block i Kicukiro",
    location: "Kigali, Kicukiro",
    contractor: "BuildPro Rwanda",
    budget: 350000000,
    progress: 25,
    status: "Planning",
    startDate: "2026-06-10",
    endDate: "2027-03-30",
  },
];

const emptyForm = {
  name: "",
  location: "",
  contractor: "",
  budget: "",
  progress: "",
  status: "Planning",
  startDate: "",
  endDate: "",
};

const statuses = ["Planning", "In Progress", "On Hold", "Completed"];

export default function Projects() {
  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem("buildwise_projects");
    return saved ? JSON.parse(saved) : defaultProjects;
  });

  const [form, setForm] = useState(emptyForm);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem("buildwise_projects", JSON.stringify(projects));
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchSearch =
        project.name.toLowerCase().includes(search.toLowerCase()) ||
        project.location.toLowerCase().includes(search.toLowerCase()) ||
        project.contractor.toLowerCase().includes(search.toLowerCase());

      const matchStatus =
        statusFilter === "All" || project.status === statusFilter;

      return matchSearch && matchStatus;
    });
  }, [projects, search, statusFilter]);

  const totalBudget = projects.reduce(
    (sum, project) => sum + Number(project.budget || 0),
    0
  );

  const averageProgress =
    projects.length === 0
      ? 0
      : Math.round(
          projects.reduce(
            (sum, project) => sum + Number(project.progress || 0),
            0
          ) / projects.length
        );

  function addProject(e) {
    e.preventDefault();

    const newProject = {
      id: Date.now().toString(),
      ...form,
      budget: Number(form.budget || 0),
      progress: Number(form.progress || 0),
    };

    setProjects([newProject, ...projects]);
    setForm(emptyForm);
  }

  function deleteProject(id) {
    setProjects(projects.filter((project) => project.id !== id));
  }

  function resetFilters() {
    setSearch("");
    setStatusFilter("All");
  }

  function money(value) {
    return `${Number(value || 0).toLocaleString()} RWF`;
  }

  function statusClass(status) {
    if (status === "Completed") return "bg-emerald-600 text-white";
    if (status === "In Progress") return "bg-pink-600 text-white";
    if (status === "On Hold") return "bg-yellow-400 text-[#050816]";
    return "bg-slate-900 text-white";
  }

  return (
    <div className="min-h-screen bg-[#f7f8fb] text-[#050816] px-6 py-8">
      <section className="bg-[#050816] text-white rounded-[30px] p-8 md:p-12 mb-8">
        <p className="text-pink-500 font-black mb-3">BUILDWISE PROJECTS</p>

        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Manage construction projects in one place.
        </h1>

        <p className="text-slate-300 max-w-3xl leading-8">
          Ongeramo imishinga, ukurikirane budget, contractor, progress,
          location, start date, end date na status y’umushinga.
        </p>
      </section>

      <section className="grid md:grid-cols-4 gap-5 mb-8">
        <StatCard
          icon={Building2}
          label="Total Projects"
          value={projects.length}
        />

        <StatCard
          icon={Wallet}
          label="Total Budget"
          value={money(totalBudget)}
        />

        <StatCard
          icon={BarChart3}
          label="Average Progress"
          value={`${averageProgress}%`}
        />

        <StatCard
          icon={CheckCircle}
          label="Completed"
          value={projects.filter((p) => p.status === "Completed").length}
        />
      </section>

      <div className="grid lg:grid-cols-3 gap-8">
        <section className="lg:col-span-1 bg-white border border-slate-200 rounded-[28px] p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <PlusCircle className="text-pink-600" size={28} />
            <h2 className="text-3xl font-black">Add Project</h2>
          </div>

          <form onSubmit={addProject} className="space-y-4">
            <input
              required
              placeholder="Project Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="input"
            />

            <input
              required
              placeholder="Location"
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
              className="input"
            />

            <input
              required
              placeholder="Contractor"
              value={form.contractor}
              onChange={(e) =>
                setForm({ ...form, contractor: e.target.value })
              }
              className="input"
            />

            <input
              required
              type="number"
              placeholder="Budget"
              value={form.budget}
              onChange={(e) => setForm({ ...form, budget: e.target.value })}
              className="input"
            />

            <input
              required
              type="number"
              min="0"
              max="100"
              placeholder="Progress %"
              value={form.progress}
              onChange={(e) => setForm({ ...form, progress: e.target.value })}
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

            <div className="grid grid-cols-2 gap-3">
              <input
                type="date"
                value={form.startDate}
                onChange={(e) =>
                  setForm({ ...form, startDate: e.target.value })
                }
                className="input"
              />

              <input
                type="date"
                value={form.endDate}
                onChange={(e) =>
                  setForm({ ...form, endDate: e.target.value })
                }
                className="input"
              />
            </div>

            <button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-xl font-black">
              Save Project
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
                  placeholder="Search project, location, contractor..."
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

          {filteredProjects.length === 0 ? (
            <div className="bg-white border border-slate-200 rounded-[28px] p-10 text-center">
              <Clock className="mx-auto text-pink-600 mb-4" size={42} />
              <h3 className="text-2xl font-black mb-2">
                Nta mushinga ubonetse
              </h3>
              <p className="text-slate-500">
                Gerageza guhindura search cyangwa wongere project nshya.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white border border-slate-200 rounded-[28px] p-6 hover:shadow-2xl hover:-translate-y-1 transition"
                >
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div>
                      <h3 className="text-2xl font-black mb-2">
                        {project.name}
                      </h3>

                      <p className="text-slate-500 flex items-center gap-2">
                        <MapPin size={17} />
                        {project.location}
                      </p>
                    </div>

                    <button
                      onClick={() => deleteProject(project.id)}
                      className="w-10 h-10 rounded-xl bg-red-50 text-red-500 flex items-center justify-center"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-5">
                    <InfoCard
                      icon={Wallet}
                      label="Budget"
                      value={money(project.budget)}
                    />

                    <InfoCard
                      icon={UserRound}
                      label="Contractor"
                      value={project.contractor}
                    />
                  </div>

                  <div className="mb-5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-black">Progress</span>
                      <span className="font-black text-pink-600">
                        {project.progress}%
                      </span>
                    </div>

                    <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-pink-600 rounded-full"
                        style={{
                          width: `${Math.min(
                            Number(project.progress || 0),
                            100
                          )}%`,
                        }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <span
                      className={`px-4 py-2 rounded-xl font-black text-sm ${statusClass(
                        project.status
                      )}`}
                    >
                      {project.status}
                    </span>

                    <div className="text-slate-500 text-sm flex items-center gap-2">
                      <CalendarDays size={16} />
                      {project.startDate || "No start"} →{" "}
                      {project.endDate || "No end"}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>

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