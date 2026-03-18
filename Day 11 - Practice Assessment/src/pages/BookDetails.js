import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import withLoader from "../hoc/withLoader";

function BookDetails({ setLoading }) {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {

    setLoading(true);

    axios.get(`http://localhost:5000/books/${id}`)
      .then(res => {
        setBook(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });

  }, [id, setLoading]);

  if (!book) return null;

  return (
    <div className="fade-container container mt-5 text-center">
      <img src={book.image} alt={book.title} width="200" />
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>{book.description}</p>
      <h4 className="price">₹{book.price}</h4>
      <Link to="/home" className="btn btn-primary mt-3">Back</Link>
    </div>
  );
}

export default withLoader(BookDetails);