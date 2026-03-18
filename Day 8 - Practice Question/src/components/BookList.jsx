import React, { useState } from "react";
import BookCard from "./BookCard";

const BookList = () => {

  const books = [
    {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      price: 499,
      image: "https://m.media-amazon.com/images/I/81bGKUa1e0L.jpg"
    },
    {
      id: 2,
      title: "The Alchemist",
      author: "Paulo Coelho",
      price: 399,
      image: "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg"
    },
    {
      id: 3,
      title: "Deep Work",
      author: "Cal Newport",
      price: 550,
      image: "https://m.media-amazon.com/images/I/81JJPDNlxSL.jpg"
    },
    {
      id: 4,
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      price: 450,
      image: "https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg"
    }
  ];

  const [viewMode, setViewMode] = useState("Grid");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ textAlign: "center" }}>

      {/* Search */}
      <input
        type="text"
        placeholder="Search books..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "10px",
          width: "280px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          marginBottom: "20px"
        }}
      />

      <br />

      {/* Buttons */}
      <button
        onClick={() => setViewMode("Grid")}
        style={{
          padding: "8px 15px",
          margin: "5px",
          backgroundColor: "#3498db",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        Grid View
      </button>

      <button
        onClick={() => setViewMode("List")}
        style={{
          padding: "8px 15px",
          margin: "5px",
          backgroundColor: "#2ecc71",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        List View
      </button>

      {/* Book Container */}
      <div
        style={{
          display: viewMode === "Grid" ? "flex" : "block",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "stretch",
          gap: "20px",
          marginTop: "30px"
        }}
      >
        {filteredBooks.map((book) => (
          <BookCard
            key={book.id}
            title={book.title}
            author={book.author}
            price={book.price}
            image={book.image}
            viewMode={viewMode}
          />
        ))}
      </div>

    </div>
  );
};

export default BookList;
