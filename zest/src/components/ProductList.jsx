import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ products, addToCart }) => (
  <div className="product-list-wrap">
    {products.map(product => (
      <ProductItem key={product.id} product={product} addToCart={addToCart} />
    ))}
  </div>
);

export default ProductList;
