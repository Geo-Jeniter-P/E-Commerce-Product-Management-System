import React from "react";
import { useParams, Link } from "react-router-dom";

const ProductDetail = ({ products }) => {
  const { productId } = useParams();
  const product = products.find(p => p.id === parseInt(productId));

  if (!product) {
    return (
      <div>
        <h2>Product not found</h2>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>{product.title}</h2>
      <img 
        src={product.image} 
        alt={product.title} 
        style={{ width: "300px", height: "300px", objectFit: "cover", borderRadius: "8px" }}
      />
      <p style={{ fontSize: "20px", margin: "20px 0" }}>Price: ₹{product.price}</p>
      <p>Category: {product.category}</p>
      <Link to="/" style={{ color: "#ff9900", fontWeight: "bold", display: "inline-block", marginTop: "20px" }}>
        &larr; Back to Home
      </Link>
    </div>
  );
};

export default ProductDetail;
