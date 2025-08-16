import { useState } from "react";

function Checkout() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order placed:", formData);
    alert("✅ Order placed successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 flex justify-center">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-3xl p-8">
        <h2 className="text-3xl font-bold text-violet-600 mb-6 text-center">
          Secure Checkout
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Customer Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-violet-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="border rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-violet-400"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="border rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-violet-400"
            />
          </div>

          {/* Address */}
          <textarea
            name="address"
            placeholder="Street Address"
            value={formData.address}
            onChange={handleChange}
            required
            className="border rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-violet-400"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
              className="border rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-violet-400"
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
              required
              className="border rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-violet-400"
            />
            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              value={formData.pincode}
              onChange={handleChange}
              required
              className="border rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-violet-400"
            />
          </div>

          {/* Payment */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-violet-500 to-purple-500 text-white px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition"
            >
              💳 Pay with GPay
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
