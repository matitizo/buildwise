import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [lands, setLands] = useState([]);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const [projectsRes, materialsRes, landsRes] = await Promise.all([
        axios.get("http://localhost:5000/api/projects"),
        axios.get("http://localhost:5000/api/materials"),
        axios.get("http://localhost:5000/api/lands"),
      ]);

      setProjects(projectsRes.data);
      setMaterials(materialsRes.data);
      setLands(landsRes.data);
    } catch (error) {
      console.log(error);
    }
  };

  const totalProjectBudget = projects.reduce(
    (sum, project) => sum + Number(project.budget || 0),
    0
  );

  const totalLandValue = lands.reduce(
    (sum, land) => sum + Number(land.price || 0),
    0
  );

  const totalMaterialValue = materials.reduce(
    (sum, item) => sum + Number(item.price || 0) * Number(item.stock || 0),
    0
  );

  return (
    <div>
      <div style={hero}>
        <div>
          <h1 style={heroTitle}>Dashboard ya BuildWise</h1>
          <p style={heroText}>
            Reba incamake y’imishinga, ibibanza, ibikoresho n’amafaranga.
          </p>
        </div>

        <div style={heroIcon}>🏗️</div>
      </div>

      <div style={statsGrid}>
        <Card title="Projects" value={projects.length} icon="🏗️" color="#0f52ff" />
        <Card title="Ibikoresho" value={materials.length} icon="🧱" color="#16a34a" />
        <Card title="Ibibanza" value={lands.length} icon="📍" color="#f59e0b" />
        <Card
          title="Budget Projects"
          value={`${totalProjectBudget.toLocaleString()} RWF`}
          icon="💰"
          color="#7c3aed"
        />
      </div>

      <div style={grid}>
        <section style={cardLarge}>
          <h2 style={sectionTitle}>Projects ziheruka</h2>

          {projects.slice(0, 5).map((project) => (
            <Row
              key={project._id}
              title={project.title}
              sub={`📍 ${project.location}`}
              value={`${Number(project.budget || 0).toLocaleString()} RWF`}
            />
          ))}
        </section>

        <section style={card}>
          <h2 style={sectionTitle}>Incamake y’Umutungo</h2>

          <Summary label="Agaciro k’ibibanza" value={`${totalLandValue.toLocaleString()} RWF`} />
          <Summary
            label="Agaciro k’ibikoresho"
            value={`${totalMaterialValue.toLocaleString()} RWF`}
          />
          <Summary
            label="Project budget"
            value={`${totalProjectBudget.toLocaleString()} RWF`}
          />
        </section>
      </div>
    </div>
  );
}

function Card({ title, value, icon, color }) {
  return (
    <div style={statCard}>
      <div style={{ ...iconBox, background: color }}>{icon}</div>
      <p style={statTitle}>{title}</p>
      <h2 style={statValue}>{value}</h2>
    </div>
  );
}

function Row({ title, sub, value }) {
  return (
    <div style={row}>
      <div>
        <h3 style={rowTitle}>{title}</h3>
        <p style={muted}>{sub}</p>
      </div>

      <strong style={rowValue}>{value}</strong>
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

const hero = {
  background: "linear-gradient(135deg,#0f52ff,#00a6ff)",
  color: "white",
  padding: "34px",
  borderRadius: "28px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "24px",
};

const heroTitle = {
  margin: 0,
  fontSize: "42px",
  fontWeight: "900",
};

const heroText = {
  fontSize: "18px",
  opacity: 0.9,
};

const heroIcon = {
  fontSize: "90px",
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
  width: "58px",
  height: "58px",
  borderRadius: "18px",
  display: "grid",
  placeItems: "center",
  fontSize: "28px",
  marginBottom: "14px",
  color: "white",
};

const statTitle = {
  color: "#64748b",
  fontWeight: "800",
  margin: 0,
};

const statValue = {
  color: "#071739",
  fontSize: "28px",
  margin: "10px 0 0",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "2fr 1fr",
  gap: "24px",
};

const cardLarge = {
  background: "white",
  padding: "24px",
  borderRadius: "24px",
};

const card = {
  background: "white",
  padding: "24px",
  borderRadius: "24px",
};

const sectionTitle = {
  marginTop: 0,
  color: "#071739",
  fontSize: "24px",
  fontWeight: "900",
};

const row = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px 0",
  borderBottom: "1px solid #e2e8f0",
};

const rowTitle = {
  margin: 0,
  color: "#071739",
};

const muted = {
  color: "#64748b",
  margin: "6px 0 0",
};

const rowValue = {
  color: "#0f52ff",
};

const summaryRow = {
  display: "flex",
  justifyContent: "space-between",
  gap: "12px",
  background: "#f8fafc",
  padding: "16px",
  borderRadius: "16px",
  marginBottom: "14px",
  color: "#071739",
};