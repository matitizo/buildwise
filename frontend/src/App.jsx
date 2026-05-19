import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";

import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import Materials from "./pages/Materials";
import Services from "./pages/Services";
import AdminDashboard from "./pages/AdminDashboard";

import Projects from "./pages/Projects";
import Escrow from "./pages/Escrow";
import CostEstimator from "./pages/CostEstimator";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import PropertyDetails from "./pages/PropertyDetails";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/materials" element={<Materials />} />
        <Route path="/services" element={<Services />} />
        <Route path="/admin" element={<AdminDashboard />} />

        <Route path="/projects" element={<Projects />} />
        <Route path="/escrow" element={<Escrow />} />
        <Route path="/estimator" element={<CostEstimator />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Route>
    </Routes>
  );
}