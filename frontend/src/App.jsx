import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./layout/Layout";

import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Materials from "./pages/Materials";
import Escrow from "./pages/Escrow";
import CostEstimator from "./pages/CostEstimator";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

import Lands from "./pages/Lands";
import HousesForSale from "./pages/HousesForSale";
import Rentals from "./pages/Rentals";
import BuildingPermit from "./pages/BuildingPermit";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />

        <Route path="lands" element={<Lands />} />
        <Route path="houses-for-sale" element={<HousesForSale />} />
        <Route path="rentals" element={<Rentals />} />

        <Route path="projects" element={<Projects />} />
        <Route path="estimator" element={<CostEstimator />} />
        <Route path="building-permit" element={<BuildingPermit />} />
        <Route path="escrow" element={<Escrow />} />

        <Route path="materials" element={<Materials />} />
        <Route path="reports" element={<Reports />} />
        <Route path="settings" element={<Settings />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}