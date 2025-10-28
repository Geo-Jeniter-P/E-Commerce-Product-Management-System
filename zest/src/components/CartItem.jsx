import React from "react";

const CartItem = ({ item, product, updateQuantity, removeItem }) => {
  const { quantity } = item;
  const { title, price } = product;

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      borderBottom: "1px solid #ccc",
      padding: "10px 0"
    }}>
      <div>
        <h4>{title}</h4>
        <p>Price: ₹{price}</p>
        <p>Quantity: 
          <button onClick={() => updateQuantity(product.id, quantity - 1)} disabled={quantity <= 1}>-</button>
          <span style={{ margin: "0 10px" }}>{quantity}</span>
          <button onClick={() => updateQuantity(product.id, quantity + 1)}>+</button>
        </p>
      </div>
      <div>
        <button onClick={() => removeItem(product.id)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
