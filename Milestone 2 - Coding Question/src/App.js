import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import Navbar from "./Navbar";
import "./App.css";
const ProductDetail = lazy(() =>
  import("./components/ProductDetail")
);

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<h3 className="text-center">Loading...</h3>}>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/add" element={<AddProduct />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;