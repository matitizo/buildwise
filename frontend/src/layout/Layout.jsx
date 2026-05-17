import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#f7f8fb] text-[#050816]">
      <Navbar />

      <main className="w-full">
        <Outlet />
      </main>
    </div>
  );
}