import React from "react";
import { Link } from "react-router-dom";
import BookList from "../components/BookList";
import Greeting from "../components/Greeting";
import "../App.css";

function Home() {
  return (
    <div className="fade-container">
      <div className="container mt-4">
        
        <Greeting>
          {(name) => (
            <h4 className="text-center mb-2">
              Welcome, {name}! 📖
            </h4>
          )}
        </Greeting>

        <h1 className="app-title text-center mb-4">
          📚 BookVerse: Featured Books
        </h1>

        {/* 🔥 Add This Button */}
        <div className="text-center mb-3">
          <Link to="/add-book" className="btn btn-warning">
            ➕ Add New Book
          </Link>
        </div>

        <BookList />
      </div>
    </div>
  );
}

export default Home;