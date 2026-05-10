export default function Escrow() {
  const milestones = [
    { name: "Foundation", status: "Completed", amount: 3000000 },
    { name: "Walls", status: "In Progress", amount: 5000000 },
    { name: "Roofing", status: "Pending", amount: 4000000 },
    { name: "Finishing", status: "Pending", amount: 3000000 },
  ];

  const totalEscrow = milestones.reduce((sum, item) => sum + item.amount, 0);
  const released = milestones
    .filter((item) => item.status === "Completed")
    .reduce((sum, item) => sum + item.amount, 0);

  return (
    <div>
      <div style={top}>
        <div>
          <h1 style={title}>Escrow Monitor</h1>
          <p style={subtitle}>
            Kurikirana amafaranga afungiye kuri project kugeza milestones zirangiye.
          </p>
        </div>

        <button style={primaryBtn}>+ Create Escrow</button>
      </div>

      <div style={statsGrid}>
        <Card label="Total Escrow" value={`${totalEscrow.toLocaleString()} RWF`} />
        <Card label="Released" value={`${released.toLocaleString()} RWF`} />
        <Card label="Remaining" value={`${(totalEscrow - released).toLocaleString()} RWF`} />
      </div>

      <section style={card}>
        <h2 style={sectionTitle}>Project Milestones</h2>

        {milestones.map((item, index) => (
          <div key={index} style={row}>
            <div>
              <h3 style={rowTitle}>{item.name}</h3>
              <p style={muted}>{item.amount.toLocaleString()} RWF</p>
            </div>

            <span
              style={{
                ...badge,
                background:
                  item.status === "Completed"
                    ? "#dcfce7"
                    : item.status === "In Progress"
                    ? "#dbeafe"
                    : "#fef3c7",
                color:
                  item.status === "Completed"
                    ? "#166534"
                    : item.status === "In Progress"
                    ? "#1d4ed8"
                    : "#92400e",
              }}
            >
              {item.status}
            </span>
          </div>
        ))}
      </section>
    </div>
  );
}

function Card({ label, value }) {
  return (
    <div style={statCard}>
      <p style={statLabel}>{label}</p>
      <h2 style={statValue}>{value}</h2>
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

const primaryBtn = {
  background: "#0f52ff",
  color: "white",
  border: "none",
  padding: "14px 22px",
  borderRadius: "14px",
  fontWeight: "900",
  cursor: "pointer",
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
};

const statLabel = {
  color: "#64748b",
  fontWeight: "800",
};

const statValue = {
  color: "#0f52ff",
  margin: 0,
};

const card = {
  background: "white",
  padding: "24px",
  borderRadius: "24px",
};

const sectionTitle = {
  marginTop: 0,
  color: "#071739",
};

const row = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "18px",
  background: "#f8fafc",
  borderRadius: "18px",
  marginBottom: "14px",
};

const rowTitle = {
  margin: 0,
  color: "#071739",
};

const muted = {
  color: "#64748b",
};

const badge = {
  padding: "9px 14px",
  borderRadius: "999px",
  fontWeight: "900",
};