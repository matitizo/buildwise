import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";

import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import Materials from "./pages/Materials";
import Services from "./pages/Services";

import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";

import Profile from "./pages/Profile";

import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  return (
    <Routes>

      <Route element={<Layout />}>

        <Route path="/" element={<Home />} />

        <Route
          path="/marketplace"
          element={<Marketplace />}
        />

        <Route
          path="/materials"
          element={<Materials />}
        />

        <Route
          path="/services"
          element={<Services />}
        />

        <Route
          path="/admin"
          element={<AdminDashboard />}
        />

        <Route
          path="/dashboard"
          element={<UserDashboard />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

      </Route>

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

    </Routes>
  );
}