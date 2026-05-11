import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* Sidebar */}
      <div className="w-64 bg-slate-900 text-white p-5">
        <h1 className="text-2xl font-bold mb-10 text-center">
          BuildWise
        </h1>

        <nav className="flex flex-col gap-4">

          <NavLink
            to="/"
            className="hover:bg-slate-700 p-3 rounded-lg transition"
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/projects"
            className="hover:bg-slate-700 p-3 rounded-lg transition"
          >
            Projects
          </NavLink>

          <NavLink
            to="/materials"
            className="hover:bg-slate-700 p-3 rounded-lg transition"
          >
            Materials
          </NavLink>

          <NavLink
            to="/escrow"
            className="hover:bg-slate-700 p-3 rounded-lg transition"
          >
            Escrow
          </NavLink>

          <NavLink
            to="/estimator"
            className="hover:bg-slate-700 p-3 rounded-lg transition"
          >
            Estimator
          </NavLink>

          <NavLink
            to="/reports"
            className="hover:bg-slate-700 p-3 rounded-lg transition"
          >
            Reports
          </NavLink>

          <NavLink
            to="/settings"
            className="hover:bg-slate-700 p-3 rounded-lg transition"
          >
            Settings
          </NavLink>

        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
}