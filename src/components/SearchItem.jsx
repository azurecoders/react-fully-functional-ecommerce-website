import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Items } from "./Data";
import Product from "./Product";

const SearchItem = ({ cart, setCart }) => {
  const { term } = useParams();
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const filteredData = () => {
      const items = Items.filter((e) =>
        e.title.toLowerCase().includes(term.toLowerCase())
      );
      setFilterData(items);
    };
    filteredData();
  }, [term]);

  return <Product items={filterData} cart={cart} setCart={setCart} />;
};

export default SearchItem;
