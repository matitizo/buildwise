import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./layout/Layout";

import Dashboard from "./pages/Dashboard";
import LandMarketplace from "./pages/LandMarketplace";
import Materials from "./pages/Materials";
import Projects from "./pages/Projects";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import CostEstimator from "./pages/CostEstimator";
import Escrow from "./pages/Escrow";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />

        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />

        <Route
          path="/lands"
          element={
            <Layout>
              <LandMarketplace />
            </Layout>
          }
        />

        <Route
          path="/materials"
          element={
            <Layout>
              <Materials />
            </Layout>
          }
        />

        <Route
          path="/projects"
          element={
            <Layout>
              <Projects />
            </Layout>
          }
        />

        <Route
          path="/reports"
          element={
            <Layout>
              <Reports />
            </Layout>
          }
        />

        <Route
          path="/settings"
          element={
            <Layout>
              <Settings />
            </Layout>
          }
        />

        <Route
          path="/estimator"
          element={
            <Layout>
              <CostEstimator />
            </Layout>
          }
        />

        <Route
          path="/escrow"
          element={
            <Layout>
              <Escrow />
            </Layout>
          }
        />

        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}