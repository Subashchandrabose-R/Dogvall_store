export default function Legal() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow px-8 py-4">
        <h1 className="text-2xl font-bold text-violet-600">Legal</h1>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-10 space-y-12">
        
        {/* Privacy Policy */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Privacy Policy</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            At <span className="font-semibold">Dogvall Store</span>, your privacy is extremely important to us.  
            We collect only the information necessary to provide you with a seamless shopping experience.  
            This may include your name, contact information, shipping address, and payment details.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            All personal data is stored securely and never shared with third parties, except when required to complete transactions such as shipping or payment processing.  
            We do not sell or rent your personal information to any third party.
          </p>
          <p className="text-gray-700 leading-relaxed">
            By using our website, you consent to the collection and use of information in accordance with this policy.  
            We may update this policy from time to time, so please review it periodically.
          </p>
        </section>

        {/* Terms & Conditions */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Terms & Conditions</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            By accessing and using <span className="font-semibold">Dogvall Store</span>, you agree to comply with the following terms and conditions.
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>All products are subject to availability. Prices may change without prior notice.</li>
            <li>We reserve the right to refuse service to anyone, for any reason, at any time.</li>
            <li>Users are responsible for maintaining the confidentiality of their account credentials.</li>
            <li>Orders placed are binding once confirmed and processed. Cancellations may not be possible after dispatch.</li>
            <li>Any misuse of our website, including fraudulent activity, may result in termination of services and legal action.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            These terms are governed by and construed in accordance with the laws of India.  
            Continued use of our website implies acceptance of these terms.
          </p>
        </section>

      </div>
    </div>
  );
}
