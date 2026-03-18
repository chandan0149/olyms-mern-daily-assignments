import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Fetching products...");

    axios
      .get("http://localhost:5000/products")
      .then((res) => {
        console.log("DATA RECEIVED:", res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log("API ERROR:", err);
        setError("Failed to fetch products");
      })
      .finally(() => {
        setLoading(false);
      });

  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
};