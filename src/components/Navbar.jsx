import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Items } from "./Data";
import { BsFillCartCheckFill } from "react-icons/bs";

const Navbar = ({ setData, cart }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const filterByCategory = (category) => {
    const items = Items.filter((product) => product.category === category);
    setData(items);
  };

  const filterByPrice = (price) => {
    const items = Items.filter((product) => product.price >= price);
    setData(items);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
    setSearchTerm("");
  };
  return (
    <>
      <header className="sticky-top">
        <div className="nav-bar">
          <Link aria-label="logo" to="/" className="brand">
            <h1>E - Cart</h1>
          </Link>
          <form onSubmit={handleSubmit} className="search-bar">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search Products..."
            />
          </form>
          <Link to="/cart" aria-label="cart" className="cart">
            <button type="button" className="btn btn-primary position-relative">
              <BsFillCartCheckFill size={"2rem"} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </Link>
        </div>

        {location.pathname == "/" && (
          <div className="nav-bar-wrapper">
            <div className="items">Filter by {"->"}</div>
            <div className="items" onClick={() => setData(Items)}>
              No Filter
            </div>
            <div className="items" onClick={() => filterByCategory("mobiles")}>
              Mobiles
            </div>
            <div className="items" onClick={() => filterByCategory("laptops")}>
              Laptops
            </div>
            <div className="items" onClick={() => filterByCategory("tablets")}>
              Tablets
            </div>
            <div className="items" onClick={() => filterByPrice(29999)}>
              {">="}29999
            </div>
            <div className="items" onClick={() => filterByPrice(49999)}>
              {">="}49999
            </div>
            <div className="items" onClick={() => filterByPrice(69999)}>
              {">="}69999
            </div>
            <div className="items" onClick={() => filterByPrice(89999)}>
              {">="}89999
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
