// src/pages/Shop.js
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    price: "₹799",
    img: "https://images.unsplash.com/photo-1520975918319-4e27e4b22792?w=600"
  },
  {
    id: 2,
    name: "Streetwear Hoodie",
    price: "₹1,999",
    img: "https://images.unsplash.com/photo-1602810318383-e6b5f98c4c84?w=600"
  },
  {
    id: 3,
    name: "Denim Jacket",
    price: "₹2,499",
    img: "https://images.unsplash.com/photo-1551022370-0a06a6a6249e?w=600"
  }
];

export default function Shop() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-violet-600 mb-8">Shop Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((p) => (
          <Link
            key={p.id}
            to={`/product/${p.id}`}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition"
          >
            <img src={p.img} alt={p.name} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{p.name}</h2>
              <p className="text-violet-600 font-bold">{p.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
