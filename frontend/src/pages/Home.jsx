import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={page}>
      <nav style={nav}>
        <div style={brand}>
          <div style={logo}>🏗️</div>
          <h2 style={brandText}>BuildWise</h2>
        </div>

        <div style={links}>
          <button onClick={() => navigate("/login")} style={ghostBtn}>
            Login
          </button>
          <button onClick={() => navigate("/register")} style={primarySmall}>
            Register
          </button>
        </div>
      </nav>

      <section style={hero}>
        <div>
          <span style={badge}>Smart Construction Platform</span>

          <h1 style={title}>
            Uburyo bworoshye bwo kubaka no gucunga imishinga y’ubwubatsi
          </h1>

          <p style={subtitle}>
            BuildWise igufasha gucunga projects, kugura ibikoresho,
            gushaka ibibanza, kubara igiciro no gukurikirana ubwishyu bwa escrow.
          </p>

          <div style={buttons}>
            <button onClick={() => navigate("/register")} style={primaryBtn}>
              Tangira Umushinga
            </button>

            <button onClick={() => navigate("/login")} style={secondaryBtn}>
              Injira muri System
            </button>
          </div>
        </div>

        <div style={heroCard}>
          <div style={bigIcon}>🏢</div>
          <h3>BuildWise Construction OS</h3>
          <p>Projects • Materials • Land • Escrow • Reports</p>
        </div>
      </section>

      <section style={features}>
        <Feature icon="🏗️" title="Gucunga Project" text="Kora no gukurikirana ibikorwa byose by’ubwubatsi." />
        <Feature icon="🧮" title="Kubara Igiciro" text="Bara budget y’umushinga mbere yo gutangira." />
        <Feature icon="📍" title="Isoko ry’Ibibanza" text="Shaka cyangwa utangaze ikibanza kiri ku isoko." />
        <Feature icon="🛒" title="Ibikoresho" text="Gura cyangwa ucunge ibikoresho by’ubwubatsi." />
      </section>
    </div>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div style={featureCard}>
      <div style={featureIcon}>{icon}</div>
      <h3 style={featureTitle}>{title}</h3>
      <p style={featureText}>{text}</p>
    </div>
  );
}

const page = {
  minHeight: "100vh",
  background: "#eef4f8",
  padding: "28px",
  fontFamily: "Inter, Arial, sans-serif",
};

const nav = {
  background: "white",
  borderRadius: "24px",
  padding: "18px 24px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "28px",
  boxShadow: "0 10px 30px rgba(15,23,42,0.06)",
};

const brand = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
};

const logo = {
  width: "54px",
  height: "54px",
  borderRadius: "16px",
  background: "#0057ff",
  display: "grid",
  placeItems: "center",
  fontSize: "28px",
};

const brandText = {
  margin: 0,
  color: "#0f172a",
  fontSize: "28px",
  fontWeight: "900",
};

const links = {
  display: "flex",
  gap: "12px",
};

const ghostBtn = {
  border: "1px solid #cbd5e1",
  background: "white",
  padding: "12px 18px",
  borderRadius: "12px",
  fontWeight: "900",
  cursor: "pointer",
};

const primarySmall = {
  border: "none",
  background: "#0057ff",
  color: "white",
  padding: "12px 18px",
  borderRadius: "12px",
  fontWeight: "900",
  cursor: "pointer",
};

const hero = {
  background: "white",
  borderRadius: "32px",
  padding: "60px",
  display: "grid",
  gridTemplateColumns: "1.2fr 0.8fr",
  gap: "40px",
  alignItems: "center",
  boxShadow: "0 15px 40px rgba(15,23,42,0.08)",
};

const badge = {
  background: "#dbeafe",
  color: "#0057ff",
  padding: "10px 14px",
  borderRadius: "999px",
  fontWeight: "900",
};

const title = {
  fontSize: "56px",
  lineHeight: "1.05",
  color: "#0f172a",
  margin: "24px 0",
  fontWeight: "900",
};

const subtitle = {
  fontSize: "19px",
  color: "#64748b",
  lineHeight: "1.7",
  maxWidth: "720px",
};

const buttons = {
  display: "flex",
  gap: "14px",
  marginTop: "30px",
};

const primaryBtn = {
  background: "#0057ff",
  color: "white",
  border: "none",
  padding: "16px 24px",
  borderRadius: "14px",
  fontWeight: "900",
  cursor: "pointer",
};

const secondaryBtn = {
  background: "#f8fafc",
  color: "#0f172a",
  border: "1px solid #cbd5e1",
  padding: "16px 24px",
  borderRadius: "14px",
  fontWeight: "900",
  cursor: "pointer",
};

const heroCard = {
  background: "linear-gradient(135deg,#0057ff,#00a6ff)",
  color: "white",
  borderRadius: "28px",
  minHeight: "390px",
  display: "grid",
  placeItems: "center",
  textAlign: "center",
  padding: "30px",
};

const bigIcon = {
  fontSize: "120px",
};

const features = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
  gap: "20px",
  marginTop: "28px",
};

const featureCard = {
  background: "white",
  padding: "26px",
  borderRadius: "24px",
  boxShadow: "0 10px 30px rgba(15,23,42,0.06)",
};

const featureIcon = {
  fontSize: "42px",
};

const featureTitle = {
  color: "#0f172a",
  fontSize: "22px",
  marginBottom: "8px",
};

const featureText = {
  color: "#64748b",
  lineHeight: "1.6",
};