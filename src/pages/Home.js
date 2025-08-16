import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import HeroSlider from "../components/HeroSlider";
import ProductCard from "../components/ProductCard";

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

export default function Home() {
  return (
    <Layout>
      <HeroSlider />
      <section className="px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </section>
    </Layout>
  );
}