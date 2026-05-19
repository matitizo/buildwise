import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";

import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import Materials from "./pages/Materials";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Escrow from "./pages/Escrow";
import CostEstimator from "./pages/CostEstimator";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />

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
            path="/projects"
            element={<Projects />}
          />

          <Route
            path="/escrow"
            element={<Escrow />}
          />

          <Route
            path="/estimator"
            element={<CostEstimator />}
          />

          <Route
            path="/reports"
            element={<Reports />}
          />

          <Route
            path="/settings"
            element={<Settings />}
          />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}