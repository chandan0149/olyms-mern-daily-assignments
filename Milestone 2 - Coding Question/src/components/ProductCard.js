import React, { useState } from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const [favorite, setFavorite] = useState(false);

  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow-lg h-100">
        <img
          src={product.image}
          alt={product.name}
          className="card-img-top"
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5>{product.name}</h5>
          <p className="text-success fw-bold">₹ {product.price}</p>
          <p className="badge bg-primary">{product.category}</p>

          <div className="mt-3">
            <button
              className="btn btn-outline-danger me-2"
              onClick={() => setFavorite(!favorite)}
            >
              {favorite ? " Favorited" : " Favorite"}
            </button>

            <Link to={`/product/${product.id}`} className="btn btn-dark">
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;