import React, { useEffect, useState } from "react";
import axios from "axios";

export default function LandMarketplace() {
  const [lands, setLands] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    location: "",
    size: "",
    price: "",
  });

  // FETCH LANDS
  const fetchLands = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/lands");
      setLands(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLands();
  }, []);

  // HANDLE INPUT
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ADD LAND
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.location ||
      !formData.size ||
      !formData.price
    ) {
      alert("Uzuza ibisabwa byose");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/lands",
        formData
      );

      setLands([res.data, ...lands]);

      setFormData({
        title: "",
        location: "",
        size: "",
        price: "",
      });

      alert("Ikibanza cyongeweho neza");
    } catch (error) {
      console.log(error);
      alert("Hari ikibazo");
    }
  };

  // DELETE LAND
  const deleteLand = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/lands/${id}`);

      setLands(lands.filter((land) => land._id !== id));

      alert("Ikibanza gisibwe");
    } catch (error) {
      console.log(error);
      alert("Ntibyakunze");
    }
  };

  return (
    <div
      style={{
        background: "#edf2f7",
        minHeight: "100vh",
        padding: "25px",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          background: "white",
          borderRadius: "25px",
          padding: "25px",
          marginBottom: "30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "38px",
              fontWeight: "bold",
              color: "#071739",
              marginBottom: "10px",
            }}
          >
            BuildWise Platform
          </h1>

          <p
            style={{
              fontSize: "18px",
              color: "#64748b",
            }}
          >
            Smart Construction Management System
          </p>
        </div>

        <div style={{ display: "flex", gap: "15px" }}>
          <button style={circleBtn}>🌙</button>
          <button style={circleBtn}>🔔</button>

          <button
            style={{
              border: "none",
              background: "#e2e8f0",
              padding: "12px 22px",
              borderRadius: "18px",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            👤 Admin
          </button>
        </div>
      </div>

      {/* TITLE */}
      <div style={{ marginBottom: "25px" }}>
        <h1
          style={{
            fontSize: "52px",
            fontWeight: "bold",
            color: "#071739",
            marginBottom: "10px",
          }}
        >
          Isoko ry'Ibibanza
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#64748b",
          }}
        >
          Ongeramo, shakisha kandi ucunge ibibanza.
        </p>
      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "25px",
          marginBottom: "35px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "18px",
            marginBottom: "20px",
          }}
        >
          <input
            type="text"
            name="title"
            placeholder="Izina ry'ikibanza"
            value={formData.title}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="text"
            name="location"
            placeholder="Aho giherereye"
            value={formData.location}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="number"
            name="size"
            placeholder="Ubunini (m²)"
            value={formData.size}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="number"
            name="price"
            placeholder="Igiciro"
            value={formData.price}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <button
          type="submit"
          style={{
            background: "#0f52ff",
            color: "white",
            border: "none",
            padding: "14px 28px",
            borderRadius: "14px",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "17px",
          }}
        >
          + Ongeramo Ikibanza
        </button>
      </form>

      {/* LANDS */}
      {lands.length === 0 ? (
        <div
          style={{
            background: "white",
            padding: "40px",
            borderRadius: "20px",
            textAlign: "center",
            color: "#64748b",
            fontSize: "20px",
          }}
        >
          Nta bibanza bihari
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "25px",
          }}
        >
          {lands.map((land) => (
            <div
              key={land._id}
              style={{
                background: "white",
                borderRadius: "22px",
                overflow: "hidden",
                boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
              }}
            >
              {/* IMAGE */}
              <div style={{ position: "relative" }}>
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                  alt=""
                  style={{
                    width: "100%",
                    height: "220px",
                    objectFit: "cover",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    top: "15px",
                    right: "15px",
                    background: "#16a34a",
                    color: "white",
                    padding: "8px 18px",
                    borderRadius: "30px",
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  Kiragurishwa
                </div>
              </div>

              {/* CONTENT */}
              <div style={{ padding: "22px" }}>
                <h2
                  style={{
                    fontSize: "26px",
                    color: "#071739",
                    marginBottom: "12px",
                  }}
                >
                  {land.title}
                </h2>

                <p
                  style={{
                    color: "#64748b",
                    marginBottom: "8px",
                    fontSize: "16px",
                  }}
                >
                  📍 {land.location}
                </p>

                <p
                  style={{
                    color: "#64748b",
                    marginBottom: "8px",
                    fontSize: "16px",
                  }}
                >
                  📐 {land.size} m²
                </p>

                <h3
                  style={{
                    color: "#0f52ff",
                    fontSize: "24px",
                    marginBottom: "20px",
                  }}
                >
                  {Number(land.price).toLocaleString()} Frw
                </h3>

                <button
                  onClick={() => deleteLand(land._id)}
                  style={{
                    width: "100%",
                    background: "#ef4444",
                    color: "white",
                    border: "none",
                    padding: "14px",
                    borderRadius: "14px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    fontSize: "16px",
                  }}
                >
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

const inputStyle = {
  padding: "16px",
  borderRadius: "14px",
  border: "1px solid #cbd5e1",
  fontSize: "16px",
  outline: "none",
};

const circleBtn = {
  width: "55px",
  height: "55px",
  borderRadius: "50%",
  border: "none",
  background: "#e2e8f0",
  fontSize: "20px",
  cursor: "pointer",
};