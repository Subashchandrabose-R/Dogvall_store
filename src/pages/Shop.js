import { useState } from "react";
import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Classic T-Shirt", price: 499, category: "T-Shirts", img: "https://via.placeholder.com/250x250", desc: "A comfortable and stylish cotton t-shirt." },
  { id: 2, name: "Hoodie", price: 999, category: "Hoodies", img: "https://via.placeholder.com/250x250", desc: "Warm hoodie for chilly days." },
  { id: 3, name: "Denim Jacket", price: 1499, category: "Jackets", img: "https://via.placeholder.com/250x250", desc: "Trendy denim jacket for all seasons." },
  { id: 4, name: "Sneakers", price: 1999, category: "Shoes", img: "https://via.placeholder.com/250x250", desc: "Stylish sneakers for everyday wear." },
  { id: 5, name: "Formal Shirt", price: 799, category: "Shirts", img: "https://via.placeholder.com/250x250", desc: "Perfect formal shirt for office & meetings." },
];

function Shop() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [price, setPrice] = useState(2000);

  const filteredProducts = products.filter((p) => {
    return (
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || p.category === category) &&
      p.price <= price
    );
  });

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <h2 className="text-3xl font-bold text-violet-600 mb-8 text-center">
        🛍 Shop Our Collection
      </h2>

      {/* Search + Filters */}
      <div className="flex flex-col md:flex-row gap-6 mb-10 justify-center">
        <input
          type="text"
          placeholder="🔍 Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-lg px-4 py-3 w-full md:w-1/3 focus:ring-2 focus:ring-violet-400"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-violet-400"
        >
          <option>All</option>
          <option>T-Shirts</option>
          <option>Hoodies</option>
          <option>Jackets</option>
          <option>Shoes</option>
          <option>Shirts</option>
        </select>
        <div className="flex items-center gap-2">
          <label className="font-medium text-gray-700">Max Price:</label>
          <input
            type="range"
            min="300"
            max="2000"
            step="100"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-40"
          />
          <span className="font-semibold text-violet-600">₹{price}</span>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p) => (
            <div
              key={p.id}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition"
            >
              <img src={p.img} alt={p.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">{p.name}</h3>
                <p className="text-gray-500">{p.category}</p>
                <p className="text-violet-600 font-bold mt-2">₹{p.price}</p>

                {/* Navigate to Product Details */}
                <Link
                  to={`/product/${p.id}`}
                  state={{ product: p }}
                  className="mt-4 block text-center bg-violet-600 text-white py-2 rounded-lg hover:bg-violet-700 transition"
                >
                  View Product
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            ❌ No products found.
          </p>
        )}
      </div>
    </div>
  );
}

export default Shop;
