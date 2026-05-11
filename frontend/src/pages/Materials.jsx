export default function Materials() {
  const materials = [
    {
      name: "Cement",
      category: "Ibikoresho by'ubwubatsi",
      price: "13,500 RWF",
      stock: "240 bags",
      status: "Available",
      icon: "🧱",
    },
    {
      name: "Iron Bars",
      category: "Steel materials",
      price: "18,000 RWF",
      stock: "120 pieces",
      status: "Available",
      icon: "🔩",
    },
    {
      name: "Roofing Sheets",
      category: "Roofing",
      price: "9,500 RWF",
      stock: "80 sheets",
      status: "Low Stock",
      icon: "🏠",
    },
    {
      name: "Sand Truck",
      category: "Aggregates",
      price: "180,000 RWF",
      stock: "15 trucks",
      status: "Available",
      icon: "🚚",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-3xl shadow-sm p-8 flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-slate-800">
            Materials Shop 🧱
          </h1>
          <p className="text-gray-500 mt-2 text-lg">
            Genzura ibikoresho by’ubwubatsi, ibiciro na stock.
          </p>
        </div>

        <button className="bg-blue-600 text-white px-6 py-4 rounded-2xl font-semibold">
          + Add Material
        </button>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <p className="text-gray-500">Total Materials</p>
          <h2 className="text-3xl font-bold mt-3 text-slate-800">452</h2>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <p className="text-gray-500">Available Stock</p>
          <h2 className="text-3xl font-bold mt-3 text-slate-800">390</h2>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <p className="text-gray-500">Low Stock</p>
          <h2 className="text-3xl font-bold mt-3 text-slate-800">18</h2>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <p className="text-gray-500">Total Value</p>
          <h2 className="text-3xl font-bold mt-3 text-slate-800">42M RWF</h2>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-sm p-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">
          Materials Inventory
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {materials.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-3xl p-6 hover:shadow-lg transition"
            >
              <div className="text-5xl mb-5">{item.icon}</div>

              <h3 className="text-xl font-bold text-slate-800">
                {item.name}
              </h3>

              <p className="text-gray-500 mt-1">{item.category}</p>

              <div className="mt-5 space-y-2">
                <p className="font-semibold text-slate-700">
                  Price: {item.price}
                </p>

                <p className="text-gray-500">
                  Stock: {item.stock}
                </p>
              </div>

              <span
                className={`inline-block mt-5 px-4 py-2 rounded-full text-sm font-semibold ${
                  item.status === "Available"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
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