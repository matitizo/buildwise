import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !password.trim()) {
      alert("Uzuza amakuru yose");
      return;
    }

    try {
      const res = await axios.post("http://127.0.0.1:5000/api/auth/register", {
        name: name.trim(),
        email: email.trim(),
        password: password.trim(),
      });

      const userData = {
        _id: res.data._id,
        name: res.data.name,
        email: res.data.email,
      };

      localStorage.setItem("buildwise_user", JSON.stringify(userData));
      localStorage.setItem("buildwise_token", res.data.token);

      alert("Account created successfully");
      navigate("/dashboard");
    } catch (error) {
      console.log("REGISTER ERROR:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Register failed");
    }
  };

  return (
    <div style={page}>
      <div style={card}>
        <div style={logo}>🏗️</div>
        <h1 style={title}>Create Account</h1>
        <p style={subtitle}>Iyandikishe muri BuildWise</p>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={input}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={input}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={input}
          />

          <button type="submit" style={button}>
            Iyandikishe
          </button>
        </form>

        <p style={bottomText}>
          Ufite account?{" "}
          <span onClick={() => navigate("/login")} style={link}>
            Injira
          </span>
        </p>
      </div>
    </div>
  );
}

const page = {
  minHeight: "100vh",
  display: "grid",
  placeItems: "center",
  background: "linear-gradient(135deg,#0057ff,#00a6ff)",
  fontFamily: "Inter, Arial, sans-serif",
  padding: "24px",
};

const card = {
  width: "100%",
  maxWidth: "440px",
  background: "white",
  padding: "40px",
  borderRadius: "28px",
  boxShadow: "0 20px 45px rgba(0,0,0,0.18)",
};

const logo = {
  width: "76px",
  height: "76px",
  borderRadius: "22px",
  background: "#0057ff",
  display: "grid",
  placeItems: "center",
  fontSize: "38px",
  margin: "0 auto 18px",
};

const title = {
  textAlign: "center",
  color: "#0f172a",
  margin: "0 0 8px",
  fontSize: "34px",
  fontWeight: "900",
};

const subtitle = {
  textAlign: "center",
  color: "#64748b",
  marginBottom: "28px",
};

const input = {
  width: "100%",
  padding: "15px",
  marginBottom: "14px",
  borderRadius: "14px",
  border: "1px solid #cbd5e1",
  boxSizing: "border-box",
  outline: "none",
  fontSize: "15px",
};

const button = {
  width: "100%",
  background: "#0057ff",
  color: "white",
  border: "none",
  padding: "16px",
  borderRadius: "14px",
  fontWeight: "900",
  cursor: "pointer",
  marginTop: "8px",
};

const bottomText = {
  textAlign: "center",
  color: "#64748b",
  marginTop: "22px",
};

const link = {
  color: "#0057ff",
  fontWeight: "900",
  cursor: "pointer",
};