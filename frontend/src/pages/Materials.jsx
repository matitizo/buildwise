import React, { useMemo, useState } from "react";
import {
  Search,
  ShoppingCart,
  Package,
  Store,
  ShieldCheck,
  Plus,
  Minus,
  Trash2,
  Truck,
  Star,
  Filter,
} from "lucide-react";

const categories = [
  "All",
  "Cement",
  "Steel",
  "Blocks",
  "Sand",
  "Paint",
  "Roofing",
  "Tools",
];

const materials = [
  {
    id: 1,
    name: "Cement 42.5N",
    category: "Cement",
    supplier: "Kigali Hardware Ltd",
    price: 14500,
    unit: "bag",
    stock: "In Stock",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    name: "Reinforcement Steel Bar",
    category: "Steel",
    supplier: "Rwanda Steel Market",
    price: 12500,
    unit: "piece",
    stock: "In Stock",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    name: "Concrete Blocks",
    category: "Blocks",
    supplier: "Prime Blocks Rwanda",
    price: 650,
    unit: "piece",
    stock: "In Stock",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1600275669439-14e40452d20b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    name: "River Sand",
    category: "Sand",
    supplier: "BuildSupply Rwanda",
    price: 45000,
    unit: "truck",
    stock: "Limited",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    name: "Wall Paint",
    category: "Paint",
    supplier: "Color House Kigali",
    price: 38000,
    unit: "bucket",
    stock: "In Stock",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    name: "Roofing Sheets",
    category: "Roofing",
    supplier: "RoofPro Rwanda",
    price: 21000,
    unit: "sheet",
    stock: "In Stock",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
  },
];

export default function Materials() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  const filteredMaterials = useMemo(() => {
    return materials.filter((item) => {
      const matchCategory =
        activeCategory === "All" || item.category === activeCategory;

      const matchSearch =
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.supplier.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [activeCategory, search]);

  function addToCart(item) {
    const exists = cart.find((cartItem) => cartItem.id === item.id);

    if (exists) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  }

  function increaseQty(id) {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function decreaseQty(id) {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity - 1) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeFromCart(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-[#f7f8fb] text-[#050816] px-6 py-8">
      <section className="bg-[#050816] text-white rounded-[30px] p-8 md:p-12 mb-8">
        <p className="text-pink-500 font-black mb-3">BUILDWISE MATERIALS</p>

        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Shop construction materials from verified suppliers.
        </h1>

        <p className="text-slate-300 max-w-3xl leading-8">
          Shaka cement, steel, blocks, sand, roofing, paint n’ibikoresho
          by’ubwubatsi. Reba supplier, igiciro, stock status maze wongere muri
          cart.
        </p>
      </section>

      <div className="grid lg:grid-cols-4 gap-8">
        <main className="lg:col-span-3 space-y-6">
          <section className="bg-white border border-slate-200 rounded-[26px] p-5 shadow-sm">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="md:col-span-2 bg-slate-50 rounded-xl px-4 py-3 flex items-center gap-3">
                <Search className="text-pink-600" size={20} />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search materials, supplier, category..."
                  className="bg-transparent outline-none w-full font-semibold"
                />
              </div>

              <div className="bg-slate-50 rounded-xl px-4 py-3 flex items-center gap-3 font-black">
                <Filter className="text-pink-600" size={20} />
                {filteredMaterials.length} materials found
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-5">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-xl font-black transition ${
                    activeCategory === category
                      ? "bg-pink-600 text-white"
                      : "bg-slate-100 hover:bg-pink-50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </section>

          <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredMaterials.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-slate-200 rounded-[26px] overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />

                  <div className="absolute top-3 left-3 bg-[#050816] text-white px-3 py-1.5 rounded-lg font-black text-xs">
                    {item.category}
                  </div>

                  <div
                    className={`absolute top-3 right-3 px-3 py-1.5 rounded-lg font-black text-xs ${
                      item.stock === "In Stock"
                        ? "bg-emerald-600 text-white"
                        : "bg-yellow-400 text-[#050816]"
                    }`}
                  >
                    {item.stock}
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-xl font-black">{item.name}</h3>
                      <p className="text-slate-500 flex items-center gap-2 mt-1">
                        <Store size={16} />
                        {item.supplier}
                      </p>
                    </div>

                    <div className="flex items-center gap-1 bg-yellow-50 text-yellow-700 px-2 py-1 rounded-lg font-black text-sm">
                      <Star size={14} fill="currentColor" />
                      {item.rating}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-emerald-600 mb-4">
                    <ShieldCheck size={18} />
                    <span className="font-black">Verified Supplier</span>
                  </div>

                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <p className="text-slate-500 text-sm">Price</p>
                      <h4 className="text-2xl font-black text-emerald-600">
                        {item.price.toLocaleString()} RWF
                      </h4>
                      <p className="text-slate-500 text-sm">per {item.unit}</p>
                    </div>

                    <button
                      onClick={() => addToCart(item)}
                      className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-3 rounded-xl font-black flex items-center gap-2"
                    >
                      <ShoppingCart size={18} />
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </section>

          {filteredMaterials.length === 0 && (
            <section className="bg-white border border-slate-200 rounded-[26px] p-10 text-center">
              <Package size={42} className="mx-auto text-pink-600 mb-4" />
              <h3 className="text-2xl font-black mb-2">
                No materials found
              </h3>
              <p className="text-slate-500">
                Try another category or search keyword.
              </p>
            </section>
          )}
        </main>

        <aside className="space-y-6">
          <section className="bg-white border border-slate-200 rounded-[26px] p-5 shadow-sm lg:sticky lg:top-28">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-2xl font-black">Cart</h2>

              <div className="bg-pink-600 text-white px-3 py-1.5 rounded-lg font-black text-sm">
                {cart.length}
              </div>
            </div>

            {cart.length === 0 ? (
              <div className="bg-slate-50 rounded-2xl p-6 text-center">
                <ShoppingCart className="mx-auto text-slate-400 mb-3" />
                <p className="font-black">Cart is empty</p>
                <p className="text-slate-500 text-sm mt-1">
                  Add materials to continue.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="border border-slate-200 rounded-2xl p-4"
                  >
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <h4 className="font-black">{item.name}</h4>
                        <p className="text-slate-500 text-sm">
                          {item.price.toLocaleString()} RWF / {item.unit}
                        </p>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500"
                      >
                        <Trash2 size={17} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => decreaseQty(item.id)}
                          className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center"
                        >
                          <Minus size={15} />
                        </button>

                        <span className="font-black">{item.quantity}</span>

                        <button
                          onClick={() => increaseQty(item.id)}
                          className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center"
                        >
                          <Plus size={15} />
                        </button>
                      </div>

                      <p className="font-black text-emerald-600">
                        {(item.price * item.quantity).toLocaleString()} RWF
                      </p>
                    </div>
                  </div>
                ))}

                <div className="border-t border-slate-200 pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-black">Total</span>
                    <span className="text-2xl font-black text-emerald-600">
                      {cartTotal.toLocaleString()} RWF
                    </span>
                  </div>

                  <button className="w-full bg-[#050816] hover:bg-black text-white py-3 rounded-xl font-black flex items-center justify-center gap-2">
                    <Truck size={18} />
                    Request Delivery
                  </button>
                </div>
              </div>
            )}
          </section>
        </aside>
      </div>
    </div>
  );
}