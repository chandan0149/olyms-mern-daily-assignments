import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BookStore from "../flux/BookStore";

function BookList() {

  const [backendBooks, setBackendBooks] = useState([]);
  const [storeBooks, setStoreBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("Grid");

  const searchRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {

    // Load initial books from backend
    axios.get("http://localhost:5000/books")
      .then(res => setBackendBooks(res.data))
      .catch(err => console.log(err));

    // Subscribe to Flux Store
    BookStore.subscribe(() => {
      setStoreBooks(BookStore.getBooks());
    });

  }, []);

  // Merge backend + store books
  const allBooks = [...backendBooks, ...storeBooks];

  const filteredBooks = allBooks.filter(book =>
    book.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>

      <div className="search-box">
        <input
          ref={searchRef}
          type="text"
          className="form-control"
          placeholder="Search books..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="toggle-buttons">
        <button
          className="btn btn-primary me-2"
          onClick={() => setViewMode("Grid")}
        >
          Grid View
        </button>

        <button
          className="btn btn-success"
          onClick={() => setViewMode("List")}
        >
          List View
        </button>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          {filteredBooks.map((book, index) => (
            <div
              key={index}
              className={viewMode === "Grid" ? "col-md-4 mb-4" : "col-12 mb-4"}
            >
              <div
                className="book-card"
                onClick={() => book.id && navigate(`/book/${book.id}`)}
                style={{ cursor: book.id ? "pointer" : "default" }}
              >
                {book.image && (
                  <img
                    src={book.image}
                    alt={book.title}
                    className="book-image"
                  />
                )}
                <h4>{book.title}</h4>
                <p>Author: {book.author}</p>
                <p className="price">₹{book.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default BookList;