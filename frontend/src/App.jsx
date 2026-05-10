import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Projects from "./pages/Projects.jsx";
import LandMarketplace from "./pages/LandMarketplace.jsx";
import LandDetails from "./pages/LandDetails.jsx";
import Materials from "./pages/Materials.jsx";
import CostEstimator from "./pages/CostEstimator.jsx";
import Escrow from "./pages/Escrow.jsx";
import Reports from "./pages/Reports.jsx";
import Settings from "./pages/Settings.jsx";
import Notifications from "./pages/Notifications.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Layout>
                <Dashboard />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/projects"
          element={
            <ProtectedRoute>
              <Layout>
                <Projects />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/lands"
          element={
            <ProtectedRoute>
              <Layout>
                <LandMarketplace />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/lands/:id"
          element={
            <ProtectedRoute>
              <Layout>
                <LandDetails />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/materials"
          element={
            <ProtectedRoute>
              <Layout>
                <Materials />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/estimator"
          element={
            <ProtectedRoute>
              <Layout>
                <CostEstimator />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/escrow"
          element={
            <ProtectedRoute>
              <Layout>
                <Escrow />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/reports"
          element={
            <ProtectedRoute>
              <Layout>
                <Reports />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/notifications"
          element={
            <ProtectedRoute>
              <Layout>
                <Notifications />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Layout>
                <Settings />
              </Layout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}