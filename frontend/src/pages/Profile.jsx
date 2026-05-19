import React, { useEffect, useState } from "react";
import {
  UserRound,
  Mail,
  Phone,
  ShieldCheck,
  Heart,
  Building2,
  LogOut,
  Settings,
  LayoutDashboard,
} from "lucide-react";
import { Link } from "react-router-dom";

const defaultProfile = {
  name: "Thierry Ishimwe",
  email: "thierryishimwe072@gmail.com",
  phone: "+250 788 000 000",
  role: "Admin",
  company: "BuildWise Rwanda",
};

export default function Profile() {
  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem("buildwise_profile");
    return saved ? JSON.parse(saved) : defaultProfile;
  });

  useEffect(() => {
    localStorage.setItem("buildwise_profile", JSON.stringify(profile));
  }, [profile]);

  function updateProfile(field, value) {
    setProfile({ ...profile, [field]: value });
  }

  return (
    <div className="min-h-screen bg-[#f7f8fb] text-[#050816] px-6 py-8">
      <section className="bg-[#050816] text-white rounded-[30px] p-8 md:p-12 mb-8">
        <p className="text-pink-500 font-black mb-3">BUILDWISE PROFILE</p>

        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Konti yawe ya BuildWise
        </h1>

        <p className="text-slate-300 max-w-3xl">
          Reba umwirondoro wawe, role, saved properties, settings na shortcuts.
        </p>
      </section>

      <div className="grid lg:grid-cols-3 gap-8">
        <aside className="bg-white rounded-[28px] border border-slate-200 p-6 shadow-sm">
          <div className="w-24 h-24 rounded-[28px] bg-pink-600 text-white flex items-center justify-center text-4xl font-black mb-5">
            {profile.name.charAt(0)}
          </div>

          <h2 className="text-3xl font-black mb-1">{profile.name}</h2>
          <p className="text-slate-500 mb-4">{profile.email}</p>

          <div className="bg-emerald-50 text-emerald-700 rounded-2xl p-4 font-black flex items-center gap-2 mb-6">
            <ShieldCheck size={20} />
            Verified {profile.role}
          </div>

          <div className="space-y-3">
            <Link
              to="/admin"
              className="w-full bg-[#050816] text-white py-3 rounded-xl font-black flex items-center justify-center gap-2"
            >
              <LayoutDashboard size={18} />
              Admin Dashboard
            </Link>

            <Link
              to="/settings"
              className="w-full bg-slate-100 py-3 rounded-xl font-black flex items-center justify-center gap-2"
            >
              <Settings size={18} />
              Settings
            </Link>

            <Link
              to="/login"
              className="w-full bg-red-50 text-red-600 py-3 rounded-xl font-black flex items-center justify-center gap-2"
            >
              <LogOut size={18} />
              Logout
            </Link>
          </div>
        </aside>

        <main className="lg:col-span-2 space-y-6">
          <section className="bg-white rounded-[28px] border border-slate-200 p-6 shadow-sm">
            <h2 className="text-3xl font-black mb-6">Umwirondoro</h2>

            <div className="grid md:grid-cols-2 gap-4">
              <Field icon={UserRound} label="Amazina">
                <input
                  value={profile.name}
                  onChange={(e) => updateProfile("name", e.target.value)}
                  className="input"
                />
              </Field>

              <Field icon={Mail} label="Email">
                <input
                  value={profile.email}
                  onChange={(e) => updateProfile("email", e.target.value)}
                  className="input"
                />
              </Field>

              <Field icon={Phone} label="Telefone">
                <input
                  value={profile.phone}
                  onChange={(e) => updateProfile("phone", e.target.value)}
                  className="input"
                />
              </Field>

              <Field icon={ShieldCheck} label="Role">
                <select
                  value={profile.role}
                  onChange={(e) => updateProfile("role", e.target.value)}
                  className="input"
                >
                  <option>Admin</option>
                  <option>Owner</option>
                  <option>Broker</option>
                  <option>Agent</option>
                  <option>Client</option>
                </select>
              </Field>
            </div>
          </section>

          <section className="grid md:grid-cols-3 gap-5">
            <ProfileCard icon={Heart} title="Saved Properties" value="12" />
            <ProfileCard icon={Building2} title="My Listings" value="8" />
            <ProfileCard icon={ShieldCheck} title="Escrow Deals" value="5" />
          </section>
        </main>
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

function Field({ icon: Icon, label, children }) {
  return (
    <div>
      <label className="font-black mb-2 flex items-center gap-2">
        <Icon size={18} className="text-pink-600" />
        {label}
      </label>
      {children}
    </div>
  );
}

function ProfileCard({ icon: Icon, title, value }) {
  return (
    <div className="bg-white border border-slate-200 rounded-[24px] p-5 shadow-sm">
      <div className="w-12 h-12 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center mb-4">
        <Icon size={24} />
      </div>
      <p className="text-slate-500 font-bold">{title}</p>
      <h3 className="text-3xl font-black">{value}</h3>
    </div>
  );
}