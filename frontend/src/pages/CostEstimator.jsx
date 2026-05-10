import { useState } from "react";
import axios from "axios";

export default function CostEstimator() {
  const [projectName, setProjectName] = useState("");
  const [location, setLocation] = useState("");
  const [size, setSize] = useState("");
  const [type, setType] = useState("Inzu");

  const [result, setResult] = useState(null);

  const calculateCost = () => {
    if (!projectName || !location || !size) {
      alert("Uzuza ibisabwa byose");
      return;
    }

    let costPerSquareMeter = 250000;

    if (type === "Villa") {
      costPerSquareMeter = 450000;
    }

    if (type === "Commercial") {
      costPerSquareMeter = 600000;
    }

    const total = Number(size) * costPerSquareMeter;

    setResult(total);
  };

  const saveProject = async () => {
    try {
      await axios.post("http://localhost:5000/api/projects", {
        title: projectName,
        location,
        budget: result,
      });

      alert("Project yabitswe neza ✅");

      setProjectName("");
      setLocation("");
      setSize("");
      setResult(null);
    } catch (error) {
      console.log(error);
      alert("Hari ikibazo cyo kubika project");
    }
  };

  return (
    <div style={page}>
      <div style={top}>
        <h1 style={title}>Cost Estimator</h1>

        <p style={subtitle}>
          Bara amafaranga y’umushinga wawe mbere yo kubaka.
        </p>
      </div>

      <div style={card}>
        <div style={grid}>
          <input
            type="text"
            placeholder="Izina rya Project"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            style={input}
          />

          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            style={input}
          />

          <input
            type="number"
            placeholder="Ubunini m²"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            style={input}
          />

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            style={input}
          >
            <option>Inzu</option>
            <option>Villa</option>
            <option>Commercial</option>
          </select>
        </div>

        <button onClick={calculateCost} style={button}>
          Bara Igiciro
        </button>
      </div>

      {result && (
        <div style={resultCard}>
          <h2 style={resultTitle}>Estimated Cost</h2>

          <h1 style={price}>
            {Number(result).toLocaleString()} RWF
          </h1>

          <p style={details}>
            Project Type: <strong>{type}</strong>
          </p>

          <button onClick={saveProject} style={saveBtn}>
            + Gushyira muri Projects
          </button>
        </div>
      )}
    </div>
  );
}

const page = {
  minHeight: "100vh",
};

const top = {
  marginBottom: "30px",
};

const title = {
  fontSize: "42px",
  fontWeight: "900",
  color: "#071739",
  marginBottom: "10px",
};

const subtitle = {
  color: "#64748b",
  fontSize: "18px",
};

const card = {
  background: "white",
  padding: "30px",
  borderRadius: "24px",
  marginBottom: "30px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
  gap: "18px",
  marginBottom: "20px",
};

const input = {
  padding: "16px",
  borderRadius: "14px",
  border: "1px solid #cbd5e1",
  fontSize: "16px",
  outline: "none",
};

const button = {
  background: "#0f52ff",
  color: "white",
  border: "none",
  padding: "15px 28px",
  borderRadius: "14px",
  fontWeight: "bold",
  cursor: "pointer",
  fontSize: "16px",
};

const resultCard = {
  background: "white",
  padding: "35px",
  borderRadius: "24px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
};

const resultTitle = {
  color: "#64748b",
  marginBottom: "15px",
};

const price = {
  color: "#0f52ff",
  fontSize: "48px",
  marginBottom: "20px",
};

const details = {
  color: "#071739",
  fontSize: "18px",
};

const saveBtn = {
  marginTop: "25px",
  background: "#16a34a",
  color: "white",
  border: "none",
  padding: "15px 28px",
  borderRadius: "14px",
  fontWeight: "bold",
  cursor: "pointer",
  fontSize: "16px",
};