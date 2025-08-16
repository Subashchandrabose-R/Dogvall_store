import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <Link to="/" className="flex items-center space-x-2">
  <img
    src="/logo.PNG"   // put your logo file inside public/logo.png
    alt="Dogvall Store Logo"
    className="h-10 w-auto" // adjust size (height 10 ~ 40px)
  />
</Link>

        {/* Menu */}
        <nav className="space-x-6 hidden md:flex">
          <Link to="/" className="hover:text-violet-500">Home</Link>
          <Link to="/shop" className="hover:text-violet-500">Shop</Link>
          <Link to="/customerservice" className="text-gray-700 hover:text-violet-600">Customer Service</Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-gray-700"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu (Sliding Drawer) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="p-4 text-gray-700"
        >
          <X size={28} />
        </button>

        {/* Links */}
        <div className="flex flex-col space-y-6 p-6 text-lg">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/shop" onClick={() => setIsOpen(false)}>Shop</Link>
          <Link to="/customerservice" onClick={() => setIsOpen(false)}>Customer Service</Link>
        </div>
      </div>
      </header>
  );
}
