import { useParams } from "react-router-dom";

export default function LandDetails() {
  const { id } = useParams();

  return (
    <div style={container}>
      <div style={hero}>
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          alt="land"
          style={heroImage}
        />

        <div style={overlay}>
          <span style={badge}>Iragurishwa</span>

          <h1 style={title}>Ikibanza cya Modern Estate</h1>

          <p style={location}>📍 Kigali - Kicukiro</p>
        </div>
      </div>

      <div style={content}>
        <div style={left}>
          <div style={card}>
            <h2 style={sectionTitle}>Ibisobanuro</h2>

            <p style={text}>
              Iki ni ikibanza cyiza cyane kiri ahantu heza ho gutura
              cyangwa kubakamo ibikorwa by’ubucuruzi.
            </p>
          </div>

          <div style={card}>
            <h2 style={sectionTitle}>Amakuru y’Ikibanza</h2>

            <div style={infoGrid}>
              <div style={infoBox}>
                <h3 style={infoTitle}>Ingano</h3>
                <p style={infoValue}>400 m²</p>
              </div>

              <div style={infoBox}>
                <h3 style={infoTitle}>Igiciro</h3>
                <p style={infoValue}>30,000,000 RWF</p>
              </div>

              <div style={infoBox}>
                <h3 style={infoTitle}>Status</h3>
                <p style={infoValue}>Iragurishwa</p>
              </div>

              <div style={infoBox}>
                <h3 style={infoTitle}>Code</h3>
                <p style={infoValue}>BW-{id}</p>
              </div>
            </div>
          </div>
        </div>

        <div style={right}>
          <div style={contactCard}>
            <h2 style={contactTitle}>Hamagara Umucuruzi</h2>

            <button style={callBtn}>
              📞 Hamagara
            </button>

            <button style={messageBtn}>
              💬 Ohereza Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const container = {
  padding: "30px",
  background: "#f1f5f9",
  minHeight: "100vh",
};

const hero = {
  position: "relative",
  height: "420px",
  borderRadius: "30px",
  overflow: "hidden",
};

const heroImage = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const overlay = {
  position: "absolute",
  inset: 0,
  background: "rgba(0,0,0,0.4)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  padding: "40px",
};

const badge = {
  background: "#16a34a",
  color: "white",
  padding: "10px 18px",
  borderRadius: "999px",
  width: "fit-content",
  fontWeight: "900",
  marginBottom: "20px",
};

const title = {
  color: "white",
  fontSize: "52px",
  margin: 0,
  fontWeight: "900",
};

const location = {
  color: "white",
  fontSize: "22px",
};

const content = {
  display: "grid",
  gridTemplateColumns: "2fr 1fr",
  gap: "30px",
  marginTop: "30px",
};

const left = {
  display: "flex",
  flexDirection: "column",
  gap: "24px",
};

const right = {};

const card = {
  background: "white",
  borderRadius: "24px",
  padding: "28px",
};

const sectionTitle = {
  marginTop: 0,
  color: "#0f172a",
  fontSize: "28px",
};

const text = {
  color: "#475569",
  lineHeight: 1.8,
  fontSize: "18px",
};

const infoGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
  gap: "18px",
};

const infoBox = {
  background: "#f8fafc",
  padding: "22px",
  borderRadius: "20px",
};

const infoTitle = {
  color: "#64748b",
  margin: 0,
};

const infoValue = {
  color: "#0f172a",
  fontWeight: "900",
  fontSize: "22px",
};

const contactCard = {
  background: "white",
  borderRadius: "24px",
  padding: "28px",
  position: "sticky",
  top: "20px",
};

const contactTitle = {
  marginTop: 0,
  color: "#0f172a",
};

const callBtn = {
  width: "100%",
  background: "#16a34a",
  color: "white",
  border: "none",
  padding: "16px",
  borderRadius: "16px",
  fontWeight: "900",
  fontSize: "18px",
  marginBottom: "16px",
  cursor: "pointer",
};

const messageBtn = {
  width: "100%",
  background: "#0057ff",
  color: "white",
  border: "none",
  padding: "16px",
  borderRadius: "16px",
  fontWeight: "900",
  fontSize: "18px",
  cursor: "pointer",
};