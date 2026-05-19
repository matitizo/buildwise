import React from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  ShoppingCart,
  Wrench,
  Calculator,
  ShieldCheck,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const features = [
  {
    title: "Marketplace",
    text: "Gura cyangwa ukodeshe property.",
    icon: Building2,
    link: "/marketplace",
  },
  {
    title: "Materials",
    text: "Gura ibikoresho by'ubwubatsi.",
    icon: ShoppingCart,
    link: "/materials",
  },
  {
    title: "Services",
    text: "Shaka engineers na services.",
    icon: Wrench,
    link: "/services",
  },
  {
    title: "Estimator",
    text: "Bara budget y'umushinga.",
    icon: Calculator,
    link: "/estimator",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f8fb]">

      {/* Hero */}

      <section className="px-6 py-8">
        <div className="grid lg:grid-cols-2 bg-white rounded-[35px] overflow-hidden border border-slate-200 shadow-sm">

          <div className="p-10">

            <p className="text-pink-600 font-black mb-4">
              BUILDWISE PLATFORM
            </p>

            <h1 className="text-4xl lg:text-6xl font-black leading-tight mb-6">
              Kubaka no gushaka property mu buryo bworoshye
            </h1>

            <p className="text-slate-500 text-lg leading-8 mb-8">
              BuildWise ifasha kubona property,
              materials, services no gucunga
              imishinga y'ubwubatsi ahantu hamwe.
            </p>

            <div className="flex gap-4 flex-wrap">

              <Link
                to="/marketplace"
                className="bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-xl text-white font-black flex items-center gap-2"
              >
                Tangira
                <ArrowRight size={18}/>
              </Link>

              <Link
                to="/services"
                className="bg-[#050816] hover:bg-black px-6 py-3 rounded-xl text-white font-black"
              >
                Reba Services
              </Link>

            </div>

          </div>

          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200"
            className="w-full h-full object-cover"
            alt="construction"
          />

        </div>
      </section>

      {/* Features */}

      <section className="px-6 py-8">

        <h2 className="text-3xl font-black mb-6">
          BuildWise Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">

          {features.map((item) => {

            const Icon=item.icon;

            return(

            <Link
            key={item.title}
            to={item.link}
            className="bg-white rounded-[25px] border border-slate-200 p-5 hover:shadow-xl transition">

            <div className="w-12 h-12 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center mb-4">

            <Icon size={24}/>

            </div>

            <h3 className="font-black text-xl mb-2">

            {item.title}

            </h3>

            <p className="text-slate-500">

            {item.text}

            </p>

            </Link>

            )

          })}

        </div>

      </section>


      {/* Why BuildWise */}

      <section className="px-6 py-8">

      <div className="grid lg:grid-cols-2 gap-6">

      <div className="bg-[#050816] text-white rounded-[30px] p-8">

      <p className="text-pink-500 font-black mb-3">

      IMPAMVU BUILDWISE

      </p>

      <h2 className="text-4xl font-black mb-8">

      Uburyo BuildWise ikora

      </h2>

      <div className="space-y-4">

      <Step text="Shakisha property cyangwa service"/>
      <Step text="Hitamo supplier cyangwa agent"/>
      <Step text="Koresha escrow"/>
      <Step text="Kurikirana umushinga"/>

      </div>

      </div>


      <div className="bg-white rounded-[30px] border border-slate-200 p-8">

      <div className="grid grid-cols-2 gap-4">

      <MiniCard number="120+" title="Properties"/>
      <MiniCard number="45+" title="Suppliers"/>
      <MiniCard number="24+" title="Projects"/>
      <MiniCard number="95%" title="Escrow Trust"/>

      </div>

      </div>

      </div>

      </section>


      {/* Footer */}

      <footer className="bg-[#050816] text-white mt-12 rounded-t-[40px]">

      <div className="px-8 py-12">

      <div className="grid md:grid-cols-4 gap-10">

      <div>

      <h2 className="text-3xl font-black mb-4">

      BuildWise

      </h2>

      <p className="text-slate-300">

      Platform ifasha kugura property,
      kubona materials no gucunga
      imishinga.

      </p>

      </div>


      <div>

      <h3 className="font-black mb-5">

      Links

      </h3>

      <ul className="space-y-3 text-slate-300">

      <li>Home</li>
      <li>Marketplace</li>
      <li>Materials</li>
      <li>Services</li>

      </ul>

      </div>


      <div>

      <h3 className="font-black mb-5">

      Contact

      </h3>

      <ul className="space-y-3 text-slate-300">

      <li>info@buildwise.com</li>
      <li>+250788000000</li>
      <li>Kigali Rwanda</li>

      </ul>

      </div>


      <div>

      <h3 className="font-black mb-5">

      Security

      </h3>

      <div className="flex items-center gap-3">

      <ShieldCheck/>

      Escrow Protected

      </div>

      </div>

      </div>


      <div className="border-t border-slate-700 mt-10 pt-6 text-center text-slate-400">

      © 2026 BuildWise

      </div>

      </div>

      </footer>

    </div>
  );
}


function Step({text}){

return(

<div className="bg-white/10 rounded-xl p-4 flex gap-3 items-center font-black">

<CheckCircle
className="text-emerald-400"
size={20}
/>

{text}

</div>

)

}

function MiniCard({number,title}){

return(

<div className="bg-slate-50 rounded-[20px] p-5">

<h2 className="text-4xl font-black text-pink-600">

{number}

</h2>

<p className="text-slate-500">

{title}

</p>

</div>

)

}