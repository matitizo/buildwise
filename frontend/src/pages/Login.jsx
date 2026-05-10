import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Uzuza email na password");
      return;
    }

    const user = {
      _id: "demo-user",
      name: "Admin",
      email,
    };

    localStorage.setItem("buildwise_user", JSON.stringify(user));
    localStorage.setItem("buildwise_token", "demo-token");

    navigate("/dashboard");
  };

  return (
    <div style={page}>
      <form onSubmit={submitHandler} style={card}>
        <div style={logo}>🏗️</div>
        <h1 style={title}>BuildWise Login</h1>

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
          Injira
        </button>
      </form>
    </div>
  );
}

const page = {
  minHeight: "100vh",
  display: "grid",
  placeItems: "center",
  background: "linear-gradient(135deg,#0057ff,#00a6ff)",
};

const card = {
  width: "420px",
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
};

const input = {
  width: "100%",
  padding: "15px",
  marginBottom: "14px",
  borderRadius: "14px",
  border: "1px solid #cbd5e1",
  boxSizing: "border-box",
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
};