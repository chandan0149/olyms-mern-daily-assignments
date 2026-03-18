import React from "react";

const BookCard = ({ title, author, price, image, viewMode }) => {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        padding: "20px",
        width: viewMode === "Grid" ? "250px" : "80%",
        minHeight: "420px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        textAlign: "center",
        transition: "0.3s",
        margin: "10px"
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "140px",
          height: "200px",
          objectFit: "cover",
          borderRadius: "8px",
          marginBottom: "15px"
        }}
      />

      <h3 style={{ color: "#333" }}>{title}</h3>
      <p style={{ color: "#777" }}>Author: {author}</p>
      <p
        style={{
          fontWeight: "bold",
          color: "#27ae60",
          fontSize: "18px"
        }}
      >
        ₹{price}
      </p>
    </div>
  );
};

export default BookCard;
