export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        
        {/* About */}
        <div>
          <h4 className="text-xl font-bold mb-4 text-white">Dogvall Store</h4>
          <p className="text-sm">Discover trendy styles crafted with quality & care. Fashion that fits you.</p>
        </div>

        {/* Customer Services */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Customer Service</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/customerservice" className="hover:text-violet-400">FAQs</a></li>
            <li><a href="/customerservice" className="hover:text-violet-400">Shipping & Returns</a></li>
            <li><a href="/customerservice" className="hover:text-violet-400">Contact Us</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/legal" className="hover:text-violet-400">Privacy Policy</a></li>
            <li><a href="/legal" className="hover:text-violet-400">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Subscribe & Social */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Stay Connected</h4>
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded w-full mb-4 text-black"
          />
          <button className="bg-violet-500 text-white px-4 py-2 rounded hover:bg-violet-600 w-full">
            Subscribe
          </button>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-violet-400">🌐</a>
            <a href="#" className="hover:text-violet-400">🐦</a>
            <a href="#" className="hover:text-violet-400">📷</a>
          </div>
        </div>
      </div>
      <div className="text-center text-sm mt-8 border-t border-gray-700 pt-4">
        © 2025 Dogvall Store. All rights reserved.
      </div>
    </footer>
  );
}
