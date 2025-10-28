import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import HeroBanner from "./components/HeroBanner";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import ProductDetail from "./components/ProductDetail";
import './App.css';

// Navigation component with styled buttons and icons
const Navigation = ({ cartItemCount }) => (
  <nav style={{ marginBottom: "20px" }}>
    <Link to="/" className="nav-button">
      <FaHome className="nav-icon" />
      Home
    </Link>
    <Link to="/cart" className="nav-button">
      <FaShoppingCart className="nav-icon" />
      Cart ({cartItemCount})
    </Link>
  </nav>
);

const products = [
  {
    id: 1,
    title: "Smartphone",
    price: 10000,
    category: "Electronics",
    image: "/product-a.jpg",
    features: [
      "8 GB RAM",
      "256 GB SSD",
      "6.6 inch Display",
      "Dual Camera",
      "1 Year Warranty"
    ],
    rating: 3.8,
    reviews: 5979,
    strikedPrice: 33399,
    discount: "46%",
    exchange: "Upto ₹13,500 Off on Exchange",
    bankOffer: "Bank Offer"
  },
  {
    id: 2,
    title: "Laptop",
    price: 45000,
    category: "Electronics",
    image: "/product-b.jpg",
    features: [
      "Intel i5 Processor",
      "16 GB DDR4 RAM",
      "512 GB SSD",
      "15.6 inch Full HD Display",
      "2 Year Warranty"
    ],
    rating: 4.2,
    reviews: 4762,
    strikedPrice: 75999,
    discount: "41%",
    exchange: "Upto ₹24,000 Off on Exchange",
    bankOffer: "Extra ₹2,000 Off"
  },
  {
    id: 3,
    title: "Bluetooth Headphones",
    price: 2800,
    category: "Electronics",
    image: "/product-c.jpg",
    features: [
      "Wireless Bluetooth 5.0",
      "40 Hours Battery",
      "Deep Bass",
      "Foldable Design",
      "1 Year Warranty"
    ],
    rating: 4.1,
    reviews: 2135,
    strikedPrice: 4500,
    discount: "38%",
    exchange: "Upto ₹700 Off on Exchange",
    bankOffer: "Bank Offer"
  },
  {
    id: 4,
    title: "Fitness Band",
    price: 1999,
    category: "Wearables",
    image: "/product-d.jpg",
    features: [
      "Heart Rate Monitor",
      "10 Days Battery",
      "Touch Display",
      "Sleep Tracker",
      "Water Resistant"
    ],
    rating: 4.0,
    reviews: 985,
    strikedPrice: 3499,
    discount: "42%",
    exchange: "Upto ₹500 Off on Exchange",
    bankOffer: "Bank Offer"
  },
  {
    id: 5,
    title: "DSLR Camera",
    price: 38999,
    category: "Electronics",
    image: "/product-e.jpg",
    features: [
      "24.2MP CMOS Sensor",
      "Full HD Video",
      "Wi-Fi & NFC Connectivity",
      "18-55mm Lens",
      "2 Year Warranty"
    ],
    rating: 4.3,
    reviews: 1293,
    strikedPrice: 47500,
    discount: "18%",
    exchange: "Upto ₹8500 Off on Exchange",
    bankOffer: "Flat ₹1,500 Off"
  },
  {
    id: 6,
    title: "Microwave Oven",
    price: 8499,
    category: "Home Appliances",
    image: "/product-f.jpg",
    features: [
      "20L Capacity",
      "Touch Control",
      "Grill Function",
      "Child Lock",
      "2 Year Warranty"
    ],
    rating: 4.2,
    reviews: 675,
    strikedPrice: 11500,
    discount: "26%",
    exchange: "Upto ₹2500 Off on Exchange",
    bankOffer: "Bank Offer"
  },
  {
    id: 7,
    title: "Bluetooth Speaker",
    price: 1499,
    category: "Electronics",
    image: "/product-g.jpg",
    features: [
      "10W Output",
      "Bluetooth 5.1",
      "True Wireless Stereo",
      "Waterproof",
      "1 Year Warranty"
    ],
    rating: 4.4,
    reviews: 3815,
    strikedPrice: 2499,
    discount: "40%",
    exchange: "Upto ₹450 Off on Exchange",
    bankOffer: "Bank Offer"
  },
  {
    id: 8,
    title: "Smartwatch",
    price: 5999,
    category: "Wearables",
    image: "/product-h.jpg",
    features: [
      "AMOLED Display",
      "Inbuilt GPS",
      "SpO2 Tracking",
      "Bluetooth Calling",
      "5ATM Water Resistance"
    ],
    rating: 4.1,
    reviews: 1375,
    strikedPrice: 9999,
    discount: "40%",
    exchange: "Upto ₹1200 Off on Exchange",
    bankOffer: "Bank Offer"
  },
  {
    id: 9,
    title: "Jeans",
    price: 1299,
    category: "Clothing",
    image: "/product-i.jpg",
    features: [
      "Slim Fit",
      "Stretchable Fabric",
      "Fade Resistant",
      "5 Pockets",
      "Easy Wash"
    ],
    rating: 4.0,
    reviews: 895,
    strikedPrice: 1699,
    discount: "24%",
    exchange: "Upto ₹400 Off on Exchange",
    bankOffer: "Bank Offer"
  },
  {
    id: 10,
    title: "Cotton T-shirt",
    price: 599,
    category: "Clothing",
    image: "/product-j.jpg",
    features: [
      "100% Cotton",
      "Bio-Washed Fabric",
      "Regular Fit",
      "Multiple Colors",
      "Easy Wash"
    ],
    rating: 4.2,
    reviews: 950,
    strikedPrice: 999,
    discount: "40%",
    exchange: "Upto ₹150 Off on Exchange",
    bankOffer: "Bank Offer"
  },
  {
    id: 11,
    title: "Sneakers",
    price: 2499,
    category: "Footwear",
    image: "/product-a.jpg",
    features: [
      "Breathable Material",
      "Shock Absorption",
      "Non-Slip Sole",
      "Lace-up Closure",
      "Warranty: 6 Months"
    ],
    rating: 4.2,
    reviews: 1580,
    strikedPrice: 3499,
    discount: "28%",
    exchange: "Upto ₹700 Off on Exchange",
    bankOffer: "Bank Offer"
  },
  {
    id: 12,
    title: "Formal Shoes",
    price: 1999,
    category: "Footwear",
    image: "/product-b.jpg",
    features: [
      "Leather Upper",
      "Cushioned Insole",
      "Slip-on Design",
      "Classic Style",
      "Warranty: 1 Year"
    ],
    rating: 4.1,
    reviews: 770,
    strikedPrice: 2499,
    discount: "20%",
    exchange: "Upto ₹400 Off on Exchange",
    bankOffer: "Bank Offer"
  },
  {
    id: 13,
    title: "Cookbook",
    price: 799,
    category: "Books",
    image: "/product-c.jpg",
    features: [
      "300+ Recipes",
      "International Cuisine",
      "High Quality Print",
      "Author: Renowned Chef",
      "Hardcover"
    ],
    rating: 4.3,
    reviews: 563,
    strikedPrice: 999,
    discount: "20%",
    exchange: "Upto ₹200 Off on Exchange",
    bankOffer: "Bank Offer"
  },
  {
    id: 14,
    title: "Novel",
    price: 499,
    category: "Books",
    image: "/product-d.jpg",
    features: [
      "Bestseller",
      "Award Winner",
      "Thrilling Plot",
      "Author: Famous Writer",
      "Paperback"
    ],
    rating: 4.4,
    reviews: 1780,
    strikedPrice: 799,
    discount: "38%",
    exchange: "Upto ₹150 Off on Exchange",
    bankOffer: "Bank Offer"
  },
  {
    id: 15,
    title: "Air Purifier",
    price: 7999,
    category: "Home Appliances",
    image: "/product-e.jpg",
    features: [
      "HEPA Filter",
      "Low Noise Level",
      "Digital Display",
      "Energy Efficient",
      "2 Year Warranty"
    ],
    rating: 4.2,
    reviews: 810,
    strikedPrice: 9999,
    discount: "20%",
    exchange: "Upto ₹1200 Off on Exchange",
    bankOffer: "Bank Offer"
  },
  {
    id: 16,
    title: "Water Bottle",
    price: 299,
    category: "Accessories",
    image: "/product-f.jpg",
    features: [
      "750ml Capacity",
      "Stainless Steel",
      "Leakproof",
      "BPA Free",
      "Available in 5 Colors"
    ],
    rating: 4.3,
    reviews: 400,
    strikedPrice: 499,
    discount: "40%",
    exchange: "Upto ₹80 Off on Exchange",
    bankOffer: "Bank Offer"
  },
  {
    id: 17,
    title: "Desk Lamp",
    price: 899,
    category: "Accessories",
    image: "/product-g.jpg",
    features: [
      "LED Lighting",
      "Adjustable Height",
      "Touch Control",
      "Energy Efficient",
      "Warranty: 1 Year"
    ],
    rating: 4.1,
    reviews: 295,
    strikedPrice: 1299,
    discount: "31%",
    exchange: "Upto ₹180 Off on Exchange",
    bankOffer: "Bank Offer"
  },
  {
    id: 18,
    title: "Duvet Cover Set",
    price: 1499,
    category: "Home & Living",
    image: "/product-a.jpg",
    features: [
      "Microfiber Fabric",
      "Double Size",
      "Modern Designs",
      "Easy to Wash",
      "Soft & Comfortable"
    ],
    rating: 4.0,
    reviews: 221,
    strikedPrice: 2299,
    discount: "34%",
    exchange: "Upto ₹350 Off on Exchange",
    bankOffer: "Bank Offer"
  },
  {
    id: 19,
    title: "Travel Backpack",
    price: 1999,
    category: "Accessories",
    image: "/product-b.jpg",
    features: [
      "30L Capacity",
      "Water Resistant",
      "Multipurpose",
      "Laptop Compartment",
      "Warranty: 6 Months"
    ],
    rating: 4.2,
    reviews: 580,
    strikedPrice: 2599,
    discount: "23%",
    exchange: "Upto ₹450 Off on Exchange",
    bankOffer: "Bank Offer"
  },
  {
    id: 20,
    title: "Gaming Mouse",
    price: 1299,
    category: "Electronics",
    image: "/product-c.jpg",
    features: [
      "RGB Lighting",
      "6 Programmable Buttons",
      "High DPI Sensor",
      "Ergonomic Design",
      "1 Year Warranty"
    ],
    rating: 4.3,
    reviews: 401,
    strikedPrice: 1699,
    discount: "23%",
    exchange: "Upto ₹250 Off on Exchange",
    bankOffer: "Bank Offer"
  },
];

