import { useEffect, useState } from "react";
import axios from "axios";

const API = "https://buildwise-mxvk.onrender.com/api/projects";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  const [form, setForm] = useState({
    title: "",
    location: "",
    budget: "",
  });

  const getProjects = async () => {
    try {
      const res = await axios.get(API);
      setProjects(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  const addProject = async (e) => {
    e.preventDefault();

    try {
      await axios.post(API, form);

      setForm({
        title: "",
        location: "",
        budget: "",
      });

      getProjects();

      alert("Project yongewe neza ✅");
    } catch (err) {
      console.log(err);
      alert("Hari ikibazo ❌");
    }
  };

  const deleteProject = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      getProjects();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-5xl font-bold text-blue-900 mb-10">
        Projects 🚧
      </h1>

      <form
        onSubmit={addProject}
        className="bg-white p-6 rounded-3xl shadow-lg grid md:grid-cols-3 gap-4 mb-10"
      >
        <input
          type="text"
          placeholder="Izina rya Project"
          value={form.title}
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
          className="p-4 rounded-xl border"
          required
        />

        <input
          type="text"
          placeholder="Aho iri"
          value={form.location}
          onChange={(e) =>
            setForm({ ...form, location: e.target.value })
          }
          className="p-4 rounded-xl border"
          required
        />

        <input
          type="number"
          placeholder="Budget"
          value={form.budget}
          onChange={(e) =>
            setForm({ ...form, budget: e.target.value })
          }
          className="p-4 rounded-xl border"
          required
        />

        <button className="bg-blue-700 hover:bg-blue-800 text-white p-4 rounded-xl font-bold">
          Ongeramo Project
        </button>
      </form>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project._id}
            className="bg-white rounded-3xl shadow-lg p-6"
          >
            <h2 className="text-2xl font-bold text-blue-900">
              {project.title}
            </h2>

            <p className="mt-4 text-gray-600">
              📍 {project.location}
            </p>

            <p className="mt-2 text-green-700 font-bold">
              💰 ${project.budget}
            </p>

            <button
              onClick={() => deleteProject(project._id)}
              className="mt-6 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-xl"
            >
              Siba
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}