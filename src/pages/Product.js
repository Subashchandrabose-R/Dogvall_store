import { Link, useParams, useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    price: "₹799",
    img: "https://images.unsplash.com/photo-1520975918319-4e27e4b22792?w=600",
    desc: "A premium cotton t-shirt perfect for everyday wear."
  },
  {
    id: 2,
    name: "Streetwear Hoodie",
    price: "₹1,999",
    img: "https://images.unsplash.com/photo-1602810318383-e6b5f98c4c84?w=600",
    desc: "Oversized fit, high-quality fabric for comfort and style."
  },
  {
    id: 3,
    name: "Denim Jacket",
    price: "₹2,499",
    img: "https://images.unsplash.com/photo-1551022370-0a06a6a6249e?w=600",
    desc: "Stylish denim jacket with a modern urban edge."
  }
];

export default function Product() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const navigate = useNavigate();

  if (!product) return <div className="p-8">Product not found</div>;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4 shadow bg-white">
        <h1 className="text-xl font-bold text-violet-600">Dogvall Store</h1>
        <button
          onClick={() => navigate(-1)}
          className="text-gray-600 hover:text-violet-500"
        >
          ← Back
        </button>
      </header>

      {/* Main Content Centered */}
      <main className="flex-grow flex items-center justify-center">
        <div className="max-w-6xl w-full px-6 py-10 grid md:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <div className="flex justify-center">
            <img
              src={product.img}
              alt={product.name}
              className="rounded-xl shadow-lg max-h-[500px] object-cover w-full md:w-auto"
            />
          </div>

          {/* Product Info */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-center md:text-left">
              {product.name}
            </h2>
            <p className="text-gray-700 mb-6 text-center md:text-left">
              {product.desc}
            </p>
            <p className="text-2xl font-semibold text-violet-600 mb-8 text-center md:text-left">
              {product.price}
            </p>
            <div className="flex justify-center md:justify-start">
              <Link
                to="/checkout"
                className="bg-pink-500 text-white px-6 py-3 rounded-lg shadow hover:bg-violet-600 transition"
              >
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
