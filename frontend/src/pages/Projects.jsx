import { useEffect, useState } from "react";
import axios from "axios";

export default function Projects() {
  const API = "http://localhost:5000/api/projects";

  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState("");

  const fetchProjects = async () => {
    try {
      const res = await axios.get(API);
      setProjects(res.data);
    } catch (error) {
      console.log(error);
      alert("Projects ntizabashije kuza");
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const deleteProject = async (id) => {
    if (!window.confirm("Urashaka koko gusiba iyi project?")) return;

    try {
      await axios.delete(`${API}/${id}`);
      setProjects(projects.filter((project) => project._id !== id));
    } catch (error) {
      console.log(error);
      alert("Project yanze gusibika");
    }
  };

  const filteredProjects = projects.filter((project) =>
    `${project.title} ${project.location}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const totalBudget = projects.reduce(
    (sum, project) => sum + Number(project.budget || 0),
    0
  );

  return (
    <div>
      <div style={top}>
        <div>
          <h1 style={title}>Projects</h1>
          <p style={subtitle}>
            Imishinga yose ibitswe muri BuildWise MongoDB.
          </p>
        </div>
      </div>

      <div style={statsGrid}>
        <div style={statCard}>
          <p style={statLabel}>Projects zose</p>
          <h2 style={statValue}>{projects.length}</h2>
        </div>

        <div style={statCard}>
          <p style={statLabel}>Budget yose</p>
          <h2 style={statValue}>{totalBudget.toLocaleString()} RWF</h2>
        </div>

        <div style={statCard}>
          <p style={statLabel}>Pending</p>
          <h2 style={statValue}>
            {projects.filter((p) => p.status === "Pending").length}
          </h2>
        </div>
      </div>

      <input
        style={searchInput}
        placeholder="Shakisha project..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredProjects.length === 0 ? (
        <div style={emptyBox}>Nta project iraboneka</div>
      ) : (
        <div style={grid}>
          {filteredProjects.map((project) => (
            <div key={project._id} style={card}>
              <div style={imageBox}>🏗️</div>

              <div style={content}>
                <h2 style={projectTitle}>{project.title}</h2>

                <p style={muted}>📍 {project.location}</p>

                <h3 style={budget}>
                  {Number(project.budget || 0).toLocaleString()} RWF
                </h3>

                <div style={progressBg}>
                  <div
                    style={{
                      ...progressFill,
                      width: `${project.progress || 0}%`,
                    }}
                  />
                </div>

                <p style={status}>Status: {project.status || "Pending"}</p>

                <button
                  onClick={() => deleteProject(project._id)}
                  style={deleteBtn}
                >
                  Siba Project
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
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

const statsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "18px",
  marginBottom: "24px",
};

const statCard = {
  background: "white",
  padding: "24px",
  borderRadius: "22px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
};

const statLabel = {
  color: "#64748b",
  margin: 0,
  fontWeight: "800",
};

const statValue = {
  color: "#0f52ff",
  fontSize: "30px",
  margin: "10px 0 0",
};

const searchInput = {
  width: "100%",
  padding: "16px",
  borderRadius: "16px",
  border: "1px solid #cbd5e1",
  outline: "none",
  marginBottom: "24px",
  boxSizing: "border-box",
  fontSize: "16px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "22px",
};

const card = {
  background: "white",
  borderRadius: "24px",
  overflow: "hidden",
  boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
};

const imageBox = {
  height: "180px",
  background: "linear-gradient(135deg,#0f52ff,#00a6ff)",
  display: "grid",
  placeItems: "center",
  fontSize: "70px",
};

const content = {
  padding: "22px",
};

const projectTitle = {
  margin: 0,
  fontSize: "26px",
  color: "#071739",
};

const muted = {
  color: "#64748b",
  fontSize: "16px",
};

const budget = {
  color: "#0f52ff",
  fontSize: "24px",
};

const progressBg = {
  height: "10px",
  background: "#e2e8f0",
  borderRadius: "999px",
  overflow: "hidden",
  marginBottom: "12px",
};

const progressFill = {
  height: "100%",
  background: "#16a34a",
};

const status = {
  color: "#64748b",
  fontWeight: "800",
};

const deleteBtn = {
  width: "100%",
  marginTop: "16px",
  background: "#ef4444",
  color: "white",
  border: "none",
  padding: "14px",
  borderRadius: "14px",
  fontWeight: "900",
  cursor: "pointer",
};

const emptyBox = {
  background: "white",
  padding: "40px",
  borderRadius: "22px",
  textAlign: "center",
  color: "#64748b",
  fontSize: "18px",
  fontWeight: "800",
};