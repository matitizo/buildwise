import { useEffect, useState } from "react";

export default function Settings() {
  const [settings, setSettings] = useState({
    company: "BuildWise",
    email: "admin@buildwise.com",
    language: "Kinyarwanda",
    darkMode: false,
    notifications: true,
  });

  useEffect(() => {
    const saved = localStorage.getItem("buildwise_settings");

    if (saved) {
      setSettings(JSON.parse(saved));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setSettings({
      ...settings,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const saveSettings = () => {
    localStorage.setItem(
      "buildwise_settings",
      JSON.stringify(settings)
    );

    alert("Settings zibitswe neza ✅");
  };

  return (
    <div>
      <div style={top}>
        <div>
          <h1 style={title}>Settings</h1>
          <p style={subtitle}>
            Hindura uburyo BuildWise ikora.
          </p>
        </div>
      </div>

      <div style={card}>
        <div style={group}>
          <label style={label}>Company Name</label>

          <input
            type="text"
            name="company"
            value={settings.company}
            onChange={handleChange}
            style={input}
          />
        </div>

        <div style={group}>
          <label style={label}>Admin Email</label>

          <input
            type="email"
            name="email"
            value={settings.email}
            onChange={handleChange}
            style={input}
          />
        </div>

        <div style={group}>
          <label style={label}>Language</label>

          <select
            name="language"
            value={settings.language}
            onChange={handleChange}
            style={input}
          >
            <option>Kinyarwanda</option>
            <option>English</option>
            <option>Français</option>
          </select>
        </div>

        <div style={switchRow}>
          <div>
            <h3 style={switchTitle}>Dark Mode</h3>
            <p style={switchSub}>
              Hindura app ibe dark mode
            </p>
          </div>

          <input
            type="checkbox"
            name="darkMode"
            checked={settings.darkMode}
            onChange={handleChange}
            style={checkbox}
          />
        </div>

        <div style={switchRow}>
          <div>
            <h3 style={switchTitle}>Notifications</h3>
            <p style={switchSub}>
              Emera notifications za system
            </p>
          </div>

          <input
            type="checkbox"
            name="notifications"
            checked={settings.notifications}
            onChange={handleChange}
            style={checkbox}
          />
        </div>

        <button
          onClick={saveSettings}
          style={saveBtn}
        >
          💾 Save Settings
        </button>
      </div>
    </div>
  );
}

const top = {
  marginBottom: "24px",
};

const title = {
  margin: 0,
  fontSize: "42px",
  fontWeight: "900",
  color: "#071739",
};

const subtitle = {
  color: "#64748b",
  fontSize: "18px",
};

const card = {
  background: "white",
  padding: "30px",
  borderRadius: "24px",
  maxWidth: "700px",
};

const group = {
  marginBottom: "22px",
};

const label = {
  display: "block",
  marginBottom: "10px",
  fontWeight: "800",
  color: "#071739",
};

const input = {
  width: "100%",
  padding: "16px",
  borderRadius: "14px",
  border: "1px solid #cbd5e1",
  outline: "none",
  fontSize: "16px",
  boxSizing: "border-box",
};

const switchRow = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "#f8fafc",
  padding: "18px",
  borderRadius: "18px",
  marginBottom: "18px",
};

const switchTitle = {
  margin: 0,
  color: "#071739",
};

const switchSub = {
  margin: "6px 0 0",
  color: "#64748b",
};

const checkbox = {
  width: "24px",
  height: "24px",
  cursor: "pointer",
};

const saveBtn = {
  width: "100%",
  background: "#0f52ff",
  color: "white",
  border: "none",
  padding: "16px",
  borderRadius: "16px",
  fontWeight: "900",
  cursor: "pointer",
  fontSize: "16px",
};