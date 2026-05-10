import { useEffect, useState } from "react";
import axios from "axios";

export default function Materials() {
  const API = "http://localhost:5000/api/materials";

  const [materials, setMaterials] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    stock: "",
    category: "",
  });

  const fetchMaterials = async () => {
    try {
      const res = await axios.get(API);
      setMaterials(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMaterials();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const addMaterial = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.price || !formData.stock || !formData.category) {
      alert("Uzuza ibisabwa byose");
      return;
    }

    try {
      const res = await axios.post(API, {
        name: formData.name,
        price: Number(formData.price),
        stock: Number(formData.stock),
        category: formData.category,
        image: "🧱",
      });

      setMaterials([res.data, ...materials]);

      setFormData({
        name: "",
        price: "",
        stock: "",
        category: "",
      });

      alert("Igikoresho cyongeweho neza ✅");
    } catch (error) {
      console.log(error);
      alert("Hari ikibazo cyo kongeramo igikoresho");
    }
  };

  const deleteMaterial = async (id) => {
    if (!window.confirm("Urashaka gusiba iki gikoresho?")) return;

    try {
      await axios.delete(`${API}/${id}`);
      setMaterials(materials.filter((item) => item._id !== id));
    } catch (error) {
      console.log(error);
      alert("Ntibyakunze gusiba");
    }
  };

  return (
    <div style={page}>
      <div style={top}>
        <div>
          <h1 style={title}>Ibikoresho</h1>
          <p style={subtitle}>Ongeramo, ucunge kandi ukurikirane ibikoresho by’ubwubatsi.</p>
        </div>
      </div>

      <form onSubmit={addMaterial} style={form}>
        <input
          type="text"
          name="name"
          placeholder="Izina ry’igikoresho"
          value={formData.name}
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

        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={formData.stock}
          onChange={handleChange}
          style={input}
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          style={input}
        />

        <button type="submit" style={button}>
          + Ongeramo Igikoresho
        </button>
      </form>

      {materials.length === 0 ? (
        <div style={emptyBox}>Nta bikoresho birashyirwamo</div>
      ) : (
        <div style={grid}>
          {materials.map((item) => (
            <div key={item._id} style={card}>
              <div style={imageBox}>{item.image || "🧱"}</div>

              <div style={content}>
                <h2 style={materialName}>{item.name}</h2>

                <p style={muted}>📦 Category: {item.category}</p>
                <p style={muted}>📊 Stock: {item.stock}</p>

                <h3 style={price}>
                  {Number(item.price || 0).toLocaleString()} RWF
                </h3>

                <button onClick={() => deleteMaterial(item._id)} style={deleteBtn}>
                  Siba Igikoresho
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
  marginBottom: "25px",
};

const title = {
  fontSize: "42px",
  fontWeight: "900",
  color: "#071739",
  margin: 0,
};

const subtitle = {
  color: "#64748b",
  fontSize: "18px",
};

const form = {
  background: "white",
  padding: "25px",
  borderRadius: "25px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
  gap: "18px",
  marginBottom: "35px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
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
  padding: "14px 28px",
  borderRadius: "14px",
  fontWeight: "bold",
  cursor: "pointer",
  fontSize: "17px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
  gap: "25px",
};

const card = {
  background: "white",
  borderRadius: "22px",
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

const materialName = {
  fontSize: "26px",
  color: "#071739",
  marginBottom: "12px",
};

const muted = {
  color: "#64748b",
  fontSize: "16px",
  marginBottom: "8px",
};

const price = {
  color: "#0f52ff",
  fontSize: "24px",
  marginBottom: "20px",
};

const deleteBtn = {
  width: "100%",
  background: "#ef4444",
  color: "white",
  border: "none",
  padding: "14px",
  borderRadius: "14px",
  fontWeight: "bold",
  cursor: "pointer",
  fontSize: "16px",
};

const emptyBox = {
  background: "white",
  padding: "40px",
  borderRadius: "20px",
  textAlign: "center",
  color: "#64748b",
  fontSize: "20px",
};