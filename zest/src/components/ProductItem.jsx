import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ product, addToCart }) => {
  const {
    id, title, image, rating, reviews, price,
    strikedPrice, discount, exchange, bankOffer, features
  } = product;

  return (
    <div className="product-card-horizontal">
      <Link to={`/product/${id}`}>
        <img src={image} alt={title} className="product-image" />
      </Link>
      <div className="product-details">
        <Link to={`/product/${id}`} className="product-title">
          {title}
        </Link>
        <div className="product-rating">
          <span className="rating-badge">{rating}★</span>
          <span style={{ color: "#555", fontWeight: "bold", marginLeft: "12px" }}>
            {reviews.toLocaleString()} Ratings & Reviews
          </span>
        </div>
        <ul className="product-features">
          {features.map((feat, idx) => (
            <li key={idx}>{feat}</li>
          ))}
        </ul>
      </div>
      <div className="product-price-section">
        <div className="price">₹{price}</div>
        <div className="cross-price">₹{strikedPrice}</div>
        <div className="discount">{discount} off</div>
        <div className="exchange">{exchange}</div>
        <div className="bank-offer">{bankOffer}</div>
        <button className="add-cart-vertical" onClick={() => addToCart(id)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
