import { useEffect, useState } from "react";

function LandMarketplace() {
  const [lands, setLands] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    location: "",
    size: "",
    price: "",
    image: "",
  });

  const fetchLands = async () => {
    try {
      const res = await fetch(
        "https://buildwise-mxvk.onrender.com/api/lands"
      );

      const data = await res.json();

      setLands(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLands();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const addLand = async (e) => {
    e.preventDefault();

    try {
      await fetch(
        "https://buildwise-mxvk.onrender.com/api/lands",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      setFormData({
        title: "",
        location: "",
        size: "",
        price: "",
        image: "",
      });

      fetchLands();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteLand = async (id) => {
    try {
      await fetch(
        `https://buildwise-mxvk.onrender.com/api/lands/${id}`,
        {
          method: "DELETE",
        }
      );

      fetchLands();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">
        Isoko ry'Ibibanza 🏡
      </h1>

      {/* FORM */}

      <form
        onSubmit={addLand}
        className="bg-white p-6 rounded-2xl shadow-lg mb-10"
      >
        <h2 className="text-2xl font-bold mb-6">
          Ongeramo Ikibanza
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          <input
            type="text"
            name="title"
            placeholder="Izina ry'ikibanza"
            value={formData.title}
            onChange={handleChange}
            className="border p-3 rounded-xl"
            required
          />

          <input
            type="text"
            name="location"
            placeholder="Aho giherereye"
            value={formData.location}
            onChange={handleChange}
            className="border p-3 rounded-xl"
            required
          />

          <input
            type="text"
            name="size"
            placeholder="Ingano"
            value={formData.size}
            onChange={handleChange}
            className="border p-3 rounded-xl"
            required
          />

          <input
            type="number"
            name="price"
            placeholder="Igiciro"
            value={formData.price}
            onChange={handleChange}
            className="border p-3 rounded-xl"
            required
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            className="border p-3 rounded-xl md:col-span-2"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-900 text-white px-6 py-3 rounded-xl mt-6 hover:bg-blue-700"
        >
          Bika Ikibanza
        </button>
      </form>

      {/* CARDS */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {lands.map((land) => (
          <div
            key={land._id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <img
              src={land.image}
              alt={land.title}
              className="h-56 w-full object-cover"
            />

            <div className="p-5">
              <h2 className="text-2xl font-bold text-gray-800">
                {land.title}
              </h2>

              <p className="text-gray-500 mt-2">
                📍 {land.location}
              </p>

              <p className="text-gray-500">
                📐 {land.size}
              </p>

              <p className="text-blue-900 font-bold text-2xl mt-4">
                ${land.price}
              </p>

              <button
                onClick={() => deleteLand(land._id)}
                className="bg-red-600 text-white px-5 py-2 rounded-xl mt-5 hover:bg-red-700"
              >
                Siba
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LandMarketplace;