import { useEffect, useState } from "react";
import axios from "axios";

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    loadNotifications();
  }, []);

  const loadNotifications = async () => {
    try {
      const [projects, lands, materials] = await Promise.all([
        axios.get("http://localhost:5000/api/projects"),
        axios.get("http://localhost:5000/api/lands"),
        axios.get("http://localhost:5000/api/materials"),
      ]);

      const newNotifications = [];

      // PROJECTS
      projects.data.slice(0, 5).forEach((project) => {
        newNotifications.push({
          type: "project",
          icon: "🏗️",
          title: `Project nshya: ${project.title}`,
          message: `Project iri i ${project.location}`,
          time: "Ubu nyine",
        });
      });

      // LANDS
      lands.data.slice(0, 5).forEach((land) => {
        newNotifications.push({
          type: "land",
          icon: "📍",
          title: `Ikibanza gishya`,
          message: `${land.title} - ${land.location}`,
          time: "Uyu munsi",
        });
      });

      // MATERIALS
      materials.data.slice(0, 5).forEach((item) => {
        if (item.stock <= 5) {
          newNotifications.push({
            type: "warning",
            icon: "⚠️",
            title: `Stock iri hasi`,
            message: `${item.name} isigaje ${item.stock}`,
            time: "Attention",
          });
        } else {
          newNotifications.push({
            type: "material",
            icon: "🧱",
            title: `Igikoresho gishya`,
            message: `${item.name} cyinjiye muri system`,
            time: "Recent",
          });
        }
      });

      setNotifications(newNotifications);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div style={top}>
        <h1 style={title}>Notifications</h1>

        <button style={clearBtn}>
          Clear All
        </button>
      </div>

      {notifications.length === 0 ? (
        <div style={emptyBox}>
          Nta notifications ziraboneka
        </div>
      ) : (
        <div style={list}>
          {notifications.map((item, index) => (
            <div key={index} style={card}>
              <div style={iconBox}>
                {item.icon}
              </div>

              <div style={{ flex: 1 }}>
                <h3 style={cardTitle}>
                  {item.title}
                </h3>

                <p style={message}>
                  {item.message}
                </p>
              </div>

              <span style={time}>
                {item.time}
              </span>
            </div>
          ))}
        </div>
      )}
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

const clearBtn = {
  background: "#ef4444",
  color: "white",
  border: "none",
  padding: "14px 20px",
  borderRadius: "14px",
  fontWeight: "900",
  cursor: "pointer",
};

const list = {
  display: "flex",
  flexDirection: "column",
  gap: "18px",
};

const card = {
  background: "white",
  padding: "22px",
  borderRadius: "22px",
  display: "flex",
  alignItems: "center",
  gap: "18px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
};

const iconBox = {
  width: "60px",
  height: "60px",
  borderRadius: "18px",
  background: "#f1f5f9",
  display: "grid",
  placeItems: "center",
  fontSize: "28px",
};

const cardTitle = {
  margin: 0,
  color: "#071739",
};

const message = {
  margin: "8px 0 0",
  color: "#64748b",
};

const time = {
  color: "#94a3b8",
  fontWeight: "700",
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