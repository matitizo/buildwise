export default function Lands() {
  const lands = [
    {
      title: "Ikibanza - Kicukiro",
      location: "Kigali, Kicukiro",
      price: "18M RWF",
      size: "600m²",
      status: "Available",
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
    },
    {
      title: "Residential Plot - Gisozi",
      location: "Kigali, Gasabo",
      price: "25M RWF",
      size: "800m²",
      status: "Sold",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
    {
      title: "Commercial Land - Remera",
      location: "Kigali, Remera",
      price: "40M RWF",
      size: "1200m²",
      status: "Available",
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156",
    },
  ];

  return (
    <div className="space-y-8">

      {/* Header */}
      <div className="bg-white rounded-3xl shadow-sm p-8 flex justify-between items-center">

        <div>
          <h1 className="text-4xl font-bold text-slate-800">
            Ibibanza 📍
          </h1>

          <p className="text-gray-500 mt-2 text-lg">
            Reba ibibanza biri kugurishwa kuri BuildWise.
          </p>
        </div>

        <button className="bg-blue-600 text-white px-6 py-4 rounded-2xl font-semibold hover:bg-blue-700 transition">
          + Add Land
        </button>

      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <p className="text-gray-500">Total Lands</p>

          <h2 className="text-3xl font-bold mt-3 text-slate-800">
            24
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <p className="text-gray-500">Available</p>

          <h2 className="text-3xl font-bold mt-3 text-green-600">
            18
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <p className="text-gray-500">Sold</p>

          <h2 className="text-3xl font-bold mt-3 text-red-500">
            6
          </h2>
        </div>

      </div>

      {/* Lands Grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

        {lands.map((land, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition"
          >

            <img
              src={land.image}
              alt={land.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-6">

              <div className="flex justify-between items-start">

                <div>
                  <h3 className="text-2xl font-bold text-slate-800">
                    {land.title}
                  </h3>

                  <p className="text-gray-500 mt-2">
                    {land.location}
                  </p>
                </div>

                <span
                  className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    land.status === "Available"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {land.status}
                </span>

              </div>

              <div className="mt-6 flex justify-between items-center">

                <div>
                  <p className="text-gray-500 text-sm">
                    Size
                  </p>

                  <h4 className="font-bold text-slate-800">
                    {land.size}
                  </h4>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">
                    Price
                  </p>

                  <h4 className="font-bold text-blue-600 text-xl">
                    {land.price}
                  </h4>
                </div>

              </div>

              <button className="w-full mt-6 bg-blue-600 text-white py-4 rounded-2xl font-semibold hover:bg-blue-700 transition">
                View Details
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}