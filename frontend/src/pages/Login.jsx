import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#f7f8fb] flex items-center justify-center px-6 py-10">
      <div className="grid lg:grid-cols-2 bg-white rounded-[32px] overflow-hidden border border-slate-200 shadow-xl max-w-6xl w-full">
        <div className="bg-[#050816] text-white p-10 lg:p-14">
          <p className="text-pink-500 font-black mb-4">BUILDWISE LOGIN</p>

          <h1 className="text-4xl lg:text-5xl font-black mb-5">
            Injira muri konti yawe.
          </h1>

          <p className="text-slate-300 leading-8 mb-8">
            Injira muri BuildWise kugira ngo ucunge marketplace, materials,
            projects, escrow na admin dashboard.
          </p>

          <div className="bg-white/10 rounded-2xl p-5 flex items-center gap-3">
            <ShieldCheck className="text-emerald-400" />
            <span className="font-black">Secure BuildWise Account</span>
          </div>
        </div>

        <div className="p-10 lg:p-14">
          <h2 className="text-3xl font-black mb-2">Login</h2>
          <p className="text-slate-500 mb-8">
            Andika email na password yawe.
          </p>

          <form className="space-y-5">
            <div>
              <label className="font-black mb-2 flex items-center gap-2">
                <Mail size={18} className="text-pink-600" />
                Email
              </label>
              <input
                type="email"
                placeholder="example@email.com"
                className="w-full bg-slate-50 rounded-xl px-4 py-3 outline-none font-semibold"
              />
            </div>

            <div>
              <label className="font-black mb-2 flex items-center gap-2">
                <LockKeyhole size={18} className="text-pink-600" />
                Password
              </label>

              <div className="flex items-center bg-slate-50 rounded-xl px-4">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Andika password"
                  className="w-full bg-transparent py-3 outline-none font-semibold"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 font-bold text-slate-600">
                <input type="checkbox" />
                Remember me
              </label>

              <button type="button" className="text-pink-600 font-black">
                Forgot password?
              </button>
            </div>

            <button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-xl font-black flex items-center justify-center gap-2">
              Login <ArrowRight size={18} />
            </button>
          </form>

          <p className="text-center text-slate-500 mt-8">
            Nta konti ufite?{" "}
            <Link to="/register" className="text-pink-600 font-black">
              Iyandikishe
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}