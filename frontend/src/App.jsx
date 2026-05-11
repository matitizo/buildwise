import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layout/Layout";

import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
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

          <Route index element={<Dashboard />} />

          <Route path="home" element={<Home />} />

          <Route path="projects" element={<Projects />} />

          <Route path="materials" element={<Materials />} />

          <Route path="escrow" element={<Escrow />} />

          <Route
            path="estimator"
            element={<CostEstimator />}
          />

          <Route path="reports" element={<Reports />} />

          <Route path="settings" element={<Settings />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;