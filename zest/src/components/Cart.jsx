import React from "react";
import CartItem from "./CartItem";

const Cart = ({ cartItems, products, updateQuantity, removeItem }) => {
  // Calculate total bill
  const total = cartItems.reduce((sum, item) => {
    const product = products.find(p => p.id === item.productId);
    return sum + (product.price * item.quantity);
  }, 0);

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map(item => {
            const product = products.find(p => p.id === item.productId);
            return (
              <CartItem
                key={item.productId}
                item={item}
                product={product}
                updateQuantity={updateQuantity}
                removeItem={removeItem}
              />
            );
          })}
          <h3>Total: ₹{total.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
