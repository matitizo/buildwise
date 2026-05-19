import React, { useEffect, useState } from "react";
import {
  UserRound,
  Mail,
  Phone,
  Languages,
  Bell,
  ShieldCheck,
  Save,
  Moon,
  Sun,
  LockKeyhole,
  Building2,
} from "lucide-react";

const defaultSettings = {
  name: "Thierry Ishimwe",
  email: "thierryishimwe072@gmail.com",
  phone: "+250 788 000 000",
  company: "BuildWise Rwanda",
  language: "Kinyarwanda",
  theme: "Light",
  emailNotifications: true,
  smsNotifications: false,
  escrowAlerts: true,
  marketplaceAlerts: true,
  password: "",
};

export default function Settings() {
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem("buildwise_settings");
    return saved ? JSON.parse(saved) : defaultSettings;
  });

  const [savedMessage, setSavedMessage] = useState("");

  useEffect(() => {
    localStorage.setItem("buildwise_settings", JSON.stringify(settings));
  }, [settings]);

  function updateField(field, value) {
    setSettings({ ...settings, [field]: value });
  }

  function saveSettings(e) {
    e.preventDefault();
    localStorage.setItem("buildwise_settings", JSON.stringify(settings));
    setSavedMessage("Settings zabitswe neza ✅");

    setTimeout(() => {
      setSavedMessage("");
    }, 2500);
  }

  return (
    <div className="min-h-screen bg-[#f7f8fb] text-[#050816] px-6 py-8">
      <section className="bg-[#050816] text-white rounded-[30px] p-8 md:p-12 mb-8">
        <p className="text-pink-500 font-black mb-3">BUILDWISE SETTINGS</p>

        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Igenamiterere rya konti yawe.
        </h1>

        <p className="text-slate-300 max-w-3xl leading-8">
          Hindura umwirondoro, ururimi, notifications, theme n’umutekano wa konti
          yawe muri BuildWise.
        </p>
      </section>

      <form onSubmit={saveSettings} className="grid lg:grid-cols-3 gap-8">
        <section className="lg:col-span-2 space-y-6">
          <div className="bg-white border border-slate-200 rounded-[28px] p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <UserRound className="text-pink-600" size={28} />
              <h2 className="text-3xl font-black">Umwirondoro</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Field icon={UserRound} label="Amazina">
                <input
                  value={settings.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  className="input"
                />
              </Field>

              <Field icon={Mail} label="Email">
                <input
                  type="email"
                  value={settings.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  className="input"
                />
              </Field>

              <Field icon={Phone} label="Telefone">
                <input
                  value={settings.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  className="input"
                />
              </Field>

              <Field icon={Building2} label="Company / Business">
                <input
                  value={settings.company}
                  onChange={(e) => updateField("company", e.target.value)}
                  className="input"
                />
              </Field>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-[28px] p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Languages className="text-pink-600" size={28} />
              <h2 className="text-3xl font-black">Ururimi na Theme</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Field icon={Languages} label="Ururimi">
                <select
                  value={settings.language}
                  onChange={(e) => updateField("language", e.target.value)}
                  className="input"
                >
                  <option>Kinyarwanda</option>
                  <option>English</option>
                  <option>French</option>
                </select>
              </Field>

              <Field icon={settings.theme === "Dark" ? Moon : Sun} label="Theme">
                <select
                  value={settings.theme}
                  onChange={(e) => updateField("theme", e.target.value)}
                  className="input"
                >
                  <option>Light</option>
                  <option>Dark</option>
                </select>
              </Field>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-[28px] p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Bell className="text-pink-600" size={28} />
              <h2 className="text-3xl font-black">Notifications</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Toggle
                title="Email Notifications"
                desc="Kubona updates kuri email."
                checked={settings.emailNotifications}
                onChange={() =>
                  updateField("emailNotifications", !settings.emailNotifications)
                }
              />

              <Toggle
                title="SMS Notifications"
                desc="Kubona messages kuri telefone."
                checked={settings.smsNotifications}
                onChange={() =>
                  updateField("smsNotifications", !settings.smsNotifications)
                }
              />

              <Toggle
                title="Escrow Alerts"
                desc="Kumenyeshwa impinduka kuri escrow."
                checked={settings.escrowAlerts}
                onChange={() => updateField("escrowAlerts", !settings.escrowAlerts)}
              />

              <Toggle
                title="Marketplace Alerts"
                desc="Kumenyeshwa listings nshya."
                checked={settings.marketplaceAlerts}
                onChange={() =>
                  updateField("marketplaceAlerts", !settings.marketplaceAlerts)
                }
              />
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-[28px] p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="text-pink-600" size={28} />
              <h2 className="text-3xl font-black">Umutekano</h2>
            </div>

            <Field icon={LockKeyhole} label="Password nshya">
              <input
                type="password"
                placeholder="Andika password nshya"
                value={settings.password}
                onChange={(e) => updateField("password", e.target.value)}
                className="input"
              />
            </Field>
          </div>
        </section>

        <aside className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-[28px] p-6 shadow-sm lg:sticky lg:top-28">
            <div className="w-20 h-20 rounded-3xl bg-pink-600 text-white flex items-center justify-center text-3xl font-black mb-5">
              {settings.name.charAt(0)}
            </div>

            <h3 className="text-2xl font-black mb-1">{settings.name}</h3>
            <p className="text-slate-500 mb-5">{settings.email}</p>

            <div className="space-y-3 mb-6">
              <ProfileLine label="Telefone" value={settings.phone} />
              <ProfileLine label="Company" value={settings.company} />
              <ProfileLine label="Ururimi" value={settings.language} />
              <ProfileLine label="Theme" value={settings.theme} />
            </div>

            <button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-xl font-black flex items-center justify-center gap-2">
              <Save size={18} />
              Save Settings
            </button>

            {savedMessage && (
              <p className="mt-4 bg-emerald-50 text-emerald-700 rounded-xl p-3 font-black text-center">
                {savedMessage}
              </p>
            )}
          </div>
        </aside>
      </form>

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

function Toggle({ title, desc, checked, onChange }) {
  return (
    <button
      type="button"
      onClick={onChange}
      className="bg-slate-50 rounded-2xl p-5 text-left flex items-center justify-between gap-4"
    >
      <div>
        <h4 className="font-black mb-1">{title}</h4>
        <p className="text-slate-500 text-sm">{desc}</p>
      </div>

      <div
        className={`w-12 h-7 rounded-full p-1 transition ${
          checked ? "bg-pink-600" : "bg-slate-300"
        }`}
      >
        <div
          className={`w-5 h-5 bg-white rounded-full transition ${
            checked ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </div>
    </button>
  );
}

function ProfileLine({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-3">
      <span className="text-slate-500 font-bold">{label}</span>
      <span className="font-black text-right">{value}</span>
    </div>
  );
}