import React from "react";
import PropTypes from "prop-types";

function BookCard({ title, author, price, image, viewMode, onSelect }) {
  return (
    <div
      className="book-card"
      onClick={onSelect}
      style={{ cursor: "pointer" }}
    >
      <img src={image} alt={title} className="book-image" />
      <h4>{title}</h4>
      <p>Author: {author}</p>
      <p className="price">₹{price}</p>
    </div>
  );
}

BookCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  viewMode: PropTypes.string.isRequired,
  onSelect: PropTypes.func
};

export default BookCard;
