import { useEffect, useState } from "react";
import API from "../api";

export default function LandMarketplace() {
  const [lands, setLands] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    size: "",
    price: "",
  });

  const fetchLands = async () => {
    try {
      const res = await API.get("/lands");
      setLands(res.data);
    } catch (error) {
      console.log("FETCH LANDS ERROR:", error);
      alert("Ibibanza ntibyabashije kuza");
    }
  };

  useEffect(() => {
    fetchLands();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const addLand = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.location || !formData.size || !formData.price) {
      alert("Uzuza ibisabwa byose");
      return;
    }

    try {
      const res = await API.post("/lands", {
        title: formData.title,
        location: formData.location,
        size: formData.size,
        price: Number(formData.price),
        status: "Kiragurishwa",
        image: "🌄",
      });

      setLands([res.data, ...lands]);

      setFormData({
        title: "",
        location: "",
        size: "",
        price: "",
      });

      alert("Ikibanza cyongeweho neza ✅");
    } catch (error) {
      console.log("ADD LAND ERROR:", error);
      alert(error.response?.data?.message || "Hari ikibazo cyo kongeramo ikibanza");
    }
  };

  const deleteLand = async (id) => {
    if (!window.confirm("Urashaka gusiba iki kibanza?")) return;

    try {
      await API.delete(`/lands/${id}`);
      setLands(lands.filter((land) => land._id !== id));
      alert("Ikibanza gisibwe ✅");
    } catch (error) {
      console.log("DELETE LAND ERROR:", error);
      alert("Ntibyakunze gusiba ikibanza");
    }
  };

  return (
    <div style={page}>
      <div style={top}>
        <h1 style={title}>Isoko ry’Ibibanza</h1>
        <p style={subtitle}>Ongeramo, shakisha kandi ucunge ibibanza.</p>
      </div>

      <form onSubmit={addLand} style={form}>
        <input
          type="text"
          name="title"
          placeholder="Izina ry’ikibanza"
          value={formData.title}
          onChange={handleChange}
          style={input}
        />

        <input
          type="text"
          name="location"
          placeholder="Aho giherereye"
          value={formData.location}
          onChange={handleChange}
          style={input}
        />

        <input
          type="text"
          name="size"
          placeholder="Ubunini: 400 m²"
          value={formData.size}
          onChange={handleChange}
          style={input}
        />

        <input
          type="number"
          name="price"
          placeholder="Igiciro"
          value={formData.price}
          onChange={handleChange}
          style={input}
        />

        <button type="submit" style={button}>
          + Ongeramo Ikibanza
        </button>
      </form>

      {lands.length === 0 ? (
        <div style={emptyBox}>Nta bibanza birashyirwamo</div>
      ) : (
        <div style={grid}>
          {lands.map((land) => (
            <div key={land._id} style={card}>
              <div style={imageWrapper}>
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                  alt="Ikibanza"
                  style={image}
                />

                <span style={badge}>Kiragurishwa</span>
              </div>

              <div style={content}>
                <h2 style={landTitle}>{land.title}</h2>

                <p style={muted}>📍 {land.location}</p>
                <p style={muted}>📐 {land.size}</p>

                <h3 style={price}>
                  {Number(land.price || 0).toLocaleString()} RWF
                </h3>

                <button onClick={() => deleteLand(land._id)} style={deleteBtn}>
                  Siba Ikibanza
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const page = {
  minHeight: "100vh",
};

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

const form = {
  background: "white",
  padding: "24px",
  borderRadius: "24px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "16px",
  marginBottom: "28px",
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
  padding: "14px",
  borderRadius: "14px",
  fontWeight: "900",
  cursor: "pointer",
  fontSize: "16px",
};

const emptyBox = {
  background: "white",
  padding: "35px",
  borderRadius: "22px",
  textAlign: "center",
  color: "#64748b",
  fontWeight: "800",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "22px",
};

const card = {
  background: "white",
  borderRadius: "22px",
  overflow: "hidden",
  boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
};

const imageWrapper = {
  position: "relative",
};

const image = {
  width: "100%",
  height: "220px",
  objectFit: "cover",
  display: "block",
};

const badge = {
  position: "absolute",
  top: "14px",
  right: "14px",
  background: "#16a34a",
  color: "white",
  padding: "8px 16px",
  borderRadius: "999px",
  fontWeight: "900",
};

const content = {
  padding: "22px",
};

const landTitle = {
  margin: 0,
  fontSize: "26px",
  color: "#071739",
};

const muted = {
  color: "#64748b",
  fontSize: "16px",
};

const price = {
  color: "#0f52ff",
  fontSize: "24px",
};

const deleteBtn = {
  width: "100%",
  background: "#ef4444",
  color: "white",
  border: "none",
  padding: "14px",
  borderRadius: "14px",
  fontWeight: "900",
  cursor: "pointer",
};