import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./layout/Layout";

// Main Pages
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Materials from "./pages/Materials";
import Escrow from "./pages/Escrow";
import CostEstimator from "./pages/CostEstimator";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

// Marketplace Pages
import Lands from "./pages/Lands";
import HousesForSale from "./pages/HousesForSale";
import Rentals from "./pages/Rentals";
import Lodging from "./pages/Lodging";

// Building Permit
import BuildingPermit from "./pages/BuildingPermit";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Dashboard */}
        <Route index element={<Dashboard />} />

        {/* Marketplaces */}
        <Route path="lands" element={<Lands />} />

        <Route
          path="houses-for-sale"
          element={<HousesForSale />}
        />

        <Route path="rentals" element={<Rentals />} />

        <Route path="lodging" element={<Lodging />} />

        {/* Building Permit */}
        <Route
          path="building-permit"
          element={<BuildingPermit />}
        />

        {/* Construction Modules */}
        <Route path="projects" element={<Projects />} />

        <Route path="materials" element={<Materials />} />

        <Route path="escrow" element={<Escrow />} />

        <Route
          path="estimator"
          element={<CostEstimator />}
        />

        <Route path="reports" element={<Reports />} />

        <Route path="settings" element={<Settings />} />

        {/* Redirect Unknown Routes */}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Route>
    </Routes>
  );
}