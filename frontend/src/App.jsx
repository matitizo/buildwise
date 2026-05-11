import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./layout/Layout";

import Dashboard from "./pages/Dashboard";
import Lands from "./pages/Lands";
import Projects from "./pages/Projects";
import Materials from "./pages/Materials";
import Escrow from "./pages/Escrow";
import CostEstimator from "./pages/CostEstimator";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}>

          {/* Default Route */}
          <Route
            index
            element={<Navigate to="/dashboard" replace />}
          />

          {/* Main Pages */}
          <Route
            path="dashboard"
            element={<Dashboard />}
          />

          <Route
            path="lands"
            element={<Lands />}
          />

          <Route
            path="projects"
            element={<Projects />}
          />

          <Route
            path="materials"
            element={<Materials />}
          />

          <Route
            path="escrow"
            element={<Escrow />}
          />

          <Route
            path="estimator"
            element={<CostEstimator />}
          />

          <Route
            path="reports"
            element={<Reports />}
          />

          <Route
            path="settings"
            element={<Settings />}
          />

          {/* Wrong Routes Redirect */}
          <Route
            path="*"
            element={<Navigate to="/dashboard" replace />}
          />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;