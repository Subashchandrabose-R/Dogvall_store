import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProductCard({ product }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <Link to={`/product/${product.id}`}>
        <img src={product.img} alt={product.name} className="w-full h-64 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-pink-600 font-bold">{product.price}</p>
        </div>
      </Link>
    </motion.div>
  );
}
