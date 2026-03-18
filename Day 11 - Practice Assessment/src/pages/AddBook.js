import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import BookActions from "../flux/BookActions";

function AddBook() {

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      price: ""
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Required"),
      author: Yup.string().required("Required"),
      price: Yup.number().required("Required")
    }),
    onSubmit: async (values) => {

      try {
        // 1️⃣ Dispatch to Flux (requirement)
        BookActions.addBook(values);

        // 2️⃣ Save to backend (important)
        await axios.post("http://localhost:5000/books", {
          ...values,
          image: "",
        });

        // 3️⃣ Navigate back
        navigate("/home");

      } catch (error) {
        console.log(error);
      }
    }
  });

  return (
    <div className="container mt-5">
      <h2>Add New Book</h2>

      <form onSubmit={formik.handleSubmit}>

        <input
          name="title"
          placeholder="Title"
          className="form-control mb-2"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        {formik.errors.title && <div className="text-danger">{formik.errors.title}</div>}

        <input
          name="author"
          placeholder="Author"
          className="form-control mb-2"
          onChange={formik.handleChange}
          value={formik.values.author}
        />
        {formik.errors.author && <div className="text-danger">{formik.errors.author}</div>}

        <input
          name="price"
          placeholder="Price"
          className="form-control mb-2"
          onChange={formik.handleChange}
          value={formik.values.price}
        />
        {formik.errors.price && <div className="text-danger">{formik.errors.price}</div>}

        <button type="submit" className="btn btn-success">
          Add Book
        </button>

      </form>
    </div>
  );
}

export default AddBook;