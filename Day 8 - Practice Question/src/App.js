import React from "react";
import BookList from "./components/BookList";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#eef2f7",
        minHeight: "100vh",
        padding: "30px"
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#2c3e50",
          marginBottom: "30px"
        }}
      >
        📚 BookVerse: Featured Books
      </h1>

      <BookList />
    </div>
  );
}

export default App;
