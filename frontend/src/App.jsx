import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./layout/Layout";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Materials from "./pages/Materials";
import Escrow from "./pages/Escrow";
import CostEstimator from "./pages/CostEstimator";
import Lands from "./pages/Lands";
import Marketplace from "./pages/Marketplace";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import PropertyDetails from "./pages/PropertyDetails";
import Services from "./pages/Services";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/materials" element={<Materials />} />
        <Route path="/escrow" element={<Escrow />} />
        <Route path="/estimator" element={<CostEstimator />} />
        <Route path="/services" element={<Services />} />
        <Route path="/lands" element={<Lands />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Route>
    </Routes>
  );
}