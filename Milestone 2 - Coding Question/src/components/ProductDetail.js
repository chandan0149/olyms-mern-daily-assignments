import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await axios.get(
          `http://localhost:5000/products/${id}`
        );

        // If product not found
        if (!res.data || Object.keys(res.data).length === 0) {
          setError("Product not found");
          return;
        }

        setProduct(res.data);

      } catch (err) {
        console.log("Fetch error:", err);
        setError("Error fetching product");
      }
    }

    fetchProduct();
  }, [id]);

  if (error)
    return (
      <div className="container mt-5 text-center">
        <h3 className="text-danger">{error}</h3>
        <Link to="/" className="btn btn-dark mt-3">
          Back
        </Link>
      </div>
    );

  if (!product)
    return <h3 className="text-center mt-5">Loading...</h3>;

  return (
    <div className="container mt-4">
      <div className="card shadow p-4">
        <img
  src={product.image}
  alt={product.name}
  className="detail-image"
/>
        <h2>{product.name}</h2>
        <p className="text-success fs-4">₹ {product.price}</p>
        <p className="badge bg-info">{product.category}</p>
        <p className="mt-3">{product.description}</p>

        <Link to="/" className="btn btn-dark mt-3">
          Back
        </Link>
      </div>
    </div>
  );
}

export default ProductDetail;