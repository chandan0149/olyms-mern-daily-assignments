import React, { Component } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductCard from "./ProductCard";

class ProductList extends Component {
  static contextType = ProductContext;

  render() {
    const { products, loading, error } = this.context;

    if (loading) return <h3 className="text-center mt-5">Loading...</h3>;
    if (error) return <h3 className="text-danger text-center">{error}</h3>;

    return (
      <div className="container mt-4">
        <div className="row">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  }
}

export default ProductList;