const App = () => {
  const [cart, setCart] = useState([]);

  // Add product to cart or increase quantity if existing
  const addToCart = (productId) => {
    setCart((prevCart) => {
      const existing = prevCart.find(item => item.productId === productId);
      if (existing) {
        return prevCart.map(item => 
          item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { productId, quantity: 1 }];
      }
    });
  };

  // Update quantity of product in cart
  const updateQuantity = (productId, newQty) => {
    if (newQty < 1) return;
    setCart(prevCart => prevCart.map(item => 
      item.productId === productId ? { ...item, quantity: newQty } : item
    ));
  };

  // Remove product from cart
  const removeItem = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.productId !== productId));
  };

  return (
    <div className="container">
      <Navigation cartItemCount={cart.reduce((acc, item) => acc + item.quantity, 0)} />

      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <HeroBanner />
              <ProductList products={products} addToCart={addToCart} />
            </>
          } 
        />

        <Route 
          path="/cart" 
          element={
            <Cart 
              cartItems={cart} 
              products={products} 
              updateQuantity={updateQuantity} 
              removeItem={removeItem} 
            />
          } 
        />

        <Route 
          path="/product/:productId" 
          element={<ProductDetail products={products} />} 
        />
      </Routes>
    </div>
  );
};

export default App;
