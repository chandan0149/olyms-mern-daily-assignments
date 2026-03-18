import React, { useState, useRef } from "react";
import BookCard from "./BookCard";
import AuthorInfo from "./AuthorInfo";

function BookList() {

  const [viewMode, setViewMode] = useState("Grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);

  const searchRef = useRef(null);

  const books = [
    {
      title: "Atomic Habits",
      author: "James Clear",
      price: 499,
      image: "https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg",
      bio: "James Clear writes about habits and decision making.",
      topBooks: ["Atomic Habits", "Mastering Habits", "Habit Success"]
    },
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      price: 399,
      image: "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg",
      bio: "Paulo Coelho is known for inspirational novels.",
      topBooks: ["The Alchemist", "Brida", "Eleven Minutes"]
    },
    {
      title: "Deep Work",
      author: "Cal Newport",
      price: 550,
      image: "https://images-na.ssl-images-amazon.com/images/I/71g2ednj0JL.jpg",
      bio: "Cal Newport writes about productivity.",
      topBooks: ["Deep Work", "Digital Minimalism", "So Good They Can't Ignore You"]
    }
  ];

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
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
              <BookCard
                title={book.title}
                author={book.author}
                price={book.price}
                image={book.image}
                viewMode={viewMode}
                onSelect={() => setSelectedBook(book)}
              />
            </div>
          ))}
        </div>
      </div>

      {selectedBook && (
        <AuthorInfo
          author={selectedBook.author}
          bio={selectedBook.bio}
          topBooks={selectedBook.topBooks}
        />
      )}

    </div>
  );
}

export default BookList;
