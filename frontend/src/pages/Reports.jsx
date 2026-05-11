export default function Reports() {
  const reports = [
    { title: "Monthly Revenue", value: "18.4M RWF", change: "+12%" },
    { title: "Active Projects", value: "12", change: "+4" },
    { title: "Materials Sold", value: "340", change: "+22%" },
    { title: "Escrow Released", value: "31M RWF", change: "+8%" },
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-3xl shadow-sm p-8">
        <h1 className="text-4xl font-bold text-slate-800">
          Reports 📊
        </h1>
        <p className="text-gray-500 mt-2 text-lg">
          Reba raporo z’imishinga, ibikoresho, amafaranga n’inyungu.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {reports.map((item, index) => (
          <div key={index} className="bg-white rounded-3xl p-6 shadow-sm">
            <p className="text-gray-500">{item.title}</p>
            <h2 className="text-3xl font-bold mt-3 text-slate-800">
              {item.value}
            </h2>
            <span className="inline-block mt-4 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
              {item.change}
            </span>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-3xl shadow-sm p-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">
          Project Performance
        </h2>

        <div className="space-y-5">
          {["Ibibanza", "Materials", "Projects", "Escrow"].map((name, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-slate-700">{name}</span>
                <span className="text-gray-500">{(index + 2) * 20}%</span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-blue-600 h-3 rounded-full"
                  style={{ width: `${(index + 2) * 20}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}