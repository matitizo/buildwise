export default function Dashboard() {
  const stats = [
    {
      title: "Ibibanza",
      value: "3",
      icon: "📍",
      color: "bg-blue-500",
    },
    {
      title: "Materials",
      value: "12",
      icon: "🧱",
      color: "bg-orange-500",
    },
    {
      title: "Projects",
      value: "5",
      icon: "🏗️",
      color: "bg-green-500",
    },
    {
      title: "Land Value",
      value: "180M RWF",
      icon: "💰",
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="space-y-8">

      {/* Header */}
      <div className="bg-white rounded-3xl shadow-sm p-8 flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-slate-800">
            Dashboard 🚀
          </h1>

          <p className="text-gray-500 mt-2 text-lg">
            Smart Construction Management System
          </p>
        </div>

        <div className="hidden md:flex gap-4">
          <button className="bg-gray-100 px-5 py-3 rounded-xl">
            🔔
          </button>

          <button className="bg-gray-100 px-5 py-3 rounded-xl">
            🌙
          </button>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold">
            Admin
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition duration-300"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-500 text-sm">
                  {item.title}
                </p>

                <h2 className="text-3xl font-bold mt-3 text-slate-800">
                  {item.value}
                </h2>
              </div>

              <div
                className={`${item.color} w-16 h-16 rounded-2xl flex items-center justify-center text-3xl text-white`}
              >
                {item.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Projects */}
      <div className="bg-white rounded-3xl shadow-sm p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-slate-800">
            Recent Projects
          </h2>

          <button className="bg-blue-600 text-white px-5 py-2 rounded-xl">
            View All
          </button>
        </div>

        <div className="space-y-4">

          <div className="flex justify-between items-center bg-gray-50 p-5 rounded-2xl">
            <div>
              <h3 className="font-bold text-lg">
                Modern House Kigali
              </h3>

              <p className="text-gray-500">
                Kicukiro District
              </p>
            </div>

            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm">
              Completed
            </span>
          </div>

          <div className="flex justify-between items-center bg-gray-50 p-5 rounded-2xl">
            <div>
              <h3 className="font-bold text-lg">
                Apartment Remera
              </h3>

              <p className="text-gray-500">
                Gasabo District
              </p>
            </div>

            <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm">
              In Progress
            </span>
          </div>

          <div className="flex justify-between items-center bg-gray-50 p-5 rounded-2xl">
            <div>
              <h3 className="font-bold text-lg">
                Luxury Villa Nyarutarama
              </h3>

              <p className="text-gray-500">
                Kigali City
              </p>
            </div>

            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm">
              Pending
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}