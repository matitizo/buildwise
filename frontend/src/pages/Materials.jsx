import { useState } from "react";

function Materials() {
  const [materials, setMaterials] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const addMaterial = (e) => {
    e.preventDefault();

    setMaterials([
      ...materials,
      {
        id: Date.now(),
        ...formData,
      },
    ]);

    setFormData({
      name: "",
      category: "",
      price: "",
      image: "",
    });
  };

  const deleteMaterial = (id) => {
    setMaterials(
      materials.filter((item) => item.id !== id)
    );
  };

  return (
    <div className="p-8">
      <h1 className="text-5xl font-bold text-blue-900 mb-10">
        Construction Materials 🧱
      </h1>

      {/* FORM */}

      <form
        onSubmit={addMaterial}
        className="bg-white p-6 rounded-2xl shadow-lg mb-10"
      >
        <h2 className="text-3xl font-bold mb-6">
          Ongeramo Material
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          <input
            type="text"
            name="name"
            placeholder="Izina rya material"
            value={formData.name}
            onChange={handleChange}
            className="border p-3 rounded-xl"
            required
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
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
            className="border p-3 rounded-xl"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-900 text-white px-6 py-3 rounded-xl mt-6 hover:bg-blue-700"
        >
          Bika Material
        </button>
      </form>

      {/* MATERIAL CARDS */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {materials.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-56 object-cover"
            />

            <div className="p-5">
              <h2 className="text-2xl font-bold text-gray-800">
                {item.name}
              </h2>

              <p className="text-gray-500 mt-2">
                📦 {item.category}
              </p>

              <p className="text-blue-900 font-bold text-2xl mt-4">
                ${item.price}
              </p>

              <button
                onClick={() => deleteMaterial(item.id)}
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

export default Materials;