import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import CustomerService from "./pages/CustomerService";
import Product from "./pages/Product";
import Legal from "./pages/Legal";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/customerservice" element={<CustomerService />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;
