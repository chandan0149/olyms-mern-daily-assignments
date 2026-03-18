import React from "react";
import BookList from "./components/BookList";
import "./App.css";

function App() {
  return (
    <div>
      <h1 className="app-title">
        📚 BookVerse: Featured Books
      </h1>
      <BookList />
    </div>
  );
}

export default App;
