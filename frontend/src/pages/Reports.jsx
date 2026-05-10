import { useEffect, useState } from "react";
import axios from "axios";

export default function Reports() {
  const [projects, setProjects] = useState([]);
  const [lands, setLands] = useState([]);
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    const [p, l, m] = await Promise.all([
      axios.get("http://localhost:5000/api/projects"),
      axios.get("http://localhost:5000/api/lands"),
      axios.get("http://localhost:5000/api/materials"),
    ]);

    setProjects(p.data);
    setLands(l.data);
    setMaterials(m.data);
  };

  const projectBudget = projects.reduce((sum, item) => sum + Number(item.budget || 0), 0);
  const landValue = lands.reduce((sum, item) => sum + Number(item.price || 0), 0);
  const materialValue = materials.reduce(
    (sum, item) => sum + Number(item.price || 0) * Number(item.stock || 0),
    0
  );

  return (
    <div>
      <div style={top}>
        <div>
          <h1 style={title}>Raporo</h1>
          <p style={subtitle}>Incamake y’imishinga, ibibanza n’ibikoresho.</p>
        </div>

        <button style={exportBtn}>⬇️ Export PDF</button>
      </div>

      <div style={statsGrid}>
        <Card label="Projects" value={projects.length} icon="🏗️" />
        <Card label="Ibibanza" value={lands.length} icon="📍" />
        <Card label="Ibikoresho" value={materials.length} icon="🧱" />
        <Card label="Total Value" value={`${(projectBudget + landValue + materialValue).toLocaleString()} RWF`} icon="💰" />
      </div>

      <section style={card}>
        <h2 style={sectionTitle}>Financial Summary</h2>

        <Summary label="Project Budget" value={`${projectBudget.toLocaleString()} RWF`} />
        <Summary label="Land Value" value={`${landValue.toLocaleString()} RWF`} />
        <Summary label="Material Stock Value" value={`${materialValue.toLocaleString()} RWF`} />
      </section>
    </div>
  );
}

function Card({ label, value, icon }) {
  return (
    <div style={statCard}>
      <div style={iconBox}>{icon}</div>
      <p style={statLabel}>{label}</p>
      <h2 style={statValue}>{value}</h2>
    </div>
  );
}

function Summary({ label, value }) {
  return (
    <div style={summaryRow}>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

const top = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
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

const exportBtn = {
  background: "#0f52ff",
  color: "white",
  border: "none",
  padding: "14px 22px",
  borderRadius: "14px",
  fontWeight: "900",
};

const statsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "18px",
  marginBottom: "24px",
};

const statCard = {
  background: "white",
  padding: "24px",
  borderRadius: "24px",
  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
};

const iconBox = {
  fontSize: "38px",
  marginBottom: "12px",
};

const statLabel = {
  color: "#64748b",
  fontWeight: "800",
};

const statValue = {
  color: "#071739",
  fontSize: "28px",
  margin: 0,
};

const card = {
  background: "white",
  padding: "24px",
  borderRadius: "24px",
};

const sectionTitle = {
  color: "#071739",
  marginTop: 0,
};

const summaryRow = {
  display: "flex",
  justifyContent: "space-between",
  background: "#f8fafc",
  padding: "16px",
  borderRadius: "16px",
  marginBottom: "14px",
  color: "#071739",
};