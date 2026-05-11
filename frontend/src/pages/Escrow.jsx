export default function Escrow() {
  const escrowProjects = [
    {
      client: "Jean Claude",
      project: "Modern House Kigali",
      amount: "12,500,000 RWF",
      progress: "75%",
      status: "In Progress",
    },
    {
      client: "Uwase Diane",
      project: "Apartment Remera",
      amount: "25,000,000 RWF",
      progress: "40%",
      status: "Pending Release",
    },
    {
      client: "Mugisha Eric",
      project: "Villa Nyarutarama",
      amount: "18,000,000 RWF",
      progress: "100%",
      status: "Released",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-3xl shadow-sm p-8">
        <h1 className="text-4xl font-bold text-slate-800">
          Escrow Management 🔒
        </h1>
        <p className="text-gray-500 mt-2 text-lg">
          Genzura amafaranga y’ubwubatsi ari mu bwishingizi.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <p className="text-gray-500">Total Escrow Funds</p>
          <h2 className="text-3xl font-bold mt-3 text-slate-800">
            55.5M RWF
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <p className="text-gray-500">Active Contracts</p>
          <h2 className="text-3xl font-bold mt-3 text-slate-800">
            12
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <p className="text-gray-500">Pending Releases</p>
          <h2 className="text-3xl font-bold mt-3 text-slate-800">
            4
          </h2>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-sm p-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">
          Escrow Projects
        </h2>

        <div className="space-y-5">
          {escrowProjects.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-5"
            >
              <div>
                <h3 className="text-xl font-bold text-slate-800">
                  {item.project}
                </h3>
                <p className="text-gray-500 mt-1">
                  Client: {item.client}
                </p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">Amount</p>
                <h4 className="font-bold text-slate-800">
                  {item.amount}
                </h4>
              </div>

              <div className="w-full md:w-48">
                <div className="flex justify-between text-sm mb-2">
                  <span>Progress</span>
                  <span>{item.progress}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-blue-600 h-3 rounded-full"
                    style={{ width: item.progress }}
                  ></div>
                </div>
              </div>

              <span
                className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  item.status === "Released"
                    ? "bg-green-100 text-green-700"
                    : item.status === "Pending Release"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}