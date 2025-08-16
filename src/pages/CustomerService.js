import { useState } from "react";

export default function CustomerService() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    { q: "How long does shipping take?", a: "Shipping usually takes 5-7 business days across India." },
    { q: "What is your return policy?", a: "You can return items within 14 days in unused condition for a full refund." },
    { q: "Do you offer international shipping?", a: "Currently, we only ship within India." }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow px-8 py-4">
        <h1 className="text-2xl font-bold text-violet-600">Customer Service</h1>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-10 space-y-12">
        
        {/* FAQs */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">FAQs</h2>
          <div className="space-y-3">
            {faqs.map((item, i) => (
              <div key={i} className="border rounded-lg bg-white shadow-sm">
                <button
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                  className="w-full flex justify-between px-4 py-3 text-left font-medium text-gray-700 hover:bg-gray-100"
                >
                  {item.q}
                  <span>{openFAQ === i ? "−" : "+"}</span>
                </button>
                {openFAQ === i && (
                  <p className="px-4 pb-3 text-gray-600">{item.a}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Shipping & Returns */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Shipping & Returns</h2>
          <p className="text-gray-700 leading-relaxed">
            Orders are processed within 24 hours. Delivery takes 5-7 working days.  
            Returns are accepted within 14 days of purchase. Please ensure items are unused and in original packaging.
          </p>
        </section>

        {/* Contact Us */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Us</h2>
          <form className="space-y-4 max-w-md">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border px-4 py-2 rounded-md focus:ring-2 focus:ring-violet-500 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border px-4 py-2 rounded-md focus:ring-2 focus:ring-violet-500 outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full border px-4 py-2 rounded-md focus:ring-2 focus:ring-violet-500 outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-violet-600 text-white px-6 py-2 rounded-lg shadow hover:bg-pink-500 transition"
            >
              Send Message
            </button>
          </form>
        </section>

      </div>
    </div>
  );
}
