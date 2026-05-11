export default function Escrow() {
  const projects = [
    {
      id: 1,
      client: "Jean Claude",
      project: "Inzu ya Kicukiro",
      amount: "12,500,000 RWF",
      status: "Payment Released",
    },
    {
      id: 2,
      client: "Uwase Diane",
      project: "Apartment Remera",
      amount: "25,000,000 RWF",
      status: "Pending",
    },
    {
      id: 3,
      client: "Mugisha Eric",
      project: "Modern House Kigali",
      amount: "18,000,000 RWF",
      status: "In Progress",
    },
  ];

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">
          Escrow Management
        </h1>

        <p className="text-gray-500 mt-2">
          Monitor secure construction payments
        </p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-gray-500">Total Funds</h2>
          <p className="text-3xl font-bold mt-2">
            55M RWF
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-gray-500">Active Projects</h2>
          <p className="text-3xl font-bold mt-2">
            12
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-gray-500">Pending Releases</h2>
          <p className="text-3xl font-bold mt-2">
            7
          </p>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow overflow-hidden">
        <div className="p-5 border-b">
          <h2 className="text-xl font-semibold">
            Escrow Projects
          </h2>
        </div>

        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="text-left p-4">Client</th>
              <th className="text-left p-4">Project</th>
              <th className="text-left p-4">Amount</th>
              <th className="text-left p-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {projects.map((item) => (
              <tr
                key={item.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="p-4">{item.client}</td>
                <td className="p-4">{item.project}</td>
                <td className="p-4">{item.amount}</td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      item.status === "Payment Released"
                        ? "bg-green-100 text-green-700"
                        : item.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}