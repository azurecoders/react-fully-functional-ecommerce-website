import React, { lazy, Suspense, useState } from "react";
import Navbar from "./components/Navbar";
const Product = lazy(() => import("./components/Product"));
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const ProductDetails = lazy(() => import("./components/ProductDetails"));
const SearchItem = lazy(() => import("./components/SearchItem"));
const Cart = lazy(() => import("./components/Cart"));
import { Items } from "./components/Data";

const App = () => {
  const [data, setData] = useState([...Items]);
  const [cart, setCart] = useState([]);
  return (
    <Router>
      <Navbar cart={cart} setData={setData} />
      <Suspense fallback={<h3>Loading...</h3>}>
        <Routes>
          <Route
            path="/"
            element={<Product cart={cart} setCart={setCart} items={data} />}
          />
          <Route
            path="/product/:id"
            element={<ProductDetails cart={cart} setCart={setCart} />}
          />
          <Route
            path="/search/:term"
            element={<SearchItem cart={cart} setCart={setCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
