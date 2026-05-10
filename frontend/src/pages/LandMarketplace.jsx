import { useEffect, useState } from "react";

function LandMarketplace() {
  const [lands, setLands] = useState([]);

  useEffect(() => {
    fetch("https://buildwise-mxvk.onrender.com/api/lands")
      .then((res) => res.json())
      .then((data) => setLands(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8 text-blue-900">
        Isoko ry'Ibibanza 🏡
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {lands.map((land) => (
          <div
            key={land._id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <img
              src={land.image}
              alt={land.title}
              className="h-52 w-full object-cover"
            />

            <div className="p-5">
              <h2 className="text-2xl font-bold text-gray-800">
                {land.title}
              </h2>

              <p className="text-gray-500 mt-2">
                📍 {land.location}
              </p>

              <p className="text-blue-700 font-bold text-xl mt-4">
                {land.price}
              </p>

              <button className="mt-5 bg-blue-900 text-white px-5 py-2 rounded-xl hover:bg-blue-700">
                Reba byinshi
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LandMarketplace;