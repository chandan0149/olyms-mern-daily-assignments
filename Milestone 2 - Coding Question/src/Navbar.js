import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark p-3">
      <div className="container">
        <Link to="/" className="navbar-brand">
           Product Dashboard
        </Link>
        <Link to="/add" className="btn btn-warning">
          + Add Product
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;