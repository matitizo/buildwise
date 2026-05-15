import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./layout/Layout";

import Home from "./pages/Home";
import Lands from "./pages/Lands";
import Houses from "./pages/Houses";
import Rentals from "./pages/Rentals";
import Construction from "./pages/Construction";
import Materials from "./pages/Materials";
import Admin from "./pages/Admin";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="lands" element={<Lands />} />
        <Route path="houses" element={<Houses />} />
        <Route path="rentals" element={<Rentals />} />
        <Route path="construction" element={<Construction />} />
        <Route path="materials" element={<Materials />} />
        <Route path="admin" element={<Admin />} />
      </Route>
    </Routes>
  );
}