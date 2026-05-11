import { useEffect, useState } from "react";
import axios from "axios";

const API = "https://buildwise-mxvk.onrender.com/api";

export default function Dashboard() {
  const [lands, setLands] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [landsRes, materialsRes, projectsRes] =
        await Promise.all([
          axios.get(`${API}/lands`),
          axios.get(`${API}/materials`),
          axios.get(`${API}/projects`),
        ]);

      setLands(landsRes.data);
      setMaterials(materialsRes.data);
      setProjects(projectsRes.data);
    } catch (error) {
      console.log(error);
    }
  };

  const totalLandValue = lands.reduce(
    (sum, item) => sum + Number(item.price || 0),
    0
  );

  const totalProjectBudget = projects.reduce(
    (sum, item) => sum + Number(item.budget || 0),
    0
  );

  return (
    <div className="p-8">
      <h1 className="text-5xl font-black text-blue-900 mb-10">
        Dashboard 🚀
      </h1>

      {/* STATS */}

      <div className="grid md:grid-cols-4 gap-6 mb-10">
        <Card
          title="Ibibanza"
          value={lands.length}
          color="bg-blue-700"
        />

        <Card
          title="Materials"
          value={materials.length}
          color="bg-green-700"
        />

        <Card
          title="Projects"
          value={projects.length}
          color="bg-orange-600"
        />

        <Card
          title="Land Value"
          value={`${totalLandValue.toLocaleString()} RWF`}
          color="bg-purple-700"
        />
      </div>

      {/* RECENT PROJECTS */}

      <div className="bg-white rounded-3xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">
          Recent Projects
        </h2>

        <div className="space-y-4">
          {projects.map((project) => (
            <div
              key={project._id}
              className="flex justify-between items-center border-b pb-4"
            >
              <div>
                <h3 className="text-xl font-bold">
                  {project.title}
                </h3>

                <p className="text-gray-500">
                  📍 {project.location}
                </p>
              </div>

              <div className="text-green-700 font-bold text-xl">
                {project.budget} RWF
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PROJECT SUMMARY */}

      <div className="bg-white rounded-3xl shadow-lg p-8 mt-10">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">
          Financial Summary
        </h2>

        <div className="space-y-4">
          <SummaryRow
            title="Agaciro k'ibibanza"
            value={`${totalLandValue.toLocaleString()} RWF`}
          />

          <SummaryRow
            title="Project Budget"
            value={`${totalProjectBudget.toLocaleString()} RWF`}
          />
        </div>
      </div>
    </div>
  );
}

function Card({ title, value, color }) {
  return (
    <div
      className={`${color} text-white rounded-3xl p-6 shadow-lg`}
    >
      <h2 className="text-xl font-bold">
        {title}
      </h2>

      <p className="text-4xl font-black mt-4">
        {value}
      </p>
    </div>
  );
}

function SummaryRow({ title, value }) {
  return (
    <div className="flex justify-between border-b pb-4">
      <span className="font-semibold">
        {title}
      </span>

      <strong>{value}</strong>
    </div>
  );
}