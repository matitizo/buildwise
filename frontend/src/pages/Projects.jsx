export default function Projects() {
  const projects = [
    {
      name: "Modern House Kigali",
      client: "Jean Claude",
      budget: "45M RWF",
      progress: "75%",
      status: "In Progress",
    },
    {
      name: "Luxury Villa Nyarutarama",
      client: "Uwase Diane",
      budget: "120M RWF",
      progress: "100%",
      status: "Completed",
    },
    {
      name: "Apartment Remera",
      client: "Mugisha Eric",
      budget: "80M RWF",
      progress: "40%",
      status: "Pending",
    },
  ];

  return (
    <div className="space-y-8">

      {/* Header */}
      <div className="bg-white rounded-3xl shadow-sm p-8 flex justify-between items-center">

        <div>
          <h1 className="text-4xl font-bold text-slate-800">
            Projects 🏗️
          </h1>

          <p className="text-gray-500 mt-2 text-lg">
            Genzura imishinga yose y’ubwubatsi.
          </p>
        </div>

        <button className="bg-blue-600 text-white px-6 py-4 rounded-2xl font-semibold hover:bg-blue-700 transition">
          + New Project
        </button>

      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <p className="text-gray-500">Total Projects</p>

          <h2 className="text-3xl font-bold mt-3 text-slate-800">
            18
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <p className="text-gray-500">Completed</p>

          <h2 className="text-3xl font-bold mt-3 text-green-600">
            9
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <p className="text-gray-500">In Progress</p>

          <h2 className="text-3xl font-bold mt-3 text-blue-600">
            6
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <p className="text-gray-500">Pending</p>

          <h2 className="text-3xl font-bold mt-3 text-yellow-500">
            3
          </h2>
        </div>

      </div>

      {/* Project Cards */}
      <div className="grid lg:grid-cols-2 gap-8">

        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-sm p-8"
          >

            <div className="flex justify-between items-start">

              <div>
                <h2 className="text-2xl font-bold text-slate-800">
                  {project.name}
                </h2>

                <p className="text-gray-500 mt-2">
                  Client: {project.client}
                </p>
              </div>

              <span
                className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  project.status === "Completed"
                    ? "bg-green-100 text-green-700"
                    : project.status === "Pending"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                {project.status}
              </span>

            </div>

            <div className="mt-8">

              <div className="flex justify-between mb-2">
                <span className="text-gray-500">
                  Progress
                </span>

                <span className="font-semibold">
                  {project.progress}
                </span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-blue-600 h-3 rounded-full"
                  style={{ width: project.progress }}
                ></div>
              </div>

            </div>

            <div className="mt-8 flex justify-between items-center">

              <div>
                <p className="text-gray-500 text-sm">
                  Budget
                </p>

                <h3 className="text-2xl font-bold text-slate-800">
                  {project.budget}
                </h3>
              </div>

              <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-blue-700 transition">
                View Project
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}