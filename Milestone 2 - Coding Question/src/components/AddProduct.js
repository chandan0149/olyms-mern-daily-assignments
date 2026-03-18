import React, { useContext } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ProductContext } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const { setProducts } = useContext(ProductContext);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      category: "",
      description: "",
      image: ""
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      price: Yup.number().required("Required"),
      category: Yup.string().required("Required"),
      description: Yup.string().required("Required"),
      image: Yup.string().required("Image URL required")
    }),
    onSubmit: async (values) => {
      const res = await axios.post(
        "http://localhost:5000/products",
        values
      );
      setProducts((prev) => [...prev, res.data]);
      navigate("/");
    }
  });

  return (
    <div className="container mt-4">
      <div className="card p-4 shadow">
        <h3>Add Product</h3>
        <form onSubmit={formik.handleSubmit}>

          <input name="name" placeholder="Name"
            className="form-control mb-2"
            onChange={formik.handleChange} />
          <div className="text-danger">{formik.errors.name}</div>

          <input name="price" placeholder="Price"
            className="form-control mb-2"
            onChange={formik.handleChange} />
          <div className="text-danger">{formik.errors.price}</div>

          <input name="category" placeholder="Category"
            className="form-control mb-2"
            onChange={formik.handleChange} />
          <div className="text-danger">{formik.errors.category}</div>

          <input name="image" placeholder="Image URL"
            className="form-control mb-2"
            onChange={formik.handleChange} />
          <div className="text-danger">{formik.errors.image}</div>

          <textarea name="description" placeholder="Description"
            className="form-control mb-2"
            onChange={formik.handleChange} />
          <div className="text-danger">{formik.errors.description}</div>

          <button type="submit" className="btn btn-success">
            Add Product
          </button>

        </form>
      </div>
    </div>
  );
}

export default AddProduct;